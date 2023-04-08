import React from 'react';
import { useState } from 'react';
import { ModalContainer } from './style';
import { useSignOut } from 'react-auth-kit';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { setLogoutModalVisibility } from '../../redux/modalSlice';

const LogOutModal = () => {
	const { t } = useTranslation();
	const signOut = useSignOut();
	const { logoutModalVisibility } = useSelector(state => state.modal);
	const dispatch = useDispatch();
	const [confirmLoading, setConfirmLoading] = useState(false);

	const handleOk = () => {
		setConfirmLoading(true);
		setTimeout(() => {
			setConfirmLoading(false);
			localStorage.removeItem('token');
			signOut();
		}, 1000);
	};

	const handleCancel = () => dispatch(setLogoutModalVisibility());

	return (
		<ModalContainer
			width={416}
			title={t('modal.modal_logout')}
			open={logoutModalVisibility}
			onOk={handleOk}
			okText={t('modal.modal_logout')}
			cancelText={t('modal.modal_cancel')}
			confirmLoading={confirmLoading}
			onCancel={handleCancel}
			className='logout'>
			<p>{t('modal.modal_logout_text')}</p>
		</ModalContainer>
	);
};

export default LogOutModal;
