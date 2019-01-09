import React, { Component } from "react";
import Video from "react-native-video";
import { StyleSheet, View, ActivityIndicator, Text, Dimensions } from "react-native";
import PLayerLayout from "../components/player-layout"
import ControlLayout from "../components/control-layout"
import PlayPause from "../components/play-pause";
import FullScreen from "../components/full-screen";
import Progress from "../components/progress";
const { width } = Dimensions.get("window");
const height = width * .5625;

function secondsToTime(time) {
    return ~~(time / 60) + ":" + (time % 60 < 10 ? "0" : "") + time % 60;
}
class PLayer extends Component {
    state = {
        loading: true,
        paused: false,
        progress: 0,
        duration: 0,
        current: 0,
        fullscreen:false
    }
    onBuffer = ({ isBuffering }) => {
        this.setState({
            loading: isBuffering
        })
    }
    onLoad = (meta) => {
        this.setState({
            loading: false,
            duration: meta.duration
        })
    }
    playPause = () => {
        this.setState({
            paused: !this.state.paused
        })
    }
    fullScreen = () => {
        this.setState({
            fullscreen: !this.state.fullscreen
        })
    }
    _onProgress = (meta) => {
        this.setState({
            loading: false,
            progress: meta.currentTime / this.state.duration
        })
    }
    _onEnd = () => {
        this.setState({
            paused: true
        })
    }
    _onPressProgress = (e) => {
        const position = e.nativeEvent.locationX;
        const progress = (position / 250) * this.state.duration;
        const isPlaying = !this.state.paused;
        this.player.seek(progress);
        this.setState({
            loading: true
        })
    }


    render() {

        return (
            <PLayerLayout loading={this.state.loading} video={
                <Video playWhenInactive={true} source={{ uri: "https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4" }}
                    style={style.video} resizeMode="contain"
                    paused={this.state.paused}
                    onLoad={this.onLoad}
                    onProgress={this._onProgress}
                    onBuffer={this.onBuffer}
                    onEnd={this._onEnd}
                    ref={ref => this.player = ref}
                    onVideoSeek={this._onVideoSeek}
                    fullscreen={this.state.fullscreen}
                    
                    

                />
            }
                loader={
                    <ActivityIndicator color="white" />
                }
                controls={
                    <ControlLayout>
                        <PlayPause onPress={this.playPause} paused={this.state.paused} ></PlayPause>
                        <Progress progress={this.state.progress} onPress={this._onPressProgress} />
                        <Text>{secondsToTime(Math.floor(this.state.progress * this.state.duration))}</Text>
                        <FullScreen onPress={this.fullScreen}  fullScreen={this.state.fullscreen}/>
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
        width: "100%",
        height
    }
})

export default PLayer;