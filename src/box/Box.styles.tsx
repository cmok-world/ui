import styled from 'styled-components';
import { BoxProps } from './Box.component';
import { px } from '../styles/utils';

export const StyledBox = styled.span<BoxProps<'span'>>`
  margin: ${p => px(p.theme.space[p.m || -1] || 0)};
  padding: ${p => px(p.theme.space[p.p || -1] || 0)};
`;
