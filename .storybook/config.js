import { configure } from '@storybook/react';
import 'bootstrap/dist/css/bootstrap.css';
import './global.css';

import '../src/index';

const req = require.context('../stories', true, /\.js$/);

const loadStories = () =>
  req
    .keys()
    .filter(filename => !filename.endsWith('index.js'))
    .forEach(filename => req(filename));

configure(loadStories, module);
