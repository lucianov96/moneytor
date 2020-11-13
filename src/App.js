import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './App.css';
import Navbar from './components/layouts/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from './theme/theme';
import RegisterUser from './components/security/RegisterUser';
import AddCard from './components/entities/AddCard';
import AddExpense from './components/entities/AddExpense';
import Reports from './components/entities/Reports';
import Informs from './components/entities/Informs';
import Expenses from './components/entities/Expenses';
import Cards from './components/entities/Cards';

class App extends Component{
  render(){
    return (
      <Router>
        <MuiThemeProvider theme={theme}>
          <Navbar/>
          <Grid container>
            <Switch>
              <Route path="/register-user" exact component={RegisterUser}></Route>
              <Route path="/cards/add-card" exact component={AddCard}></Route>
              <Route path="/expenses/add-expense" exact component={AddExpense}></Route>
              <Route path="/reports" exact component={Reports}></Route>
              <Route path="/informs" exact component={Informs}></Route>
              <Route path="/expenses" exact component={Expenses}></Route>
              <Route path="/cards" exact component={Cards}></Route>
            </Switch>
          </Grid>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
