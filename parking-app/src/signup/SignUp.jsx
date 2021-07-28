import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Container, Box, Typography, TextField, Button } from '@material-ui/core';
import signUpImage from '../images/signup.jpg'



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 140,
        width: 100,
    },
    control: {
        padding: theme.spacing(2),
    },
    image: {
        width: '100%',
        borderRadius: '20px'
    },
    formHeader: {
        textAlign: 'center'
    },
    form: {
        width: '70%',
        margin: "0 auto"
    }
}));


export default function SignUp() {
    const classes = useStyles();
    return (
        <Container>
            <Grid container className={classes.root} spacing={2}>
                <Grid item xs={6}>
                    <Box>
                        <img className={classes.image} src={signUpImage} alt="" />
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Box>
                        <Typography className={classes.formHeader} variant="h4">
                            Please Register
                        </Typography>
                        <form action="" className={classes.form}>
                            <Grid>
                                <TextField fullWidth label="Name" />
                            </Grid>
                            <Grid>
                                <TextField fullWidth label="Email" />
                            </Grid>
                            <Grid>
                                <TextField fullWidth label="Phone" />
                            </Grid>
                            <Grid>
                                <TextField fullWidth label="Password" />
                            </Grid>

                            <Button variant="contained" color="primary">Register</Button>
                        </form>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}
