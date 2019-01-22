import React, { Component } from 'react';
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import Splash from "./src/sections/components/splash";
import AppContainerWithState from "./src/app-navigator-with-state";
type Props = {};
export default class App extends Component<Props> {
  state = {
  }
  render() {
    console.disableYellowBox=true;
    return (
      <Provider store={store}>
        <PersistGate loading={<Splash />} persistor={persistor}>
          <AppContainerWithState />
        </PersistGate>
      </Provider>
    );
  }
}
