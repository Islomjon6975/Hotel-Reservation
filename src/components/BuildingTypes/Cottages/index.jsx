import React from 'react';
import { Wrapper } from './style';
import { Arrow, CenteredWrapper, Title } from '../../../Generic/Styles';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Cottages = () => {
	const { t } = useTranslation();
	const navigate = useNavigate();

	return (
		<Wrapper>
			<CenteredWrapper>
				<Title onClick={() => navigate('/building-control')}>
					<Arrow /> {t('building_control_page.building_control_cottages')}
				</Title>
			</CenteredWrapper>
		</Wrapper>
	);
};

export default Cottages;
