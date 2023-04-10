import React, { useRef, useState } from 'react';
import { Button, Input } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import { UsersTable } from './style';
import { useTranslation } from 'react-i18next';

const Table = ({ data }) => {
	const { t } = useTranslation();
	const [searchText, setSearchText] = useState('');
	const [searchedColumn, setSearchedColumn] = useState('');
	const searchInput = useRef(null);
	const handleSearch = (selectedKeys, confirm, dataIndex) => {
		confirm();
		setSearchText(selectedKeys[0]);
		setSearchedColumn(dataIndex);
	};

	const getColumnSearchProps = dataIndex => ({
		filterDropdown: ({ setSelectedKeys, selectedKeys, confirm }) => (
			<div onKeyDown={e => e.stopPropagation()}>
				<Input
					ref={searchInput}
					placeholder={`Search ${dataIndex}`}
					value={selectedKeys[0]}
					onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
					onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
					style={{
						marginBottom: 8,
						display: 'block',
					}}
				/>
			</div>
		),
		filterIcon: filtered => (
			<SearchOutlined
				style={{
					color: filtered ? '#1890ff' : undefined,
				}}
			/>
		),
		onFilter: (value, record) => record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
		onFilterDropdownOpenChange: visible => {
			if (visible) {
				setTimeout(() => searchInput.current?.select(), 100);
			}
		},
		render: text =>
			searchedColumn === dataIndex ? (
				<Highlighter
					highlightStyle={{
						backgroundColor: '#ffc069',
						padding: 0,
					}}
					searchWords={[searchText]}
					autoEscape
					textToHighlight={text ? text.toString() : ''}
				/>
			) : (
				text
			),
	});

	const columns = [
		{
			title: t('users_table.users_table_full_name'),
			dataIndex: 'fullName',
			key: 'fullName',
			...getColumnSearchProps('fullName'),
		},
		{
			title: t('users_table.users_table_phone_number'),
			dataIndex: 'phoneNumber',
			key: 'phoneNumber',
			...getColumnSearchProps('phoneNumber'),
		},
		{
			title: t('users_table.users_table_arrived_date'),
			dataIndex: 'arrivalDate',
			key: 'arrivalDate',
		},
		{
			title: t('users_table.users_table_end_date'),
			dataIndex: 'endDate',
			key: 'endDate',
		},
		{
			title: t('users_table.users_table_left_day'),
			dataIndex: 'leftDay',
			key: 'leftDay',
		},
		{
			title: t('users_table.users_table_total_pay'),
			dataIndex: 'total',
			key: 'total',
		},
		{
			title: t('users_table.users_table_pay_by_cash'),
			dataIndex: 'paidByCash',
			key: 'paidByCash',
		},
		{
			title: t('users_table.users_table_pay_by_card'),
			dataIndex: 'paidByPlasticCard',
			key: 'paidByPlasticCard',
		},
		{
			title: t('users_table.users_table_pay_difference'),
			dataIndex: 'payDifference',
			key: 'payDifference',
		},
		{
			title: t('users_table.users_table_pay_building'),
			dataIndex: 'buildingNumber',
			key: 'buildingNumber',
		},
		{
			title: t('users_table.users_table_room'),
			dataIndex: 'roomNumber',
			key: 'roomNumber',
		},
		{
			title: t('users_table.users_table_action'),
			dataIndex: 'action',
			key: 'action',
			render: () => <Button type='primary'>{t('users_table.users_table_go_to')}</Button>,
		},
	];

	return <UsersTable columns={columns} dataSource={data} />;
};

export default Table;
