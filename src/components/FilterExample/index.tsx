import { useState } from 'react';
import styled from 'styled-components';
import Button from '../Button';

type TypeItem = {
	id: number;
	imageUrl: string;
	size: 'small' | 'large';
	price: number;
	name: string;
};

const FilterExample = () => {
	const idCollection: number[] = [237, 15, 20, 24, 13, 48, 40, 43, 46, 234, 566, 777];
	const defaultItems: TypeItem[] = idCollection.map((id) => ({
		id,
		imageUrl: `https://picsum.photos/id/${id}/300/200`,
		size: id % 2 === 0 ? 'small' : 'large',
		price: id,
		name: `Product no. ${id}`,
	}));

	const [items, setItems] = useState<TypeItem[]>(defaultItems);
	const [filter, setActiveFilter] = useState<string>(null);

	const filterBySize = (size: string) => {
		const filteredItems = defaultItems.filter((item) => item.size === size);
		setItems(filteredItems);
		setActiveFilter(size);
	};

	return (
		<>
			<Title>Filter example</Title>
			<Filters>
				<div>
					<Span>Filters: </Span>
				</div>
				<div>
					<Button value={'small'} text={'Small'} onClickFunction={filterBySize} active={filter === 'small'} />
					<Button value={'large'} text={'Large'} onClickFunction={filterBySize} active={filter === 'large'} />
				</div>
			</Filters>
			<Wrapper>
				{items.map((item: TypeItem, idx: number) => (
					<Item key={idx}>
						<ImageWrapper>
							<img src={item.imageUrl} alt='#' />
						</ImageWrapper>
						<Content>
							<StyledItemTitle>{item.name}</StyledItemTitle>
							<StyledPrice>{item.price} kr</StyledPrice>
							<StyledSize>Size {item.size}</StyledSize>
						</Content>
					</Item>
				))}
			</Wrapper>
		</>
	);
};

const Wrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 1em;
	max-width: 800px;
	margin: 0 auto;
`;

const Item = styled.article`
	border: 1px solid ${({ theme }) => theme.accent};
`;

const Span = styled.span`
	color: ${({ theme }) => theme.fg};
`;

const Content = styled.div`
	padding: 0.5em;
	color: ${({ theme }) => theme.bg};
	background: ${({ theme }) => theme.fg};
`;

const ImageWrapper = styled.div`
	position: relative;
	width: 100%;
	height: 200px;
	overflow: hidden;
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
		position: absolute;
	}
`;

const Filters = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	max-width: 800px;
	margin: 0.5em auto;
`;

const StyledItemTitle = styled.h2``;

const StyledPrice = styled.p``;

const StyledSize = styled.p`
	text-transform: uppercase;
`;

const Title = styled.h1`
	margin: 1em auto;
	display: flex;
	justify-content: center;
`;

export default FilterExample;
