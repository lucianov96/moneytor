import React, { Component } from 'react';
import { Grid, Container, Typography, TextField, Button, Select, MenuItem} from '@material-ui/core';
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
        marginBottom: 10
    }
  }

class AddExpense extends Component {
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
                                Nuevo gasto
                            </Typography>
                            <form style={style.form}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <TextField name="Description" fullWidth label="Descripcion del gasto"/>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Select labelId="mark" style={style.select} fullWidth>
                                            <MenuItem value={"VS"}>Grupo 1</MenuItem>
                                        </Select>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Select labelId="mark" style={style.select} fullWidth>
                                            <MenuItem value={"EF"}>Efectivo</MenuItem>
                                            <MenuItem value={"TD"}>Tarjeta de débito</MenuItem>
                                            <MenuItem value={"TC"}>Tarjeta de crédito</MenuItem>
                                            <MenuItem value={"TB"}>Transferencia bancaria</MenuItem>
                                        </Select>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField type="number" name="Amount" fullWidth label="Importe"/>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button type="submit" variant="contained" fullWidth size="large" style={style.submit} color="primary">
                                            Registrar Gasto
                                        </Button> 
                                    </Grid>
                                </Grid>
                            </form>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        );
    }
}

export default AddExpense;

