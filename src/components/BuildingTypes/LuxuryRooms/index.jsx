import React from 'react';
import { Wrapper } from './style';
import { Arrow, CardWrapper, CenteredWrapper, Title } from '../../../Generic/Styles';
import Card from '../../../Generic/Card';
import { useNavigate } from 'react-router-dom';
import icon1 from '../../../assets/icons/building.svg';
import icon2 from '../../../assets/icons/building.svg';
import { useTranslation } from 'react-i18next';

const LuxuryRooms = () => {
	const { t } = useTranslation();
	const navigate = useNavigate();

	return (
		<Wrapper>
			<CenteredWrapper>
				<Title onClick={() => navigate('/building-control')}>
					<Arrow /> {t('building_control_page.building_control_luxury_rooms')}
				</Title>
				<CardWrapper>
					<Card
						title={`3 ${t('building_control_page.building_control_building')}`}
						image={icon1}
						onClick={() => navigate('building-control/map/luxury-rooms/3')}
					/>
					<Card
						title={`5 ${t('building_control_page.building_control_building')}`}
						image={icon2}
						onClick={() => navigate('building-control/map/luxury-rooms/5')}
					/>
				</CardWrapper>
			</CenteredWrapper>
		</Wrapper>
	);
};

export default LuxuryRooms;
