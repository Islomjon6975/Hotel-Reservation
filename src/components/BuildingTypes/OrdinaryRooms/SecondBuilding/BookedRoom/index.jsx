import React from 'react';
import { Room } from '../../../../../Generic/Styles';
import TooltipAPI from '../../../../../Generic/Tooltip';
import { useTranslation } from 'react-i18next';

const BookedRoom = () => {
	const { t } = useTranslation();
	return (
		<TooltipAPI title={t('tooltip.booked_room')} color={'blue'}>
			<Room color='processing'></Room>
		</TooltipAPI>
	);
};

export default BookedRoom;
