import React from "react";
import { Grid, Typography, Box, Container } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import { fade, makeStyles } from "@material-ui/core/styles";

/**
 * @author
 * @function Footer
 **/

const useStyles = makeStyles((theme) => ({
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
  lastTypo: {
    color: theme.palette.primary.main,
    fontWeight: "10px",

  },
  secondTypo: {
    color: theme.palette.primary.main,
    fontSize: "12px",
  },
  boxContainer: {
    marginTop: "1em",
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
  return (
    <Grid container direction="column" className={classes.mainContainer}>
      <Container>
        <Grid item container className={classes.secCont}>
          <Grid
            item
            container
            alignItems="center"
            direction="column"
            xs={4}
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

          <Grid item xs={4} container justify="center">
            <Typography variant="h4" className={classes.firstTypo}>
              Categories/Tags
            </Typography>
          </Grid>

          <Grid
            item
            container
            direction="column"
            xs={4}
            style={{ textAlign: "center" }}
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
        <Grid item container direction='column' alignItems="center">
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
