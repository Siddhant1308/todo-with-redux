import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Grid } from '@mui/material';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

const App = () => {
  return (
    <Provider store={store}>
      <Grid container>
        <Grid item xs={3}>
          <Sidebar />
        </Grid>
        <Grid item xs={9}>
          <MainContent />
        </Grid>
      </Grid>
    </Provider>
  );
};

export default App;
