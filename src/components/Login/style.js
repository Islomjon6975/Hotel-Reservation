import { Input } from 'antd';
import styled from 'styled-components';

export const Wrapper = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

Wrapper.Container = styled.div`
	width: 500px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

Wrapper.Title = styled.div`
	margin-top: 20px;
	font-size: 30px;
	color: rgb(57, 56, 77);
	font-weight: 500;
`;

Wrapper.Description = styled.div`
	margin-top: 10px;
	color: rgb(178, 176, 184);
	text-align: center;
	width: 80%;
`;

Wrapper.Input = styled(Input)`
	display: flex;
	-webkit-box-align: center;
	align-items: center;
	-webkit-box-pack: center;
	justify-content: center;
	margin-top: 40px;
	width: 80%;
	height: 50px;
	background: rgb(250, 251, 254);
	outline: none;
	border: 1px solid rgb(240, 238, 247);
	border-radius: 12px;
	padding-left: 15px;
	color: rgb(89, 90, 98);

	.ant-input-group-addon {
		border: none;
		background: transparent;
	}
`;

Wrapper.PasswordInput = styled(Input.Password)`
	display: flex;
	-webkit-box-align: center;
	align-items: center;
	-webkit-box-pack: center;
	justify-content: center;
	margin-top: 40px;
	width: 80%;
	height: 50px;
	background: rgb(250, 251, 254);
	outline: none;
	border: 1px solid rgb(240, 238, 247);
	border-radius: 12px;
	padding-left: 15px;
	color: rgb(89, 90, 98);
`;

Wrapper.Button = styled.div`
	margin-top: 50px;
	width: 80%;
	height: 50px;
	border: 1px solid rgb(240, 238, 247);
	border-radius: 12px;
	display: flex;
	-webkit-box-align: center;
	align-items: center;
	-webkit-box-pack: center;
	justify-content: center;
	cursor: pointer;
	font-size: 16px;
	color: rgb(255, 255, 255);
	padding: 0px 15px;
	background: rgb(48, 104, 204);

	${({ warningAnimation }) =>
		warningAnimation &&
		`
    animation: rotate 0.7s ease-in-out both;
  @keyframes rotate {
    0% {
      transform: rotate(0deg) translate3d(0, 0, 0);
    }
    25% {
      transform: rotate(3deg) translate3d(0, 0, 0);
    }
    50% {
      transform: rotate(-3deg) translate3d(0, 0, 0);
    }
    75% {
      transform: rotate(1deg) translate3d(0, 0, 0);
    }
    100% {
      transform: rotate(0deg) translate3d(0, 0, 0);
    }
  }
  `}
`;
