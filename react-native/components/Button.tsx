import React from 'react';
import { Button as NSButton, IButtonProps } from 'native-base';

interface ButtonProps extends IButtonProps {
	children: React.ReactNode;
}

export function Button({ children, ...rest }: ButtonProps): React.JSX.Element {
	return (
		<NSButton
			backgroundColor={'blue.800'}
			borderRadius={'lg'}
			width={'100%'}
			{...rest}
		>
			{children}
		</NSButton>
	);
}
