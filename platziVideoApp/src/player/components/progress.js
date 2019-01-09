import React from "react";
import { View, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, StyleSheet, Text } from "react-native";
import {Bar} from "react-native-progress";

function Progress(props) {
    return (

        <TouchableWithoutFeedback onPress={props.onPress} style={style.container} underlayColor="red" hitSlop={{
            left: 5,
            top: 5,
            bottom: 5,
            right: 50
        }}>
            <Bar style={style.bar} progress={props.progress}  width={320} height={30}/>
        </TouchableWithoutFeedback>
    )
}
const style = StyleSheet.create({
    bar: {
        color: 'white',
        fontSize: 10,
        fontWeight: 'bold'
    },
    container: {
        justifyContent: 'center',
        paddingHorizontal: 10,
        height: 25,
        marginRight: 20,
        marginVertical: 5,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'white',
        backgroundColor: 'gray',
    }
})
export default Progress;