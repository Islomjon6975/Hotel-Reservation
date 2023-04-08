import React from 'react';
import { Wrapper } from './style';
import { Arrow, CardWrapper, CenteredWrapper, Title } from '../../../Generic/Styles';
import Card from '../../../Generic/Card';
import { useNavigate } from 'react-router-dom';
import icon1 from '../../../assets/icons/building.svg';
import icon2 from '../../../assets/icons/building.svg';
import icon3 from '../../../assets/icons/building.svg';
import { useTranslation } from 'react-i18next';

const OrdinaryRooms = () => {
	const { t } = useTranslation();
	const navigate = useNavigate();

	return (
		<Wrapper>
			<CenteredWrapper>
				<Title onClick={() => navigate(-1)}>
					<Arrow /> {t('building_control_page.building_control_ordinary_rooms')}
				</Title>
				<CardWrapper>
					<Card
						title={`2 ${t('building_control_page.building_control_building')}`}
						image={icon1}
						onClick={() => navigate('/building-control/map/ordinary-rooms/2')}
					/>
					<Card
						title={`4 ${t('building_control_page.building_control_building')}`}
						image={icon2}
						onClick={() => navigate('/building-control/map/ordinary-rooms/4')}
					/>
				</CardWrapper>
				<CardWrapper>
					<Card
						title={`6 ${t('building_control_page.building_control_building')}`}
						image={icon3}
						onClick={() => navigate('/building-control/map/ordinary-rooms/6')}
					/>
				</CardWrapper>
			</CenteredWrapper>
		</Wrapper>
	);
};

export default OrdinaryRooms;
