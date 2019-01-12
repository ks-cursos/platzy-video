import React, { Component } from "react";
import { Text, View } from 'react-native';
import Home from "./screens/containers/home";
import Header from "./sections/components/header";
import SuggestionList from "./videos/containers/suggestion-list";
import CategoryList from "./videos/containers/category-list";
import Movie from "./screens/containers/movie";
import Search from "./sections/container/search"
import API from "./utils/api";
import { connect } from "react-redux";
function mapStateToProps(state) {
    debugger;
    return {
        selectedMovie: state.selectedMovie
    };
}

class AppLayout extends Component {
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
        if (this.props.selectedMovie) {
            return <Movie />
        }
        return (
            <Home>
                <Header />
                <Search/>
                <Text>Categorias</Text>
                <CategoryList />
                <SuggestionList />
            </Home>
        )
    }
}
export default connect(mapStateToProps)(AppLayout);