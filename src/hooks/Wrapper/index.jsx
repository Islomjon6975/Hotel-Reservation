import React from 'react';
import { Provider } from 'react-redux';
import store from '../../redux/index.js';
import { ConfigProvider } from 'antd';
import ru_RU from 'antd/locale/ru_RU';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from 'react-auth-kit';

const query = new QueryClient();

const Wrapper = ({ children }) => {
	return (
		<AuthProvider
			authType={'cookie'}
			authName={'_auth'}
			cookieDomain={window.location.hostname}
			cookieSecure={window.location.protocol === 'https:'}>
			<BrowserRouter>
				<QueryClientProvider client={query}>
					<Provider store={store}>
						<ConfigProvider locale={ru_RU}>{children}</ConfigProvider>
					</Provider>
				</QueryClientProvider>
			</BrowserRouter>
		</AuthProvider>
	);
};

export default Wrapper;
