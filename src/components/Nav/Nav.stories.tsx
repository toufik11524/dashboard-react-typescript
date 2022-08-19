import { ComponentMeta } from '@storybook/react';
import Nav from './Nav';

export default {
  title: 'components/Nav/Nav',
  component: Nav,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
  },
} as ComponentMeta<typeof Nav>;

export const Component = (args: any) => <Nav {...args} />;

export const NoArgsComponent = (args: any) => <Nav {...args} />;

// should not used
export const ABC = () => <h1>ABC</h1>;
