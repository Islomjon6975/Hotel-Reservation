import React from 'react';
import {
	CenteredWrapper,
	ClienteWrapper,
	MappingCard,
	MappingCardWrapper,
	Room,
	RoomTitle,
	RoomWrapper,
} from '../../../../Generic/Styles';
import { useQuery, useQueryClient } from 'react-query';
import { useAxios } from '../../../../hooks/useAxios';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Mapping = () => {
	const { t } = useTranslation();
	const axios = useAxios();
	const queryClient = useQueryClient();
	const { data } = queryClient.getQueryData('accomodation/4');
	const [client_id, setClient_id] = useState(null);

	const getUser = useQuery(
		['getUser', client_id],
		() => {
			return axios({ url: `/accomodation/4/user?_id=${client_id}` });
		},
		{ refetchOnWindowFocus: false }
	);

	const roomClick = userID => {
		userID && setClient_id(userID);
	};

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
								{room?.cliente?.map(client => (
									<Room color='green' key={client?.clienteID} onClick={() => roomClick(client?.userID)}>
										{room.bookedCliente[0].bookedClienteList.length > 0 && 1}
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

export default Mapping;
