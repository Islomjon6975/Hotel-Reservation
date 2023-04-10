import React from 'react';
import { Wrapper } from './style';
import { CenteredWrapper } from '../../../Generic/Styles';
import { useTranslation } from 'react-i18next';
import ArrowBack from '../../../Generic/ArrowBack';

const Cottages = () => {
	const { t } = useTranslation();

	return (
		<Wrapper>
			<CenteredWrapper>
				<ArrowBack translation={'building_control_page.building_control_cottages'} />
			</CenteredWrapper>
		</Wrapper>
	);
};

export default Cottages;
