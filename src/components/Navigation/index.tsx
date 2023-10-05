import { ReactNode } from 'react';
import styled from 'styled-components';

// Navigation item
type ItemProps = {
	item: string;
	index: number;
	onClickFunction: (index: number) => void;
	active?: boolean;
};

export const Item = ({ active, item, index, onClickFunction }: ItemProps) => {
	return (
		<NavItem role='button' $active={active} onClick={() => onClickFunction(index)}>
			{item}
		</NavItem>
	);
};

const NavItem = styled.li<any>`
	display: inline-block;
	margin: 0 1em;
	text-decoration: ${({ $active }) => ($active ? 'underline' : 'none')};

	&:hover {
		cursor: pointer;
	}
`;

export const Nav = styled.nav`
	display: flex;
	justify-content: center;
	align-items: center;
	max-width: 800px;
	margin: 0 auto;

	ul {
		list-style: none;
		padding: 0;
	}
`;

export default { Item, Nav };
