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
    submit: {
        marginTop: 10,
        marginBottom: 10
    }
  }

class AddCard extends Component {
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
                                Nueva tarjeta
                            </Typography>
                            <form style={style.form}>
                                <Grid container spacing={2}>
                                    <Grid item xs={4}>
                                        <TextField 
                                        onInput={(e)=>{ 
                                            e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,4)
                                        }}
                                        type ="number" name="FirstNumbers" fullWidth/>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <div style={style.center}>
                                            <Typography component="h2" variant="h5">
                                                XXXX XXXX
                                            </Typography>
                                        </div>    
                                    </Grid>
                                    <Grid item xs={4}>
                                        <TextField 
                                        onInput={(e)=>{ 
                                            e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,4)
                                        }}
                                        min={0} type ="number" name="FinalNumbers" fullWidth/>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Select labelId="mark" id="demo-simple-select" fullWidth>
                                            <MenuItem value={"VS"}>VISA</MenuItem>
                                            <MenuItem value={"MC"}>Master Card</MenuItem>
                                            <MenuItem value={"AE"}>American Express</MenuItem>
                                        </Select>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button type="submit" variant="contained" fullWidth size="large" style={style.submit} color="primary">
                                            Agregar Tarjeta
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

export default AddCard;

