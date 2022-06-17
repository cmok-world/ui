import * as PropTypes from 'prop-types';
import { StyledButton } from './styles';

export interface Props extends React.ComponentPropsWithRef<'button'> {
  variant?: 'primary' | 'secondary' | 'ghost';
}

export function Button(props: Props) {
  const componentProps = { variant: 'primary', ...props };
  const { variant, ...buttonProps } = componentProps;

  return <StyledButton variant={variant as Props['variant']} {...buttonProps} />;
}

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'ghost']),
};
