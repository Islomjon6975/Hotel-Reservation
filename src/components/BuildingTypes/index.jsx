import React from 'react';
import { Wrapper } from './style';
import { CardWrapper, CenteredWrapper } from '../../Generic/Styles';
import Card from '../../Generic/Card';
import { useNavigate, Outlet, useOutlet } from 'react-router-dom';
import icon1 from '../../assets/icons/ordinary_room.svg';
import icon2 from '../../assets/icons/luxury_room.svg';
import icon3 from '../../assets/icons/mansion.svg';
import { useTranslation } from 'react-i18next';
import ArrowBack from '../../Generic/ArrowBack';

const BuildingTypes = () => {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const outlet = useOutlet();

	return (
		<>
			<Wrapper>
				<CenteredWrapper>
					{!outlet ? (
						<>
							<ArrowBack translation={'building_control_page.building_control_page_title'} />
							<CardWrapper>
								<Card
									title={t('building_control_page.building_control_ordinary_rooms')}
									image={icon1}
									onClick={() => navigate('/building-control/ordinary-rooms')}
								/>
								<Card
									title={t('building_control_page.building_control_luxury_rooms')}
									image={icon2}
									onClick={() => navigate('/building-control/luxury-rooms')}
								/>
							</CardWrapper>
							<CardWrapper>
								<Card
									title={t('building_control_page.building_control_cottages')}
									image={icon3}
									onClick={() => navigate('/building-control/map/cottage')}
								/>
							</CardWrapper>
						</>
					) : (
						<Outlet />
					)}
				</CenteredWrapper>
			</Wrapper>
		</>
	);
};

export default BuildingTypes;
