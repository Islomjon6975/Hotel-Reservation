import React from 'react';
import { Provider } from 'react-redux';
import store from '../../redux/index.js';
import { ConfigProvider } from 'antd';
import ru_RU from 'antd/locale/ru_RU';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import { ProviderAuth } from '../useAuth/index.jsx';

const query = new QueryClient();

const Wrapper = ({ children }) => {
	return (
		<ProviderAuth>
			<BrowserRouter>
				<QueryClientProvider client={query}>
					<Provider store={store}>
						<ConfigProvider locale={ru_RU}>{children}</ConfigProvider>
					</Provider>
				</QueryClientProvider>
			</BrowserRouter>
		</ProviderAuth>
	);
};

export default Wrapper;
