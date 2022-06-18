import { useContext } from 'react';
import { FieldContext } from './FieldContext';
import { StyledLabel } from './styles';

type Props = React.ComponentPropsWithRef<'label'>;

export function Label(props: Props) {
  const id = useContext(FieldContext);

  return <StyledLabel htmlFor={id} {...props} />;
}

Label.displayName = 'Field.Label';
