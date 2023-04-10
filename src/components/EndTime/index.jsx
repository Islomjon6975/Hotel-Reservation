import React, { useState } from 'react';
import { Wrapper } from './style';
import { CenteredWrapper } from '../../Generic/Styles';
import ArrowBack from '../../Generic/ArrowBack';
import { useQuery } from 'react-query';
import IsLoading from '../../Generic/IsLoading';
import Table from '../../Generic/Table';

const { REACT_APP_BASE_URL: url } = process.env;

const EndTime = () => {
	const [users, setUsers] = useState([]);

	const { isLoading } = useQuery(
		'getAllUsers',
		() => {
			return fetch(`${url}/users/half-time`, {
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`,
				},
			}).then(res => res.json());
		},
		{
			onSuccess: res => {
				// console.log(res?.data, 'res users');
				setUsers(res?.data || []);
				// return res?.data || [];
			},
			refetchOnWindowFocus: false,
			keepPreviousData: true,
		}
	);
	return (
		<Wrapper>
			<CenteredWrapper>
				<ArrowBack translation={'home_page.home_up_users_section'} />
				{isLoading ? <IsLoading /> : <Table data={users} />}
			</CenteredWrapper>
		</Wrapper>
	);
};

export default EndTime;
