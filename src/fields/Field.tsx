import { JSXElementConstructor, ReactElement, ReactNode } from 'react';
import { useUniqueId } from '../utils/useUniqueId';
import { FieldContext } from './FieldContext';
import { Input } from './Input';
import { Label } from './Label';

type Props = Omit<React.ComponentProps<typeof FieldContext.Provider>, 'value'>;

interface ReturnType {
  Label: typeof Label;
  Input: typeof Input;
}

export const Field: JSXElementConstructor<Props> & ReturnType = (props: Props) => {
  const id = useUniqueId();

  return <FieldContext.Provider value={id}>{props.children}</FieldContext.Provider>;
};

Field.Label = Label;
Field.Input = Input;
