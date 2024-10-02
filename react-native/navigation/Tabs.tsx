import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
	BottomTabNavigationOptions,
	createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import Consults from '@/app/consults';
import Explore from '@/app/explore';
import Home from '@/app/home';
import Profile from '@/app/profile';

import { tabNames } from '.';

export interface Tab {
	component: (props: { navigation: any }) => React.JSX.Element;
	name: string;
	options: BottomTabNavigationOptions;
}

const TabNavigator = createBottomTabNavigator();

function icon(name: string) {
	return ({
		color,
		size,
	}: {
		focused: boolean;
		color: string;
		size: number;
	}) => <Ionicons color={color} name={name} size={size} />;
}

const tabs: Tab[] = [
	{
		component: Home,
		name: tabNames.main,
		options: {
			headerShown: false,
			tabBarIcon: icon('home'),
		},
	},
	{
		component: Consults,
		name: tabNames.consults,
		options: {
			headerShown: false,
			tabBarIcon: icon('calendar'),
		},
	},
	{
		component: Explore,
		name: tabNames.explore,
		options: {
			headerShown: false,
			tabBarIcon: icon('search'),
		},
	},
	{
		component: Profile,
		name: tabNames.profile,
		options: {
			headerShown: false,
			tabBarIcon: icon('person'),
		},
	},
];

export default function Tabs() {
	return (
		<React.Fragment>
			<TabNavigator.Navigator
				screenOptions={{
					tabBarActiveTintColor: '#339cff',
					tabBarInactiveTintColor: '#fff',
					tabBarStyle: {
						backgroundColor: '#002851',
						height: 70,
						paddingTop: 10,
					},
					tabBarLabelStyle: {
						paddingBottom: 10,
					},
				}}
				sceneContainerStyle={{
					backgroundColor: 'white',
				}}
			>
				{tabs.map((tab) => (
					<TabNavigator.Screen
						component={tab.component}
						key={tab.name}
						name={tab.name}
						options={tab.options}
					/>
				))}
			</TabNavigator.Navigator>
		</React.Fragment>
	);
}
