import React from 'react';
import { View, Text } from 'react-native';

import BottomTabNavigator from '../../components/BottomTabNavigator';

import { Container } from './styles';

export default function Photo({ navigation }) {
    return (
        <Container>
            <View><Text>Photo</Text></View>
            <BottomTabNavigator background="#010101" colorIcon="#FFF" colorTitle="#FFF" navigation={navigation} />
        </Container>
    )
}