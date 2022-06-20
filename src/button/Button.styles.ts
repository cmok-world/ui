import styled, { css, DefaultTheme, ThemedStyledProps } from 'styled-components';
import { Props } from './Button.component';

function getVariant(props: ThemedStyledProps<Props, DefaultTheme>) {
  if (props.variant === 'ghost') {
    return css`
      position: relative;
      color: ${props.theme.colors.text};
      background-color: transparent;

      &::after {
        content: '';
        display: block;
        height: 1px;
        width: 100%;
        position: absolute;
        bottom: 0.6rem;
        left: 0;
        background-color: ${props.theme.colors.text};
      }
    `;
  }

  if (props.variant === 'primary') {
    return css`
      color: ${props.theme.colors.background};
      background-color: ${props.theme.colors.text};
      padding: 0 8px;
    `;
  }

  if (props.variant === 'secondary') {
    return css`
      color: ${props.theme.colors.text};
      background-color: ${props.theme.colors.background};
      padding: 0 8px;
    `;
  }
}

export const StyledButton = styled.button<Props>`
  cursor: pointer;
  min-height: 32px;
  display: inline-block;
  font-size: 1.6rem;
  font-weight: bold;

  ${getVariant}
`;
