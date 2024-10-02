import React from 'react';
import { NativeBaseProvider, StatusBar, View } from 'native-base';

import Routes from '@/navigation/Routes';
import { THEMES } from '@/themes/theme';

export default function App() {
	return (
		<NativeBaseProvider theme={THEMES}>
			<StatusBar backgroundColor={THEMES.colors.blue[900]} />
			<Routes />
		</NativeBaseProvider>
	);
}
