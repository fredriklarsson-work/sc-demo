import { forwardRef } from 'react';
import { ImageGalleryItemProps } from '../../types';
import { StyledGalleryItem, StyledImage } from './styles';

const ImageGalleryItem = forwardRef<HTMLDivElement, ImageGalleryItemProps>(({ item, $transition, $transform, isOpacityEnabled, isDragging, ...props }, ref) => {
	return (
		<StyledGalleryItem $transition={$transition} $transform={$transform} ref={ref} $isOpacityEnabled={isOpacityEnabled} $isDragging={isDragging} {...props}>
			<StyledImage src={item.imageUrl} alt={`${item.id}`} $isDragging={isDragging} />
		</StyledGalleryItem>
	);
});

export default ImageGalleryItem;
