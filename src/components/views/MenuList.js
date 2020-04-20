import React, { Component } from 'react';
import { List, ListItem } from '@material-ui/core';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        backgroundColor: '#1e1e1e',
        color: 'white',
        height: '100%',
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
                    <ListItemLink href="#simple-list">
                        <ListItemText primary="Gastos" />
                    </ListItemLink>
                    <ListItemLink href="#simple-list">
                        <ListItemText primary="Reportes" />
                    </ListItemLink>
                    <ListItemLink href="#simple-list">
                        <ListItemText primary="Informes" />
                    </ListItemLink>
                    <ListItemLink href="#simple-list">
                        <ListItemText primary="Tarjetas" />
                    </ListItemLink>
                </List>
            </div>
        );
    }
}

export default withStyles(styles)(MenuList);
