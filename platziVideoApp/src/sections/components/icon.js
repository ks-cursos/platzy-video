import React from "react";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
function IconApp(props) {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <Icon name={props.name} size={props.size} color={props.color} />
        </TouchableOpacity>
    )
}
export default IconApp;