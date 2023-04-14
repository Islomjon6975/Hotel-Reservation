import styled from 'styled-components';
import { ReactComponent as arrow } from '../../assets/icons/arrow.svg';
import { Tag } from 'antd';

export const Wrapper = styled.section`
	width: 100%;
	padding: 30px 30px;

	@media (max-width: 500px) {
		padding: 15px 20px;
	}
`;

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

	@media (max-width: 1200px) {
		margin: 30px;
		font-size: 29px;
	}

	@media (max-width: 800px) {
		margin: 25px;
		font-size: 27px;
	}

	@media (max-width: 600px) {
		margin: 20px;
		font-size: 24px;
	}

	@media (max-width: 428px) {
		margin: 15px;
		font-size: 22px;
	}
`;

export const CenteredWrapper = styled.div`
	display: flex;
	flex-direction: column;
	-webkit-box-align: center;
	align-items: center;
`;

export const Arrow = styled(arrow)``;

export const MappingCard = styled.div`
	display: flex;
	flex-direction: column;
	-webkit-box-align: center;
	align-items: center;
	gap: 20px;
	border-radius: 12px;
	padding: 10px;
	background: rgb(255, 255, 255);
	box-shadow: rgba(0, 0, 0, 0.25) 6px 6px 7px;
	margin-top: 40px;
`;

export const MappingCardWrapper = styled.div`
	max-width: 290px;
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	-webkit-box-pack: center;
	justify-content: center;
	-webkit-box-align: center;
	align-items: center;
	gap: 20px;
	padding: 10px;
`;

export const RoomWrapper = styled.div`
	display: flex;
	flex-direction: column;
	-webkit-box-align: center;
	align-items: center;
	-webkit-box-pack: center;
	justify-content: center;
	border: 1px solid rgb(147, 149, 150);
	border-radius: 12px;
`;

export const RoomTitle = styled.div`
	margin-top: 10px;
`;

export const ClienteWrapper = styled.div`
	margin: 10px auto;
	width: 120px;
	display: flex;
	-webkit-box-pack: center;
	justify-content: center;
	flex-wrap: wrap;
	-webkit-box-align: center;
	align-items: center;
	padding: 10px;
	gap: 10px;
`;

export const Room = styled(Tag)`
	position: relative;
	margin: 0px;
	cursor: pointer;
	display: flex;
	-webkit-box-pack: center;
	justify-content: center;
	-webkit-box-align: center;
	align-items: center;
	width: 40px;
	height: 40px;
	border-radius: 12px;
`;

export const BookedTag = styled(Tag)`
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 20px;
	height: 20px;
	border-radius: 50%;
	position: absolute;
	top: -8px;
	right: -15px;
`;

export const MappingCardsContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	-webkit-box-pack: center;
	justify-content: center;
	gap: 10px;
`;

export const FloorTitle = styled.div`
	display: flex;
	-webkit-box-pack: center;
	justify-content: center;
	-webkit-box-align: center;
	align-items: center;
	font-family: Inter;
	font-style: normal;
	font-weight: 500;
	font-size: 30px;
	line-height: 50px;
	color: rgb(0, 0, 0);
`;
