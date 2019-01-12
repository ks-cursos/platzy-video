import React, { Component } from 'react';
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import Splash from "./src/sections/components/splash";
import AppLayout from "./src/app";
type Props = {};
export default class App extends Component<Props> {
  state = {
  }
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={<Splash />} persistor={persistor}>
          <AppLayout />
        </PersistGate>
      </Provider>
    );
  }
}
