import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './App.css';
import MenuList from './components/views/MenuList';
import Navbar from './components/layouts/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from './theme/theme';
import RegisterUser from './components/security/RegisterUser';
import AddCard from './components/entities/AddCard';

class App extends Component{
  render(){
    return (
      <Router>
        <MuiThemeProvider theme={theme}>
          <Navbar/>
          <Grid container>
            <Switch>
              <Route path="/" exact component={MenuList}></Route>
              <Route path="/register-user" exact component={RegisterUser}></Route>
              <Route path="/cards/add-card" exact component={AddCard}></Route>
            </Switch>
          </Grid>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
