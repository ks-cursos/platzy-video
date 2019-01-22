import React, { Component } from "react";
import { FlatList, Text } from "react-native";
import Empty from "../components/empty"
import VerticalSeparator from "../../sections/components/vertical-separator"
import Layout from "../components/suggestion-list-layout";
import Suggest from "../components/suggestion";
import { connect } from "react-redux";
import {withNavigation} from "react-navigation"
function mapStateToProps(state) {
    return {
        list:state.videos.suggestionList
    };
}
class SuggestionList extends Component {
    viewMovie=(item)=>{
        this.props.dispatch({
            type:"SET_SELECTED_MOVIE",
            payload:{
                movie:item
            }
        })
        this.props.navigation.navigate('Movie')
    }
    renderEmpty = () => <Empty text="No hay ninguna sugerencias. :(" />;
    itemSeparator = () => <VerticalSeparator />;
    renderItem = ({ item }) => { return (<Suggest onPress={()=>{this.viewMovie(item)}} {...item} />) }
    keyExtractor = ({ item }) => {
        return (item ? item.id.toString() : "-1")
    };
    _keyExtractor = (item, index) => item ? item.id.toString() : index;
    render() {
        return (
            <Layout title="Recomendado para tí..">
                <FlatList keyExtractor={this._keyExtractor} ItemSeparatorComponent={this.itemSeparator} ListEmptyComponent={this.renderEmpty} data={this.props.list} renderItem={this.renderItem} />
            </Layout>
        )
    }
}
export default withNavigation(connect(mapStateToProps)(SuggestionList));