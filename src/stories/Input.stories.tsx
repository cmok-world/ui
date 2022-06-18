import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Field } from '../fields/Field';

export default {
  title: 'Example/Input',
  component: Field.Input,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Field.Input>;

const Template: ComponentStory<typeof Field.Input> = args => (
  <Field>
    <Field.Label>Username</Field.Label>
    <Field.Input {...args} />
  </Field>
);

export const Default = Template.bind({});
Default.args = {
  placeholder: 'foobar2000',
};
