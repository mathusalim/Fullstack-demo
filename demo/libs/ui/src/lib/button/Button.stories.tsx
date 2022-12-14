import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from './Button';

export default {
  component: Button,
  title: 'Button',
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>{args.children}</Button>
);

export const Primary = Template.bind({});
Primary.args = {};
