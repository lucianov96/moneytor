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

class Informs extends Component {

    state = {
        inform: {
            paidMethod:'',
            easyOption:'',
            sinceDate:'',
            untilDate:''
        }
    }

    onChange = e => {
        let inform = Object.assign({}, this.state.inform);
        inform[e.target.name] = e.target.value;
        this.setState({
            inform : inform 
        })
    }

    createInform = e => {
        e.preventDefault();
        console.log(this.state.inform);
    }

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
                                Informes
                            </Typography>
                            <form style={style.form}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <Select displayEmpty name="paidMethod" onChange={this.onChange} value={this.state.inform.paidMethod} style={style.select} fullWidth>
                                            <MenuItem value="" disabled>Método de pago</MenuItem>
                                            <MenuItem value={"EF"}>Efectivo</MenuItem>
                                            <MenuItem value={"TD"}>Tarjeta de débito</MenuItem>
                                            <MenuItem value={"TC"}>Tarjeta de crédito</MenuItem>
                                            <MenuItem value={"TB"}>Transferencia bancaria</MenuItem>
                                        </Select>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Select displayEmpty name="easyOption" onChange={this.onChange} value={this.state.inform.easyOption} style={style.select} fullWidth>
                                            <MenuItem value="" disabled>Opciones sencillas</MenuItem>
                                            <MenuItem value={"LW"}>Última semana</MenuItem>
                                            <MenuItem value={"LQ"}>Última quincena</MenuItem>
                                            <MenuItem value={"LM"}>Último mes</MenuItem>
                                        </Select>
                                    </Grid>    
                                    <Grid item md={6} xs={12}>
                                        <TextField name="sinceDate" type="date" onChange={this.onChange} value={this.state.inform.sinceDate} style={style.select} fullWidth/>
                                    </Grid>
                                    <Grid item md={6} xs={12}>
                                        <TextField name="untilDate" type="date" onChange={this.onChange} value={this.state.inform.untilDate} style={style.select} fullWidth/>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button type="submit" onClick={this.createInform} variant="contained" fullWidth size="large" style={style.submit} color="primary">
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

export default Informs;