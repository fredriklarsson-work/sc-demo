import { useState } from 'react';
import { DndContext, DragOverlay, PointerSensor, useSensor, useSensors, DragStartEvent, DragEndEvent, TouchSensor, closestCenter } from '@dnd-kit/core';
import { arrayMove, SortableContext, rectSortingStrategy } from '@dnd-kit/sortable';
import ImageGalleryItem from '../ImageGalleryItem';
import SortableItem from '../SortableItem';
import { TypeImageGalleryItem, ImageItem } from '../../types';
import { StyledGrid } from './styles';
import styled from 'styled-components';

const idCollection: number[] = [237, 15, 20, 24, 13, 48, 40, 43, 46, 234, 566, 777];

const defaultItems: ImageItem[] = idCollection.map((id) => ({
	id,
	imageUrl: `https://picsum.photos/id/${id}/300/200`,
}));

export default function SortableExample() {
	const [items, setItems] = useState<TypeImageGalleryItem[]>(defaultItems);

	// for drag overlay
	const [activeItem, setActiveItem] = useState<TypeImageGalleryItem>();

	// for input methods detection
	const sensors = useSensors(useSensor(PointerSensor), useSensor(TouchSensor));

	// triggered when dragging starts
	const handleDragStart = (event: DragStartEvent) => {
		const { active } = event;
		setActiveItem(items.find((item) => item.id === active.id));
	};

	// triggered when dragging ends
	const handleDragEnd = (event: DragEndEvent) => {
		const { active, over } = event;
		if (!over) return;

		const activeItem = items.find((item) => item.id === active.id);
		const overItem = items.find((item) => item.id === over.id);

		if (!activeItem || !overItem) {
			return;
		}

		const activeIndex = items.findIndex((item) => item.id === active.id);
		const overIndex = items.findIndex((item) => item.id === over.id);

		if (activeIndex !== overIndex) {
			setItems((prev) => arrayMove<TypeImageGalleryItem>(prev, activeIndex, overIndex));
		}
		setActiveItem(undefined);
	};

	const handleDragCancel = () => {
		setActiveItem(undefined);
	};

	return (
		<DndContext sensors={sensors} collisionDetection={closestCenter} onDragStart={handleDragStart} onDragEnd={handleDragEnd} onDragCancel={handleDragCancel}>
			<Title>Sortable example</Title>
			<SortableContext items={items} strategy={rectSortingStrategy}>
				<StyledGrid>
					{items.map((item) => (
						<SortableItem key={item.id} item={item} />
					))}
				</StyledGrid>
			</SortableContext>
			<DragOverlay adjustScale style={{ transformOrigin: '0 0 ' }}>
				{activeItem ? <ImageGalleryItem item={activeItem} isDragging /> : null}
			</DragOverlay>
		</DndContext>
	);
}

const Title = styled.h1`
	margin: 1em auto;
	display: flex;
	justify-content: center;
`;
