import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import clifton from '../images/clifton.jpg'
import highway from '../images/highway.jpg'
import talwaar3 from '../images/3talwaar.jpg'
import { Link } from 'react-router-dom';
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
});



export default function ParkingAreas() {
  const classes = useStyles();

  return (
    <>
      <Grid container spacing={3} justifyContent="space-around" style={{paddingTop:"5%", width:'100%'}}>
        <Grid item>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={clifton}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Clifton
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                  across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Link to="/parking-slots-booking">
                <Button size="small" color="primary">
                  Parking Booking
                </Button>
              </Link>
              <Link to="/parking-slots-detail">
                <Button size="small" color="primary">
                  Slot details
                </Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>
        <Grid item>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={highway}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Highway
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                  across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Link to="/parking-slots-booking">
                <Button size="small" color="primary">
                  Parking Booking
                </Button>
              </Link>
              <Link to="/parking-slots-detail">
                <Button size="small" color="primary">

                  Slot details
                </Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>
        <Grid item>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={talwaar3}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  3 Talwaar
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                  across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Link to="/parking-slots-booking">
                <Button size="small" color="primary">
                  Parking Booking
                </Button>
              </Link>
              <Link to="/parking-slots-detail">
                <Button size="small" color="primary">

                  Slot details
                </Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>
        <Grid item>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={highway}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Highway
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                  across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Link to="/parking-slots-booking">
                <Button size="small" color="primary">
                  Parking Booking
                </Button>
              </Link>
              <Link to="/parking-slots-detail">
                <Button size="small" color="primary">

                  Slot details
                </Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </>
  )
}




