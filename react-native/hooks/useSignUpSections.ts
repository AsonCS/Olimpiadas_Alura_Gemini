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
				title: 'Insira alguns dados básicos:',
				textInputs: [
					{
						label: 'Nome',
						placeholder: 'Digite seu nome completo',
					},
					{
						keyboardType: 'email-address',
						label: 'Email',
						placeholder: 'Insira seu endereço de email',
					},
					{
						isPassword: true,
						label: 'Crie uma senha',
						placeholder: 'Insira sua senha',
					},
					{
						isPassword: true,
						label: 'Repita a senha',
						placeholder: 'Insira sua senha',
					},
				],
			},
			{
				title: 'Agora, mais alguns dados sobre você:',
				textInputs: [
					{
						keyboardType: 'numeric',
						label: 'CEP',
						placeholder: 'Insira seu CEP',
					},
					{
						label: 'Endereço',
						placeholder: 'Insira seu endereço',
					},
					{
						keyboardType: 'numeric',
						label: 'Número',
						placeholder: 'Insira seu número',
					},
					{
						label: 'Complemento',
						placeholder: 'Insira seu complemento',
					},
					{
						keyboardType: 'phone-pad',
						label: 'Telefone',
						placeholder: '(00) 0 0000-0000',
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
					{
						value: 'Bradesco',
					},
					{
						value: 'Amil',
					},
					{
						value: 'Biosaúde',
					},
					{
						value: 'Biovida',
					},
					{
						value: 'Outros',
					},
					{
						value: 'Não tenho plano',
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
