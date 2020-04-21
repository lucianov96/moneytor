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
        alignItems: "center",
    },
    avatar: {
        margin: 8,
    },
    form: {
        marginTop: 10,
    },
    select: {
        marginTop: 16,
    },
    submit: {
        marginTop: 10,
        marginBottom: 10
    }
  }

class Reports extends Component {
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
                                Reportes
                            </Typography>
                            <form style={style.form}>
                                <Grid container spacing={2}>   
                                    <Grid item xs={12}>
                                        <TextField name="Description" fullWidth label="Descripción"/>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Select displayEmpty value="" style={style.select} fullWidth>
                                            <MenuItem value="">Grupo</MenuItem>
                                        </Select>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Select displayEmpty value="" style={style.select} fullWidth>
                                            <MenuItem value="" disabled>Método de pago</MenuItem>
                                            <MenuItem value={"EF"}>Efectivo</MenuItem>
                                            <MenuItem value={"TD"}>Tarjeta de débito</MenuItem>
                                            <MenuItem value={"TC"}>Tarjeta de crédito</MenuItem>
                                            <MenuItem value={"TB"}>Transferencia bancaria</MenuItem>
                                        </Select>
                                    </Grid> 
                                    <Grid item md={6} xs={12}>
                                        <Select displayEmpty value="" style={style.select} fullWidth>
                                            <MenuItem value="" disabled>El importe debe ser</MenuItem>
                                            <MenuItem value={"equal"}>Igual a</MenuItem>
                                            <MenuItem value={"less"}>Mayor a</MenuItem>
                                            <MenuItem value={"mess"}>Menor a</MenuItem>
                                        </Select>
                                    </Grid>    
                                    <Grid item md={6} xs={12}>
                                        <TextField name="Amount" fullWidth label="Importe"/>
                                    </Grid>
                                    <Grid item md={6} xs={12}>
                                        <Select displayEmpty value="" style={style.select} fullWidth>
                                            <MenuItem value="" disabled>La fecha debe ser</MenuItem>
                                            <MenuItem value={"equal"}>Igual a</MenuItem>
                                            <MenuItem value={"less"}>Mayor a</MenuItem>
                                            <MenuItem value={"mess"}>Menor a</MenuItem>
                                        </Select>
                                    </Grid>    
                                    <Grid item md={6} xs={12}>
                                        <TextField name="Date" type="date" style={style.select} fullWidth/>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button type="submit" variant="contained" fullWidth size="large" style={style.submit} color="primary">
                                            Buscar
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

export default Reports;