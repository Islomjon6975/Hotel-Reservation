import styled from 'styled-components';
import { Modal } from 'antd';

export const ModalContainer = styled(Modal)`
	.ant-btn-primary {
		background: crimson !important;
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
