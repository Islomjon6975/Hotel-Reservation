import { Button, Modal, Segmented, Select, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { setMoveUserModalVisibility } from '../../../../redux/modalSlice';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { useSegmented } from '../../../../Generic/SegmentedAPI';
import { CenteredWrapper, ClienteWrapper, MappingCardWrapper, RoomTitle, RoomWrapper } from '../../../../Generic/Styles';
import { useQuery } from 'react-query';
import RoomComponent from './Room';
import EmptyRoom from './EmptyRoom';
import BookedRoom from './BookedRoom';
import { useAxios } from '../../../../hooks/useAxios';

const MoveUserModal = () => {
	const { t } = useTranslation();
	const dispatch = useDispatch();
	const { moveUserOptions } = useSegmented();
	const [selectedBuilding, setSelectedBuilding] = useState(2);
	const [selectRoom, setSelectRoom] = useState(1);
	const [selectFloor, setSelectFloor] = useState(1);
	const { moveUserModalVisibility } = useSelector(state => state.modal);
	const axios = useAxios();

	const handleCancel = () => {
		dispatch(setMoveUserModalVisibility());
	};

	const handleChange = value => {
		setSelectRoom(value);
	};

	const handleBuilding = value => {
		setSelectedBuilding(value);
		handleMove(value);
	};

	const handleFloor = value => {
		setSelectFloor(value);
	};

	const { isLoading, data } = useQuery(
		[`accomodationMove`, selectedBuilding],
		() => {
			return axios({
				url: `/accomodation/${selectedBuilding}${selectedBuilding === 5 || selectedBuilding === 6 ? `-${selectFloor}` : ''}/room`,
			});
		},
		{
			refetchOnWindowFocus: false,
			keepPreviousData: true,
		}
	);

	const filtered = () => !isLoading && data?.data?.data?.filter(room => room.roomNumber === +selectRoom)[0];
	const roomsCountHandle = () =>
		!isLoading &&
		data?.data?.data?.map(value => {
			console.log(value, 'roomnumber');
			return {
				value: value?.roomNumber,
				label: `${value?.roomNumber} ${t('information_about_user.observing_user.move_user.room')}`,
			};
		});

	const floorCount = [
		{
			value: 1,
			label: `${1} floor`,
		},
		{
			value: 2,
			label: `${2} floor`,
		},
	];

	function handleMove(building) {
		switch (building) {
			case 2: {
				setSelectRoom(1);
				setSelectFloor(1);
				filtered();
				roomsCountHandle();
				return;
			}
			case 3: {
				setSelectRoom(1);
				setSelectFloor(1);
				filtered();
				roomsCountHandle();
				return;
			}
			case 4: {
				setSelectRoom(1);
				setSelectFloor(1);
				filtered();
				roomsCountHandle();
				return;
			}
			case 5: {
				setSelectRoom(1);
				setSelectFloor(1);
				filtered();
				roomsCountHandle();
				return;
			}
			case 6: {
				setSelectRoom(101);
				setSelectFloor(1);
				filtered();
				roomsCountHandle();
				return;
			}

			default:
				if (selectedBuilding === 5 && selectFloor === 1) {
					setSelectRoom(1);
				} else if (selectedBuilding === 5 && selectFloor === 2) {
					setSelectRoom(8);
				}
				return;
		}
	}

	return (
		<Modal
			title={t('modal.modal_move')}
			open={moveUserModalVisibility}
			onCancel={handleCancel}
			cancelText={t('modal.modal_cancel')}
			okButtonProps={{ display: 'none' }}
			footer={<Button danger>{t('modal.modal_cancel')}</Button>}>
			<Segmented
				style={{ marginBottom: '20px' }}
				size='large'
				block
				options={moveUserOptions()}
				defaultValue={selectedBuilding}
				onChange={handleBuilding}
			/>

			<CenteredWrapper>
				<Space direction='vertical' size={20}>
					{(selectedBuilding === 5 || selectedBuilding === 6) && (
						<CenteredWrapper>
							{t('information_about_user.observing_user.move_user.select_floor')}:
							<Select
								size='middle'
								value={`${selectFloor} floor`}
								style={{
									width: 'fit-content',
								}}
								onChange={handleFloor}
								options={floorCount}
							/>
						</CenteredWrapper>
					)}
					<CenteredWrapper>
						{t('information_about_user.observing_user.move_user.select_room')}:
						<Select
							size='middle'
							value={`${selectRoom} ${t('information_about_user.observing_user.move_user.room')}`}
							style={{
								width: 'fit-content',
							}}
							onChange={handleChange}
							options={roomsCountHandle()}
						/>
					</CenteredWrapper>
					<CenteredWrapper>
						{t('information_about_user.observing_user.move_user.select_position')}:
						<MappingCardWrapper>
							<RoomWrapper>
								<RoomTitle>
									{selectRoom} {t('empty_places.room')}
								</RoomTitle>
								<ClienteWrapper>
									{!isLoading &&
										filtered()?.cliente.length &&
										filtered()?.cliente?.map(value =>
											!value?.isBooked && !value?.userID ? (
												<EmptyRoom key={value?.clienteID} />
											) : value?.userID ? (
												<RoomComponent key={value?.clienteID} userID={value?.userID} selectedBuilding={selectedBuilding} />
											) : (
												<BookedRoom key={value?.clienteID} />
											)
										)}
								</ClienteWrapper>
							</RoomWrapper>
						</MappingCardWrapper>
					</CenteredWrapper>
				</Space>
			</CenteredWrapper>
		</Modal>
	);
};

export default MoveUserModal;
