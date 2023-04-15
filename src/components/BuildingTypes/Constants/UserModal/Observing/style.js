import { Space } from 'antd';
import styled from 'styled-components';

export const ObservingWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	padding-top: 10px;
`;

ObservingWrapper.Column = styled.div`
	flex: 1;
	font-family: Roboto, sans-serif;
	font-weight: 300;
`;

export const Btns = styled(Space)`
	display: flex;
	justify-content: flex-end;
`;
