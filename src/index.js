import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from './root';
import Wrapper from './hooks/Wrapper';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	// <React.StrictMode>
	<Suspense fallback='loading...'>
		<Wrapper>
			<Root />
		</Wrapper>
	</Suspense>
	// </React.StrictMode>
);
