import styled from 'styled-components';
import { Input } from './Input';
import { Label } from './Label';
import { Textarea } from './Textarea';

type InputProps = React.ComponentPropsWithoutRef<typeof Input>;
type LabelProps = React.ComponentPropsWithoutRef<typeof Label>;
type TextareaProps = React.ComponentPropsWithoutRef<typeof Textarea>;

export const StyledInput = styled.input<InputProps>`
  display: block;
  width: 100%;
  height: 40px;
  padding: 0 8px;
`;

export const StyledLabel = styled.label<LabelProps>`
  display: block;
  width: 100%;
`;

export const StyledTextarea = styled(StyledInput as 'textarea').attrs({
  as: 'textarea',
})<TextareaProps>`
  height: auto;
  min-height: 120px;
  resize: ${p => !p.isResizable && 'none'};
`;
