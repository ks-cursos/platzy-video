import React, { Component } from "react";
import { Text } from "react-native";
import Player from "../../player/containers/player";
import Header from "../../sections/components/header";
import MovieLayout from "../component/movie-layout"
import Close from "../../sections/components/close";
import Detail from "../../videos/components/detail";
import { connect } from "react-redux";
function mapStateToProps(state){
    debugger;
    return{
        movie:state.selectedMovie
    }
}
class Movie extends Component {
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
    render() {
        return (
            <MovieLayout>
                <Header >
                    <Close onPress={this.closeVideo} />
                </Header>
                <Player />
                <Detail {...this.props.movie}/>
            </MovieLayout>
        )
    }
}
export default connect(mapStateToProps)(Movie);