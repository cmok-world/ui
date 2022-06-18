import { JSXElementConstructor } from 'react';
import { useUniqueId } from '../utils/useUniqueId';
import { FieldContext } from './FieldContext';
import { Input } from './Input';
import { Label } from './Label';
import { Textarea } from './Textarea';

type Props = Omit<React.ComponentProps<typeof FieldContext.Provider>, 'value'>;

interface ReturnType {
  Label: typeof Label;
  Input: typeof Input;
  Textarea: typeof Textarea;
}

export const Field: JSXElementConstructor<Props> & ReturnType = (props: Props) => {
  const id = useUniqueId();

  return <FieldContext.Provider value={id}>{props.children}</FieldContext.Provider>;
};

Field.Label = Label;
Field.Input = Input;
Field.Textarea = Textarea;
