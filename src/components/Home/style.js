import styled from 'styled-components';

export const Wrapper = styled.header`
	display: flex;
	flex-direction: column;
	-webkit-box-align: center;
	align-items: center;
`;

Wrapper.Title = styled.div`
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

Wrapper.Container = styled.div`
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
