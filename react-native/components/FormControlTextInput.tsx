import React from 'react';
import { KeyboardTypeOptions } from 'react-native';
import { FormControl, Input, StyledProps, Text } from 'native-base';

export interface FormControlTextInputProps extends StyledProps {
	isPassword?: boolean;
	keyboardType?: KeyboardTypeOptions;
	label?: string;
	placeholder: string;
}

export function FormControlTextInput({
	isPassword = false,
	keyboardType = 'default',
	label = '',
	placeholder,
	...others
}: FormControlTextInputProps): React.JSX.Element {
	return (
		<FormControl {...others}>
			{label && (
				<FormControl.Label>
					<Text
						color={'blue.800'}
						fontWeight={'bold'}
						marginBottom={2}
					>
						{label}
					</Text>
				</FormControl.Label>
			)}

			<Input
				borderRadius={'lg'}
				backgroundColor={'white'}
				placeholder={placeholder}
				shadow={3}
				size={'lg'}
				type={isPassword ? 'password' : 'text'}
				keyboardType={keyboardType}
				width={'100%'}
			/>
		</FormControl>
	);
}
