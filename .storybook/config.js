import { configure } from '@storybook/react';
import 'bootstrap/dist/css/bootstrap.css';
import './global.css';

const req = require.context('../stories', true, /\.js$/);

const loadStories = () =>
  req
    .keys()
    .filter(filename => !filename.endsWith('index.js'))
    .forEach(filename => req(filename));

configure(loadStories, module);
