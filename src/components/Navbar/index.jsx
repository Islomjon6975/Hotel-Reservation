import { Dropdown } from 'antd';
import { useDropDown } from '../../Generic/DropDownAPI';
import { Wrapper } from './style';
import { useState } from 'react';
import LogOutModal from '../LogOutModal';
import LanguageModal from '../LanguageModal';
import SettingsModal from '../SettingsModal';
import { Outlet, useNavigate } from 'react-router-dom';

const Navbar = () => {
	const navigate = useNavigate();
	const [openLogOutModal, setOpenLogOutModal] = useState(false);
	const [openLanguageModal, setOpenLanguageModal] = useState(false);
	const [openSettingsModal, setOpenSettingsModal] = useState(false);

	const { loginItems } = useDropDown();

	function settingHandler() {
		console.log('settingHandler');
		setOpenSettingsModal(true);
	}

	function languageHandler() {
		console.log('languageHandler');
		setOpenLanguageModal(true);
	}

	function logoutHandler() {
		console.log('logoutHandler');
		setOpenLogOutModal(true);
	}

	return (
		<>
			<Wrapper>
				<Wrapper.Title onClick={() => navigate('/')}>Nihol</Wrapper.Title>
				<Dropdown
					menu={{
						items: loginItems({ settingHandler, languageHandler, logoutHandler }),
					}}
					placement='bottomRight'
					trigger={['click']}>
					<Wrapper.Avatar>I</Wrapper.Avatar>
				</Dropdown>
				<SettingsModal title='Profile' openSettingsModal={openSettingsModal} setOpenSettingsModal={setOpenSettingsModal} />
				<LogOutModal title='Tasdiqlang' openLogOutModal={openLogOutModal} setOpenLogOutModal={setOpenLogOutModal} />
				<LanguageModal
					title="Tilni o'zgartirish"
					openLanguageModal={openLanguageModal}
					setOpenLanguageModal={setOpenLanguageModal}
				/>
			</Wrapper>
			<Outlet />
		</>
	);
};

export default Navbar;
