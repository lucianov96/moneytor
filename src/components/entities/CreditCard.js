import React, { Component } from 'react';
import { Typography, Grid} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    card: {
        borderRadius: 10,
        backgroundColor: '#FF8A1E',
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    }
});

class CreditCard extends Component {
    render() {
        const { classes } = this.props;
        return (
            <Grid item md={6} xs={12}>
                <Grid item xs={8} className = {classes.card}>
                    <Typography component="h1" variant="h5">
                        VISA
                    </Typography>
                    <Typography component="h1" variant="h5">
                        1111 2222 3333 4444
                    </Typography>
                    <Typography component="h1" variant="h5">
                        06/12
                    </Typography>
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(CreditCard);

