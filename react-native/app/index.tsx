import {
	Box,
	Image,
	Link,
	NativeBaseProvider,
	StatusBar,
	Text,
	VStack,
} from 'native-base';
import { TouchableOpacity } from 'react-native';

import { Button } from '@/components/Button';
import { FormControlTextInput as TextInput } from '@/components/FormControlTextInput';
import { Title } from '@/components/Title';
import { THEMES } from '@/themes/theme';

import Logo from '../assets/images/favicon.png';

export default function Index() {
	return (
		<NativeBaseProvider theme={THEMES}>
			<StatusBar backgroundColor={THEMES.colors.blue[900]} />
			{/*
			<View
				style={{
					flex: 1,
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<TextInput textContentType='name' />
				<Text
					style={{
						color: '#fff',
					}}
				>
					Edit app/index.tsx to edit this screen.........
				</Text>
			</View>
			*/}
			<Screen />
		</NativeBaseProvider>
	);
}

function Screen() {
	return (
		<VStack
			alignItems='center'
			backgroundColor='white'
			flex={1}
			justifyContent={'center'}
			p={5}
		>
			<Image source={Logo} alt='Logo' />

			<Title>Faça login em sua conta</Title>

			<Box>
				<TextInput
					keyboardType='email-address'
					label='Email'
					placeholder='Insira seu endereço de email'
				/>

				<TextInput
					isPassword
					label='Senha'
					placeholder='Insira sua senha'
				/>
			</Box>

			<Button>Entrar</Button>

			<Link href='https://www.alura.com.br' isExternal marginTop={2}>
				Esqueceu sua senha
			</Link>

			<Box
				flexDirection={'row'}
				justifyContent={'center'}
				marginTop={8}
				width='100%'
			>
				<Text>Ainda não tem cadastro? </Text>

				<TouchableOpacity>
					<Text color={'blue.500'}>Faça seu cadastro!</Text>
				</TouchableOpacity>
			</Box>
		</VStack>
	);
}
