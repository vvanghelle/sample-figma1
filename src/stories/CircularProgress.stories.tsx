import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
 
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/CircularProgress',
  component: CircularProgress,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
} as ComponentMeta<typeof CircularProgress>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CircularProgress> = (args) => <CircularProgress {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  value:80
};
