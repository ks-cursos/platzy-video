import React from "react";
import { View, Text, StyleSheet } from "react-native";
function VerticalSeparator(props) {
    return (
        <View style={[style.separator, { borderColor: (props.color) ? props.color : "#eaeaea" }]}>
            <Text >Esto e sun separador.</Text>
        </View>
    );
}
const style = StyleSheet.create({
    separator: {
        borderTopWidth: 1,
    }
})
export default VerticalSeparator;