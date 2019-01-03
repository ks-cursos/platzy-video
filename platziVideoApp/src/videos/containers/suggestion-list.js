import React, { Component } from "react";
import { FlatList, Text } from "react-native";
import Empty from "../components/empty"
import VerticalSeparator from "../components/vertical-separator"
import Layout from "../components/suggestion-list-layout";
import Suggest from "../components/suggestion";
class SuggestionList extends Component {
    renderEmpty = () => <Empty text="No hay ninguna sugerencias. :(" />;
    itemSeparator = () => <VerticalSeparator  color="red"/>;
    renderItem = ({item}) => {return (<Suggest  {...item}/>)}
    render() {
        const list = [
            {
                key: '1',
                title: 'Comedia'
            },
            {
                key: '2',
                title: 'Ciencia Ficcion'
            },
            {
                key: '3',
                title: 'Eroticas'
            }
        ];
        return (
            <Layout title="Recomendado para tí.">
                <FlatList ItemSeparatorComponent={this.itemSeparator} ListEmptyComponent={this.renderEmpty} data={list} renderItem={this.renderItem} />
            </Layout>
        )
    }
}
export default SuggestionList;