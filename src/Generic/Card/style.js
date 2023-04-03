import styled from 'styled-components';

export const Wrapper = styled.div`
	width: 250px;
	height: 250px;
	cursor: pointer;
	border-radius: 17px;
	background: rgb(255, 255, 255);
	display: flex;
	flex-direction: column;
	-webkit-box-pack: justify;
	justify-content: space-between;
	-webkit-box-align: center;
	align-items: center;
	gap: 20px;
	box-shadow: rgba(0, 0, 0, 0.25) 6px 6px 7px;

	@media (max-width: 650px) {
		width: 200px;
		height: 200px;
	}

	@media (max-width: 500px) {
		width: 150px;
		height: 150px;
	}

	@media (max-width: 350px) {
		width: 120px;
		height: 140px;
	}
`;

Wrapper.Title = styled.div`
	padding-top: 30px;
	font-family: Inter;
	font-style: normal;
	font-weight: 500;
	font-size: 18px;
	color: rgb(0, 0, 0);

	@media (max-width: 650px) {
		font-size: 16px;
	}

	@media (max-width: 500px) {
		font-size: 12px;
	}

	@media (max-width: 350px) {
		font-size: 10px;
	}
`;

Wrapper.Icon = styled.img`
	width: 133px;
	height: 192px;
	margin-bottom: 30px;

	@media (max-width: 650px) {
		width: 93px;
		height: 152px;
	}

	@media (max-width: 500px) {
		width: 63px;
		height: 122px;
	}

	@media (max-width: 350px) {
		/* margin-top: 10px; */
	}
`;
