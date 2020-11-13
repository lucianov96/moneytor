import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {Button} from '@material-ui/core';

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

class LogoutButton extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.sectionDesktop}>
                <Button color="inherit">Sign out</Button>
            </div>
        )
    }
}

export default withStyles(styles)(LogoutButton);