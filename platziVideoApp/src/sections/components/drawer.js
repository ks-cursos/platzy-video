import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from "react-native";
import { DrawerItems } from "react-navigation";
import Icon from "react-native-vector-icons/FontAwesome";
function Drawer(props) {
    return (
        <ScrollView>
            <SafeAreaView >
                <Image source={require('../../../assets/logo.png')} style={style.logo} style={{ width: 80, height: 80, resizeMode: "contain", marginLeft: 10, marginVertical: 20 }} />
                <DrawerItems {...props} />
            </SafeAreaView>
        </ScrollView>
    )
}
const style = StyleSheet.create({

})
export default Drawer;