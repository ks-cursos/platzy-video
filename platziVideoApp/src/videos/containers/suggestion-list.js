import React, { Component } from "react";
import { FlatList, Text } from "react-native";
import Empty from "../components/empty"
import VerticalSeparator from "../components/vertical-separator"
import Layout from "../components/suggestion-list-layout";
import Suggest from "../components/suggestion";
class SuggestionList extends Component {
    renderEmpty = () => <Empty text="No hay ninguna sugerencias. :(" />;
    itemSeparator = () => <VerticalSeparator  />;
    renderItem = ({item}) => {return (<Suggest  {...item} />)}
    keyExtractor=({item})=>{
        console.log(item)
        return (item?item.id.toString():"-1")};
        _keyExtractor = (item, index) => item.id;
    render() {
        return (
            <Layout title="Recomendado para tí..">
                <FlatList keyExtractor={this.keyExtractor} ItemSeparatorComponent={this.itemSeparator} ListEmptyComponent={this.renderEmpty} data={this.props.list} renderItem={this.renderItem} />
            </Layout>
        )
    }
}
export default SuggestionList;