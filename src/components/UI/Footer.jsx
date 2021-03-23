import React from "react";
import { Grid, Typography, Box, Container, useTheme, useMediaQuery } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import { fade, makeStyles } from "@material-ui/core/styles";

/**
 * @author
 * @function Footer
 **/

const useStyles = makeStyles((theme) => ({
    secondSection:{
        // marginTop:'150px',
        [theme.breakpoints.down('sm')]: {
          maxWidth: '750px'
        },
        [theme.breakpoints.up('md')]: {
          maxWidth: '960px'
        },
        [theme.breakpoints.up('lg')]: {
          maxWidth: '1280px'
        },
      },
  icons: {
    fontSize: "25px",
    margin: "6px",
    color: theme.palette.secondary.main,
  },
  mainContainer: {
    marginTop: "4em",
    backgroundColor: theme.palette.secondary.main,
  },
  secCont: {
    marginTop: "5em",
    marginBottom: "5em",
  },

  firstGrid: {
    textAlign: "center",
  },
  typo: {
    fontSize: "13px",
    marginBottom: "4px",
  },

  firstTypo: {
    marginBottom: "1em",
    color: theme.palette.primary.main,
    fontWeight: "10px",
    fontSize: "24px",
  },
  firstTypo2 :{
    marginBottom: "1em",
    color: theme.palette.primary.main,
    fontWeight: "10px",
    fontSize: "24px",
    [theme.breakpoints.down('xs')]: {
        marginTop: '3em',
        
    }
  },
  lastTypo: {
    color: theme.palette.primary.main,
    fontWeight: "10px",

  },
  thirdGrid : {
    [theme.breakpoints.down('xs')]: {
        marginTop: '3em',
        
    }
  },
  secondTypo: {
    color: theme.palette.primary.main,
    fontSize: "12px",
  },
  boxContainer: {
    marginTop: "1em",
  },
  lastGrid : {
    [theme.breakpoints.down('xs')]: {
        marginBottom: '2em',
        
    }
  }
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
  const theme = useTheme()
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Grid container direction="column" className={classes.mainContainer}>
      <Container className={classes.secondSection}>
        <Grid item container direction={matchesXS ? 'column' : 'row'} className={classes.secCont}>
          <Grid
            item
            container
            alignItems="center"
            direction="column"
            xs
            className={classes.firstGrid}
          >
            <Typography variant="h4" className={classes.firstTypo}>
              About us
            </Typography>
            <Typography className={classes.secondTypo}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem nihil minima quae reiciendis consectetur nulla
              itaque perspiciatis vitae odio mollitia, consequuntur et placeat
              debitis ex, inventore dicta velit unde deleniti?
            </Typography>
            <Box
              display="flex"
              justifyContent="center"
              className={classes.boxContainer}
            >
              <Box borderRadius="50%" {...defaultProps}>
                <FacebookIcon className={classes.icons} />
              </Box>
              <Box borderRadius="50%" {...defaultProps}>
                <TwitterIcon className={classes.icons} />
              </Box>
              <Box borderRadius={20} {...defaultProps}>
                <InstagramIcon className={classes.icons} />
              </Box>
            </Box>
          </Grid>

          <Grid item xs container justify="center">
            <Typography variant="h4" className={classes.firstTypo2}>
              Categories/Tags
            </Typography>
          </Grid>

          <Grid
            item
            container
            direction="column"
            xs
            style={{ textAlign: "center" }}
            className={classes.thirdGrid}
            alignItems="center"
          >
            <Typography variant="h4" className={classes.firstTypo}>
              Have Questions
            </Typography>
            <Typography className={classes.secondTypo}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem nihil minima quae reiciendis consectetur nulla
              itaque perspiciatis vitae odio mollitia, consequuntur et placeat
              debitis ex, inventore dicta velit unde deleniti?
            </Typography>
            <Box display="flex" justifyContent="center">
              <Box borderRadius="50%" {...defaultProps}>
                <FacebookIcon className={classes.icons} />
              </Box>
              <Box borderRadius="50%" {...defaultProps}>
                <TwitterIcon className={classes.icons} />
              </Box>
              <Box borderRadius={20} {...defaultProps}>
                <InstagramIcon className={classes.icons} />
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Grid item container direction='column' alignItems="center" className={classes.lastGrid}>
          <Typography variant="h4" className={classes.lastTypo}>
            Lorem ipsum
          </Typography>
          <Typography className={classes.secondTypo}>
            Lorem, ipsum dolor sit amet 
          </Typography>
        </Grid>
      </Container>
    </Grid>
  );
};

export default Footer;
