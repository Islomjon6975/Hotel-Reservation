import { useRef, useState } from 'react';
import { errorNotifier } from '../../Generic/NotificationAPI';
import { useAxios } from '../../hooks/useAxios';
import { LoadingOutlined } from '@ant-design/icons';
import { Wrapper } from './style';
import ReloadPage from '../../hooks/ReloadPage';

const Login = () => {
	const axios = useAxios();
	const [warningAnimation, setWarningAnimation] = useState(false);
	const [loading, setLoading] = useState(false);
	const [formattedPhoneNumber, setFormattedPhoneNumber] = useState('');
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
		var reg = new RegExp('^[0-9]$');
		const number = numberRef.current.input.value
			.split('')
			.filter(n => reg.test(n))
			.join('');
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

		if (response?.response?.status >= 400) return errorNotifier({ errorStatus: response?.response?.status });

		const { token } = response.data.data;

		localStorage.setItem('token', token);
		ReloadPage();
	};

	const formatPhoneNumber = value => {
		if (!value) return value;
		const phoneNumber = value.replace(/[^\d]/g, '');
		const phoneNumberLength = phoneNumber.length;
		if (phoneNumberLength < 3) return phoneNumber;
		if (phoneNumberLength < 6) {
			return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2)}`;
		}
		if (phoneNumberLength < 8) {
			return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2, 5)}-${phoneNumber.slice(5, 7)}`;
		}
		return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2, 5)}-${phoneNumber.slice(5, 7)}-${phoneNumber.slice(7, 9)}`;
	};

	const phoneNumberFormatter = e => {
		setFormattedPhoneNumber(formatPhoneNumber(e.target.value));
	};

	return (
		<Wrapper>
			<Wrapper.Container>
				<Wrapper.Title>Yana bir bor salom!</Wrapper.Title>
				<Wrapper.Description>Biz har kuni kechagidan ko'ra yaxshiroq xizmat ko'rsatamiz</Wrapper.Description>
				<Wrapper.Input
					ref={numberRef}
					addonBefore='+998'
					placeholder='(99) 111-11-11'
					bordered={false}
					type='text'
					onChange={phoneNumberFormatter}
					value={formattedPhoneNumber}
				/>
				<Wrapper.PasswordInput onKeyDown={onKeyDetect} ref={passwordRef} placeholder='Your Password' />
				<Wrapper.Button warningAnimation={warningAnimation} onClick={onKeyDetect}>
					{loading ? <LoadingOutlined /> : 'Login'}
				</Wrapper.Button>
			</Wrapper.Container>
		</Wrapper>
	);
};

export default Login;
