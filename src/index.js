import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Wrapper from './hooks/Wrapper';
import './index.css';
import Root from './root';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	// <React.StrictMode>
	<Wrapper>
		<Root />
	</Wrapper>
	// </React.StrictMode>
);
