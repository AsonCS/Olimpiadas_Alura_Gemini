import { Card, StyledProps } from 'native-base';
import React from 'react';

import { Button } from './Button';
import { FormControlTextInput } from './FormControlTextInput';

export function CardSearch(props: StyledProps): React.JSX.Element {
	return (
		<Card backgroundColor={'white'} padding={3} width={'100%'} {...props}>
			<FormControlTextInput placeholder='Digite a especialidade' />
			<FormControlTextInput
				marginTop={5}
				placeholder='Digite sua localização'
			/>
			<Button marginTop={5}>Buscar</Button>
		</Card>
	);
}
