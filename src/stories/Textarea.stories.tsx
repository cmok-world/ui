import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Field } from '../fields/Field';

export default {
  title: 'Example/Textarea',
  component: Field.Textarea,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Field.Textarea>;

const Template: ComponentStory<typeof Field.Textarea> = args => (
  <Field>
    <Field.Label>Biography</Field.Label>
    <Field.Textarea {...args} />
  </Field>
);

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Lorem ipsum dolor...',
  isResizable: true,
};
