import React, { useState } from "react";
import { fade, makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
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

const useStyles = makeStyles((theme) => ({
  grow: {
    // flexGrow: 1,
    ...theme.mixins.toolbar,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    // display: "none",
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
      color: 'red'
    },
    color: theme.palette.primary.main,
    marginLeft: "3em",
    marginTop: "8px",
    fontSize: "18px",
  },
  titleScroll: {
    // display: "none",
    marginTop: "8px",
    [theme.breakpoints.down("xs")]: {
      // marginTop: "5em",
      marginLeft: "1px",
      color: 'yellow'
    },
    // [theme.breakpoints.down("md")]: {
    //   // marginTop: "-5em",
    //   color: 'red'
    // },
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
    zIndex: theme.zIndex.modal + 1
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
    // color: "white",
    fontSize: "12px",
  },
  tabScrolled: {
    marginLeft: "25px",
    minWidth: 5,
    textTransform: "none",
    fontWeight: 9000,
    // color: theme.palette.primary.main,
    color: "black",
    fontSize: "12px",
  },
  btn: {
    fontSize: "13px",
    color: "white",
    boxShadow: "none",
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
  },
  drawerList: {
    color: theme.palette.primary.main,
    fontSize: '13px',
    weight: '10px'
  },
  drawerRegBtnItem: {
    backgroundColor: theme.palette.secondary.main
  }
}));

export default function Header() {
  const classes = useStyles();
  const theme = useTheme();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const [openDrawer, setOpendrawer] = useState(false);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);


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
              label="Home"
            />
            <Tab
              className={`${classes.tab} ${
                trigger === false ? "" : classes.tabScrolled
              }`}
              label="Contacts"
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
          <Button className={classes.btn} color="primary">
            Log in
          </Button>
          <Button className={classes.btn} variant="contained" color="secondary">
            Register
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );

  const drawer = (
    <React.Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpendrawer(false)}
        onOpen={() => setOpendrawer(true)}
        classes={{paper: classes.drawer}}
      >
        <div className={classes.grow} />
        <List disablePadding>
          <ListItem divider button onClick={() => setOpendrawer(false)}>
            <ListItemText disableTypography className={classes.drawerList}>Home</ListItemText>
          </ListItem>
          <ListItem divider button onClick={() => setOpendrawer(false)}>
            <ListItemText disableTypography className={classes.drawerList}>Services</ListItemText>
          </ListItem>
          <ListItem divider button onClick={() => setOpendrawer(false)}>
            <ListItemText disableTypography className={classes.drawerList}>Home</ListItemText>
          </ListItem>
          <ListItem divider button onClick={() => setOpendrawer(false)}>
            <ListItemText disableTypography className={classes.drawerList}>Contacts</ListItemText>
          </ListItem>
          <ListItem divider button onClick={() => setOpendrawer(false)}>
            <ListItemText disableTypography className={classes.drawerList}>Contacts</ListItemText>
          </ListItem>
          <ListItem divider button onClick={() => setOpendrawer(false)}>
            <ListItemText disableTypography className={classes.drawerList}>Login</ListItemText>
          </ListItem>
          <ListItem divider button onClick={() => setOpendrawer(false)} className={classes.drawerRegBtnItem}>
            <ListItemText disableTypography className={classes.drawerList}>Register</ListItemText>
          </ListItem>
        </List>
        
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
                Neooe
              </Typography>
            </Grid>
            {matchesSM ? drawer : tabs}
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}