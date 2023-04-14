import React from 'react';
import { useQueryClient } from 'react-query';
import {
	CenteredWrapper,
	ClienteWrapper,
	FloorTitle,
	MappingCard,
	MappingCardWrapper,
	Room,
	RoomTitle,
	RoomWrapper,
} from '../../../../../Generic/Styles';
import { useTranslation } from 'react-i18next';

const Mapping2 = () => {
	const { t } = useTranslation();
	const queryClient = useQueryClient();
	const { data } = queryClient.getQueryData('accomodation/6-2');

	return (
		<CenteredWrapper>
			<MappingCard>
				<FloorTitle>2 {t('empty_places.floor')}</FloorTitle>
				<MappingCardWrapper>
					{data?.data?.map(room => (
						<RoomWrapper key={room?._id}>
							<RoomTitle>
								{room?.roomNumber} {t('empty_places.room')}
							</RoomTitle>
							<ClienteWrapper>
								{room?.cliente?.map(client => (
									<Room color='green' key={client?.clienteID}>
										{room.bookedCliente.length}
									</Room>
								))}
							</ClienteWrapper>
						</RoomWrapper>
					))}
				</MappingCardWrapper>
			</MappingCard>
		</CenteredWrapper>
	);
};

export default Mapping2;
