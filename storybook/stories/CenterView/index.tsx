/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

const centerView: any = ({ children }: any): any => {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#F5FCFF'
            }}
        >
            {children}
        </View>
    );
};

centerView.defaultProps = {
    children: null
};

centerView.propTypes = {
    children: PropTypes.node
};

export default centerView;
