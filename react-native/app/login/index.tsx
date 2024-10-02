import { Box, Image, Link, Text, VStack } from 'native-base';
import { TouchableOpacity } from 'react-native';

import { Button } from '@/components/Button';
import { FormControlTextInput as TextInput } from '@/components/FormControlTextInput';
import { Title } from '@/components/Title';
import { navigateToSignUp, navigateToTabs } from '@/navigation';

import Logo from '@/assets/images/logo.png';

export default function Login({ navigation }: { navigation: any }) {
	return (
		<VStack
			alignItems={'center'}
			backgroundColor={'white'}
			flex={1}
			justifyContent={'center'}
			paddingX={10}
		>
			<Image alt='Logo' marginBottom={60} source={Logo} />

			<Title>Faça login em sua conta</Title>

			<Box width={'100%'}>
				<TextInput
					keyboardType='email-address'
					label='Email'
					marginTop={5}
					placeholder='Insira seu endereço de email'
				/>

				<TextInput
					isPassword
					label='Senha'
					marginTop={5}
					placeholder='Insira sua senha'
				/>
			</Box>

			<Button marginTop={10} onPress={navigateToTabs(navigation)}>
				Entrar
			</Button>

			<Link href='https://www.alura.com.br' isExternal marginTop={2}>
				<Text color={'blue.600'} textDecorationLine={'underline'}>
					Esqueceu sua senha?
				</Text>
			</Link>

			<Box
				flexDirection={'row'}
				justifyContent={'center'}
				marginTop={8}
				width='100%'
			>
				<Text color={'gray.400'}>Ainda não tem cadastro? </Text>

				<TouchableOpacity onPress={navigateToSignUp(navigation)}>
					<Text color={'blue.500'} fontWeight={'bold'}>
						Faça seu cadastro!
					</Text>
				</TouchableOpacity>
			</Box>
		</VStack>
	);
}
