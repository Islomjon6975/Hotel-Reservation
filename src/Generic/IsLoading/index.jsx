import { Spin } from 'antd';
import React from 'react';
import { CenteredWrapper } from '../Styles';

const IsLoading = (size = 'large') => {
	return (
		<CenteredWrapper>
			<Spin size={size} />
		</CenteredWrapper>
	);
};

export default IsLoading;
