import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Toolbar, Typography, Button, IconButton } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    sectionDesktop: {
        display: "none",
        [theme.breakpoints.up("md")]: {
            display: "flex"
        }
    },
    sectionMobile: {
        display: "flex",
        [theme.breakpoints.up("md")]: {
            display: "none"
        }
    },
    grow: {
        flexGrow: 1
    }
  });

class Navbar extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6">
                            MONEYTOR
                        </Typography>
                        <div className={classes.grow}></div>
                        <div className={classes.sectionDesktop}>
                            <Button color="inherit">Login</Button>
                        </div>
                        <div className={classes.sectionDesktop}>
                            <Button color="inherit">Sign in</Button>
                        </div>
                        <div className={classes.sectionMobile}>
                            <IconButton color="inherit">
                                <i className ="material-icons">more_vert</i>
                            </IconButton>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default withStyles(styles)(Navbar);