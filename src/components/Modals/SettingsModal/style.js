import styled from 'styled-components';
import { Input, Modal } from 'antd';

export const ModalContainer = styled(Modal)`
	.ant-btn-primary {
		background-color: #1677ff !important;
	}

	@media (max-width: 350px) {
		.ant-segmented-group {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			grid-gap: 10px;
			width: 100% !important;
		}
	}
	@media (max-width: 300px) {
		.ant-segmented-group {
			grid-template-columns: repeat(2, 1fr);
			grid-gap: 10px;
			width: 100% !important;
		}
	}

	.ant-modal-footer {
		width: 100%;
		display: flex;
		justify-content: flex-end;
		gap: 5px;
	}

	@media (max-width: 290px) {
		.ant-modal-footer {
			flex-direction: column;
			align-items: flex-end;
		}
	}
`;

ModalContainer.Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	-webkit-box-align: center;
	align-items: center;
	width: 100%;
`;

ModalContainer.Avatar = styled.div`
	width: 80px;
	height: 80px;
	border-radius: 50%;
	font-size: 20px;
	display: flex;
	-webkit-box-pack: center;
	justify-content: center;
	-webkit-box-align: center;
	align-items: center;
	color: rgb(255, 255, 255);
	background: rgb(245, 106, 0);

	@media (max-width: 800px) {
		width: 70px;
		height: 70px;
	}
`;

ModalContainer.Form = styled.div`
	width: 100%;
`;

ModalContainer.Form.Item = styled.div`
	margin-top: 20px;
	width: 100%;
`;

ModalContainer.Form.Label = styled.div``;

ModalContainer.Form.Input = styled(Input)`
	width: 100%;
`;
