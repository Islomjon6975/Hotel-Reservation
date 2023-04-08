import React from 'react';
import Card from '../../Generic/Card';
import { Wrapper } from './style';
import icon1 from '../../assets/icons/all_users.svg';
import icon2 from '../../assets/icons/half_time.svg';
import icon3 from '../../assets/icons/end_time.svg';
import icon4 from '../../assets/icons/empty_place.svg';
import icon5 from '../../assets/icons/report.svg';
import { CardWrapper, CenteredWrapper, Title } from '../../Generic/Styles';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Home = () => {
	const navigate = useNavigate();
	const { t } = useTranslation();

	return (
		<Wrapper>
			<CenteredWrapper>
				<Title>{t('home_page.home_title')}:</Title>
				<CardWrapper>
					<Card title={t('home_page.home_all_users_section')} image={icon1} onClick={() => navigate('/all-users')} />
					<Card title={t('home_page.home_half_users_section')} image={icon2} onClick={() => navigate('/half-time')} />
				</CardWrapper>
				<CardWrapper>
					<Card title={t('home_page.home_up_users_section')} image={icon3} onClick={() => navigate('/end-time')} />
					<Card title={t('home_page.home_available_places')} image={icon4} onClick={() => navigate('/building-control')} />
				</CardWrapper>
				<Title>{t('home_page.home_report_title')}:</Title>
				<CardWrapper>
					<Card title={t('home_page.home_report')} image={icon5} onClick={() => navigate('/report')} />
				</CardWrapper>
			</CenteredWrapper>
		</Wrapper>
	);
};

export default Home;
