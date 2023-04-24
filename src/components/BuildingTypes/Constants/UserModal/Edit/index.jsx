import dayjs from 'dayjs';
import { Btns } from './style';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useAxios } from '../../../../../hooks/useAxios';
import { useMutation, useQueryClient } from 'react-query';
import { useMessageAPI } from '../../../../../Generic/Message';
import { Button, DatePicker, Form, Input, InputNumber } from 'antd';
import { setUserModalVisibility } from '../../../../../redux/modalSlice';

const { RangePicker } = DatePicker;

const Edit = () => {
	const axios = useAxios();
	const dispatch = useDispatch();
	const { t } = useTranslation();
	const queryClient = useQueryClient();
	const { userID } = useSelector(state => state.user);
	const { data } = queryClient.getQueryData(`user/${userID}`);
	const { openNotificationWithIcon, contextHolder } = useMessageAPI();

	// ===========================  USER INFO =================================
	const {
		_id,
		fullName,
		birthDate,
		passportID,
		phoneNumber,
		address,
		arrivalDate,
		endDate,
		dayCost,
		paidByCash,
		buildingNumber,
		paidByPlasticCard,
		roomNumber,
		clienteID,
	} = data.data;

	// ===========================  USER UPDATE =================================
	const { mutate } = useMutation(e =>
		axios({
			url: `/accomodation/${buildingNumber.slice(-1)}/update-user`,
			method: 'POST',
			body: {
				_id,
				fullName,
				birthDate,
				passportID,
				phoneNumber,
				address,
				arrivalDate,
				endDate,
				dayCost,
				paidByCash,
				paidByPlasticCard,
				roomNumber,
				clienteID,
				e,
			},
		})
	);

	// ===========================  FORM SUBMIT =================================
	const formSubmit = e => {
		mutate(e, {
			onSuccess: res => {
				console.log(res, 'res');
				openNotificationWithIcon('success');
			},
		});
	};

	// ===========================  RENDER =================================
	return (
		<>
			{contextHolder}
			<Form
				labelCol={{}}
				wrapperCol={{}}
				layout='vertical'
				style={{
					maxWidth: 600,
					paddingTop: 20,
				}}
				initialValues={{
					fullName: fullName,
					birthDate: dayjs(Number(birthDate)),
					arrivalDate: [dayjs(Number(arrivalDate)), dayjs(Number(endDate))],
					passportID: passportID,
					phoneNumber: phoneNumber,
					address: address,
					dayCost: dayCost,
					paidByCash: paidByCash || '0',
					paidByPlasticCard: paidByPlasticCard || '0',
				}}
				onFinish={formSubmit}>
				<Form.Item
					label={t('information_about_user.edit_user.full_name')}
					name={'fullName'}
					rules={[{ required: true, message: t('information_about_user.edit_user.full_name_error') }]}>
					<Input />
				</Form.Item>
				<Form.Item
					label={t('information_about_user.edit_user.birth_date')}
					name={'birthDate'}
					rules={[{ required: true, message: t('information_about_user.edit_user.birth_date_error') }]}>
					<DatePicker />
				</Form.Item>
				<Form.Item
					label={t('information_about_user.edit_user.password_number')}
					name={'passportID'}
					rules={[{ required: true, message: t('information_about_user.edit_user.password_number_error') }]}>
					<Input />
				</Form.Item>
				<Form.Item
					label={t('information_about_user.edit_user.phone_number')}
					name={'phoneNumber'}
					rules={[{ required: true, message: t('information_about_user.edit_user.phone_number_error') }]}>
					<InputNumber style={{ width: '100%' }} type='text' addonBefore='+998' />
				</Form.Item>
				<Form.Item
					label={t('information_about_user.edit_user.address')}
					name={'address'}
					rules={[{ required: true, message: t('information_about_user.edit_user.address_error') }]}>
					<Input />
				</Form.Item>
				<Form.Item
					label={t('information_about_user.edit_user.range_date')}
					name={'arrivalDate'}
					rules={[{ required: true, message: t('information_about_user.edit_user.range_date_error') }]}>
					<RangePicker />
				</Form.Item>
				<Form.Item
					label={t('information_about_user.edit_user.daily_price')}
					name={'dayCost'}
					rules={[{ required: true, message: t('information_about_user.edit_user.daily_price_error') }]}>
					<Input />
				</Form.Item>
				<Form.Item
					label={t('information_about_user.edit_user.pay_by_cash')}
					name={'paidByCash'}
					rules={[{ required: true, message: t('information_about_user.edit_user.pay_by_cash_error') }]}>
					<Input />
				</Form.Item>
				<Form.Item
					label={t('information_about_user.edit_user.pay_by_card')}
					name={'paidByPlasticCard'}
					rules={[{ required: true, message: t('information_about_user.edit_user.pay_by_card_error') }]}>
					<Input />
				</Form.Item>
				<Btns>
					<Button onClick={() => dispatch(setUserModalVisibility())}>Cancel</Button>
					<Button type='primary' htmlType='submit'>
						{t('modal.modal_edit')}
					</Button>
				</Btns>
			</Form>
		</>
	);
};

export default Edit;
