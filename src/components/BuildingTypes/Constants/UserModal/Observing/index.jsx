import { Button, List } from 'antd';
import React from 'react';
import { Btns, ObservingWrapper } from './style';
import { useQueryClient } from 'react-query';
import { useSelector } from 'react-redux';
import dayjs from 'dayjs';
const Observing = () => {
	const { userID } = useSelector(state => state.user);

	const queryClient = useQueryClient();
	const { data } = queryClient.getQueryData(`user/${userID}`);

	const {
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
	} = data.data;

	const userInfo = [
		{
			title: 'Full name',
			content: fullName,
		},
		{
			title: 'Birth date',
			content: `${dayjs(birthDate).$D}.${dayjs(birthDate).$M < 10 ? '0' + (dayjs(birthDate).$M + 1) : dayjs(birthDate).$M + 1}.${
				dayjs(birthDate).$y
			}`,
		},
		{
			title: 'Passport number',
			content: passportID,
		},
		{
			title: 'Phone Number',
			content: phoneNumber,
		},
		{
			title: 'Address',
			content: address,
		},
		{
			title: 'Came date',
			content: `${dayjs(arrivalDate).$D}.${
				dayjs(arrivalDate).$M < 10 ? '0' + (dayjs(arrivalDate).$M + 1) : dayjs(arrivalDate).$M + 1
			}.${dayjs(arrivalDate).$y}`,
		},
		{
			title: 'End Date',
			content: `${dayjs(endDate).$D}.${dayjs(endDate).$M < 10 ? '0' + (dayjs(endDate).$M + 1) : dayjs(endDate).$M + 1}.${
				dayjs(endDate).$y
			}`,
		},
		{
			title: 'Remaining days',
			content: '12',
		},
		{
			title: 'Daily price',
			content: dayCost,
		},
		{
			title: 'Total price',
			content: total,
		},
		{
			title: 'Voucher status',
			content: hasVoucher ? 'With voucher' : 'Without voucher',
		},
		{
			title: 'Pay by cash',
			content: paidByCash,
		},
		{
			title: 'Pay by card',
			content: paidByPlasticCard,
		},
		{
			title: 'Payment difference',
			content: -total,
		},
		{
			title: 'Building Number',
			content: buildingNumber,
		},
		{
			title: 'Room number',
			content: roomNumber,
		},
	];

	return (
		<ObservingWrapper>
			<List
				size='small'
				footer={
					<Btns>
						<Button>Cancel</Button>
						<Button type='primary'>Move</Button>
						<Button type='primary' danger>
							Delete
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
