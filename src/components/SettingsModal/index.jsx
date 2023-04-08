import React from 'react';
import { useState } from 'react';
import { ModalContainer } from './style';
import { CenteredWrapper } from '../../Generic/Styles';
import { useTranslation } from 'react-i18next';
import { Typography } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { setSettingModalVisibility } from '../../redux/modalSlice';
const { Text } = Typography;

const SettingsModal = () => {
	const { t } = useTranslation();
	const dispatch = useDispatch();
	const { settingModalVisibility } = useSelector(state => state.modal);
	const [confirmLoading, setConfirmLoading] = useState(false);

	const handleOk = () => {
		setConfirmLoading(true);
		setTimeout(() => {
			setConfirmLoading(false);
		}, 1000);
	};

	const handleCancel = () => dispatch(setSettingModalVisibility());

	return (
		<ModalContainer
			width={416}
			title={t('modal.modal_profile')}
			open={settingModalVisibility}
			onOk={handleOk}
			okText={t('modal.modal_save')}
			okButtonProps={{ disabled: true }}
			cancelText={t('modal.modal_cancel')}
			confirmLoading={confirmLoading}
			onCancel={handleCancel}>
			<CenteredWrapper>
				<ModalContainer.Wrapper>
					<ModalContainer.Avatar>I</ModalContainer.Avatar>
					<ModalContainer.Form>
						<ModalContainer.Form.Item>
							<ModalContainer.Form.Label>{t('modal.modal_name')}:</ModalContainer.Form.Label>
							<ModalContainer.Form.Input placeholder='' disabled />
						</ModalContainer.Form.Item>
						<ModalContainer.Form.Item>
							<ModalContainer.Form.Label>{t('modal.modal_surname')}:</ModalContainer.Form.Label>
							<ModalContainer.Form.Input placeholder='' disabled />
						</ModalContainer.Form.Item>
					</ModalContainer.Form>
				</ModalContainer.Wrapper>
				<Text type='secondary' style={{ marginTop: '20px' }}>
					Nihol 0.0.1 {t('modal.modal_version')}
				</Text>
			</CenteredWrapper>
		</ModalContainer>
	);
};

export default SettingsModal;
