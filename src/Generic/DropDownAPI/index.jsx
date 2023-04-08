import { SettingOutlined, TranslationOutlined, LogoutOutlined } from '@ant-design/icons';
import { DropDownContentWrapper } from '../Styles';
import { useTranslation } from 'react-i18next';

export const useDropDown = () => {
	const { t } = useTranslation();

	const customIconStyle = {
		fontSize: '18px',
	};

	const loginItems = ({ settingHandler, languageHandler, logoutHandler }) => [
		{
			label: <DropDownContentWrapper onClick={settingHandler}>{t('dropdown.navbar_dropdown_setting')}</DropDownContentWrapper>,
			key: '0',
			icon: <SettingOutlined style={customIconStyle} />,
		},
		{
			label: <DropDownContentWrapper onClick={languageHandler}>{t('dropdown.navbar_dropdown_language')}</DropDownContentWrapper>,
			key: '1',
			icon: <TranslationOutlined style={customIconStyle} />,
		},

		{
			label: (
				<DropDownContentWrapper onClick={logoutHandler} style={{ color: 'red' }}>
					{t('dropdown.navbar_dropdown_logout')}
				</DropDownContentWrapper>
			),
			key: '3',
			icon: <LogoutOutlined style={{ ...customIconStyle, color: 'red' }} />,
		},
	];

	return { loginItems };
};
