import { Avatar, Card, StyledProps, Text, View } from 'native-base';
import React from 'react';

import { Button } from './Button';

interface CardConsultProps extends StyledProps {
	date?: string;
	hole: string;
	image?: string;
	name: string;
	passed?: boolean;
	scheduled?: boolean;
}

export function CardConsult({
	date,
	hole,
	image = 'https://github.com/AsonCS.png',
	name,
	passed = false,
	scheduled = false,
	...others
}: CardConsultProps): React.JSX.Element {
	return (
		<Card
			backgroundColor={passed ? 'blue.200' : 'white'}
			padding={5}
			{...others}
		>
			<View flex={1} flexDirection={'row'}>
				<Avatar
					size={'xl'}
					source={{
						uri: image,
					}}
				/>
				<View justifyContent={'space-between'} flex={1} marginLeft={5}>
					<Text
						color={'gray.500'}
						fontSize={'md'}
						fontWeight={'bold'}
					>
						{name}
					</Text>
					<Text color={'gray.500'} fontSize={'md'}>
						{hole}
					</Text>
					<Text color={'gray.500'} fontSize={'md'}>
						{date}
					</Text>
				</View>
			</View>

			<Button marginTop={5}>
				{scheduled ? 'Cancelar' : 'Agendar consulta'}
			</Button>
		</Card>
	);
}
