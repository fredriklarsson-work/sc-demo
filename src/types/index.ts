import { HTMLAttributes } from 'react';

export interface DragItem {
	index: number;
	id: string;
	type: string;
}

export type TypeImageGalleryItem = {
	id: number;
	imageUrl: string;
};

export type ImageGalleryItemProps = {
	item: TypeImageGalleryItem;
	isOpacityEnabled?: boolean;
	isDragging?: boolean;
	$transform?: string | undefined;
	$transition?: string | undefined;
} & HTMLAttributes<HTMLDivElement>;

export type StyledGalleryItemProps = {
	$isOpacityEnabled?: boolean;
	$isDragging?: boolean;
	$transform?: string | undefined;
	$transition?: string | undefined;
};

export interface StyledImageProps {
	$isDragging: boolean | undefined;
}

export interface ImageItem {
	id: number;
	imageUrl: string;
}
