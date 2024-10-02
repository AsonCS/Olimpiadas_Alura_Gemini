import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
	createNativeStackNavigator,
	NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

import Login from '@/app/login';
import SignUp from '@/app/login/SignUp';
import Tabs from './Tabs';

import { names } from '.';

export interface Route {
	component: (props: { navigation: any }) => React.JSX.Element;
	name: string;
	options: NativeStackNavigationOptions;
}

const Tab = createNativeStackNavigator();

const routes: Route[] = [
	{
		component: Login,
		name: names.login,
		options: {
			headerShown: false,
		},
	},
	{
		component: SignUp,
		name: names.signUp,
		options: {
			headerShown: false,
		},
	},
	{
		component: Tabs,
		name: names.tabs,
		options: {
			headerShown: false,
		},
	},
];

export default function Routes() {
	return (
		<NavigationContainer independent>
			<Tab.Navigator>
				{routes.map((route) => {
					return (
						<Tab.Screen
							component={route.component}
							key={route.name}
							name={route.name}
							options={route.options}
						/>
					);
				})}
			</Tab.Navigator>
		</NavigationContainer>
	);
}
