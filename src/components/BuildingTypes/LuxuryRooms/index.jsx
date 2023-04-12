import React from 'react';
import { Wrapper } from './style';
import { CardWrapper, CenteredWrapper } from '../../../Generic/Styles';
import Card from '../../../Generic/Card';
import { Outlet, useNavigate, useOutlet } from 'react-router-dom';
import icon1 from '../../../assets/icons/building.svg';
import icon2 from '../../../assets/icons/building.svg';
import { useTranslation } from 'react-i18next';
import ArrowBack from '../../../Generic/ArrowBack';

const LuxuryRooms = () => {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const outlet = useOutlet();

	return (
		<Wrapper>
			<CenteredWrapper>
				{!outlet ? (
					<>
						<ArrowBack translation={'building_control_page.building_control_luxury_rooms'} />

						<CardWrapper>
							<Card
								title={`3 ${t('building_control_page.building_control_building')}`}
								image={icon1}
								onClick={() => navigate('/building-control/luxury-rooms/3')}
							/>
							<Card
								title={`5 ${t('building_control_page.building_control_building')}`}
								image={icon2}
								onClick={() => navigate('/building-control/luxury-rooms/5')}
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

export default LuxuryRooms;
