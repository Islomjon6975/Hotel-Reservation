import { Dropdown } from 'antd';
import { useDropDown } from '../../Generic/DropDownAPI';
import { Wrapper } from './style';
import { Outlet, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setLangModalVisibility, setLogoutModalVisibility, setSettingModalVisibility } from '../../redux/modalSlice';
import Parameters from '../Reports/Parameters';
import { LanguageModal, LogOutModal, SettingsModal } from '../Modals';

const Navbar = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { loginItems } = useDropDown();

	// User Modal
	const settingHandler = () => dispatch(setSettingModalVisibility());
	const languageHandler = () => dispatch(setLangModalVisibility());
	const logoutHandler = () => dispatch(setLogoutModalVisibility());

	return (
		<>
			{/* ------------------- User Modal ------------------- */}
			<SettingsModal />
			<LogOutModal />
			<LanguageModal />
			<Parameters />
			{/* ------------------- Navbar ------------------- */}
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
			</Wrapper>
			{/* ------------------- Outlet ------------------- */}
			<Outlet />
		</>
	);
};

export default Navbar;
