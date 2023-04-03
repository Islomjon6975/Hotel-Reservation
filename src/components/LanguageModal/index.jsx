import React from 'react';
import { useState } from 'react';
import { ModalContainer } from './style';
import ReloadPage from '../../hooks/ReloadPage';
import { CenteredWrapper } from '../../Generic/Styles';
import { Avatar, Segmented } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useMediaQuery } from '../../hooks/useMediaQuery';

const LanguageModal = ({ title, openLanguageModal, setOpenLanguageModal }) => {
	const [confirmLoading, setConfirmLoading] = useState(false);
	const mediaQuery = useMediaQuery('(max-width: 884px)');

	const handleOk = () => {
		setConfirmLoading(true);
		setTimeout(() => {
			setOpenLanguageModal(false);
			setConfirmLoading(false);
			ReloadPage();
		}, 2000);
	};
	const handleCancel = () => {
		setOpenLanguageModal(false);
	};
	return (
		<ModalContainer
			width={416}
			title={title}
			open={openLanguageModal}
			onOk={handleOk}
			okText={"O'zgartirish"}
			cancelText='Bekor qilish'
			confirmLoading={confirmLoading}
			onCancel={handleCancel}>
			<CenteredWrapper>
				<Segmented
					size={mediaQuery ? 'small' : 'large'}
					options={[
						{
							label: (
								<div
									style={{
										padding: 4,
									}}>
									<Avatar src='https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/255px-Flag_of_the_United_States.svg.png' />
									<div>English</div>
								</div>
							),
							value: 'user1',
						},
						{
							label: (
								<div
									style={{
										padding: 4,
									}}>
									<Avatar src='https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/250px-Flag_of_Russia.svg.png'>
										K
									</Avatar>
									<div>Русский</div>
								</div>
							),
							value: 'user2',
						},
						{
							label: (
								<div
									style={{
										padding: 4,
									}}>
									<Avatar
										src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Uzbekistan.svg/255px-Flag_of_Uzbekistan.svg.png'
										icon={<UserOutlined />}
									/>
									<div>O'zbek</div>
								</div>
							),
							value: 'user3',
						},
						{
							label: (
								<div
									style={{
										padding: 4,
									}}>
									<Avatar
										src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Uzbekistan.svg/255px-Flag_of_Uzbekistan.svg.png'
										icon={<UserOutlined />}
									/>
									<div>Ўзбек</div>
								</div>
							),
							value: 'user4',
						},
					]}
				/>
			</CenteredWrapper>
		</ModalContainer>
	);
};

export default LanguageModal;
