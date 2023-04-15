import { Tooltip } from 'antd';
import React from 'react';

const TooltipAPI = ({ title, color, children }) => {
	return (
		<Tooltip title={title} color={color}>
			{children}
		</Tooltip>
	);
};

export default TooltipAPI;
