import { useTranslation } from 'react-i18next';
import { Avatar } from 'antd';

export const useSegmented = () => {
	const { t } = useTranslation();

	// ====================== LOCALE OPTIONS ======================
	const localeOptions = () => [
		{
			label: (
				<div
					style={{
						padding: 4,
					}}>
					<Avatar src='https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/255px-Flag_of_the_United_States.svg.png' />
					<div>{t('home_page.home_locale_modal_english')}</div>
				</div>
			),
			value: 'en',
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
					<div>{t('home_page.home_locale_modal_russian')}</div>
				</div>
			),
			value: 'ru',
		},
		{
			label: (
				<div
					style={{
						padding: 4,
					}}>
					<Avatar src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Uzbekistan.svg/255px-Flag_of_Uzbekistan.svg.png' />
					<div>{t('home_page.home_locale_modal_uzLotin')}</div>
				</div>
			),
			value: 'uzLotin',
		},
		{
			label: (
				<div
					style={{
						padding: 4,
					}}>
					<Avatar src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Uzbekistan.svg/255px-Flag_of_Uzbekistan.svg.png' />
					<div>{t('home_page.home_locale_modal_uzKrill')}</div>
				</div>
			),
			value: 'uzKrill',
		},
	];

	// ====================== USER OPTIONS ======================
	const userOptions = () => [
		{
			label: <div>{t('information_about_user.observing') || t('home_page.home_locale_modal_uzLotin')}</div>,
			value: 'Observing',
		},
		{
			label: <div>{t('information_about_user.booked_user') || t('home_page.home_locale_modal_uzLotin')}</div>,
			value: 'Booked places',
		},
		{
			label: <div>{t('information_about_user.edit') || t('home_page.home_locale_modal_uzLotin')}</div>,
			value: 'Edit',
		},
	];

	// ====================== MOVE USER OPTION ======================
	const moveUserOptions = () => [2, 3, 4, 5, 6];

	return { localeOptions, userOptions, moveUserOptions };
};
