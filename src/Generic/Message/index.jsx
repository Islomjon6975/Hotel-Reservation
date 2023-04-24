import { notification } from 'antd';

const useMessageAPI = () => {
	const [api, contextHolder] = notification.useNotification();
	const openNotificationWithIcon = type => {
		api[type]({
			message: type === 'success' ? 'Saved' : 'NOTIFICATION',
		});
	};
	return { openNotificationWithIcon, contextHolder };
};

export { useMessageAPI };
