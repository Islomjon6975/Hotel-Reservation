import { useRef, useState } from 'react';
import { useErrorNotifier } from '../../Generic/NotificationAPI';
import { useAxios } from '../../hooks/useAxios';
import { LoadingOutlined } from '@ant-design/icons';
import { Wrapper } from './style';
import { useSignIn } from 'react-auth-kit';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Login = () => {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const axios = useAxios();
	const signIn = useSignIn();
	const [warningAnimation, setWarningAnimation] = useState(false);
	const [loading, setLoading] = useState(false);
	const [formattedPhoneNumber, setFormattedPhoneNumber] = useState('');
	const numberRef = useRef();
	const passwordRef = useRef();
	const { errorNotifier } = useErrorNotifier();

	console.log();

	const playAnimation = () => {
		setWarningAnimation(true);
		setTimeout(() => {
			setWarningAnimation(false);
		}, 1000);
	};

	const onKeyDetect = e => {
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

		const { token, user } = response.data.data;

		localStorage.setItem('token', token);

		signIn({
			token: token,
			expiresIn: 3600,
			tokenType: 'Bearer',
			authState: user,
		});
		navigate('/');
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
				<Wrapper.Title>{t('login_page.login_page_title')}</Wrapper.Title>
				<Wrapper.Description>{t('login_page.login_page_description')}</Wrapper.Description>
				<Wrapper.Input
					ref={numberRef}
					addonBefore='+998'
					placeholder='(99) 111-11-11'
					bordered={false}
					type='text'
					onChange={phoneNumberFormatter}
					value={formattedPhoneNumber}
				/>
				<Wrapper.PasswordInput
					onKeyDown={onKeyDetect}
					ref={passwordRef}
					placeholder={t('login_page.login_page_password_placeholder')}
				/>
				<Wrapper.Button warningAnimation={warningAnimation} onClick={onKeyDetect}>
					{loading ? <LoadingOutlined /> : t('login_page.login_page_button')}
				</Wrapper.Button>
			</Wrapper.Container>
		</Wrapper>
	);
};

export default Login;
