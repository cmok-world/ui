import { useContext } from 'react';
import { FieldContext } from './FieldContext';
import { StyledTextarea } from './styles';
import * as PropTypes from 'prop-types';

interface Props extends React.ComponentPropsWithRef<'textarea'> {
  isResizable?: boolean;
}

export function Textarea(props: Props) {
  const componentProps = { isResizable: false, ...props };
  const { isResizable, ...elementProps } = componentProps;

  const id = useContext(FieldContext);

  return <StyledTextarea id={id} isResizable={isResizable} {...elementProps} />;
}

Textarea.displayName = 'Field.Textarea';

Textarea.propTypes = {
  isResizable: PropTypes.bool,
};
