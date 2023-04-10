import { Table } from 'antd';
import styled from 'styled-components';

export const UsersTable = styled(Table)`
	/* padding: 0px 10%; */

	.ant-table {
		overflow-x: auto;
		/* width */
		::-webkit-scrollbar {
			height: 3px;
		}

		/* Track */
		::-webkit-scrollbar-track {
			border-radius: 5px;
		}

		/* Handle */
		::-webkit-scrollbar-thumb {
			background: #c0c0c0;
			border-radius: 10px;
		}

		th,
		td {
			width: fit-content !important;
		}
	}

	table {
		width: 1600px;
		min-width: 100%;
		table-layout: auto;
	}
`;
