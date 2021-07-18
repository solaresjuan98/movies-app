import React from 'react';
import { View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface Props {
    children: JSX.Element | JSX.Element[];
}

export const GradientBackground = ({ children }: Props) => {
    return (
        <View style={{ flex: 1}}>
            <LinearGradient 
                colors={['#084F6A', '#45CEDB', 'white']} 
                style={{...StyleSheet.absoluteFillObject}}
                />
            {/* {children} */}
        </View>
    )
}
