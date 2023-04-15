import React from 'react';
import { CenteredWrapper } from '../../../../Generic/Styles';
import ArrowBack from '../../../../Generic/ArrowBack';
import { useQuery } from 'react-query';
import { useAxios } from '../../../../hooks/useAxios';
import IsLoading from '../../../../Generic/IsLoading';
import Mapping from './Mapping';
import { useTranslation } from 'react-i18next';
import UserModal from '../../Constants/UserModal';

const SecondBuilding = () => {
	const { t } = useTranslation();
	const axios = useAxios();
	const { isLoading } = useQuery(
		'accomodation/2',
		() => {
			return axios({ url: '/accomodation/2/room' });
		},
		{
			refetchOnWindowFocus: false,
			keepPreviousData: true,
		}
	);

	return (
		<CenteredWrapper>
			<ArrowBack translation={`2 ${t('building_control_page.building_control_building')}`} />
			<UserModal />
			{isLoading ? <IsLoading /> : <Mapping />}
		</CenteredWrapper>
	);
};

export default SecondBuilding;
