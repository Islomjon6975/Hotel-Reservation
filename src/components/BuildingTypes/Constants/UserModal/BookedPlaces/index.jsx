import React from 'react';
import { Button } from 'antd';
import { useDispatch } from 'react-redux';
import { BookedPlacesImage, Container, Title } from './style';
import { CenteredWrapper, ModalButtonsWrapper } from '../../../../../Generic/Styles';
import { setAddUserModalVisibility, setUserModalVisibility } from '../../../../../redux/modalSlice';

const BookedPlaces = () => {
	const dispatch = useDispatch();

	return (
		<Container>
			<CenteredWrapper>
				<BookedPlacesImage />
				<Title>There is no any booked places!</Title>
			</CenteredWrapper>

			<ModalButtonsWrapper>
				<Button type='default' onClick={() => dispatch(setUserModalVisibility())}>
					Cancel
				</Button>
				<Button type='primary' onClick={() => dispatch(setAddUserModalVisibility())}>
					Add
				</Button>
			</ModalButtonsWrapper>
		</Container>
	);
};

export default BookedPlaces;
