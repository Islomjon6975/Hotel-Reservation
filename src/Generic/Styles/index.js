import styled from 'styled-components';
import { ReactComponent as arrow } from '../../assets/icons/arrow.svg';

export const DropDownContentWrapper = styled.div`
	padding: 5px 0 !important;
	display: flex;
	/* gap: 10px; */

	clear: both;
	margin: 0;
	color: rgba(0, 0, 0, 0.88);
	font-weight: normal;
	font-size: 14px;
	line-height: 1.5714285714285714;
	cursor: pointer;
	transition: all 0.2s;
	border-radius: 4px;
`;

export const CardWrapper = styled.div`
	margin: 30px auto;
	width: fit-content;
	display: flex;
	gap: 150px;

	@media (max-width: 800px) {
		gap: 75px;
	}

	@media (max-width: 500px) {
		gap: 37.5px;
	}

	@media (max-width: 300px) {
		flex-direction: column;
		gap: 10px;
		margin: 10px auto;
	}
`;

export const Title = styled.div`
	display: flex;
	-webkit-box-pack: center;
	justify-content: center;
	-webkit-box-align: center;
	align-items: center;
	font-family: Inter;
	font-style: normal;
	font-weight: 500;
	font-size: 34px;
	line-height: 77px;
	color: rgb(0, 0, 0);
	margin: 40px;

	@media (max-width: 600px) {
		margin: 40px;
		font-size: 24px;
	}

	@media (max-width: 400px) {
		margin: 40px;
		font-size: 18px;
	}
`;

export const CenteredWrapper = styled.div`
	display: flex;
	flex-direction: column;
	-webkit-box-align: center;
	align-items: center;
`;

export const Arrow = styled(arrow)``;
