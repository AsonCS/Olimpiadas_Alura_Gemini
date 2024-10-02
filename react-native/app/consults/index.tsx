import { Divider, ScrollView } from 'native-base';

import { CardConsult } from '@/components/CardConsult';
import { Title } from '@/components/Title';
import { Button } from '@/components/Button';

export default function Consults() {
	const nextConsults = [
		{
			date: '11/11/1111',
			hole: 'Cardiologista',
			name: 'Dr. André Cunha',
		},
		{
			date: '22/22/2222',
			hole: 'Zoista',
			name: 'Dr. Son',
		},
		{
			date: '11/11/2023',
			hole: 'Otorrinolaringologista',
			name: 'Dr. Paulo Matos',
		},
		{
			date: '',
			hole: 'Test',
			name: 'Dr. Test',
		},
	];
	const passedConsults = [
		{
			date: '20/04/2023',
			hole: 'Cardiologista',
			name: 'Dr. André Cunha',
		},
		{
			hole: 'Zoista',
			name: 'Dr. Son',
		},
		{
			date: '11/11/2023',
			hole: 'Otorrinolaringologista',
			name: 'Dr. Paulo Matos',
		},
		{
			date: '',
			hole: 'Test',
			name: 'Dr. Test',
		},
	];

	return (
		<ScrollView padding={5} paddingBottom={20}>
			<Title color={'blue.500'}>Minhas consultas</Title>

			<Button backgroundColor={'blue.800'} marginTop={5}>
				Agendar outra consulta
			</Button>

			<Title alignSelf={'start'} color={'blue.500'} fontSize={'lg'}>
				Próximas consultas
			</Title>

			{nextConsults.map((consult, idx) => (
				<CardConsult key={idx} marginTop={5} scheduled {...consult} />
			))}

			<Divider marginTop={5} />

			<Title alignSelf={'start'} color={'blue.500'} fontSize={'lg'}>
				Consultas passadas
			</Title>

			{passedConsults.map((consult, idx) => (
				<CardConsult key={idx} marginTop={5} passed {...consult} />
			))}
		</ScrollView>
	);
}
