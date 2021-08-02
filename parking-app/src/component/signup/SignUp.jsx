import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Container, Box, Typography, TextField, Button } from '@material-ui/core';
import signUpImage from '../images/signup.jpg'



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
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


export default function SignUp() {
    const classes = useStyles();
    return (
        <Container>
            <Grid container className={classes.root} spacing={2}>
                <Grid item xs={6}  >
                    <Box>
                        <Typography className={classes.formHeader} variant="h4">
                            Please Register
                        </Typography>
                        <form action="" className={classes.form}>
                            <Grid>
                                <TextField className={classes.margin} fullWidth label="Name" />
                            </Grid>
                            <Grid>
                                <TextField className={classes.margin} fullWidth label="Email" />
                            </Grid>
                            <Grid>
                                <TextField className={classes.margin} fullWidth label="Phone" />
                            </Grid>
                            <Grid>
                                <TextField className={classes.margin} fullWidth label="Password" />
                            </Grid>
                            <Button className={classes.margin} variant="contained" color="primary">Register</Button>
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
