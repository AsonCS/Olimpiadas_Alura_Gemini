import React from 'react';
import { ITextProps, Text } from 'native-base';

interface TitleProps extends ITextProps {
	children: React.ReactNode;
}

export function Title({ children, ...rest }: TitleProps): React.JSX.Element {
	return (
		<Text
			color={'gray.500'}
			fontSize={'2xl'}
			fontWeight={'bold'}
			marginTop={5}
			textAlign={'center'}
			{...rest}
		>
			{children}
		</Text>
	);
}
