import React from "react";
import {View,Text,StyleSheet} from "react-native";
function Empty(props){
    return(
        <View style={style.container}> 
            <Text style={style.empty}>{props.text}.</Text>
        </View>
    )
}
const style = StyleSheet.create({
    container: {padding:10,},
    empty:{
        fontSize:16,
    }
});

export default Empty;