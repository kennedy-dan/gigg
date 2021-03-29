import React, { useEffect } from "react";
import {
  Grid,
  Typography,
  Box,
  Container,
  useTheme,
  useMediaQuery,
  Button,
} from "@material-ui/core";
import { fade, makeStyles } from "@material-ui/core/styles";
import banner from "../../assets/bannerimg.svg";
import "aos/dist/aos.css";
import Aos from "aos";

/**
 * @author
 * @function Banner
 **/
const useStyles = makeStyles((theme) => ({
  mainContainer: {
    backgroundColor: theme.palette.banner.main,
    marginTop: "10em",
    // height: "100%",
  },
  bannerbg: {
    // maxHeight: "20em",
    width: "",
    height: "32em",
    [theme.breakpoints.down("sm")]: {
      width: "13em",
    },
    [theme.breakpoints.down("xs")]: {
      width: "22em",
    },
    // alignItems: "center",
    marginLeft: "6em",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      marginTop: "3em",
    },
  },
  btn: {
    marginTop: "1.7em",
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.secondary.main,
    fontFamily: theme.font.primary.main,
    borderRadius: 0,
    // fontSize:'16px',

    // width:'100%',
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
      alignItems: "center",
      alignSelf: "center",
    },
  },
  firstTypo: {
    color: theme.palette.secondary.main,
    fontFamily: theme.font.primary.main,
    fontSize: "18px",
    letterSpacing: "0.3px",
    [theme.breakpoints.up("md")]: {
      // paddingTop: "5em",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize:'16px'
    },
  },
  secondTypo: {
    fontSize: "16px",
    fontFamily: theme.font.primary.main,

    [theme.breakpoints.up("md")]: {
      marginTop: "-2em",
    },
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
      fontSize:'14px'
    },
    letterSpacing: "0.3px",
  },
  thirdTypo: {
    fontSize: "14px",
    marginBottom: "8px",
    marginTop: "1em",
    width: "80%",
    fontFamily: theme.font.primary.main,

    letterSpacing: "0.3px",
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
      fontSize:'12px',
      width: "100%",
    },
  },
  rowCont: {
    paddingBottom: "1.5em",
  },
}));

const Banner = (props) => {
  const classes = useStyles();
  const theme = useTheme();

  useEffect(() => {
    Aos.init();
  }, []);

  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const bannerXS = (
    <React.Fragment>
       <Grid item container justify={matchesXS ? "center" : ""}>
            <Typography
              style={{ marginTop: "3em" }}
              className={classes.firstTypo}
              data-aos="zoom-in"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
            >
              Featured Plants
            </Typography>
          </Grid>
          <Grid
            container
            // justify="space-between"
            className={classes.rowCont}
            alignItems="center"
            // direction={matchesXS ? 'column' : 'row'}
            justify={matchesXS ? "center" : ""}
          >
            <Grid item direction="column" sm>
              <div
                data-aos="zoom-in"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
                data-aos-duration="600"
              >
                <Typography color="secondary" className={classes.secondTypo}>
                  Lorem Ipsum
                </Typography>
                <Typography
                  style={{}}
                  color="secondary"
                  className={classes.thirdTypo}
                  variant="body1"
                >
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Sapiente dolore perspiciatis id assumenda, vero, nesciunt
                  perferendis eveniet qui ea sequi rerum magni iure aspernatur
                  unde doloribus illum illo distinctio modi? Lorem ipsum dolor
                  sit amet consectetur, adipisicing elit. Harum vitae rem
                  expedita nobis omnis consectetur assumenda reprehenderit,
                  nostrum dignissimos explicabo? Aliquam temporibus, soluta
                  sapiente ut facilis autem non ea fugiat!
                </Typography>
                <Grid item container justify={matchesXS ? "center" : ""}>
                  <Button variant="contained" className={classes.btn}>
                    Lorem
                  </Button>
                </Grid>
              </div>
            </Grid>
            <Grid
              item
              style={{}}
              sm
              data-aos="zoom-in"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
            >
              <img src={banner} className={classes.bannerbg} />
            </Grid>
          </Grid>
    </React.Fragment>
  )  

  const bannerLG = (
    <React.Fragment>
       <Grid item container justify={matchesXS ? "center" : ""}>
            <Typography
              style={{ marginTop: "3em" }}
              className={classes.firstTypo}
              data-aos="fade-left"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
            >
              Featured Plants
            </Typography>
          </Grid>
          <Grid
            container
            // justify="space-between"
            className={classes.rowCont}
            alignItems="center"
            // direction={matchesXS ? 'column' : 'row'}
            justify={matchesXS ? "center" : ""}
          >
            <Grid item direction="column" sm>
              <div
                data-aos="fade-left"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
                data-aos-duration="600"
              >
                <Typography color="secondary" className={classes.secondTypo}>
                  Lorem Ipsum
                </Typography>
                <Typography
                  style={{}}
                  color="secondary"
                  className={classes.thirdTypo}
                  variant="body1"
                >
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Sapiente dolore perspiciatis id assumenda, vero, nesciunt
                  perferendis eveniet qui ea sequi rerum magni iure aspernatur
                  unde doloribus illum illo distinctio modi? Lorem ipsum dolor
                  sit amet consectetur, adipisicing elit. Harum vitae rem
                  expedita nobis omnis consectetur assumenda reprehenderit,
                  nostrum dignissimos explicabo? Aliquam temporibus, soluta
                  sapiente ut facilis autem non ea fugiat!
                </Typography>
                <Grid item container justify={matchesXS ? "center" : ""}>
                  <Button variant="contained" className={classes.btn}>
                    Lorem
                  </Button>
                </Grid>
              </div>
            </Grid>
            <Grid
              item
              style={{}}
              sm
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
            >
              <img src={banner} className={classes.bannerbg} />
            </Grid>
          </Grid>
    </React.Fragment>
  )

  return (
    <Grid container direction="column" className={classes.mainContainer}>
      <Container>
        <Grid item container direction="column">
          {matchesXS ? bannerXS : bannerLG}
        </Grid>
      </Container>
    </Grid>
  );
};

export default Banner;
