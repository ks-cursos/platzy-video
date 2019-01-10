import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Home from "./src/screens/containers/home";
import Header from "./src/sections/components/header";
import SuggestionList from "./src/videos/containers/suggestion-list";
import CategoryList from "./src/videos/containers/category-list";
import Player from "./src/player/containers/player";
import API from "./src/utils/api"
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
type Props = {};
export default class App extends Component<Props> {
  state = {
    tes:"test"
  }
  async componentDidMount() {
    const categorieList = await API.getMovies();
    store.dispatch({
      type: "SET_CATEGORY_LIST",
      payload: {
        categorieList
      }
    });
    const suggestionList = await API.getSuggestion(10);
    store.dispatch({
      type: "SET_SUGGESTION_LIST",
      payload: {
        suggestionList
      }
    });
  }



  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={<Text>Crgando</Text>} persistor={persistor}>
          <Home>
            <Header />
            <Player />
            <Text>Buscador</Text>
            <Text>Categorias</Text>
            <CategoryList />
            <SuggestionList />
          </Home>
        </PersistGate>
      </Provider>
    );
  }
}
