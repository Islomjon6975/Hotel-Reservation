import { notification } from 'antd';
import { useTranslation } from 'react-i18next';

const useErrorNotifier = () => {
	const { t } = useTranslation();

	const notFound = {
		message: t('notification_api.notification_api_notFound'),
	};

	const notFillingError = {
		message: t('notification_api.notification_api_notFillingError'),
	};

	const errorNotifier = ({ errorStatus = 409 }) => {
		switch (errorStatus) {
			case 409:
				return notification.error({ ...notFound });
			case 'notFillingError':
				return notification.error({ ...notFillingError });
			default:
				return;
		}
	};
	return { errorNotifier };
};

export { useErrorNotifier };
