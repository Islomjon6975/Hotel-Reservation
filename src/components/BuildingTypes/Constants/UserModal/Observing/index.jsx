import { Button, List, Modal } from 'antd';
import React from 'react';
import { Btns, ObservingWrapper } from './style';
import { useMutation, useQueryClient } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import dayjs from 'dayjs';
import { setMoveUserModalVisibility, setUserModalVisibility } from '../../../../../redux/modalSlice';
import { useTranslation } from 'react-i18next';
import { useAxios } from '../../../../../hooks/useAxios';

const { confirm } = Modal;

const Observing = () => {
	const { t } = useTranslation();
	const { userID } = useSelector(state => state.user);
	const dispatch = useDispatch();

	const queryClient = useQueryClient();
	const { data } = queryClient.getQueryData(`user/${userID}`);
	const axios = useAxios();

	const {
		_id,
		clienteID,
		fullName,
		birthDate,
		passportID,
		phoneNumber,
		address,
		arrivalDate,
		endDate,
		dayCost,
		total,
		hasVoucher,
		paidByCash,
		paidByPlasticCard,
		buildingNumber,
		roomNumber,
	} = data?.data;

	const userInfo = [
		{
			title: t('information_about_user.observing_user.full_name'),
			content: fullName,
		},
		{
			title: t('information_about_user.observing_user.birth_date'),
			content: `${dayjs(birthDate).$D}.${dayjs(birthDate).$M < 10 ? '0' + (dayjs(birthDate).$M + 1) : dayjs(birthDate).$M + 1}.${
				dayjs(birthDate).$y
			}`,
		},
		{
			title: t('information_about_user.observing_user.password_number'),
			content: passportID,
		},
		{
			title: t('information_about_user.observing_user.phone_number'),
			content: phoneNumber,
		},
		{
			title: t('information_about_user.observing_user.address'),
			content: address,
		},
		{
			title: t('information_about_user.observing_user.came_date'),
			content: `${dayjs(arrivalDate).$D}.${
				dayjs(arrivalDate).$M < 10 ? '0' + (dayjs(arrivalDate).$M + 1) : dayjs(arrivalDate).$M + 1
			}.${dayjs(arrivalDate).$y}`,
		},
		{
			title: t('information_about_user.observing_user.end_date'),
			content: `${dayjs(endDate).$D}.${dayjs(endDate).$M < 10 ? '0' + (dayjs(endDate).$M + 1) : dayjs(endDate).$M + 1}.${
				dayjs(endDate).$y
			}`,
		},
		{
			title: t('information_about_user.observing_user.remaining_days'),
			content: '12',
		},
		{
			title: t('information_about_user.observing_user.daily_price'),
			content: dayCost,
		},
		{
			title: t('information_about_user.observing_user.total_price'),
			content: total,
		},
		{
			title: t('information_about_user.observing_user.voucher_status'),
			content: hasVoucher ? 'With voucher' : 'Without voucher',
		},
		{
			title: t('information_about_user.observing_user.pay_by_cash'),
			content: paidByCash,
		},
		{
			title: t('information_about_user.observing_user.pay_by_card'),
			content: paidByPlasticCard,
		},
		{
			title: t('information_about_user.observing_user.payment_difference'),
			content: -total,
		},
		{
			title: t('information_about_user.observing_user.building_number'),
			content: buildingNumber,
		},
		{
			title: t('information_about_user.observing_user.room_number'),
			content: roomNumber,
		},
	];

	const { mutate } = useMutation(() =>
		axios({
			url: `/accomodation/${buildingNumber.slice(-1)}/delete-user`,
			method: 'DELETE',
			body: data?.data,
		})
	);
	const confirmDeleteUserModal = () => {
		return confirm({
			title: t('information_about_user.observing_user.delete_user.title'),
			content: t('information_about_user.observing_user.delete_user.content'),
			okText: t('modal.modal_delete'),
			cancelText: t('modal.modal_cancel'),

			okButtonProps: { danger: true },
			closable: true,
			onOk() {
				mutate('user', {
					onSuccess: res => {
						console.log(res, 'user delete');
					},
				});
			},
		});
	};

	return (
		<ObservingWrapper>
			<List
				size='small'
				footer={
					<Btns>
						<Button onClick={() => dispatch(setUserModalVisibility())}>{t('modal.modal_cancel')}</Button>
						<Button type='primary' onClick={() => dispatch(setMoveUserModalVisibility())}>
							{t('modal.modal_move')}
						</Button>
						<Button type='primary' danger onClick={confirmDeleteUserModal}>
							{t('modal.modal_delete')}
						</Button>
					</Btns>
				}
				bordered={false}
				dataSource={userInfo}
				renderItem={item => (
					<List.Item style={{ display: 'flex', padding: '0px', marginTop: 17 }}>
						<ObservingWrapper.Column>{item.title}:</ObservingWrapper.Column>
						<ObservingWrapper.Column>{item.content}</ObservingWrapper.Column>
					</List.Item>
				)}
			/>
		</ObservingWrapper>
	);
};

export default Observing;
