import React from 'react';
import { useState } from 'react';
import { ModalContainer } from './style';
import ReloadPage from '../../hooks/ReloadPage';
import { CenteredWrapper } from '../../Generic/Styles';

const SettingsModal = ({ title, openSettingsModal, setOpenSettingsModal }) => {
	const [confirmLoading, setConfirmLoading] = useState(false);

	const handleOk = () => {
		setConfirmLoading(true);
		setTimeout(() => {
			setOpenSettingsModal(false);
			setConfirmLoading(false);
			ReloadPage();
		}, 2000);
	};
	const handleCancel = () => {
		setOpenSettingsModal(false);
	};
	return (
		<ModalContainer
			width={416}
			title={title}
			open={openSettingsModal}
			onOk={handleOk}
			okText={'Saqlash'}
			cancelText='Bekor qilish'
			confirmLoading={confirmLoading}
			onCancel={handleCancel}>
			<CenteredWrapper>Settings</CenteredWrapper>
		</ModalContainer>
	);
};

export default SettingsModal;
