import { CenteredWrapper } from '../../../../Generic/Styles';
import ArrowBack from '../../../../Generic/ArrowBack';
import { useQuery } from 'react-query';
import { useAxios } from '../../../../hooks/useAxios';
import IsLoading from '../../../../Generic/IsLoading';
import Mapping from './Mapping';
import { useTranslation } from 'react-i18next';
import UserModal from '../../Constants/UserModal';
import MoveUserModal from '../../Constants/MoveUserModal';
import AddUserModal from '../../Constants/AddUserModal';

const FourthBuilding = () => {
	const { t } = useTranslation();
	const axios = useAxios();
	const { isLoading } = useQuery(
		'accomodation/4',
		() => {
			return axios({ url: '/accomodation/4/room' });
		},
		{
			refetchOnWindowFocus: false,
			keepPreviousData: true,
		}
	);

	// console.log(data);

	return (
		<CenteredWrapper>
			<ArrowBack translation={`4 ${t('building_control_page.building_control_building')}`} />
			<UserModal />
			<MoveUserModal />
			<AddUserModal />

			{isLoading ? <IsLoading /> : <Mapping />}
		</CenteredWrapper>
	);
};

export default FourthBuilding;
