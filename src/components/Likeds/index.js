import React from 'react';
import { View, TouchableWithoutFeedback, Text } from 'react-native';

import styles from './styles';

export default likeds = () => (
    <View style={styles.content}>
        <Text style={styles.textBold}>Only you can see which videos you liked</Text>
        <Text style={styles.text}>You can change this in <TouchableWithoutFeedback ><Text style={styles.textPrivacySettings}>Privacy settings</Text></TouchableWithoutFeedback> </Text>
    </View>
);