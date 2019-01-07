import React, { Component } from "react";
import Video from "react-native-video";
import { StyleSheet, View ,ActivityIndicator} from "react-native";
import PLayerLayout from "../components/player-layout"
class PLayer extends Component {
    render() {
        return (
            <PLayerLayout video={
                <Video playWhenInactive={true} source={{ uri: "https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4" }}
                    style={style.video} resizeMode="contain" />
            }
            loader={
                <ActivityIndicator color="white"/>
            }
            />
        )
    }
}
const style = StyleSheet.create({
    video: {
        right: 0,
        left: 0,
        top: 0,
        bottom: 0,
        position: "absolute",
    }
})

export default PLayer;