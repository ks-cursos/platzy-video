import React, { Component } from "react";
import Video from "react-native-video";
import { StyleSheet, View, ActivityIndicator, Text } from "react-native";
import PLayerLayout from "../components/player-layout"
import ControlLayout from "../components/control-layout"
import PlayPause from "../components/play-pause"
class PLayer extends Component {
    state = {
        loading: true,
        paused: false,
        progress:0,
        duration:0,
        current:0
    }
    onBuffer = ({ isBuffering }) => {
        this.setState({
            loading: isBuffering
        })
    }
    onLoad = () => {
        this.setState({
            loading: false
        })
    }
    playPause = () => {
        this.setState({
            paused: !this.state.paused
        })
    }
    render() {
        return (
            <PLayerLayout loading={this.state.loading} video={
                <Video playWhenInactive={true} source={{ uri: "https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4" }}
                    style={style.video} resizeMode="contain" onBuffer={this.onBuffer} onLoad={this.onLoad} paused={this.state.paused} />
            }
                loader={
                    <ActivityIndicator color="white" />
                }
                controls={
                    <ControlLayout>
                        <PlayPause onPress={this.playPause} paused={this.state.paused} ></PlayPause>
                        <Text>progess bar</Text>
                        <Text>time left</Text>
                        <Text>full screen </Text>
                    </ControlLayout>
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