import { SettingOutlined, TranslationOutlined, LogoutOutlined } from '@ant-design/icons';
import { DropDownContentWrapper } from '../Styles';

export const useDropDown = () => {
	const customIconStyle = {
		fontSize: '18px',
	};

	const loginItems = ({ settingHandler, languageHandler, logoutHandler }) => [
		{
			label: <DropDownContentWrapper onClick={settingHandler}>Settings</DropDownContentWrapper>,
			key: '0',
			icon: <SettingOutlined style={customIconStyle} />,
		},
		{
			label: <DropDownContentWrapper onClick={languageHandler}>Change Language</DropDownContentWrapper>,
			key: '1',
			icon: <TranslationOutlined style={customIconStyle} />,
		},

		{
			label: (
				<DropDownContentWrapper onClick={logoutHandler} style={{ color: 'red' }}>
					Log out
				</DropDownContentWrapper>
			),
			key: '3',
			icon: <LogoutOutlined style={{ ...customIconStyle, color: 'red' }} />,
		},
	];

	return { loginItems };
};
