import React, { useState, useRef } from 'react';
import bookingImage from '../images/booking.jpg'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Box, Typography, Button } from '@material-ui/core';
import axios from 'axios'
import 'date-fns';
import moment from 'moment'
import url from '../url/baseUrl'
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
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));


export default function ParkingBookingFrom() {
    const classes = useStyles();
    const [endDate, setEndDate] = useState(new Date().toLocaleDateString());
    const [startDate, setStartDate] = useState(new Date().toLocaleDateString());
    const [startTime, setstartTime] = useState(new Date());
    const [endTime, setendTime] = useState(new Date());

    const handleStartDate = (date) => {
        setStartDate(date);
    };
    const handleEndDate = (date) => {
        setEndDate(date);
    };

    const handleDateChange = (date) => {
        setstartTime(date);
    };

    const handleDateChange2 = (date) => {
        setendTime(date);
    };

    console.log("zubair ", endTime.toLocaleTimeString())

    const bookingStart = new Date(startDate + " " + " " + startTime)
    const bookingEnd = new Date(endDate + " " + " " + endTime)
    console.log("accepted", bookingStart)
    console.log("accepted end", bookingEnd)

    const slotBooking = (event) => {
        event.preventDefault()
        console.log(startTime)
        console.log(endTime)
        console.log(startDate)
        console.log(endDate)
        if (moment(startDate) > moment(endDate)) {
            alert("End Date should be equal or greater than start date")
            // console.log("right1")
        } else {
            alert('date is okay')
        }
        if (endTime < startTime) {
            // console.log("right2")
            alert("End time should be greater than start time")
        } else {
            alert('Time is okay')
        }

        axios({
            method: "post",
            url: `${url}/slotbooking`,
            data: {
                startDate: bookingStart ,
                endDate: bookingStart,
                location: "karachi",
                slots: 1,
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
                                            label="Start Date"
                                            format="MM/dd/yyyy"
                                            value={startDate}
                                            onChange={handleStartDate}
                                            KeyboardButtonProps={{
                                                'aria-label': 'change date',
                                            }}
                                        />
                                    </Grid>
                                    <Grid>
                                        <KeyboardDatePicker
                                            margin="normal"
                                            id="date-picker-dialog"
                                            label="End Date"
                                            format="MM/dd/yyyy"
                                            value={endDate}
                                            onChange={handleEndDate}
                                            KeyboardButtonProps={{
                                                'aria-label': 'change date',
                                            }}
                                        />

                                    </Grid>
                                </Box>
                                <Box display="flex" justifyContent="space-around">
                                    <Grid>
                                        <KeyboardTimePicker
                                            margin="normal"
                                            id="time-picker"
                                            label="Start Time"
                                            value={startTime}
                                            onChange={handleDateChange}
                                            KeyboardButtonProps={{
                                                'aria-label': 'change time',
                                            }}
                                        />
                                    </Grid>
                                    <Grid>
                                        <KeyboardTimePicker
                                            margin="normal"
                                            id="time-picker"
                                            label="End Time "
                                            value={endTime}
                                            onChange={handleDateChange2}
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

