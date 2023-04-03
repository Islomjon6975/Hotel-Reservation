import React from 'react';
import Card from '../../Generic/Card';
import { Wrapper } from './style';
import icon1 from '../../assets/icons/all_users.svg';
import icon2 from '../../assets/icons/half_time.svg';
import icon3 from '../../assets/icons/end_time.svg';
import icon4 from '../../assets/icons/empty_place.svg';
import icon5 from '../../assets/icons/report.svg';
import { CardWrapper, CenteredWrapper, Title } from '../../Generic/Styles';
import { useAuthUser } from 'react-auth-kit';
const Home = () => {
	const auth = useAuthUser();

	console.log(auth(), 'auth');
	return (
		<Wrapper>
			<CenteredWrapper>
				<Title>Bo'limlar:</Title>
				<CardWrapper>
					<Card title={'Barcha mizojlar'} image={icon1} />
					<Card title={'Oraliq muddat'} image={icon2} />
				</CardWrapper>
				<CardWrapper>
					<Card title={'Muddat tugash.'} image={icon3} />
					<Card title={'Mavjud joylar'} image={icon4} />
				</CardWrapper>
				<Title>Hisobotlar:</Title>
				<CardWrapper>
					<Card title={'Hisobot'} image={icon5} />
				</CardWrapper>
			</CenteredWrapper>
		</Wrapper>
	);
};

export default Home;
