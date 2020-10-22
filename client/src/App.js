import React from 'react';
import './App.css';
import Grid from "@material-ui/core/Grid";
import {Provider} from "react-redux";
import RoutersIndex from "./routes/RoutersIndex";
import store from "./redux/store";
import Container from "@material-ui/core/Container";


function App() {
  return (
    <Container maxWidth="sm">
      <Provider store={store}>
        <RoutersIndex />
      </Provider>
    </Container>
  );
}

export default App;
