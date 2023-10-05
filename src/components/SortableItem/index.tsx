import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import ImageGalleryItem from '../ImageGalleryItem';
import { HTMLAttributes } from 'react';
import { TypeImageGalleryItem } from '../../types';

type Props = {
	item: TypeImageGalleryItem;
} & HTMLAttributes<HTMLDivElement>;

const SortableItem = ({ item, ...props }: Props) => {
	const { attributes, isDragging, listeners, setNodeRef, transform, transition } = useSortable({
		id: item.id,
	});

	return (
		<ImageGalleryItem
			item={item}
			ref={setNodeRef}
			$transform={CSS.Transform.toString(transform)}
			$transition={transition || undefined}
			isOpacityEnabled={isDragging}
			{...props}
			{...attributes}
			{...listeners}
		/>
	);
};

export default SortableItem;
