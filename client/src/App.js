import React from 'react';
import './App.css';
import Grid from "@material-ui/core/Grid";
import {Provider} from "react-redux";
import RoutersIndex from "./routes/RoutersIndex";
import store from "./redux/store";


function App() {
  return (
    <Grid container>
      <Provider store={store}>
        <RoutersIndex />
      </Provider>
    </Grid>
  );
}

export default App;
