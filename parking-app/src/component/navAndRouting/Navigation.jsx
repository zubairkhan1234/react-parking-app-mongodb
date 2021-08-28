
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Hidden from '@material-ui/core/Hidden';
import { Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { UseGlobalState } from '../../contexApi/Context'


const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
    linkColor: {
        color: '#ffff',
        textDecoration: 'none'
    },
    color: {
        color: 'black',
        display: 'block',
        margin: '0 auto'
    }
}));


export default function Navigation() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const GlobalState = UseGlobalState()
    console.log('navigation', GlobalState.loginStatus)
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    return (
        <>
            <Box className={classes.root} component={Hidden} mdDown>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                            Muhammad Zubair
                        </Typography>
                        {GlobalState.loginStatus === false ?
                            <>
                                <Link className={classes.linkColor} to="/"><Button color="inherit"> Signup </Button> </Link>
                                <Link className={classes.linkColor} to="/login"><Button color="inherit"> Login </Button> </Link>
                            </>
                            : null}
                        {GlobalState.loginStatus === true ?
                            <>
                                <Link className={classes.linkColor} to="/"><Button color="inherit"> Dashboard </Button> </Link>
                                <Link className={classes.linkColor} to="/parking-slots-booking"><Button color="inherit"> Booking </Button> </Link>
                                <Link className={classes.linkColor} to="/parking-slots-detail"><Button color="inherit"> detail </Button> </Link>
                            </>
                            : null}

                    </Toolbar>
                </AppBar>
            </Box>
            <Box className={classes.root} component={Hidden} lgUp>
                <CssBaseline />
                <AppBar
                    position="static"
                    className={clsx(classes.appBar, {
                        [classes.appBarShift]: open,
                    })}
                >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            className={clsx(classes.menuButton, open && classes.hide)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap>
                            Persistent drawer
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    className={classes.drawer}
                    variant="persistent"
                    anchor="left"
                    open={open}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <div className={classes.drawerHeader}>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                        </IconButton>
                    </div>
                    <List>
                        <Link className={classes.linkColor} to="/"><Button className={classes.color}> Signup </Button> </Link>
                        <Link className={classes.linkColor} to="/login"><Button className={classes.color}> Login </Button> </Link>
                        <Link className={classes.linkColor} to="/dashboard"><Button className={classes.color}> Dashboard </Button> </Link>
                        <Link className={classes.linkColor} to="/parking-slots-booking"><Button className={classes.color}> Booking </Button> </Link>
                        <Link className={classes.linkColor} to="/parking-slots-detail"><Button className={classes.color}> detail </Button> </Link>
                    </List>
                </Drawer>
            </Box>
        </>
    );
}