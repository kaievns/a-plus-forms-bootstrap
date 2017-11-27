# Bootstrap Bindings for A+ Forms

This is the [bootstrap](https://getbootstrap.com) CSS framework support package
for the [A+ forms](https://github.com/MadRabbit/a-plus-forms) library;

```
npm install a-plus-forms a-plus-forms-bootstrap
```

## Usage

Basically import the `a-plus-forms-bootstrap` somewhere in your application and
then breathe normally. All forms after that will use the bootstrap based HTML
decorations for the input fields.

```js
import 'a-plus-forms-bootstrap';
import { Form, TextInput, PasswordInput } from 'a-plus-forms';

<Form onSubmit={signIn}>
  <TextInput name="username" label="Username" />
  <PasswordText name="password" label="Password" />
  <button className="btn btn-primary">Sign In</button>
</Form>
```


## Copyright & License

All code in this repository released under the terms of the MIT license

Copyright (C) 2017 Nikolay Nemshilov
