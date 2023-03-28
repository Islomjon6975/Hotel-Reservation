import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './components/Login';
import Wrapper from './hooks/Wrapper';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Wrapper>
			<Login />
		</Wrapper>
	</React.StrictMode>
);
