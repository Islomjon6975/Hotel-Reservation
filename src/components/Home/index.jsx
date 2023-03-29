import React from 'react';
import Section from '../Section';
import { Wrapper } from './style';
import icon1 from '../../assets/icons/all_users.svg';
import icon2 from '../../assets/icons/half_time.svg';
import icon3 from '../../assets/icons/end_time.svg';
import icon4 from '../../assets/icons/empty_place.svg';
import icon5 from '../../assets/icons/report.svg';

const Home = () => {
	return (
		<Wrapper>
			<Wrapper.Title>Bo'limlar:</Wrapper.Title>
			<Wrapper.Container>
				<Section title={'Barcha mizojlar'} icon={icon1} />
				<Section title={'Oraliq muddat'} icon={icon2} />
			</Wrapper.Container>
			<Wrapper.Container>
				<Section title={'Muddat tugash.'} icon={icon3} />
				<Section title={'Mavjud joylar'} icon={icon4} />
			</Wrapper.Container>
			<Wrapper.Title>Hisobotlar:</Wrapper.Title>
			<Wrapper.Container>
				<Section title={'Hisobot'} icon={icon5} />
			</Wrapper.Container>
		</Wrapper>
	);
};

export default Home;
