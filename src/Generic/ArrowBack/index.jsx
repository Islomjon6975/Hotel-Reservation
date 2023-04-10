import React from 'react';
import { Arrow, Title } from '../Styles';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const ArrowBack = ({ translation }) => {
	const { t } = useTranslation();
	const navigate = useNavigate();

	return (
		<Title onClick={() => navigate(-1)}>
			<Arrow /> {t(translation)}
		</Title>
	);
};

export default ArrowBack;
