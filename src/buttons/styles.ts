import styled, { css } from 'styled-components';
import { COLOR_PRIMARY, COLOR_SECONDARY } from '../utils/styles';
import { Props } from './Button';

function getColors(props: Props) {
  if (props.variant === 'ghost') {
    return css`
      color: ${COLOR_PRIMARY};
      background-color: transparent;
    `;
  }

  if (props.variant === 'primary') {
    return css`
      color: ${COLOR_SECONDARY};
      background-color: ${COLOR_PRIMARY};
    `;
  }

  if (props.variant === 'secondary') {
    return css`
      color: ${COLOR_PRIMARY};
      background-color: ${COLOR_SECONDARY};
    `;
  }
}

export const StyledButton = styled.button<Props>`
  cursor: pointer;
  ${getColors}
`;
