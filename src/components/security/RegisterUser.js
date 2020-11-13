import React, { Component } from 'react';
import { Grid, Container, Typography, TextField, Button} from '@material-ui/core';

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

class RegisterUser extends Component {
    state = {
        user: {
            user:'',
            email:'',
            password:''
        }
    }

    onChange = e => {
        let user = Object.assign({}, this.state.user);
        user[e.target.name] = e.target.value;
        this.setState({
            user : user 
        })
    }

    registerUser = e => {
        e.preventDefault();
        console.log(this.state.user);
    }

    render() {
        return (
            <Container maxWidth="sm">
                <div style={style.paper}>
                    <Typography component="h1" variant="h5">
                        Registre su cuenta
                    </Typography>
                    <form style={style.form}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField name="user" onChange={this.onChange} value={this.state.user.user} fullWidth label="Usuario"/>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField name="email" onChange={this.onChange} value={this.state.user.email} fullWidth label="Email"/>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField type="password" name="password" onChange={this.onChange} value={this.state.user.password} fullWidth label="Contraseña"/>
                            </Grid>
                            <Grid item xs={12}>
                                <Button type="submit" onClick={this.registerUser} variant="contained" fullWidth size="large" style={style.submit} color="primary">
                                    Registrarse
                                </Button> 
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container>
        );
    }
}

export default RegisterUser;

