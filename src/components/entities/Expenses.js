import React, { Component } from 'react';
import { Grid, Container, Typography, Button} from '@material-ui/core';
import MenuList from '../views/MenuList';

const style = {
    paper: {
        border: "1px solid #ccc",
        borderRadius: 10,
        margin: 32,
        padding: 16,
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    center: {
        textAlign: "center"
    },
    avatar: {
        margin: 8,
    },
    form: {
        marginTop: 10
    },
    select: {
        marginTop: 10,
    },
    submit: {
        marginTop: 10,
        marginBottom: 10,
    }
  }

class Expenses extends Component {
    render() {
        return (
            <Container disableGutters maxWidth="xl">
                <Grid container>
                    <Grid item sm={2} xs={12}>
                        <MenuList/>
                    </Grid>
                    <Grid item sm={10} xs={12}>
                        <div style={style.paper}>
                            <Typography component="h1" variant="h5">
                                Gastos
                            </Typography>
                            <div style={style.paper}>
                                <Typography component="h1" variant="h6">
                                    Este es tu resumen del último mes:
                                </Typography>    
                                <Grid container spacing={2}>
                                    <Grid item md={6} xs={12}>
                                        <Typography>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                        </Typography>
                                    </Grid>
                                    <Grid item md={6} xs={12}>
                                        <Typography>
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </div>
                            <Grid item xs={12}>
                                <Button type="submit" variant="contained" fullWidth size="large" style={style.submit} color="primary">
                                    Registrar Gasto
                                </Button> 
                            </Grid>
                            <div style={style.paper}>
                                <Typography component="h1" variant="h6">
                                    Estos son tus últimos 10 gastos:
                                </Typography>
                                <Grid item xs={12}>
                                    <Typography>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                    </Typography>
                                </Grid>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        );
    }
}

export default Expenses;

