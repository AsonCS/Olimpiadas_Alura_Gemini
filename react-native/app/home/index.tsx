import { Divider, Image, ScrollView, Text, View, VStack } from 'native-base';

import { CardSearch } from '@/components/CardSearch';
import { Title } from '@/components/Title';

import Logo from '@/assets/images/logo.png';

export default function Home() {
	return (
		<ScrollView flex={1}>
			<VStack alignItems={'center'} flex={1} paddingY={10}>
				<View paddingX={5} width={'100vw'}>
					<Image alignSelf={'start'} alt='Logo' source={Logo} />

					<Title
						alignSelf={'start'}
						color={'blue.500'}
						marginTop={10}
					>
						Boas-vindas!
					</Title>

					<CardSearch marginTop={10} />

					<Title color={'blue.800'} marginTop={5}>
						Depoimentos
					</Title>
				</View>

				<Testimony from='Júlio, 40 anos, São Paulo/SP.'>
					At vero eos et accusamus et iusto odio dignissimos ducimus
					qui blanditiis praesentium voluptatum deleniti atque
					corrupti quos dolores et quas molestias excepturi sint
					occaecati cupiditate non provident, similique sunt in culpa
					qui officia deserunt mollitia animi, id est laborum et
					dolorum fuga. Et harum quidem rerum facilis est et expedita
					distinctio.
				</Testimony>

				<Testimony from='Júlio, 40 anos, São Paulo/SP.'>
					Nam libero tempore, cum soluta nobis est eligendi optio
					cumque nihil impedit quo minus id quod maxime placeat facere
					possimus, omnis voluptas assumenda est, omnis dolor
					repellendus.
				</Testimony>

				<Testimony from='Júlio, 40 anos, São Paulo/SP.'>
					Temporibus autem quibusdam et aut officiis debitis aut rerum
					necessitatibus saepe eveniet ut et voluptates repudiandae
					sint et molestiae non recusandae. Itaque earum rerum hic
					tenetur a sapiente delectus, ut aut reiciendis voluptatibus
					maiores alias consequatur aut perferendis doloribus
					asperiores.
				</Testimony>
			</VStack>
		</ScrollView>
	);
}

function Testimony({ children, from }: { children: string; from: string }) {
	return (
		<View marginTop={5}>
			<Text color={'gray.500'} marginX={5}>
				{children}
			</Text>
			<Text
				color={'gray.500'}
				fontWeight={'bold'}
				textAlign={'center'}
				marginTop={5}
				marginX={5}
			>
				{from}
			</Text>

			<Divider marginTop={5} />
		</View>
	);
}
