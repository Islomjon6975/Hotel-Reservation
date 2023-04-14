import React, { useState } from 'react';
import { CenteredWrapper, Title, Wrapper } from '../../Generic/Styles';
import ArrowBack from '../../Generic/ArrowBack';
import { Card, Statistic } from 'antd';
import { useAxios } from '../../hooks/useAxios';
import { useQuery } from 'react-query';
import IsLoading from '../../Generic/IsLoading';
import { Button, DatePicker, Form } from 'antd';
import Parameters from './Parameters';
import { useDispatch, useSelector } from 'react-redux';
import { setParameterModalVisibility } from '../../redux/modalSlice';
import { useTranslation } from 'react-i18next';
const { RangePicker } = DatePicker;

const { REACT_APP_BASE_URL } = process.env;

const Reports = () => {
	const { t } = useTranslation();
	const dispatch = useDispatch();
	const { priceInfo, dateInfo } = useSelector(state => state.parametersSlice);
	const [loading, setLoading] = useState(false);

	const axios = useAxios();
	const { isLoading, data } = useQuery('statistics', () => axios({ url: '/statistics' }), {
		refetchOnWindowFocus: false,
		keepPreviousData: true,
	});

	useQuery('report', () => axios({ url: '/report?rangeStart=123124123142&rangeEnd=1231413214&praceInfo=true&dateInfo=false' }), {
		refetchOnWindowFocus: false,
		keepPreviousData: true,
	});

	const onParameterSumbit = async e => {
		setLoading(true);
		const rangeStart = new Date(e.date[0].$d).getTime();
		const rangeEnd = new Date(e.date[1].$d).getTime();

		fetch(
			`${REACT_APP_BASE_URL}/report?rangeStart=${rangeStart}&rangeEnd=${rangeEnd}&priceInfo=${priceInfo}&dateInfo=${dateInfo}`
		)
			.then(res => res.blob())
			.then(res => {
				const data = new Blob([res], { type: 'plain/text' });
				const xlsxURL = window.URL.createObjectURL(data);
				const tempLink = document.createElement('a');
				tempLink.href = xlsxURL;
				tempLink.setAttribute('download', 'filename.xlsx');
				tempLink.click();
				setLoading(false);
			});
	};

	return (
		<>
			<Wrapper>
				<CenteredWrapper>
					<ArrowBack translation={t('home_page.home_report_title')} />

					{isLoading ? (
						<IsLoading />
					) : (
						<>
							<Card>
								<Form
									onFinish={onParameterSumbit}
									labelCol={{
										span: 7,
									}}
									wrapperCol={{
										span: 16,
									}}
									initialValues={{
										remember: true,
									}}>
									<Form.Item
										name='date'
										label={t('reports_page.date_range')}
										rules={[{ required: true, message: t('reports_page.date_range_fill_all_fields') }]}>
										<RangePicker
											disabled={loading ? true : false}
											onChange={e => console.log(new Date(e[0].$d).getTime(), new Date(e[1].$d).getTime())}
										/>
									</Form.Item>

									<Form.Item label={t('reports_page.parameters')}>
										<Button
											disabled={loading ? true : false}
											type='primary'
											onClick={() => dispatch(setParameterModalVisibility())}>
											Parameter tanlash
										</Button>
									</Form.Item>
									<Form.Item style={{ display: 'flex', justifyContent: 'flex-end' }}>
										<Button type='primary' htmlType='submit' loading={loading ? true : false}>
											{t('reports_page.download')}
										</Button>
									</Form.Item>
								</Form>
							</Card>

							{/* =============================== Statistics ===============================  */}
							<Title>{t('reports_page.statistics')}</Title>
							<Card style={{ padding: 24, width: '100%', maxWidth: 430 }} bordered={false}>
								<Statistic
									style={{
										paddingBottom: 10,
										'box-shadow':
											'0 1px 2px 0 rgba(0, 0, 0, 0.03), 0 1px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px 0 rgba(0, 0, 0, 0.02)',
									}}
									title={t('reports_page.statistics_number_of_people')}
									value={data.data.data.allUsers}
								/>
								<Statistic
									style={{
										marginTop: 16,
										paddingBottom: 10,
										'box-shadow':
											'0 1px 2px 0 rgba(0, 0, 0, 0.03), 0 1px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px 0 rgba(0, 0, 0, 0.02)',
									}}
									title={t('reports_page.statistics_number_of_books')}
									value={data.data.data.allBookedUsers}
								/>
								<Statistic
									style={{
										marginTop: 16,
										paddingBottom: 10,
										'box-shadow':
											'0 1px 2px 0 rgba(0, 0, 0, 0.03), 0 1px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px 0 rgba(0, 0, 0, 0.02)',
									}}
									title={t('reports_page.statistics_number_of_empty_places')}
									value={data.data.data.allFreeRooms}
								/>
							</Card>
						</>
					)}
				</CenteredWrapper>
			</Wrapper>
			<Parameters />
		</>
	);
};

export default Reports;
