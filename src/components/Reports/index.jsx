import React from 'react';
import { Wrapper } from './style';
import { CenteredWrapper } from '../../Generic/Styles';
import ArrowBack from '../../Generic/ArrowBack';

const Reports = () => {
	return (
		<Wrapper>
			<CenteredWrapper>
				<ArrowBack translation={'home_page.home_report_title'} />
			</CenteredWrapper>
		</Wrapper>
	);
};

export default Reports;
