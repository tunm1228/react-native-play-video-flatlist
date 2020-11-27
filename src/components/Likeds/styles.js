import { StyleSheet, Dimensions } from "react-native";
const styles = StyleSheet.create({
    content: {
        width: Dimensions.get("window").width,
        backgroundColor: '#FFF',
        height: '100%',
        alignItems: 'center',
        paddingTop: 25,
        paddingHorizontal: 10
    },
    textBold: {
        color: '#010101',
        fontWeight: 'bold',
        fontSize: 18
    },
    text: {
        color: '#444'
    },
    textPrivacySettings: {
        color: '#EE1D52'
    },
});