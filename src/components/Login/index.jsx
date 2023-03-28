import { notification } from 'antd';
import axios from 'axios';
import React, { useRef, useState } from 'react';
import { Wrapper } from './style';

const Login = () => {
	const [warningAnimation, setWarningAnimation] = useState(false);
	const numberRef = useRef();
	const passwordRef = useRef();

	const playAnimation = () => {
		setWarningAnimation(true);
		setTimeout(() => {
			setWarningAnimation(false);
		}, 1000);
	};

	const onAuth = async () => {
		const number = numberRef.current.input.value;
		const password = passwordRef.current.input.value;

		try {
			const response = await axios({
				url: `${process.env.REACT_APP_BASE_URL}/user/sign-in`,
				method: 'POST',
				data: {
					password: password,
					phoneNumber: '+998' + number,
				},
			});

			if (!response) throw new Error();
			localStorage.setItem('token', response.data.data.token);
			notification.success({
				message: 'Successfully logged in',
			});
		} catch (error) {
			if (!error?.response) {
				notification.error({
					message: 'No Server Response',
				});
			} else if (error.response?.status === 400) {
				playAnimation();
				notification.error({
					message: 'Please fill all fields',
				});
			} else if (error.response?.status === 401) {
				notification.error({
					message: 'Unauthorized',
				});
			} else {
				notification.error({
					message: 'Login failed',
				});
			}
		}
	};

	return (
		<Wrapper>
			<Wrapper.Container>
				<Wrapper.Title>Yana bir bor salom!</Wrapper.Title>
				<Wrapper.Description>Biz har kuni kechagidan ko'ra yaxshiroq xizmat ko'rsatamiz</Wrapper.Description>
				<Wrapper.Input ref={numberRef} addonBefore='+998' placeholder='99 111 11 11' bordered={false} type='number' />
				<Wrapper.PasswordInput ref={passwordRef} placeholder='Your Password' />
				<Wrapper.Button warningAnimation={warningAnimation} onClick={onAuth}>
					Login
				</Wrapper.Button>
			</Wrapper.Container>
		</Wrapper>
	);
};

export default Login;
