import React from 'react';
import { CenteredWrapper, MappingCardsContainer } from '../../../../Generic/Styles';
import ArrowBack from '../../../../Generic/ArrowBack';
import IsLoading from '../../../../Generic/IsLoading';
import Mapping from './Mapping';
import { useQuery } from 'react-query';
import { useAxios } from '../../../../hooks/useAxios';
import Mapping2 from './Mapping2';
import { useTranslation } from 'react-i18next';

const FifthBuilding = () => {
	const { t } = useTranslation();
	const axios = useAxios();
	const { isLoading } = useQuery('accomodation/5-1', async () => axios({ url: '/accomodation/5-1/room' }), {
		refetchOnWindowFocus: false,
		keepPreviousData: true,
	});

	useQuery('accomodation/5-2', async () => axios({ url: '/accomodation/5-2/room' }), {
		refetchOnWindowFocus: false,
		keepPreviousData: true,
	});

	return (
		<CenteredWrapper>
			<ArrowBack translation={`6 ${t('building_control_page.building_control_building')}`} />

			{isLoading ? (
				<IsLoading />
			) : (
				<MappingCardsContainer>
					<Mapping />
					<Mapping2 />
				</MappingCardsContainer>
			)}
		</CenteredWrapper>
	);
};

export default FifthBuilding;
