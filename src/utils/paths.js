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
		children: [],
	},
	{
		id: 2,
		Component: AllUsers,
		path: '/all-users',
		hasChild: false,
		children: [],
	},
	{
		id: 3,
		Component: HalfTime,
		path: '/half-time',
		hasChild: false,
		children: [],
	},
	{
		id: 4,
		Component: EndTime,
		path: '/end-time',
		hasChild: false,
		children: [],
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
				hasChild: false,
				children: [],
			},
			{
				id: 5.2,
				Component: LuxuryRooms,
				path: 'luxury-rooms',
				hasChild: false,
				children: [],
			},
			{
				id: 5.3,
				Component: Cottages,
				path: 'map/cottage',
				hasChild: false,
				children: [],
			},
			{
				id: 5.4,
				Component: SecondBuilding,
				path: 'map/ordinary-rooms/2',
				hasChild: false,
				children: [],
			},
			{
				id: 5.5,
				Component: ThirdBuilding,
				path: 'map/luxury-rooms/3',
				hasChild: false,
				children: [],
			},
			{
				id: 5.6,
				Component: FourthBuilding,
				path: 'map/ordinary-rooms/4',
				hasChild: false,
				children: [],
			},
			{
				id: 5.7,
				Component: FifthBuilding,
				path: 'map/luxury-rooms/5',
				hasChild: false,
				children: [],
			},
			{
				id: 5.8,
				Component: SixBuilding,
				path: 'map/ordinary-rooms/6',
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
		children: [],
	},
];
