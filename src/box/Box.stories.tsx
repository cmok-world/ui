import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Box } from './Box.component';

export default {
  title: 'Example/Box',
  component: Box,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = args => <Box {...args} />;

export const Default = Template.bind({});
Default.args = {
  as: 'span',
  children: 'Lorem',
  m: 0,
  p: 0,
};
