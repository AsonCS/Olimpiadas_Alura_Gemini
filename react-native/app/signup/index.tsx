import React, { useEffect } from 'react';
import { Box, Checkbox, Image, ScrollView, Text } from 'native-base';

import { FormControlTextInput as TextInput } from '@/components/FormControlTextInput';
import { Button } from '@/components/Button';
import { Title } from '@/components/Title';
import { SignUpSection, useSignUpSections } from '@/hooks/useSignUpSections';

import Logo from '@/assets/images/logo.png';

export default function SignUp() {
	const [index, isLast, section, loadSections, setSection] =
		useSignUpSections();

	useEffect(() => {
		console.log('loadSections');
		loadSections();
	}, []);

	return (
		<ScrollView
			backgroundColor='white'
			flex={1}
			padding={10}
			paddingBottom={50}
		>
			<Image alignSelf={'center'} alt='Logo' source={Logo} />

			{section && (
				<Section
					index={index}
					isLast={isLast}
					section={section}
					setSection={setSection}
				/>
			)}
		</ScrollView>
	);
}

function Section({
	index,
	isLast,
	section,
	setSection,
}: {
	index: number;
	isLast: boolean;
	section: SignUpSection;
	setSection: (newIndex: number) => void;
}) {
	return (
		<React.Fragment key={index}>
			<Title>{section.title}</Title>

			<Box width={'100%'}>
				{section.textInputs?.map((textInput, idx) => {
					return <TextInput key={idx} {...textInput} />;
				})}
			</Box>

			{section.checkboxes && (
				<Text
					color={'blue.800'}
					fontSize={'md'}
					fontWeight={'bold'}
					marginBottom={4}
					marginTop={2}
				>
					Selecione o plano:
				</Text>
			)}
			<Box width={'100%'}>
				{section.checkboxes?.map((checkbox, idx) => {
					return (
						<Checkbox key={idx} value={checkbox.value}>
							{checkbox.value}
						</Checkbox>
					);
				})}
			</Box>

			{index > 0 && (
				<Button
					backgroundColor={'gray.400'}
					onPress={() => setSection(index - 1)}
				>
					Voltar
				</Button>
			)}
			{!isLast && (
				<Button onPress={() => setSection(index + 1)}>Avançar</Button>
			)}
		</React.Fragment>
	);
}
