import { Link, NativeBaseProvider, StatusBar, Text, View } from 'native-base';
import React from 'react';

import { THEMES } from '@/themes/theme';
import { TextInput } from 'react-native';
import { Redirect } from 'expo-router';

export default function Index() {
	return (
		<NativeBaseProvider theme={THEMES}>
			<StatusBar backgroundColor={THEMES.colors.blue[900]} />
			<View
				style={{
					backgroundColor: 'white',
					alignItems: 'center',
					flex: 1,
					gap: 20,
					justifyContent: 'center',
				}}
			>
				<TextInput textContentType='name' />
				<Text>Edit app/index.tsx to edit this screen.</Text>
				<Link href='/login'>Login</Link>
				<Link href='/signup'>Cadastro</Link>
				<Redirect href={'/signup'} />
			</View>
		</NativeBaseProvider>
	);
}
