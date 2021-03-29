import React, { useEffect } from "react";
import { Grid, Typography, Card, Button } from "@material-ui/core";
import { fade, makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import firstbg from "../../assets/firstbbg.jpg";
import Header from "./Header";
import "aos/dist/aos.css";
import Aos from "aos";

/**
 * @author
 * @function FirstBaground
 **/
const useStyles = makeStyles((theme) => ({
  bg: {
    backgroundImage: `url(${firstbg})`,
    height: "100vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%",
    // marginTop: '-5em'
  },
  cont: {
    [theme.breakpoints.down("sm")]: {
      height: "100vh",
    },
    height: "100vh",
    maxWidth: "100%",
    backgroundColor: theme.palette.tertiary.main,
    // opacity: '0.5px'
  },
  header: {
    marginBottom: "1em",
    // marginTop: "5em",
    color: "white",
  },
  cardItem: {
    // margin: '8px'
  },
  typo: {
    fontSize: "14px",
    letterSpacing: "0.5px",
    fontFamily: theme.font.primary.main,

    [theme.breakpoints.down("xs")]: {
      fontSize: "9px",
    },
    marginTop: "",
  },
  cardBtn: {
    marginTop: "0.1em",
    marginBottom: "0.1em",
    boxShadow: "none",
    fontFamily: theme.font.primary.main,

    // marginRight: '0.5em'
  },
  header2: {
    color: "white",
  },
  mainText: {
    fontSize: "42px",
    fontFamily: theme.font.primary.main,
    letterSpacing: "0.8px",
    fontWeight: "3em",
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.6em",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "22px",
    },
  },
  subTypo: {
    fontSize: "16px",
    textAlign: "center",
    fontFamily: theme.font.primary.main,
    width: "40%",
    [theme.breakpoints.down("sm")]: {
      width: "70%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "80%",
      fontSize:'14px'
    },
  },
  card: {
    width: "50em",
    [theme.breakpoints.down("sm")]: {
      width: "38em",
    },
    [theme.breakpoints.down("xs")]: {
      width: "90%",
    },
  },
  cardGrid: {
    // marginTop: "0.9em", marginBottom: "0.5em"
    paddingTop: "1em",
    paddingBottom: "1em",
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "1em",
      paddingRight: "1em",
    },
  },
  ImageText: {
    // position: "absolute",
    // marginTop: "4em",
    [theme.breakpoints.down("xs")]: {
      // marginTop:'9em'
    },
    [theme.breakpoints.down("sm")]: {
      // marginTop:'7em'
    },
  },
}));

const FirstBaground = (props) => {
  useEffect(() => {
    Aos.init()
  }, []);
  const classes = useStyles();
  return (
    <Grid container className={classes.bg}>
      <Grid container className={classes.cont}>
        <Header />
        <Grid
          item
          container
          direction="column"
          justify="center"
          style={{}}
          className={classes.ImageText}
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="500"
        >
          <Grid justify="center" container className={classes.header}>
            <Grid item container justify="center" alignItems="center">
              <Typography style={{}} className={classes.mainText}>
                Find A work Space That Makes
              </Typography>
            </Grid>
            <Typography className={classes.mainText}>
              You Comfortable
            </Typography>
          </Grid>
          <Grid item container justify="center" className={classes.header2}>
            <Grid container item justify="center">
              <Typography className={classes.subTypo}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                quo corporis provident et officia eos, mollitia ipsum minus?
              </Typography>
            </Grid>
          </Grid>
          <Grid item container justify="center" style={{ marginTop: "1.2em" }}>
            <Card className={classes.card}>
              <Grid
                direction
                container
                justify="space-evenly"
                className={classes.cardGrid}
                style={{}}
              >
                <Grid item className={classes.cardItem}>
                  <Typography className={classes.typo}>
                    <b>Accomodation</b>
                  </Typography>
                  <Typography className={classes.typo}>Apply</Typography>
                </Grid>
                <Divider orientation="vertical" flexItem />
                <Grid item className={classes.cardItem}>
                  <Typography className={classes.typo}>
                    <b>Blog</b>
                  </Typography>
                  <Typography className={classes.typo}> blogpost</Typography>
                </Grid>
                <Divider orientation="vertical" flexItem />

                <Grid item className={classes.cardItem}>
                  <Typography className={classes.typo}>
                    <b>Sales</b>
                  </Typography>
                  <Typography className={classes.typo}>goods</Typography>
                </Grid>
                <Divider orientation="vertical" flexItem />
                <Grid item className={classes.cardItem}>
                  <Typography className={classes.typo}>
                    <b>Others</b>
                  </Typography>
                  <Typography className={classes.typo}>Lorem ipsum</Typography>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    color="secondary"
                    style={{ boxShadow: "none" }}
                    className={classes.cardBtn}
                  >
                    Search
                  </Button>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
        {/* <div  /> */}
      </Grid>
    </Grid>
  );
};

export default FirstBaground;
