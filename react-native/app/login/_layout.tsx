import { NativeBaseProvider, StatusBar } from 'native-base';
import { Stack } from 'expo-router';

import { THEMES } from '@/themes/theme';

export default function RootLayout() {
	return (
		<NativeBaseProvider theme={THEMES}>
			<StatusBar backgroundColor={THEMES.colors.blue[900]} />
			<Stack>
				<Stack.Screen name='index' options={{ headerShown: false }} />
			</Stack>
		</NativeBaseProvider>
	);
}
