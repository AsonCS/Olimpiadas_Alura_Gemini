import { Text, View, TextInput } from 'react-native';

export default function Index() {
	return (
		<View
			style={{
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<TextInput textContentType='name' />
			<Text>Edit app/index.tsx to edit this screen.</Text>
		</View>
	);
}
