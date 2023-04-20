import React from 'react';
import {
	CenteredWrapper,
	ClienteWrapper,
	MappingCard,
	MappingCardWrapper,
	RoomTitle,
	RoomWrapper,
} from '../../../../../Generic/Styles';
import { useQueryClient } from 'react-query';
import { useTranslation } from 'react-i18next';
import EmptyRoom from '../EmptyRoom';
import RoomComponent from '../Room';
import BookedRoom from '../BookedRoom';

const Mapping = () => {
	const { t } = useTranslation();
	const queryClient = useQueryClient();
	const { data } = queryClient.getQueryData('accomodation/4');

	return (
		<CenteredWrapper>
			<MappingCard>
				<MappingCardWrapper>
					{data?.data?.map(room => (
						<RoomWrapper key={room?._id}>
							<RoomTitle>
								{room?.roomNumber} {t('empty_places.room')}
							</RoomTitle>
							<ClienteWrapper>
								{room?.cliente?.map(value =>
									!value.isBooked && !value.userID ? (
										<EmptyRoom key={value.clienteID} />
									) : value.userID ? (
										<RoomComponent key={value.clienteID} value={value} />
									) : (
										<BookedRoom key={value.clienteID} />
									)
								)}
							</ClienteWrapper>
						</RoomWrapper>
					))}
				</MappingCardWrapper>
			</MappingCard>
		</CenteredWrapper>
	);
};

export default Mapping;
