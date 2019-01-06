import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Home from "./src/screens/containers/home";
import Header from "./src/sections/components/header";
import SuggestionList from "./src/videos/containers/suggestion-list";
import CategoryList from "./src/videos/containers/category-list";
import Player from "./src/player/containers/player";
import API from "./src/utils/api"

type Props = {};
export default class App extends Component<Props> {
  state = {
    suggestionList: [],
    categoryList: []
  }

  async componentDidMount() {
    const movies = await API.getSuggestion(10);
    const categories = await API.getMovies();
    console.log(categories);
    this.setState({
      suggestionList: movies,
      categoryList: categories
    });
  }
  render() {
    return (
      <Home>
        <Header />
        <Player/>
        <Text>Buscador</Text>
        <Text>Categorias</Text>
        <CategoryList list={this.state.categoryList} />
        <SuggestionList list={this.state.suggestionList} />

      </Home>
    );
  }
}
