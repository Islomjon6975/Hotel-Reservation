import React from 'react';
import { Wrapper } from './style';
import { CardWrapper, CenteredWrapper } from '../../../Generic/Styles';
import Card from '../../../Generic/Card';
import { Outlet, useNavigate, useOutlet } from 'react-router-dom';
import icon1 from '../../../assets/icons/building.svg';
import icon2 from '../../../assets/icons/building.svg';
import icon3 from '../../../assets/icons/building.svg';
import { useTranslation } from 'react-i18next';
import ArrowBack from '../../../Generic/ArrowBack';

const OrdinaryRooms = () => {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const outlet = useOutlet();

	return (
		<Wrapper>
			<CenteredWrapper>
				{!outlet ? (
					<>
						<ArrowBack translation={'building_control_page.building_control_ordinary_rooms'} />

						<CardWrapper>
							<Card
								title={`2 ${t('building_control_page.building_control_building')}`}
								image={icon1}
								onClick={() => navigate('/building-control/ordinary-rooms/2')}
							/>
							<Card
								title={`4 ${t('building_control_page.building_control_building')}`}
								image={icon2}
								onClick={() => navigate('/building-control/ordinary-rooms/4')}
							/>
						</CardWrapper>
						<CardWrapper>
							<Card
								title={`6 ${t('building_control_page.building_control_building')}`}
								image={icon3}
								onClick={() => navigate('/building-control/ordinary-rooms/6')}
							/>
						</CardWrapper>
					</>
				) : (
					<Outlet />
				)}
			</CenteredWrapper>
		</Wrapper>
	);
};

export default OrdinaryRooms;
