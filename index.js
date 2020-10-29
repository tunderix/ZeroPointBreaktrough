/**
 * @format
 */

import { AppRegistry } from 'react-native';
// import { getStorybookUI, configure } from '@storybook/react-native';
import App from './src/App';
import { name as appName } from './app.json';

/* 
configure(() => {
    // eslint-disable-next-line global-require
    require('./src/stories');
}, module);
*/
// const StorybookUIRoot = getStorybookUI({});

AppRegistry.registerComponent(appName, (): App => App);
// AppRegistry.registerComponent(appName, (): any => StorybookUIRoot);
