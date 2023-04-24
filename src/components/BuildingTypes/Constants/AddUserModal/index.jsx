import { Button, DatePicker, Form, Input, InputNumber, Modal, Select } from 'antd';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAddUserModalVisibility } from '../../../../redux/modalSlice';
import { useTranslation } from 'react-i18next';
import { ModalButtonsWrapper } from '../../../../Generic/Styles';

const { RangePicker } = DatePicker;

const AddUserModal = () => {
	const { t } = useTranslation();
	const dispatch = useDispatch();
	const { addUserModalVisibility } = useSelector(state => state.modal);
	const [confirmLoading, setConfirmLoading] = useState(false);

	const handleOk = () => {
		setConfirmLoading(true);
		setTimeout(() => {
			dispatch(setAddUserModalVisibility());
			setConfirmLoading(false);
		}, 2000);
	};

	const handleCancel = () => {
		dispatch(setAddUserModalVisibility());
	};

	const formSubmit = e => {
		console.log(e);
		handleOk();
	};

	return (
		<Modal
			title='Add booking'
			open={addUserModalVisibility}
			okText='Add'
			confirmLoading={confirmLoading}
			onCancel={handleCancel}
			footer={null}>
			<Form
				labelCol={{}}
				wrapperCol={{}}
				layout='vertical'
				style={{
					maxWidth: 600,
					paddingTop: 20,
				}}
				initialValues={{
					fullName: '',
					birthDate: '',
					arrivalDate: '',
					phoneNumber: '',
					address: '',
					dayCost: '',
					paidByCash: '',
					paidByPlasticCard: '',
				}}
				onFinish={formSubmit}>
				<Form.Item
					label={t('information_about_user.edit_user.full_name')}
					name={'fullName'}
					rules={[{ required: true, message: t('information_about_user.edit_user.full_name_error') }]}>
					<Input />
				</Form.Item>
				<Form.Item
					label={t('information_about_user.edit_user.address')}
					name={'address'}
					rules={[{ required: true, message: t('information_about_user.edit_user.address_error') }]}>
					<Input />
				</Form.Item>
				<Form.Item
					label={t('information_about_user.edit_user.phone_number')}
					name={'phoneNumber'}
					rules={[{ required: true, message: t('information_about_user.edit_user.phone_number_error') }]}>
					<InputNumber style={{ width: '100%' }} type='text' addonBefore='+998' />
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
					<Select
						defaultValue='3'
						style={{
							width: '100%',
						}}
						options={[
							{
								value: '2',
								label: 'Building 2',
							},
							{
								value: '3',
								label: 'Building 3',
							},
							{
								value: '4',
								label: 'Building 4',
							},
							{
								value: '5',
								label: 'Building 5',
							},
							{
								value: '6',
								label: 'Building 6',
							},
						]}
					/>
				</Form.Item>
				<Form.Item
					label={t('information_about_user.edit_user.pay_by_card')}
					name={'paidByPlasticCard'}
					rules={[{ required: true, message: t('information_about_user.edit_user.pay_by_card_error') }]}>
					<Input />
				</Form.Item>
				<ModalButtonsWrapper>
					<Button type='default' onClick={() => dispatch(setAddUserModalVisibility())}>
						Cancel
					</Button>
					<Button type='primary' htmlType='submit' onClick={() => handleOk}>
						Add
					</Button>
				</ModalButtonsWrapper>
			</Form>
		</Modal>
	);
};

export default AddUserModal;
