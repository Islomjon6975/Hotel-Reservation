import styled from 'styled-components';

export const Wrapper = styled.header`
	background: rgb(255, 255, 255);
	width: 100%;
	padding: 0px 10%;
	height: 70px;
	margin: auto;
	display: flex;
	-webkit-box-align: center;
	align-items: center;
	-webkit-box-pack: justify;
	justify-content: space-between;
`;

Wrapper.Title = styled.div``;

Wrapper.Avatar = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	color: #fff;
	font-size: 14px;
	width: 32px;
	height: 32px;
	border-radius: 50%;
	background: rgb(245, 106, 0);
	cursor: pointer;
`;
