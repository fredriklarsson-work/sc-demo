import styled from 'styled-components';
import { StyledGalleryItemProps, StyledImageProps } from '../../types';

export const StyledGalleryItem = styled.div<StyledGalleryItemProps>`
	opacity: ${({ $isOpacityEnabled }) => ($isOpacityEnabled ? '0.4' : '1')};
	cursor: ${({ $isDragging }) => ($isDragging ? 'grabbing' : 'grab')};
	line-height: '0.5';
	transform: ${({ $isDragging }) => ($isDragging ? 'scale(1.05)' : 'scale(1)')} ${({ $transform }) => ($transform ? $transform : '')};
	transition: ${({ $transition }) => ($transition ? $transition : '')};
`;

export const StyledImage = styled.img<StyledImageProps>`
  border-radius: 8px:
  box-shadow: ${({ $isDragging }) => ($isDragging ? 'none' : 'rgb(63 63 68 / 5%) 0px 0px 0px 1px, rgb(34 33 81 / 15%) 0px 1px 3px 0px')};
  max-width: 100%;
  object-fit: cover;
`;
