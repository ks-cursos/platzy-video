import React, { Component, Fragment } from "react";
import { Text } from 'react-native';
import Header from "../../sections/components/header";
import SuggestionList from "../../videos/containers/suggestion-list";
import CategoryList from "../../videos/containers/category-list";
import Search from "../../sections/container/search"
import API from "../../utils/api";
import { connect } from "react-redux";
class Home extends Component {
    static navigationOptions = () => {
        return {
            header: Header
        }
    }
    async componentDidMount() {
        const categorieList = await API.getMovies();
        this.props.dispatch({
            type: "SET_CATEGORY_LIST",
            payload: {
                categorieList
            }
        });
        const suggestionList = await API.getSuggestion(10);
        this.props.dispatch({
            type: "SET_SUGGESTION_LIST",
            payload: {
                suggestionList
            }
        });
    }
    render() {
        return (
            <Fragment>
                <Search Home/>
                <Text>Categorias</Text>
                <CategoryList />
                <SuggestionList />
            </Fragment>
        )
    }
}
export default connect(null)(Home);