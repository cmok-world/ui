import { ComponentPropsWithoutRef } from 'react';
import { StyledBox } from './Box.styles';

export type BoxProps<C extends React.ElementType> = {
  as?: C;
  m?: number;
  p?: number;
} & ComponentPropsWithoutRef<C>;

export function Box<C extends React.ElementType = 'span'>({ as, ...props }: BoxProps<C>) {
  return <StyledBox as={as as React.ElementType} {...props} />;
}
