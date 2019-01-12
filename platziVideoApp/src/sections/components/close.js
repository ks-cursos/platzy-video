import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
function Close(props) {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <Icon name={"close"} size={34} color="#990000" />
        </TouchableOpacity>
    )
}
const style = StyleSheet.create({

})
export default Close;