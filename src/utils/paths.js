import { lazy } from 'react';
import AllUsers from '../components/AllUsers';
import BuildingTypes from '../components/BuildingTypes';
import Cottages from '../components/BuildingTypes/Cottages';
import LuxuryRooms from '../components/BuildingTypes/LuxuryRooms';
import OrdinaryRooms from '../components/BuildingTypes/OrdinaryRooms';
import EndTime from '../components/EndTime';
import HalfTime from '../components/HalfTime';
import Reports from '../components/Reports';
import SecondBuilding from '../components/BuildingTypes/OrdinaryRooms/SecondBuilding';
import ThirdBuilding from '../components/BuildingTypes/OrdinaryRooms/ThirdBuilding';
import FourthBuilding from '../components/BuildingTypes/OrdinaryRooms/FourthBuilding';
import FifthBuilding from '../components/BuildingTypes/OrdinaryRooms/FifthBuilding';
import SixBuilding from '../components/BuildingTypes/OrdinaryRooms/SixthBuilding';
const Home = lazy(() => import('../components/Home'));

export const paths = [
	{
		id: 1,
		Component: Home,
		path: '/',
		hasChild: false,
	},
	{
		id: 2,
		Component: AllUsers,
		path: '/all-users',
		hasChild: false,
	},
	{
		id: 3,
		Component: HalfTime,
		path: '/half-time',
		hasChild: false,
	},
	{
		id: 4,
		Component: EndTime,
		path: '/end-time',
		hasChild: false,
	},
	{
		id: 5,
		Component: BuildingTypes,
		path: '/building-control',
		hasChild: true,
		children: [
			{
				id: 5.1,
				Component: OrdinaryRooms,
				path: 'ordinary-rooms',
				hasChild: true,
				children: [
					{
						id: '5-1-1',
						Component: SecondBuilding,
						path: '2',
						hasChild: false,
					},
					{
						id: '5-1-2',
						Component: FourthBuilding,
						path: '4',
						hasChild: false,
					},
					{
						id: '5-1-3',
						Component: SixBuilding,
						path: '6',
						hasChild: false,
					},
				],
			},
			{
				id: 5.2,
				Component: LuxuryRooms,
				path: 'luxury-rooms',
				hasChild: true,
				children: [
					{
						id: '5-2-1',
						Component: ThirdBuilding,
						path: '3',
						hasChild: false,
					},

					{
						id: '5-2-2',
						Component: FifthBuilding,
						path: '5',
						hasChild: false,
					},
				],
			},
			{
				id: 5.3,
				Component: Cottages,
				path: 'map/cottage',
				hasChild: false,
				children: [],
			},
		],
	},
	{
		id: 6,
		Component: Reports,
		path: '/report',
		hasChild: false,
	},
];
