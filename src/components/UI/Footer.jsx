import React, { useEffect } from "react";
import {
  Grid,
  Typography,
  Box,
  Container,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import fb from "../../assets/fb.png";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import { fade, makeStyles } from "@material-ui/core/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "aos/dist/aos.css";
import Aos from "aos";

/**
 * @author
 * @function Footer
 **/

const useStyles = makeStyles((theme) => ({
  secondSection: {
    // marginTop:'150px',
    [theme.breakpoints.down("sm")]: {
      maxWidth: "750px",
    },
    [theme.breakpoints.up("md")]: {
      maxWidth: "960px",
    },
    [theme.breakpoints.up("lg")]: {
      maxWidth: "1280px",
    },
  },
  icons: {
    fontSize: "25px",
    // paddingLeft:"13px",
    // margin:'11.5px',
marginTop:'8px',

    
    color: theme.palette.secondary.main,
    // padding:'10px',
    // backgroundColor:'black'
  },
  iconsInst: {
    color: theme.palette.secondary.main,
    fontSize: "25px",
    alignItems:'center',
    textAlign: "center",
marginTop:'8px'
    // marginLeft: "14px",
    // margin:'12px'
    // marginRight: "14px",
  },
  iconsCont: {
    marginTop: "24px",
    display:'flex',
    textAlign: "center",

    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
      // marginTop: "3em",
    },
  },
  mainContainer: {
    marginTop: "4em",
    backgroundColor: theme.palette.secondary.main,
  },

  firstText: {
    color: theme.palette.primary.main,
    fontFamily: theme.font.primary.main,

    fontSize: "20px",
    marginTop: "50px",
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
      // marginTop: "3em",
    },
  },
  subTextCont: {
    marginTop: "30px",
    color: theme.palette.advance.main,
  },
  otherHeadText: {
    marginTop: "50px",
    color: theme.palette.primary.main,
    fontSize: "16px",
    fontWeight: "90px",
    fontFamily: theme.font.primary.main,

    letterSpacing: "0.7px",
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
      // marginTop: "3em",
    },
  },
  subTypo: {
    paddingBottom: "7px",
    fontFamily: theme.font.primary.main,
    fontSize: "12px",
    letterSpacing: "1px",
  },
  prodTypo: {
    color: theme.palette.advance.main,
    marginTop: "9px",
    fontFamily: "Roboto",
    letterSpacing: "0.7px",
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
      // marginTop: "3em",
    },
    // marginBottom: '8px'
  },

  firstSubtext: {
    fontFamily: theme.font.primary.main,
    fontSize: "12px",

    letterSpacing: "1px",
    // marginTop:'30px',
    // color:theme.palette.primary.main
  },
}));
const defaultProps = {
  bgcolor: "white",
  // borderColor: "rgba(0,0,0,0.4)",
  m: 1,
  // border: 1,
  style: { width: "4.3rem", height: "4.3rem" },
};

const Footer = (props) => {
  const classes = useStyles();
  const theme = useTheme();

  useEffect(() => {
    Aos.init();
  }, []);

  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Grid container direction="row" className={classes.mainContainer}>
      <Container className={classes.secondSection}>
        <Grid
          item
          direction={matchesXS ? "column" : "row"}
          container
          justify="space-between"
          alignItems={matchesXS ? "center" : ""}
          style={{ marginBottom: "50px" }}
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="500"
        >
          <Grid item>
            <Typography variant="h6" className={classes.firstText}>
            Mynebor
            </Typography>
            <div className={classes.subTextCont}>
              <Typography
                textAlign="center"
                className={classes.firstSubtext}
                style={{ paddingBottom: "7px" }}
              >
                Lorem ipsum dolor sit amet consectetur
              </Typography>
              <Typography
                textAlign="center"
                style={{ paddingBottom: "7px" }}
                className={classes.firstSubtext}
              >
                Lorem ipsum dolor sit amet consectetur
              </Typography>
            </div>
          </Grid>
          <Grid direction="column">
            <Typography className={classes.otherHeadText}>Products</Typography>
            <div className={classes.prodTypo}>
              <Typography className={classes.subTypo}>Products</Typography>
              <Typography className={classes.subTypo}>Pricing</Typography>
              <Typography className={classes.subTypo}>Log in</Typography>
              <Typography className={classes.subTypo}>Partnership</Typography>
            </div>
          </Grid>
          <Grid direction="column">
            <Typography className={classes.otherHeadText}>About us</Typography>
            <div className={classes.prodTypo}>
              <Typography className={classes.subTypo}>About Mynebor</Typography>
              <Typography className={classes.subTypo}>Contact us</Typography>
              <Typography className={classes.subTypo}>Features</Typography>
              <Typography className={classes.subTypo}>Carriers</Typography>
            </div>
          </Grid>
          <Grid direction="column">
            <Typography className={classes.otherHeadText}>Resources</Typography>
            <div className={classes.prodTypo}>
              <Typography className={classes.subTypo}>Help center</Typography>
              <Typography className={classes.subTypo}>Book a demo</Typography>
              <Typography className={classes.subTypo}>Server status</Typography>
            </div>
          </Grid>
          <Grid direction="column">
            <Typography className={classes.otherHeadText}>
              Get in Touch
            </Typography>
            <div className={classes.prodTypo}>
              <Typography className={classes.subTypo}>
                Lorem ipsum, dolor sit amet{" "}
              </Typography>
              <Typography className={classes.subTypo}>
                Lorem ipsum, dolor sit amet consectetur
              </Typography>
            </div>
            <Grid container justify={matchesXS? 'center':''} className={classes.iconsCont}>
              <Box borderRadius={50} {...defaultProps}>
                <FontAwesomeIcon icon={faFacebookF} className={classes.icons} />
              </Box>
              <Box borderRadius={50} {...defaultProps}>
                <FontAwesomeIcon
                  icon={faInstagram}
                  className={classes.iconsInst}
                />
              </Box>
              <Box borderRadius={50} {...defaultProps}>
                <FontAwesomeIcon icon={faTwitter} className={classes.icons} />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};

export default Footer;
// Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis voluptates vero, quos rem accusamus laudantium. Cumque expedita, aliquid quod molestias, repudiandae voluptas blanditiis, veritatis praesentium tempore asperiores fuga dolor hic?
