import Button from '../../ColoredButton/ColoredButton.jsx';

export default  {
  title: "Components/Button",
  component: Button,
  tags: ['autodocs'],  
  argTypes: { handleClick: {action:'handleClick'} }
}

// Make the button interactive
const Template = args => <Button {...args} />;

export const Red = Template.bind({});
Red.args = {
  backgroundColor: 'red',
  label: 'Press  Me',
  size: 'md'
}

export const Green = Template.bind({});
Green.args = {
  backgroundColor: 'green',
  label: 'Press Me',
  size: 'md'
}

export const Small = Template.bind({});
Small.args = {
  backgroundColor: 'green',
  label: 'Press Me',
  size: 'sm'
}

export const Large = Template.bind({});
Large.args = {
  backgroundColor: 'lightblue',
  label: 'Press Me - Adonis',
  size: 'lg'
}

export const LongLabel = Template.bind({});
LongLabel.args = {
  backgroundColor: 'lightblue',
  label: 'Press Me - Adonis Eris',
  size: 'lg'
}