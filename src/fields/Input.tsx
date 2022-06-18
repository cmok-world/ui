import { useContext } from 'react';
import { FieldContext } from './FieldContext';
import { StyledInput } from './styles';

type Props = React.ComponentPropsWithRef<'input'>;

export function Input(props: Props) {
  const id = useContext(FieldContext);

  return <StyledInput id={id} {...props} />;
}

Input.displayName = 'Field.Input';
