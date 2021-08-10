import React, {useRef} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Container, Box, Typography, TextField, Button } from '@material-ui/core';
import signUpImage from '../images/login.png'
import axios from 'axios'
import url from '../url/baseUrl'



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        marginTop:'5%'

    },
    paper: {
        height: 140,
        width: 100,
    },
    control: {
        padding: theme.spacing(2),
    },
    image: {
        width: '90%',
        borderRadius: '20px',
    },
    formHeader: {
        textAlign: 'center'
    },
    form: {
        width: '85%',
        margin: "0 auto",
        marginTop: '8%'
    },
    margin: {
        margin: '4% 0%'
    }
}));


export default function Login() {
    const classes = useStyles();
    
    const userEmail = useRef()
    const userPassword = useRef()
    
    const costumerLogin = (e) => {
        e.preventDefault()
        console.log(userPassword.current.value)
        console.log(userEmail.current.value)


        axios({
            method: 'post',
            url: `${url}/login`,
            data: {
                userEmail: userEmail.current.value,
                userPassword: userPassword.current.value,
            },
            withCredentials: true
        }).then((res) => {
            console.log(res)

        }).catch((err) => {
            console.log(err)
        })
    }


    return (
        <Container>
            <Grid container className={classes.root} spacing={2}>
                <Grid item xs={6}  >
                    <Box>
                        <Typography className={classes.formHeader} variant="h4">
                            Please Login
                        </Typography>
                        <form onSubmit={costumerLogin} className={classes.form}>
                            <Grid>
                                <TextField inputRef={userEmail} className={classes.margin} fullWidth label="Email" />
                            </Grid>
                            <Grid>
                                <TextField inputRef={userPassword} className={classes.margin} fullWidth label="Password" />
                            </Grid>
                            <Button type="submit" className={classes.margin} variant="contained" color="primary">Register</Button>
                        </form>
                    </Box>
                </Grid>
                <Grid item xs={6} style={{ position: 'relative' }}>
                    <Box style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '80%' }} >
                        <img className={classes.image} src={signUpImage} alt="" />
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}
