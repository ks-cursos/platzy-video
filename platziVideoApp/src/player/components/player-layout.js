import React from "react";
import { View, Text, StyleSheet } from "react-native";
function VideoLayout(props) {
    return (
        <View style={style.container}>
            <View style={style.video}>
                {props.video}
            </View>
            <View style={style.loader}>
                {props.loading && props.loader}
            </View>
            {props.controls}
        </View>
    )
}
const style = StyleSheet.create({
    container: {
        paddingTop: "56.25%"
    },
    video: {
        position: "absolute",
        left: 0,
        top: 0,
        bottom: 0,
        right: 0,
        backgroundColor: "black"
    },
    loader: {
        position: "absolute",
        left: 0,
        top: 0,
        bottom: 0,
        right: 0,
        justifyContent: "center",
        alignItems: "center"
    },
})
export default VideoLayout;