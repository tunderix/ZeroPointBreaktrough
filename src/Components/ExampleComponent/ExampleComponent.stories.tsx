import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import ExampleComponent from '.';
import CenterView from '../CenterView';

storiesOf('Button', module)
    .addDecorator((getStory: any): any => <CenterView>{getStory()}</CenterView>)
    .add('with text', (): any => (
        <ExampleComponent textValue={text('Hello, boy...', 'Or girl...')} />
    ))
    .add('with text', (): any => <ExampleComponent textValue="Or girl..." />);
