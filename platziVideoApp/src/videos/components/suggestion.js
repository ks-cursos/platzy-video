import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
function Suggestion(props) {
    return (
        <View style={style.container}>
            <View style={style.left}>
                <Image style={style.cover} source={require("../../../assets/logo.png")}></Image>
                <View style={style.genere}>
                    <Text style={style.genereText}>Acciòn</Text>
                </View>
            </View>
            <View style={style.rigth}>
                <Text style={style.title}>Adevebgarge</Text>
                <Text style={style.year}>2015</Text>
                <Text style={style.ratting}>5 estrellas</Text>
            </View>
        </View>
    )
}
const style = StyleSheet.create({
    container: {
        flexDirection:"row",
    },
    left: {

    },
    rigth: {
        paddingLeft:10,
        justifyContent:"space-between",
    },
    title: {
        fontSize:18,
        color:"#44546b",
    },
    cover: {
        width: 150,
        height: 100,
        resizeMode:"contain",
    },
    year: {
        backgroundColor:"#70b124",
        paddingVertical:4,
        paddingHorizontal:6,
        color:"white",
        fontSize:11,
        borderRadius:5,
        overflow:"hidden",
    },
    ratting: {
        

    },
    genere: {

    },
    genereText:{

    }
});
export default Suggestion;