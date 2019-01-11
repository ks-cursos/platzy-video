import React from "react";
import { View, Text, Image, StyleSheet, ActivityIndicator } from "react-native";
function Splash(props) {
    return (
        <View style={style.container}>
            <Image source={require('../../../assets/logo.png')} style={style.logo} resizeMode="contain" />
            <ActivityIndicator/>
        </View>
    )
}
const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center"
    },
    logo: {
        marginBottom: 10, width: 200, height: 80
    }
})
export default Splash;