import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity, Text } from 'react-native';
import { FontAwesome } from 'expo-vector-icons';
import { color } from 'react-native-elements/dist/helpers';

export function Button({text, style, radius, size, color,  background, onPress}) {
    return(
        <TouchableOpacity 
        onPress = {()  => onPress()}
        style={[
            style, {
                alignItems: 'center', 
                justifyContent: 'center', 
                borderRadius: radius, 
                backgroundColor: background
                },
            ]}
        >
        <FontAwesome name={text} size={size} style={{color: color}}/>
        </TouchableOpacity>
    )
}

export default Button;