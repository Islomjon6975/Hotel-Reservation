import React from 'react';
import { Room } from '../../../../../Generic/Styles';
import TooltipAPI from '../../../../../Generic/Tooltip';

const BookedRoom = () => {
	return (
		<TooltipAPI title='Booked room' color={'blue'}>
			<Room color='processing'></Room>
		</TooltipAPI>
	);
};

export default BookedRoom;
