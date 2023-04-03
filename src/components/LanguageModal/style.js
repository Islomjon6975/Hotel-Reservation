import styled from 'styled-components';
import { Modal } from 'antd';

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
