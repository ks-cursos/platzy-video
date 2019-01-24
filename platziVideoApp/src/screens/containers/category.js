import React, { Component } from "react";
import { FlatList, Text } from "react-native";
import Empty from "../../videos/components/empty"
import VerticalSeparator from "../../sections/components/vertical-separator"
import Layout from "../../videos/components/suggestion-list-layout";
import Suggest from "../../videos/components/suggestion";
import { connect } from "react-redux";
import Header from "../../sections/components/header";
import Close from "../../sections/components/close";
import { withNavigation } from "react-navigation"
function mapStateToProps(state) {
    return {
        list: state.videos.categorieList
    };
}
class Category extends Component {
    static navigationOptions = (navigation) => {
        return {
            header: <Header>
                <Close onPress={() => {navigation.navigation.goBack() }} />
            </Header>
        }
    }
    renderEmpty = () => <Empty text="No hay ninguna sugerencias. :(" />;
    itemSeparator = () => <VerticalSeparator />;
    viewMovie = (item) => {
        this.props.dispatch({
            type: "SET_SELECTED_MOVIE",
            payload: {
                movie: item
            }
        })
        this.props.navigation.navigate('Movie')
    }
    renderItem = ({ item }) => {
        return (<Suggest onPress={() => { this.viewMovie(item) }} {...item} />)
    }
    keyExtractor = ({ item }) => {
        return (item ? item.id.toString() : "-1")
    };
    _keyExtractor = (item, index) => item ? item.id.toString() : index;
    render() {
        return (
            <Layout title={`${this.props.navigation.getParam("genre","Categoria")}` }>
                <FlatList keyExtractor={this._keyExtractor} ItemSeparatorComponent={this.itemSeparator} ListEmptyComponent={this.renderEmpty} data={this.props.list} renderItem={this.renderItem} />
            </Layout>
        )
    }
}
export default withNavigation(connect(mapStateToProps)(Category));