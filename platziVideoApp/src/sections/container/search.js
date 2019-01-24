import React, { Component } from "react";
import { TextInput, StyleSheet } from "react-native";
import API from "../../utils/api";
import { connect } from "react-redux";
import { NavigationActions } from "react-navigation";

class Search extends Component {
    state = {
        text: ''
    }
    handleSubmit = async () => {
        const listMovies = await API.searchMovies(this.state.text);
        this.props.dispatch({
            type: "SET_SELECTED_MOVIE",
            payload: {
                movie: listMovies[0]
            }
        });
        this.props.dispatch(
            NavigationActions.navigate({
                routeName:"Movie",
                params:{
                    genre:item.genres[0]
                }
            })
        );
    }
    handleChangeText = (text) => {
        this.setState({
            text
        })
    }
    render() {
        return (
            <TextInput placeholder="Digita tú pelicula favorita."
                onSubmitEditing={this.handleSubmit}
                onChangeText={this.handleChangeText}
                autoCorrect={false}
                autoCapitalize="none"
                underlineColorAndroid="transparent"
                style={styles.input} />
        )
    }
}
const styles = StyleSheet.create({
    input: {
        padding: 15,
        fontSize: 15,
        borderWidth: 1,
        borderColor: '#eaeaea'
    }
})
export default connect()(Search);