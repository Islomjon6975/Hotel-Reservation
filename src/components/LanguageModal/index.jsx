import { useState } from 'react';
import { ModalContainer } from './style';
import { CenteredWrapper } from '../../Generic/Styles';
import { Segmented } from 'antd';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { setLangModalVisibility } from '../../redux/modalSlice';
import { useSegmented } from '../../Generic/SegmentedAPI';
import i18next from 'i18next';

const LanguageModal = () => {
	const { t } = useTranslation();
	const dispatch = useDispatch();
	const { langModalVisibility } = useSelector(state => state.modal);
	const mediaQuery = useMediaQuery('(max-width: 884px)');
	const [confirmLoading, setConfirmLoading] = useState(false);
	const [localLang, setLocalLang] = useState(localStorage.getItem('locale'));
	const { localeOptions } = useSegmented();

	const handleOk = () => {
		setConfirmLoading(true);
		setTimeout(() => {
			dispatch(setLangModalVisibility());
			i18next.changeLanguage(localLang);
			setConfirmLoading(false);
		}, 1000);
	};

	return (
		<ModalContainer
			width={416}
			title={t('home_page.home_locale_modal_title')}
			open={langModalVisibility}
			onOk={handleOk}
			okText={t('modal.modal_change')}
			cancelText={t('modal.modal_cancel')}
			confirmLoading={confirmLoading}
			onCancel={() => dispatch(setLangModalVisibility())}>
			<CenteredWrapper>
				<Segmented
					size={mediaQuery ? 'small' : 'large'}
					defaultValue={localStorage.getItem('locale')}
					onChange={e => setLocalLang(e)}
					options={localeOptions()}
				/>
			</CenteredWrapper>
		</ModalContainer>
	);
};

export default LanguageModal;
