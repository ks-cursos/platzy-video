import React, { Component } from "react";
import { Animated } from "react-native";
import Player from "../../player/containers/player";
import Header from "../../sections/components/header";
import MovieLayout from "../component/movie-layout"
import Close from "../../sections/components/close";
import Detail from "../../videos/components/detail";
import { connect } from "react-redux";
function mapStateToProps(state) {
    return {
        movie: state.videos.selectedMovie
    }
}
class Movie extends Component {
    static navigationOptions = (navigation) => {
        return {
            header: <Header>
                <Close onPress={() => {navigation.navigation.goBack() }} />
            </Header>
        }
    }
    state = {
        opacity: new Animated.Value(0),
    }
    closeVideo = () => {
        this.props.dispatch(
            {
                type: "SET_SELECTED_MOVIE",
                payload: {
                    movie: null
                }
            }
        )
    }
    componentDidMount() {
        Animated.timing(
            this.state.opacity, {
                toValue: 1,
                duration: 1000
            }
        ).start();
    }
    render() {
        return (
            <Animated.View style={{
                flex: 1,
                opacity: this.state.opacity
            }} >
                <MovieLayout>

                    <Player />
                    <Detail {...this.props.movie} />
                </MovieLayout>
            </Animated.View>
        )
    }
}
export default connect(mapStateToProps)(Movie);