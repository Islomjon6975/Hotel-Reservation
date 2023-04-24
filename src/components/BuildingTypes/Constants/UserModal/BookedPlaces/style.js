import styled from 'styled-components';
import { ReactComponent as bookedImg } from '../../../../../assets/icons/no_booked_places.svg';
export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	padding-top: 48px;
	padding-bottom: 10px;
	width: 100%;
	height: 100%;
	min-height: 650px;
`;

export const BookedPlacesImage = styled(bookedImg)`
	margin-bottom: 20px;
`;

export const Title = styled.div``;
