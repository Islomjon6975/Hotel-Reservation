import { Dropdown } from 'antd';
import { useDropDown } from '../../Generic/DropDownAPI';
import { Wrapper } from './style';

const Navbar = () => {
	const { loginItems } = useDropDown({ settingHandler, languageHandler, logoutHandler });

	function settingHandler() {
		console.log('settingHandler');
	}

	function languageHandler() {
		console.log('languageHandler');
	}

	function logoutHandler() {
		console.log('logoutHandler');
	}

	return (
		<Wrapper>
			<Wrapper.Title>Nihol</Wrapper.Title>
			<Dropdown
				menu={{
					items: loginItems,
				}}
				placement='bottomRight'
				trigger={['click']}>
				<Wrapper.Avatar>I</Wrapper.Avatar>
			</Dropdown>
		</Wrapper>
	);
};

export default Navbar;
