import { useContext } from 'react';
import { FieldContext } from './FieldContext';

type Props = React.ComponentPropsWithRef<'input'>;

export function Input(props: Props) {
  const id = useContext(FieldContext);

  return <input id={id} {...props} />;
}

Input.displayName = 'Field.Input';
