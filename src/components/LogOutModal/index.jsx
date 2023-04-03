import React from 'react';
import { useState } from 'react';
import { ModalContainer } from './style';
import ReloadPage from '../../hooks/ReloadPage';

const LogOutModal = ({ title, openLogOutModal, setOpenLogOutModal }) => {
	const [confirmLoading, setConfirmLoading] = useState(false);

	const handleOk = () => {
		setConfirmLoading(true);
		setTimeout(() => {
			setOpenLogOutModal(false);
			setConfirmLoading(false);
			localStorage.removeItem('token');
			ReloadPage();
		}, 2000);
	};
	const handleCancel = () => {
		setOpenLogOutModal(false);
	};
	return (
		<ModalContainer
			width={416}
			title={title}
			open={openLogOutModal}
			onOk={handleOk}
			okText={'Tark etish'}
			cancelText='Bekor qilish'
			confirmLoading={confirmLoading}
			onCancel={handleCancel}
			className='logout'>
			<p>Haqiqatan ham tark etishni xohlaysizmi?</p>
		</ModalContainer>
	);
};

export default LogOutModal;
