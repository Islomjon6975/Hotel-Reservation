import { Button, Modal, Segmented, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { setUserModalVisibility } from '../../../../redux/modalSlice';
import { useSegmented } from '../../../../Generic/SegmentedAPI';
import Observing from './Observing';
import BookedPlaces from './BookedPlaces';
import Edit from './Edit';
import { useState } from 'react';
import { ModalWrapper } from './style';

const UserModal = () => {
	const { userModalVisibility } = useSelector(state => state.modal);
	const dispatch = useDispatch();
	const { userOptions } = useSegmented();
	const [userOption, setUserOption] = useState('Observing');

	return (
		<ModalWrapper
			open={userModalVisibility}
			onCancel={() => dispatch(setUserModalVisibility())}
			title={'Information about user'}
			footer={null}
			okButtonProps={{ background: 'red' }}>
			<Segmented block options={userOptions()} onChange={e => setUserOption(e)} defaultValue='Observing' />
			{userOption === 'Observing' ? <Observing /> : userOption === 'Booked places' ? <BookedPlaces /> : <Edit />}
		</ModalWrapper>
	);
};

export default UserModal;
