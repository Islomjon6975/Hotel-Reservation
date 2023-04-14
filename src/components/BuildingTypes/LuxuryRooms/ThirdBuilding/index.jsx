import React from 'react';
import { CenteredWrapper } from '../../../../Generic/Styles';
import ArrowBack from '../../../../Generic/ArrowBack';
import { useQuery } from 'react-query';
import { useAxios } from '../../../../hooks/useAxios';
import IsLoading from '../../../../Generic/IsLoading';
import Mapping from './Mapping';
import { useTranslation } from 'react-i18next';

const ThirdBuilding = () => {
	const { t } = useTranslation();
	const axios = useAxios();
	const { isLoading } = useQuery(
		'accomodation/3',
		() => {
			return axios({ url: '/accomodation/3/room' });
		},
		{
			refetchOnWindowFocus: false,
			keepPreviousData: true,
		}
	);

	return (
		<CenteredWrapper>
			<ArrowBack translation={`3 ${t('building_control_page.building_control_building')}`} />
			{isLoading ? <IsLoading /> : <Mapping />}
		</CenteredWrapper>
	);
};

export default ThirdBuilding;
