import React, { useState, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Container, Box, Typography, Button } from '@material-ui/core';
import bookingImage from '../images/booking.jpg'
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        marginTop: '5%'

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
        margin: '10% 0%',
        width: '50%',
        position: 'relative',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    }
}));


export default function ParkingBookingFrom() {
    const classes = useStyles();
    const [endTime, setEndTime] = useState(new Date());
    const [startTime, setStartTime] = useState(new Date());
    const [startDate, setStartDate] = useState(new Date().toLocaleDateString());
    const [endDate, setEndDate] = useState(new Date().toLocaleDateString());

    const handleStartDate = (date) => {
        setStartDate(date.toLocaleDateString());
    };
    const handleEndDate = (date) => {
        setEndDate(date.toLocaleDateString());
    };
    const handleStartTime = (date) => {
        setStartTime(date.toLocaleTimeString());
    };
    const handleEndTime = (date) => {
        setEndTime(date.toLocaleTimeString());
    };



    const bookingStart = new Date(startDate + " " + " " + startTime)
    const bookingEnd = new Date(endDate + " " + " " + endTime)


    const slotBooking = (event) => {
        event.preventDefault()



        console.log(startTime)
        console.log(endTime)
        console.log(startDate)
        console.log(endDate)
        if (startDate > endDate) {
            alert("End Date should be equal or greater than start date")
            console.log("right1")
        } else if(endTime < startTime) {
            console.log("right2")
            alert("End time should be greater than start time")
        }else{
            console.log('wrong')
        
        }


    }







    return (
        <Container>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>

                <Grid container className={classes.root} spacing={2}>
                    <Grid item xs={6}  >
                        <Box>
                            <Typography className={classes.formHeader} variant="h4">
                                Book Your Parking Slot
                            </Typography>
                            <form action="" className={classes.form} onSubmit={slotBooking}>
                                <Box display="flex" justifyContent="space-around">
                                    <Grid>
                                        <KeyboardDatePicker
                                            margin="normal"
                                            id="date-picker-dialog"
                                            label="Pick your Start Date"
                                            format="MM/dd/yyyy"
                                            name='zubarikha n'
                                            value={startDate}
                                            onChange={handleStartDate}
                                            KeyboardButtonProps={{
                                                'aria-label': 'change date',
                                            }}
                                        />
                                    </Grid>
                                    <Grid>
                                        <KeyboardTimePicker
                                            margin="normal"
                                            id="time-picker"
                                            label="Pick your Start Time"
                                            defaultValue={startTime}
                                            onChange={handleStartTime}
                                            KeyboardButtonProps={{
                                                'aria-label': 'change time',
                                            }}
                                        />
                                    </Grid>
                                </Box>
                                <Box display="flex" justifyContent="space-around">
                                    <Grid>
                                        <KeyboardDatePicker
                                            margin="normal"
                                            id="date-picker-dialog"
                                            label="Pick your End Date"
                                            format="MM/dd/yyyy"
                                            value={endDate}
                                            onChange={handleEndDate}
                                            KeyboardButtonProps={{
                                                'aria-label': 'change date',
                                            }}
                                        />
                                    </Grid>
                                    <Grid>
                                        <KeyboardTimePicker
                                            margin="normal"
                                            id="time-picker"
                                            label="Pick your End Date"
                                            defaultValue={endTime}
                                            onChange={handleEndTime}
                                            KeyboardButtonProps={{
                                                'aria-label': 'change time',
                                            }}
                                        />
                                    </Grid>
                                </Box>
                                <Button className={classes.margin} variant="contained" color="primary" type="submit">Register</Button>
                            </form>
                        </Box>
                    </Grid>
                    <Grid item xs={6} style={{ position: 'relative' }}>
                        <Box style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '80%' }} >
                            <img className={classes.image} src={bookingImage} alt="" />
                        </Box>
                    </Grid>
                </Grid>
            </MuiPickersUtilsProvider>
        </Container>
    );
}

