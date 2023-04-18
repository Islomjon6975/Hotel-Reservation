import React, { useEffect } from 'react';
import { Room } from '../../../../../Generic/Styles';
import { useQuery } from 'react-query';
import { useAxios } from '../../../../../hooks/useAxios';
import { LoadingOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { setUserModalVisibility } from '../../../../../redux/modalSlice';
import { setUserID } from '../../../../../redux/userSlice';
import TooltipAPI from '../../../../../Generic/Tooltip';
import { useTranslation } from 'react-i18next';

const RoomComponent = ({ value: { userID } }) => {
	const { t } = useTranslation();
	const axios = useAxios();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setUserID({ userID: userID }));
	}, [userID, dispatch]);

	const { isLoading, data } = useQuery(`user/${userID}`, () => axios({ url: `/accomodation/2/user?_id=${userID}` }), {
		refetchOnWindowFocus: false,
		keepPreviousData: true,
	});

	const arrivalDate = !isLoading && +data.data.data.arrivalDate;
	const endDate = !isLoading && +data.data.data.endDate;
	const millisecondDiff = endDate - arrivalDate;
	const aDayInMillisecond = 24 * 60 * 60 * 1000;
	const day = Math.round(millisecondDiff / aDayInMillisecond);

	return (
		<TooltipAPI title={t('tooltip.busy_room')} color={'red'}>
			<Room color='red' onClick={() => !isLoading && dispatch(setUserModalVisibility())}>
				{isLoading ? <LoadingOutlined /> : day}
			</Room>
		</TooltipAPI>
	);
};

export default RoomComponent;
