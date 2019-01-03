import React, { Component } from "react";
import { FlatList, Text } from "react-native";

import Layout from "../components/suggestion-list-layout";
class SuggestionList extends Component {
    render() {
        const list = [
            {
                key: '1',
                title: 'Comedia'
            },
            {
                key: '2',
                title: 'Ciencia Ficcion'
            }
        ];
        return (
            <Layout title="Recomendado para tí.">
                <FlatList data={list} renderItem={({ item }) => <Text>{item.title}</Text>} />
            </Layout>
        )
    }
}
export default SuggestionList;