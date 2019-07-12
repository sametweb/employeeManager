import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import firebase from "firebase";
import ReduxThunk from "redux-thunk";
import reducers from "./reducers";
import Router from "./Router";

class App extends Component {
  componentWillMount() {
    const firebaseConfig = {
      apiKey: "AIzaSyBVxYej1kbHHQMh1v4828HNm0wrxCCHMeU",
      authDomain: "manager-6d5c4.firebaseapp.com",
      databaseURL: "https://manager-6d5c4.firebaseio.com",
      projectId: "manager-6d5c4",
      storageBucket: "",
      messagingSenderId: "108038664588",
      appId: "1:108038664588:web:02c64e53cbb0d73d"
    };
    firebase.initializeApp(firebaseConfig);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
