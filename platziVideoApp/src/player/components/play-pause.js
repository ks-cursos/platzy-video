import React from "react";
import { View, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, StyleSheet, Text } from "react-native";
function PlayPause(props) {
    return (
        <TouchableHighlight onPress={props.onPress} style={style.container} underlayColor="red" hitSlop={{
            left:5,
            top:5,
            bottom:5,
            right:5
        }}>
            {
                props.paused ?
                    <Text style={style.button}>Play</Text>
                    :
                    <Text style={style.button}>Pause</Text>
            }


        </TouchableHighlight>
    )
}
const style = StyleSheet.create({
    button: {
        color: 'white',
        fontSize: 10,
        fontWeight: 'bold'
    },
    container: {
        justifyContent: 'center',
        paddingHorizontal: 10,
        height: 25,
        marginRight: 10,
        marginVertical: 5,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'white',
        backgroundColor: 'gray'
    }
})
export default PlayPause;