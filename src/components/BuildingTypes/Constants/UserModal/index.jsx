import { Segmented } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { setUserModalVisibility } from '../../../../redux/modalSlice';
import { useSegmented } from '../../../../Generic/SegmentedAPI';
import Observing from './Observing';
import BookedPlaces from './BookedPlaces';
import Edit from './Edit';
import { useState } from 'react';
import { ModalWrapper } from './style';
import { useTranslation } from 'react-i18next';

const UserModal = () => {
	const { t } = useTranslation();
	const { userModalVisibility } = useSelector(state => state.modal);
	const dispatch = useDispatch();
	const { userOptions } = useSegmented();
	const [userOption, setUserOption] = useState('Observing');

	return (
		<ModalWrapper
			open={userModalVisibility}
			onCancel={() => dispatch(setUserModalVisibility())}
			title={t('information_about_user.title')}
			footer={null}>
			<Segmented block options={userOptions()} onChange={e => setUserOption(e)} defaultValue='Observing' />
			{userOption === 'Observing' ? <Observing /> : userOption === 'Booked places' ? <BookedPlaces /> : <Edit />}
		</ModalWrapper>
	);
};

export default UserModal;
