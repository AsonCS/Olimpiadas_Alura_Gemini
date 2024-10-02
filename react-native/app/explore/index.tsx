import { Divider, ScrollView, VStack } from 'native-base';

import { CardConsult } from '@/components/CardConsult';
import { Title } from '@/components/Title';
import { Button } from '@/components/Button';
import { CardSearch } from '@/components/CardSearch';

export default function Explore() {
	const consults = [
		{
			hole: 'Cardiologista',
			name: 'Dr. André Cunha',
		},
		{
			hole: 'Zoista',
			name: 'Dr. Son',
		},
		{
			hole: 'Otorrinolaringologista',
			name: 'Dr. Paulo Matos',
		},
		{
			hole: 'Test',
			name: 'Dr. Test',
		},
	];

	return (
		<ScrollView padding={5} paddingBottom={20}>
			<CardSearch />

			<Title color={'blue.500'}>Resultado da busca</Title>

			{consults.map((consult, idx) => (
				<CardConsult key={idx} marginTop={5} {...consult} />
			))}
		</ScrollView>
	);
}
