import { Box, Image, Link, Text, VStack } from 'native-base';
import { TouchableOpacity } from 'react-native';

import { Button } from '@/components/Button';
import { FormControlTextInput as TextInput } from '@/components/FormControlTextInput';
import { Title } from '@/components/Title';

import Logo from '@/assets/images/favicon.png';

export default function Index() {
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

			<Box width={'100%'}>
				<TextInput
					id='email'
					keyboardType='email-address'
					label='Email'
					placeholder='Insira seu endereço de email'
				/>

				<TextInput
					id='password'
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
