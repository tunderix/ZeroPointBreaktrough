import React from 'react';
import PropTypes from 'prop-types';
import { TouchableHighlight } from 'react-native';

const button = ({ onPress, children }: any): any => {
    return (
        <TouchableHighlight onPress={onPress}>{children}</TouchableHighlight>
    );
};

button.defaultProps = {
    children: null,
    onPress: () => {}
};

button.propTypes = {
    children: PropTypes.node,
    onPress: PropTypes.func
};

export default button;
