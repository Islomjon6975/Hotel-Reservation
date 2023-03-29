import { useRef, useState } from 'react';
import { errorNotifier } from '../../Generic/NotificationAPI';
import { useAxios } from '../../hooks/useAxios';
import { LoadingOutlined } from '@ant-design/icons';
import { Wrapper } from './style';

const Login = () => {
	const axios = useAxios();
	const [warningAnimation, setWarningAnimation] = useState(false);
	const [loading, setLoading] = useState(false);
	const numberRef = useRef();
	const passwordRef = useRef();

	const playAnimation = () => {
		setWarningAnimation(true);
		setTimeout(() => {
			setWarningAnimation(false);
		}, 1000);
	};

	const onKeyDetect = e => {
		console.log(e);
		if (e.key === 'Enter' || e.type === 'click') return onAuth();
	};

	const onAuth = async () => {
		if (loading) return;
		const number = numberRef.current.input.value;
		const password = passwordRef.current.input.value;

		if (!password || !number) {
			playAnimation();
			errorNotifier({ errorStatus: 'notFillingError' });
			return;
		}

		setLoading(true);

		const response = await axios({
			url: `/user/sign-in`,
			method: 'POST',
			body: {
				password: password,
				phoneNumber: '+998' + number,
			},
		});

		setLoading(false);

		if (response?.response.status >= 400) return errorNotifier({ errorStatus: response?.response.status });

		const { token } = response.data.data;

		localStorage.setItem('token', token);
	};

	return (
		<Wrapper>
			<Wrapper.Container>
				<Wrapper.Title>Yana bir bor salom!</Wrapper.Title>
				<Wrapper.Description>Biz har kuni kechagidan ko'ra yaxshiroq xizmat ko'rsatamiz</Wrapper.Description>
				<Wrapper.Input ref={numberRef} addonBefore='+998' placeholder='99 111 11 11' bordered={false} type='number' />
				<Wrapper.PasswordInput onKeyDown={onKeyDetect} ref={passwordRef} placeholder='Your Password' />
				<Wrapper.Button warningAnimation={warningAnimation} onClick={onKeyDetect}>
					{loading ? <LoadingOutlined /> : 'Login'}
				</Wrapper.Button>
			</Wrapper.Container>
		</Wrapper>
	);
};

export default Login;
