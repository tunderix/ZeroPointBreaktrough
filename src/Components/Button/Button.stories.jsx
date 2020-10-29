import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text } from 'react-native';
import Button from '.';
import CenterView from '../CenterView';

storiesOf('Button', module)
    .addDecorator((getStory: any): any => <CenterView>{getStory()}</CenterView>)
    .add('with text', (): any => (
        <Button onPress={action('clicked-text')}>
            <Text>{text('Button text', 'Hello Button')}</Text>
        </Button>
    ))
    .add('with some emoji', (): any => (
        <Button onPress={action('clicked-emoji')}>
            {/* In react native there is no <span> -> no idea how to solve. */}
            {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
            <Text>😀 😎 👍 💯</Text>
        </Button>
    ));
