import React, { useEffect } from 'react';
import { Room } from '../../../../../Generic/Styles';
import { useQuery } from 'react-query';
import { useAxios } from '../../../../../hooks/useAxios';
import { LoadingOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { setUserModalVisibility } from '../../../../../redux/modalSlice';
import TooltipAPI from '../../../../../Generic/Tooltip';
import { useTranslation } from 'react-i18next';

const RoomComponent = ({ userID, selectedBuilding }) => {
	const { t } = useTranslation();
	const axios = useAxios();
	const dispatch = useDispatch();

	const { isLoading, data } = useQuery(`user`, () => axios({ url: `/accomodation/${selectedBuilding}/user?_id=${userID}` }), {
		refetchOnWindowFocus: false,
		keepPreviousData: true,
	});

	const arrivalDate = !isLoading && +data?.data?.data?.arrivalDate;
	const endDate = !isLoading && +data?.data?.data?.endDate;
	const millisecondDiff = !isLoading && endDate - arrivalDate;
	const aDayInMillisecond = !isLoading && 24 * 60 * 60 * 1000;
	const day = !isLoading && Math.round(millisecondDiff / aDayInMillisecond);

	return (
		<TooltipAPI title={t('tooltip.busy_room')} color={'red'}>
			<Room color='red' onClick={() => !isLoading && dispatch(setUserModalVisibility())}>
				{isLoading ? <LoadingOutlined /> : day}
			</Room>
		</TooltipAPI>
	);
};

export default RoomComponent;
