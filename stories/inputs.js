import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {
  TextInput,
  EmailInput,
  PhoneInput,
  SearchInput,
  NumberInput,
  HiddenInput,
  PasswordInput,
  Textarea,
  Checkbox,
  Radios,
  Select
} from 'a-plus-forms';

const sizes = {
  xs: 'Xtra Small',
  x: 'Small',
  m: 'Medium',
  l: 'Large',
  xl: 'Sups Large'
};

storiesOf('Inputs', module)
  .add('text inputs', () => (
    <div>
      <TextInput label="Text input" onChange={action('text changed')} />
      <PhoneInput label="Phone inut" onChange={action('phone changed')} required />
      <EmailInput
        label="Email input"
        help="Please enter a valid email"
        onChange={action('email changed')}
        required
      />
      <SearchInput label="Search input" onChange={action('search changed')} />
      <NumberInput label="Number input" value={123} onChange={action('number changed')} />
      <PasswordInput label="Password input" onChange={action('password changd')} />
      <Textarea label="Free text input" onChange={action('textarea changed')} />
      <HiddenInput />
    </div>
  ))
  .add('radios and cheboxes', () => (
    <div>
      <TextInput label="Username" />
      <Checkbox label="Are you sure?" name="confirm" onChange={action('checkbox changed')} />
      <Radios label="T-shirt size" name="size" options={sizes} onChange={action('size changed')} />
    </div>
  ))
  .add('selects & dropdowns', () => (
    <div>
      <Select label="T-shirt size" options={sizes} onChange={action('size changed')} />
      <Select label="Clerable select" clearable options={sizes} onChange={action('size changed')} />
      <Select label="Multiple select" multiple options={sizes} onChange={action('size changed')} />
    </div>
  ));
