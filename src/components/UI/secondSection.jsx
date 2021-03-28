import React, { useEffect } from "react";
import {
  Button,
  Grid,
  Typography,
  Box,
  Container,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { fade, makeStyles } from "@material-ui/core/styles";
import bg1 from "../../assets/section1bg.jpg";
import bg3 from "../../assets/section2bg.jpg";
import bg4 from "../../assets/section3bg.jpg";
import bg5 from "../../assets/section1bg.jpg";
import "aos/dist/aos.css";
import Aos from "aos";

/**
 * @author
 * @function SecondSection
 **/

const useStyles = makeStyles((theme) => ({
  firstsec1: {
    [theme.breakpoints.down("xs")]: {
      marginTop: "1em",
    },
  },
  firstText: {
    marginBottom: "15px",
    fontSize: "24px",
    fontFamily: theme.font.primary.main,
  },

  firstsec2: {
    [theme.breakpoints.down("xs")]: {
      marginTop: "1em",
    },
  },
  secondSection: {
    marginTop: "150px",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "600px",
    },
    [theme.breakpoints.up("md")]: {
      maxWidth: "960px",
    },
    [theme.breakpoints.up("lg")]: {
      maxWidth: "1280px",
    },
  },
  banner1: {
    width: "400px",
    height: "400px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    transition: "0.5s",
    "&:hover": {
      transition: "0.5s",
      transitionTimingFunction: "ease-in-out",
      // height: "25.9em",
      transform: "scale(1.05)",
    },
    [theme.breakpoints.down("md")]: {
      maxWidth: "290px",
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "270px",
      maxHeight: "270px",
      marginBottom: "6em",
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: "332px",
      height: "280px",
      marginBottom: "6em",
    },
  },
  bg3: {
    backgroundImage: `url(${bg3})`,
  },
  bg1: {
    backgroundImage: `url(${bg5})`,
  },
  bg: {
    backgroundImage: `url(${bg1})`,
  },
  cont: {
    [theme.breakpoints.down("sm")]: {
      height: "100% !important",
    },
    height: "100% ",

    maxWidth: "100%",
    // color: 'transparent',
    // backgroundColor: theme.palette.tertiary.main,
    color: "transparent",
    "&:hover": {
      color: "white",
      // transform: scale()
    },
    // opacity: '0.5px'
  },
  fontSize: {
    fontSize: "13px",
  },
  wrapper: {
    backgroundColor: "black",
  },
  typoTypes: {
    fontSize: "14px ",

    fontFamily: theme.font.primary.main,
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
    },
  },
  btnType: {
    fontSize: "11px",
    boxShadow: "none",
    fontFamily: theme.font.primary.main,
  },
  typeCont: {
    marginTop: "24px",
  },
  hoverTypo: {
    fontSize: "16px",
  },
  caption: {
    textAlign: "center",
    width: "80%",
    // marginTop:'-95px',
    alignSelf: "center",
    fontSize: "16px",

    "& h6": {
      fontWeight: "bolder",
      // fontFamily:'Roboto',
      letterSpacing: "0.7px",
      fontFamily: theme.font.primary.main,
    },
    "& p": {
      marginTop: "-5px",
      fontWeight: "lighter",
      // fontFamily:'Roboto',
      fontSize: "14px",
      fontFamily: theme.font.primary.main,

      letterSpacing: "0.5px",
    },
    [theme.breakpoints.up("md")]: {
      // paddingTop: '125px'
    },
  },
  subText: {
    // marginLeft:'1% !important',
    // paddingRight:'1% !important',
  },
  firstCont: {
    marginRight: "2em",
  },
}));

const SecondSection = (props) => {
  const classes = useStyles();
  const theme = useTheme();

  useEffect(() => {
    Aos.init();
  }, []);

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Container className={classes.secondSection}>
      <Grid
        item
        container
        justify={matchesXS ? "center" : "inherit"}
        className={classes.subText}
      >
        <Typography variant={matchesSM ? "" : ""} className={classes.firstText}>
          <b>
            Types of <span style={{ color: "#9cf744" }}> Work </span>
            Space Available{" "}
          </b>
        </Typography>

        {/* SUB-TEXT */}
        <Grid
          item
          container
          direction={matchesXS ? "column" : "row"}
          justify={matchesXS ? "center" : "space-between"}
          style={{ marginBottom: "2em" }}
          alignItems={matchesXS ? "center" : null}
        >
          <Grid item className={classes.firstsec1}>
            <Typography className={classes.typoTypes}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            </Typography>
            <Typography className={classes.typoTypes}>
              Lorem ipsum dolor sit amet, cons
            </Typography>
          </Grid>
          <Grid item className={classes.firstsec2}>
            <Button
              variant="contained"
              color="secondary"
              className={classes.btnType}
            >
              Blah it
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        direction={matchesXS ? "column" : "row"}
        alignItems={matchesXS ? "center" : null}
        justify={matchesXS ? "center" : "space-between"}
        style={{ marginBottom: "5em", padding: "0 !important" }}
      >
        <Grid
          item
          data-aos="zoom-in"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="400"
          // data-aos-delay='100'
        >
          <Grid
            item
            container
            justify="center"
            className={`${classes.banner1} ${classes.bg}`}
          >
            <Grid container item className={classes.cont}>
              <Grid container justify="center" alignItems="center">
                <Typography>Accomodation</Typography>
              </Grid>
            </Grid>
            <div className={classes.caption}>
              <h6>Meeting room</h6>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad,
                illum minima
              </p>
            </div>
          </Grid>
        </Grid>

        <Grid
          item
          data-aos="zoom-in"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="400"
          data-aos-delay='300'

        >
          <Grid
            item
            container
            justify="center"
            className={`${classes.banner1} ${classes.bg}`}
          >
            <Grid container item className={classes.cont}>
              <Grid container justify="center" alignItems="center">
                <Typography>Accomodation</Typography>
              </Grid>
            </Grid>
            <div className={classes.caption}>
              <h6>Meeting room</h6>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad,
                illum minima
              </p>
            </div>
          </Grid>
        </Grid>

        <Grid
          item
          data-aos="zoom-in"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="400"
          data-aos-delay='400'

        >
          <Grid
            item
            container
            justify="center"
            className={`${classes.banner1} ${classes.bg3}`}
          >
            <Grid container item className={classes.cont}>
              <Grid container justify="center" alignItems="center">
                <Typography className={classes.hoverTypo}>
                  Accomodation
                </Typography>
              </Grid>
            </Grid>
            <div className={classes.caption}>
              <h6>Meeting room</h6>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad,
                illum minima
              </p>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SecondSection;
