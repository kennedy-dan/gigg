import React from "react";
import {
  Grid,
  Typography,
  Box,
  Container,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import fb from '../../assets/fb.png'
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import { fade, makeStyles } from "@material-ui/core/styles";

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
    fontSize: "35px",
    padding:"0.8px",
    // margin: "6px",
    color: theme.palette.primary.main,
  },
  iconsCont: {
    marginTop: "24px",
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
      // marginTop: "3em",
    },
  },
  mainContainer: {
    marginTop: "4em",
    backgroundColor: theme.palette.secondary.main,
  },

  firstTypo2: {
    marginBottom: "1em",
    color: theme.palette.primary.main,
    fontWeight: "10px",
    fontSize: "24px",
    [theme.breakpoints.down("xs")]: {
      marginTop: "3em",
    },
  },
  firstText: {
    color: theme.palette.primary.main,
    fontFamily:theme.font.primary.main,

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
    fontSize: "13px",
    fontWeight: "90px",
    fontFamily:theme.font.primary.main,

      letterSpacing:'0.7px',
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
      // marginTop: "3em",
    },
  },
  subTypo:{
    paddingBottom:'7px',
    fontFamily:theme.font.primary.main,

      letterSpacing:'1px'
  },
  prodTypo: {
    color: theme.palette.advance.main,
    marginTop: "9px",
    fontFamily:'Roboto',
      letterSpacing:'0.7px',
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
      // marginTop: "3em",
    },
    // marginBottom: '8px'
  },

  firstSubtext: {
    fontFamily:theme.font.primary.main,

      letterSpacing:'1px'
    // marginTop:'30px',
    // color:theme.palette.primary.main
    
  },
}));
const defaultProps = {
  bgcolor: "#98dbf3",
  borderColor: "#d7eff8",
  m: 1,
  border: 1,
  style: { width: "4rem", height: "4rem" },
};

const Footer = (props) => {
  const classes = useStyles();
  const theme = useTheme();
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
        >
          <Grid item>
            <Typography variant="h6" className={classes.firstText}>
              Neeeo
            </Typography>
            <div className={classes.subTextCont}>
              <Typography
                textAlign="center"
                className={classes.firstSubtext}
                style={{ paddingBottom: "7px" }}
                
              >
                Lorem ipsum dolor sit amet consectetur
              </Typography>
              <Typography textAlign="center" style={{ paddingBottom: "7px" }} 
                className={classes.firstSubtext}
              
              >
                Lorem ipsum dolor sit amet consectetur
              </Typography>
            </div>
          </Grid>
          <Grid direction="column">
            <Typography className={classes.otherHeadText}>Products</Typography>
            <div className={classes.prodTypo}>
              <Typography  className={classes.subTypo}>Products</Typography>
              <Typography  className={classes.subTypo}>Pricing</Typography>
              <Typography  className={classes.subTypo}>Log in</Typography>
              <Typography  className={classes.subTypo}>
                Partnership
              </Typography>
            </div>
          </Grid>
          <Grid direction="column">
            <Typography className={classes.otherHeadText}>About us</Typography>
            <div className={classes.prodTypo}>
              <Typography  className={classes.subTypo}>
                About Neeo
              </Typography>
              <Typography  className={classes.subTypo}>
                Contact us
              </Typography>
              <Typography  className={classes.subTypo}>Features</Typography>
              <Typography  className={classes.subTypo}>Carriers</Typography>
            </div>
          </Grid>
          <Grid direction="column">
            <Typography className={classes.otherHeadText}>Resources</Typography>
            <div className={classes.prodTypo}>
              <Typography  className={classes.subTypo}>
                Help center
              </Typography>
              <Typography  className={classes.subTypo}>
                Book a demo
              </Typography>
              <Typography  className={classes.subTypo}>
                Server status
              </Typography>
            </div>
          </Grid>
          <Grid direction="column">
            <Typography className={classes.otherHeadText}>
              Get in Touch
            </Typography>
            <div className={classes.prodTypo}>
              <Typography  className={classes.subTypo}>
                Lorem ipsum, dolor sit amet{" "}
              </Typography>
              <Typography  className={classes.subTypo}>
                Lorem ipsum, dolor sit amet consectetur
              </Typography>
            </div>
            <div className={classes.iconsCont}>
              <FacebookIcon className={classes.icons} />
              <InstagramIcon className={classes.icons} />
              <TwitterIcon className={classes.icons} />
            </div>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};

export default Footer;
// Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis voluptates vero, quos rem accusamus laudantium. Cumque expedita, aliquid quod molestias, repudiandae voluptas blanditiis, veritatis praesentium tempore asperiores fuga dolor hic?
