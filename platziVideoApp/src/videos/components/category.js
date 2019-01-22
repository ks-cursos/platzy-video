import React from "react";
import { View, Text, Image, StyleSheet, ImageBackground, TouchableOpacity } from "react-native";
function Category(props) {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <ImageBackground source={{ uri: props.background_image }} style={style.wrapper} >
                <Text style={style.genereText}>{props.genres[0]}</Text>
            </ImageBackground>
        </TouchableOpacity>
    )
}
const style = StyleSheet.create({
    wrapper: {
        height: 100,
        width: 250,
        borderRadius: 10,
        overflow: "hidden",
        alignItems: "center",
        justifyContent: "center",
    },
    genereText: {
        color: "white",
        fontSize: 40,
        fontWeight: "bold",
        textShadowColor: "rgba(0,0,0,.75)",
        textShadowOffset: {
            width: 2,
            height: 2
        },
        textShadowRadius: 0
    }
});
export default Category;