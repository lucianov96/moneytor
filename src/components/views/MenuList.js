import React, { Component } from 'react';
import { List, ListItem } from '@material-ui/core';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        backgroundColor: '#1e1e1e',
        color: 'white',
        height: '100%',
    },
    rootHover: {
        [theme.breakpoints.down("xs")]: {
            textAlign: "center"
        },
        '&:hover': {
            backgroundColor: '#2e2e2e',
        }
    }
  });

  function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
  }  

class MenuList extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className = {classes.root}>
                <List>
                    <ListItemLink className = {classes.rootHover} href="../expenses">
                        <ListItemText primary="Gastos" />
                    </ListItemLink>
                    <ListItemLink className = {classes.rootHover} href="../reports">
                        <ListItemText primary="Reportes" />
                    </ListItemLink>
                    <ListItemLink className = {classes.rootHover} href="../informs">
                        <ListItemText primary="Informes" />
                    </ListItemLink>
                    <ListItemLink className = {classes.rootHover} href="../cards">
                        <ListItemText primary="Tarjetas" />
                    </ListItemLink>
                </List>
            </div>
        );
    }
}

export default withStyles(styles)(MenuList);
