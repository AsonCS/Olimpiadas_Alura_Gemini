import React from 'react';
import { KeyboardTypeOptions } from 'react-native';
import { FormControl, Input, Text } from 'native-base';

export interface FormControlTextInputProps {
	isPassword?: boolean;
	keyboardType?: KeyboardTypeOptions;
	label: string;
	placeholder: string;
}

export function FormControlTextInput({
	isPassword = false,
	keyboardType = 'default',
	label,
	placeholder,
}: FormControlTextInputProps): React.JSX.Element {
	return (
		<FormControl marginTop={3}>
			<FormControl.Label>{label}</FormControl.Label>

			<Input
				borderRadius={'lg'}
				backgroundColor={'gray.100'}
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
