import { FormControlTextInputProps } from '@/components/FormControlTextInput';
import { useState } from 'react';

export type SignUpSection = {
	checkboxes?: { value: string }[];
	title: string;
	textInputs?: FormControlTextInputProps[];
};

export function useSignUpSections(): [
	number,
	boolean,
	SignUpSection | undefined,
	() => Promise<void>,
	(newIndex: number) => void
] {
	const [index, setIndex] = useState(0);
	const [sections, setSections] = useState<SignUpSection[]>([]);

	const loadSections = async () => {
		setSections([
			{
				title: 'Insira alguns dados básicos',
				textInputs: [
					{
						label: 'Nome',
						placeholder: 'Digite seu nome completo',
					},
					{
						keyboardType: 'email-address',
						label: 'Email',
						placeholder: 'Digite seu email',
					},
				],
			},
			{
				title: 'Mais alguns dados sobre você:',
				textInputs: [
					{
						keyboardType: 'numeric',
						label: 'CEP',
						placeholder: 'Digite seu cep',
					},
				],
			},
			{
				title: 'Para finalizar, quais são os seus planos?',
				checkboxes: [
					{
						value: 'Sulamerica',
					},
					{
						value: 'Unimed',
					},
				],
			},
		]);
	};

	const setSection = (newIndex: number) => {
		if (newIndex < 0) {
			setIndex(0);
		} else if (newIndex >= sections.length) {
			setIndex(sections.length - 1);
		} else {
			setIndex(newIndex);
		}
	};

	return [
		index,
		index === sections.length - 1,
		sections.at(index),
		loadSections,
		setSection,
	];
}
