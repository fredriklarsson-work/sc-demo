import styled from 'styled-components';

type ButtonProps = {
	text: string;
	value: any;
	onClickFunction: (value: any) => void;
	active?: boolean;
};
const Button = ({ text, value, active, onClickFunction }: ButtonProps) => {
	return (
		<StyledButton $active={active} onClick={() => onClickFunction(value)}>
			{text}
		</StyledButton>
	);
};

const StyledButton = styled.button<any>`
	background: ${({ $active }) => ($active ? 'black' : 'white')};
	color: ${({ $active }) => ($active ? 'white' : 'black')};
	border: 1px solid ${({ $active }) => ($active ? 'white' : 'black')};
	border-radius: 9999px;
	padding: 0.25em 1em;
	margin: 0 0.5em;
	text-transform: uppercase;
`;

export default Button;
