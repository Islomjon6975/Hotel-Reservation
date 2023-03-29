import React from 'react';
import { Wrapper } from './style';

const Section = ({ title, icon }) => {
	return (
		<Wrapper>
			<Wrapper.Title>{title}</Wrapper.Title>
			<Wrapper.Icon src={icon} alt={title} />
		</Wrapper>
	);
};

export default Section;
