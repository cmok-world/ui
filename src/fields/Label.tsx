import { useContext } from 'react';
import { FieldContext } from './FieldContext';

type Props = React.ComponentPropsWithRef<'label'>;

export function Label(props: Props) {
  const id = useContext(FieldContext);

  return <label htmlFor={id} {...props} />;
}

Label.displayName = 'Field.Label';
