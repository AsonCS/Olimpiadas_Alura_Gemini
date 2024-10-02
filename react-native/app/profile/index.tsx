import { Avatar, Divider, ScrollView, Text, VStack } from 'native-base';

import { Title } from '@/components/Title';

export default function Profile() {
	return (
		<ScrollView flex={1}>
			<VStack alignItems={'center'} flex={1} paddingX={5}>
				<Title color={'blue.500'} marginTop={10}>
					Meu perfil
				</Title>

				<Avatar
					marginTop={10}
					size={'xl'}
					source={{
						uri: 'https://github.com/AsonCS.png',
					}}
				/>

				<Title color={'blue.500'} marginTop={20}>
					Informações pessoais
				</Title>
				<Title fontSize={'lg'} marginBottom={1}>
					Anderson Costa da Silva
				</Title>
				{['17/07/1997', 'Jandira - SP'].map((info, idx) => (
					<Text color={'gray.500'} key={idx}>
						{info}
					</Text>
				))}

				<Divider height={1} marginY={30} />

				<Title color={'blue.500'}>Histórico médico</Title>
				{['Bronquite', 'Sinusite'].map((info, idx) => (
					<Text color={'gray.500'} fontWeight={'bold'} key={idx}>
						- {info}
					</Text>
				))}
			</VStack>
		</ScrollView>
	);
}
