import { Meta, StoryObj } from '@Storybook/react';

import Textarea from './Textarea.tsx';
import { within } from '@storybook/test';


export default {
  component: Textarea,
  title: 'Textarea',
  tags: ['autodocs'],
};

export const Default = {
  args: {
    error: false,
    showPlaceholder: true,
    textPlaceholder: 'Showing the place holder',
    readOnly: false
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const textarea = canvas.findByRole('textarea');
    console.log(canvas);
  }
};

