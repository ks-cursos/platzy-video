import React from "react";
import { View, Text, Image, StyleSheet, SafeAreaView } from "react-native"
function Header(props) {
    return (
        <View>
            <SafeAreaView style={style.statusBar}>
                <View style={style.container}>
                    <Image source={require('../../../assets/logo.png')} style={style.logo} />
                    <View style={style.right}>
                        {props.children}
                    </View>
                </View>

            </SafeAreaView>
        </View>
    )
}
const style = StyleSheet.create({
    statusBar: { backgroundColor: "white" },
    logo: {
        width: 40,
        height: 40,
        resizeMode: 'contain',
    },
    container: {
        alignContent: "center",
        alignItems: "center",
        paddingHorizontal: 10,
        paddingVertical: 10,
        flexDirection: 'row'
    },
    right: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }
});
export default Header;