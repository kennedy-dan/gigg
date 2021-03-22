import React from 'react'
import {Grid, Typography, Box} from '@material-ui/core'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import { fade, makeStyles } from "@material-ui/core/styles";

/**
* @author
* @function Footer
**/

const useStyles = makeStyles(theme => ({
   icons: {
       fontSize: '15px',
       margin: '8px',
       color: theme.palette.secondary.main
   },
   mainContainer: {
       marginTop: '4em',
       backgroundColor: theme.palette.secondary.main
   },
   secCont: {
       marginTop: '2em',
       marginBottom: '2em',
       marginLeft: '9em'
   },
   typo: {
       fontSize: '13px',
       marginBottom: '4px'
   }
}))
const defaultProps = {
    bgcolor: "#98dbf3",
  borderColor: "#d7eff8",
    m: 1,
    border: 1,
    style: { width: '2rem', height: '2rem' },
  };

const Footer = (props) => {
    const classes = useStyles()
  return(
    <Grid container className={classes.mainContainer}>
        <Grid item container className={classes.secCont}>
        <Grid item container directiom='column' xs>
        <Typography className={classes.typo}>
                1, Olaniyan Str 
            </Typography>
            <Typography className={classes.typo}>
                Mobolaje Close Anthony Way <br />
            </Typography>
            <Typography className={classes.typo}>
               
                MaryLand, Lagos.
            </Typography>
        </Grid>
        <Grid item container directiom='column' xs>
        <Typography className={classes.typo}>
                1, Olaniyan Str 
            </Typography>
            <Typography className={classes.typo}>
                Mobolaje Close Anthony Way <br />
            </Typography>
            <Typography className={classes.typo}>
               
                MaryLand, Lagos.
            </Typography>
        </Grid>
        <Grid item container directiom='column' xs>
            <Typography className={classes.typo}>
                1, Olaniyan Str 
            </Typography>
            <Typography className={classes.typo}>
                Mobolaje Close Anthony Way <br />
            </Typography>
            <Typography className={classes.typo}>
               
                MaryLand, Lagos.
            </Typography>
        </Grid>
        <Grid container item xs>
    <Box display="flex" justifyContent="center"  >
      <Box borderRadius="50%" {...defaultProps}><FacebookIcon className={classes.icons}/></Box>
      <Box borderRadius="50%"{...defaultProps}><TwitterIcon className={classes.icons}/></Box>
      <Box borderRadius={20}{...defaultProps} ><InstagramIcon className={classes.icons}/></Box>
    </Box>
    </Grid>
        </Grid>
    </Grid>
   )
  }


export default Footer