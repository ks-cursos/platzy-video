import React, { Component } from "react";
import { TextInput, StyleSheet } from "react-native";

class Search extends Component {
    state = {
        text: ''
    }
    handleSubmit = () => {

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
export default Search;