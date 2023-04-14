import React from 'react';
import { Wrapper } from './style';
import { useTranslation } from 'react-i18next';
import ArrowBack from '../../../Generic/ArrowBack';
import { useQuery } from 'react-query';
import Mapping from './Mapping';
import IsLoading from '../../../Generic/IsLoading';
import { CenteredWrapper } from '../../../Generic/Styles';
import { useAxios } from '../../../hooks/useAxios';

const Cottages = () => {
	const { t } = useTranslation();
	const axios = useAxios();
	const { isLoading } = useQuery(
		'accomodation/4',
		() => {
			return axios({ url: '/accomodation/cottage/room' });
		},
		{
			refetchOnWindowFocus: false,
			keepPreviousData: true,
		}
	);

	return (
		<Wrapper>
			<CenteredWrapper>
				<ArrowBack translation={t('building_control_page.building_control_cottages')} />
				{isLoading ? <IsLoading /> : <Mapping />}
			</CenteredWrapper>
		</Wrapper>
	);
};

export default Cottages;
