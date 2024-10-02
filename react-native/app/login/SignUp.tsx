import React, { useEffect } from 'react';
import { Box, Checkbox, Image, ScrollView, Text } from 'native-base';

import { FormControlTextInput as TextInput } from '@/components/FormControlTextInput';
import { Button } from '@/components/Button';
import { Title } from '@/components/Title';
import { SignUpSection, useSignUpSections } from '@/hooks/useSignUpSections';
import { navigateToTabs } from '@/navigation';

import Logo from '@/assets/images/logo.png';

export default function SignUp({ navigation }: { navigation: any }) {
	const [index, isLast, section, loadSections, setSection] =
		useSignUpSections();

	useEffect(() => {
		console.log('loadSections');
		loadSections();
	}, []);

	return (
		<ScrollView
			backgroundColor={'white'}
			flex={1}
			paddingTop={10}
			paddingX={10}
		>
			<Image alignSelf={'center'} alt='Logo' source={Logo} />

			{section && (
				<Section
					index={index}
					isLast={isLast}
					section={section}
					setSection={setSection}
					signUp={navigateToTabs(navigation)}
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
	signUp,
}: {
	index: number;
	isLast: boolean;
	section: SignUpSection;
	setSection: (newIndex: number) => void;
	signUp: () => void;
}) {
	return (
		<React.Fragment key={index}>
			<Title marginTop={10}>{section.title}</Title>

			<Box width={'100%'}>
				{section.textInputs?.map((textInput, idx) => {
					return <TextInput key={idx} marginTop={5} {...textInput} />;
				})}
			</Box>

			{section.checkboxes && (
				<React.Fragment>
					<Text
						color={'blue.800'}
						fontSize={'md'}
						fontWeight={'bold'}
						marginBottom={4}
						marginTop={10}
					>
						Selecione o plano:
					</Text>
					<Box>
						{section.checkboxes.map((checkbox, idx) => {
							return (
								<Checkbox
									borderColor={'gray.200'}
									key={idx}
									value={checkbox.value}
								>
									<Text color={'gray.500'}>
										{checkbox.value}
									</Text>
								</Checkbox>
							);
						})}
					</Box>
				</React.Fragment>
			)}

			{index > 0 && (
				<Button
					backgroundColor={'blue.800'}
					marginTop={5}
					opacity={0.6}
					onPress={() => setSection(index - 1)}
				>
					Voltar
				</Button>
			)}
			{!isLast && (
				<Button marginTop={5} onPress={() => setSection(index + 1)}>
					Avançar
				</Button>
			)}
			{isLast && (
				<Button marginTop={5} onPress={() => signUp()}>
					Cadastrar!
				</Button>
			)}
		</React.Fragment>
	);
}
