import React from 'react';
import { Room } from '../../../../../Generic/Styles';
import { Modal } from 'antd';
import TooltipAPI from '../../../../../Generic/Tooltip';
const { confirm } = Modal;

const EmptyRoom = () => {
	const confirmModal = () => {
		return confirm({
			title: 'Empty place',
			content: 'This place is empty. Click the «Add» button to add a new user. Or click to the «Book» button to book this place.',
			okText: 'Add',
			cancelText: 'Book',
			closable: true,
		});
	};
	return (
		<TooltipAPI title='Empty room' color='green'>
			<Room color='green' onClick={confirmModal} />
		</TooltipAPI>
	);
};

export default EmptyRoom;
