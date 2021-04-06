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
    "& p": {
      fontSize: "14px ",
      letterSpacing: "0.1px",

      // fontWeight:'lighter',
      fontFamily: theme.font.primary.main,
      [theme.breakpoints.down("xs")]: {
        textAlign: "center",
        fontSize: "12px",
      },
    },
  },
  firstText: {
    marginBottom: "15px",
    fontSize: "24px",
    fontFamily: theme.font.primary.main,
    [theme.breakpoints.down("xs")]: {
      fontSize: "18px",
    },
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
      marginBottom: "8em",
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: "332px",
      height: "280px",
      marginBottom: "11em",
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
    "& p": {
      fontSize: "14px ",
      letterSpacing: "0.1px",

      // fontWeight:'lighter',
      fontFamily: theme.font.primary.main,
      [theme.breakpoints.down("xs")]: {
        textAlign: "center",
        fontSize: "12px",
      },
    },
  },
  btnType: {
    fontSize: "12px",
    boxShadow: "none",
    fontFamily: theme.font.primary.main,
    borderRadius:'0px',
    padding:'7px 20px',
    borderRadius: '5px',
    textTransform:'none'
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
    paddingTop: "10px",

    "& h6": {
      fontWeight: "bolder",
      fontFamily: theme.font.primary.main,

      letterSpacing: "0.7px",
      fontSize: "16px",
      [theme.breakpoints.down("xs")]: {
        fontSize: "14px",
      },
    },
    "& p": {
      marginTop: "-5px",
      // fontWeight: "lighter",
      fontFamily: theme.font.primary.main,

      letterSpacing: "0.2px",
      fontSize: "14px",
      [theme.breakpoints.down("xs")]: {
        fontSize: "12px",
      },
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
        <Typography
          variant={matchesSM ? "" : ""}
          className={classes.firstText}
          data-aos="zoom-in"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
          // data-aos-delay="200"
        >
          <b>
            Got <span style={{ color: "#9cf744" }}> Something </span>
            To Sell?{" "}
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
          <Grid
            item
            className={classes.firstsec1}
            data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
            // data-aos-delay="200"
          >
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            </Typography>
            <Typography>Lorem ipsum dolor sit amet, cons</Typography>
          </Grid>
          <Grid
            item
            className={classes.firstsec2}
            data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
            // data-aos-delay="400"
          >
            <Button
              variant="contained"
              color="secondary"
              className={classes.btnType}
            >
              Sell it
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
          data-aos-duration="1000"
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
                {/* <Typography>Accomodation</Typography> */}
              </Grid>
            </Grid>
            <div className={classes.caption}>
              <h6>Products</h6>
              <Typography>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad,
                illum minima
              </Typography>
            </div>
          </Grid>
        </Grid>

        <Grid
          item
          data-aos="zoom-in"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          <Grid
            item
            container
            justify="center"
            className={`${classes.banner1} ${classes.bg}`}
          >
            <Grid container item className={classes.cont}>
              <Grid container justify="center" alignItems="center">
                {/* <Typography>Accomodation</Typography> */}
              </Grid>
            </Grid>
            <div className={classes.caption}>
              <h6>Blog</h6>
              <Typography>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad,
                illum minima
              </Typography>
            </div>
          </Grid>
        </Grid>

        <Grid
          item
          data-aos="zoom-in"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
          data-aos-delay="400"
        >
          <Grid
            item
            container
            justify="center"
            className={`${classes.banner1} ${classes.bg3}`}
          >
            <Grid container item className={classes.cont}>
              <Grid container justify="center" alignItems="center">
                {/* <Typography className={classes.hoverTypo}>
                  Accomodation
                </Typography> */}
              </Grid>
            </Grid>
            <div className={classes.caption}>
              <h6>Goods & Services</h6>
              <Typography>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad,
                illum minima
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SecondSection;
