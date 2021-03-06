import React, { useState } from "react";
import { fade, makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

import ClearIcon from "@material-ui/icons/Clear";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import {
  Tabs,
  Tab,
  Button,
  Grid,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import MenuIcon from "@material-ui/icons/Menu";
import { isCompositeComponent } from "react-dom/test-utils";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  grow: {
    // flexGrow: 1,
    ...theme.mixins.toolbar,
  },

  growDrawer: {
    // ...theme.mixins.toolbar,
    width: "auto",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    // display: "none",
    fontFamily: theme.font.primary.main,

    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
    [theme.breakpoints.down("xs")]: {
      // marginTop: "-5em",
      display: "block",
      marginLeft: "5px",
    },
    [theme.breakpoints.down("md")]: {
      // marginTop: "-5em",
      // color: 'red'
    },
    color: theme.palette.primary.main,
    marginLeft: "3em",
    marginTop: "8px",
    fontSize: "18px",
  },
  titleScroll: {
    // display: "none",
    marginTop: "8px",
    fontFamily: theme.font.primary.main,

    [theme.breakpoints.down("xs")]: {
      // marginTop: "5em",
      marginLeft: "1px",
      // color: 'yellow'
    },
    color: "black",
    marginLeft: "1em",
    fontSize: "18px",
  },
  appBar: {
    backgroundColor: "transparent",
    transition: theme.transitions.create(["background-color"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.standard,
    }),
    padding: "0 20px",
    // zIndex: theme.zIndex.modal + 1
  },
  appBarScrolled: {
    backgroundColor: "#FFFFFF",
    borderBottom: "1px solid #ededed",
    transition: theme.transitions.create(["background-color"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.standard,
    }),
  },

  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  opa: {
    background: "transparent",
    // opacity: '0.6'
  },
  tabContainer: {
    // marginTop: '-7px'
  },
  tab: {
    marginLeft: "25px",
    minWidth: 5,
    textTransform: "none",
    fontWeight: 9000,
    color: theme.palette.primary.main,
    fontFamily: theme.font.primary.main,

    // color: "white",
    fontSize: "1em",
  },
  tabScrolled: {
    marginLeft: "25px",
    minWidth: 5,
    textTransform: "none",
    fontWeight: 9000,
    fontFamily: theme.font.primary.main,
    color: "black",
    fontSize: "1em",
  },
  btn: {
    fontSize: "12px",
    color: theme.palette.primary.main,
    boxShadow: "none",
    fontFamily: theme.font.primary.main,
    textTransform: "none",
    padding: "7px 20px ",
    borderRadius: "5px",

    "&:hover": {
      boxShadow: "none",
      backgroundColor: theme.palette.secondary.main,
      textDecoration: "none",
      color: theme.palette.primary.main,
    },
    "&:active":{
      outline:"none",

    }
  },
  scrollBtn: {
    fontSize: "13px",
    color: "black",
    boxShadow: "none",
    borderRadius: 0,
    fontFamily: theme.font.primary.main,
    textTransform: "none",
  },
  btnCont: {
    marginTop: "6px",
    marginRight: "3em",
  },
  drawerIcon: {
    fontSize: "25px",
  },
  drawer: {
    backgroundColor: theme.palette.secondary.main,
    height: "100%",
  },
  drawerList: {
    // color: 'black',
    fontSize: "17px",
    fontWeight: "50px",
    color: theme.palette.primary.main,
    textAlign: "center",
    boxShadow: "none",
    borderRadius: "0px",
    "&:hover": {
      boxShadow: "0px",
      // border:"1px solid white"
    },
    "&:active": {
      // border:'0px solid yellow',
      outline: "none",
    },
  },
  mainListIttem: {
    marginTop: "2em",
  },
  drawerRegBtnItem: {
    color: theme.palette.primary.main,
    fontSize: "17px",
  },
  cancelIcon: {
    fontSize: "30px",
    marginRight: "31px",
    marginTop: "10px",
    color: theme.palette.primary.main,
  },
}));

export default function Header() {
  const classes = useStyles();
  const theme = useTheme();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const [openDrawer, setOpendrawer] = useState(false);
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 150,
  });

  const tabs = (
    <React.Fragment>
      <Grid item>
        <Grid container justify="center">
          <Tabs centered className={classes.tabContainer} fullWidth={true}>
            <Tab
              className={`${classes.tab} ${
                trigger === false ? "" : classes.tabScrolled
              }`}
              label="Home"
            />
            <Tab
              className={`${classes.tab} ${
                trigger === false ? "" : classes.tabScrolled
              }`}
              label="Services"
            />
            <Tab
              className={`${classes.tab} ${
                trigger === false ? "" : classes.tabScrolled
              }`}
              label="Blog"
            />
            <Tab
              className={`${classes.tab} ${
                trigger === false ? "" : classes.tabScrolled
              }`}
              label="Events"
            />
            <Tab
              className={`${classes.tab} ${
                trigger === false ? "" : classes.tabScrolled
              }`}
              label="Contacts"
            />
          </Tabs>
        </Grid>
      </Grid>
      <Grid item className={classes.btnCont}>
        <Grid container>
          <Button
            // className={`${classes.btn} ${
            //   trigger === false ? "" : classes.scrollBtn
            // }`}
            component={Link}
            to="/signin"
            className={classes.btn}
            variant="contained"
            color="secondary"
          >
            Log in
          </Button>
          {/* <Button className={classes.btn} variant="contained" color="secondary">
            Register
          </Button> */}
        </Grid>
      </Grid>
    </React.Fragment>
  );

  const drawer = (
    <React.Fragment>
      <SwipeableDrawer
        anchor={"top"}
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpendrawer(false)}
        onOpen={() => setOpendrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.growDrawer} />
        <Grid container direction="column">
          <Grid container justify="flex-end">
            <ClearIcon
              className={classes.cancelIcon}
              onClick={() => setOpendrawer(false)}
            />
          </Grid>
          <Grid container justify="center" align='center'  style={{marginTop: '80px'}}>
            <List disablePadding justify="center" alignItems='center'>
              <ListItem
                button
                onClick={() => setOpendrawer(false)}
                className={classes.mainListIttem}
              >
                <ListItemText disableTypography className={classes.drawerList}>
                  Home
                </ListItemText>
              </ListItem>
              <ListItem button onClick={() => setOpendrawer(false)}>
                <ListItemText disableTypography className={classes.drawerList}>
                  Services
                </ListItemText>
              </ListItem>
              <ListItem button onClick={() => setOpendrawer(false)}>
                <ListItemText disableTypography className={classes.drawerList}>
                  Blog
                </ListItemText>
              </ListItem>
              <ListItem button onClick={() => setOpendrawer(false)}>
                <ListItemText disableTypography className={classes.drawerList}>
                Event
                </ListItemText>
              </ListItem>
              <ListItem button onClick={() => setOpendrawer(false)}>
                <ListItemText disableTypography className={classes.drawerList}>
                  Contacts
                </ListItemText>
              </ListItem>
              <ListItem
                button
                onClick={() => setOpendrawer(false)}
                component={Link}
                to="/signin"
                className={classes.drawerList}
                style={{}}
              >
                <ListItemText disableTypography className={classes.drawerList}>
                  Login
                </ListItemText>
              </ListItem>
              {/* <ListItem
                button
                onClick={() => setOpendrawer(false)}
                style={{ alignSelf: "center" }}
              >
                <ListItemText
                  disableTypography
                  className={classes.drawerRegBtnItem}
                >
                  Register
                </ListItemText>
              </ListItem> */}
            </List>
          </Grid>
        </Grid>
      </SwipeableDrawer>

      <IconButton onClick={() => setOpendrawer(!openDrawer)}>
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div className={classes.grow}>
      <AppBar
        position="fixed"
        elevation={0}
        className={`${classes.appBar} ${
          trigger === false ? "" : classes.appBarScrolled
        }`}
      >
        <Toolbar disableGutters>
          <Grid container justify="space-between">
            <Grid item>
              <Typography
                className={`${classes.title} ${
                  trigger === false ? "" : classes.titleScroll
                }`}
                variant="h7"
                noWrap
              >
                Mynebor
              </Typography>
            </Grid>
            {matchesSM ? drawer : tabs}
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
