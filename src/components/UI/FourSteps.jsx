import React from "react";
import { Button, Grid, Typography, Box,useTheme, useMediaQuery, Container } from "@material-ui/core";
import { fade, makeStyles } from "@material-ui/core/styles";
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

/**
 * @author
 * @function FourSteps
 **/

const useStyles = makeStyles((theme) => ({
  firstsec1: {
    marginLeft: "12.5em",
  },
  firstsec2: {
    marginRight: "12.5em",
  },
  secondSection:{
    marginTop:'10px',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '600px'
    },
    [theme.breakpoints.up('md')]: {
      maxWidth: '960px'
    },
   
  },
  banner1:{
    // width: "270px",
    height: "70px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
  cont: {
    [theme.breakpoints.down("sm")]: {
      height: "100% !important",
    },
    height: "100% !important",
    maxWidth: "100%",
    transition: '0.3s',
    // display: 'none'

    "&:hover": {
      backgroundColor: theme.palette.tertiary.main,
      // transform: 'translate(50%)',
      // display: 'inline !important'
    },
    // opacity: '0.5px'
  },
  caption: {
    textAlign:'center',
    width:'80%',
    paddingTop:'10px',
    
    "& h6": {
      fontWeight:'bolder',
    },
    "& p": {
      marginTop:'-5px',
      fontWeight:'lighter',
    }
  },

  mainText: {
    fontSize:'19px'
  },
  box: {
    width: '80%'
  },
  bg1: {
    width: "8em",
    height: "9em",
  },
  fontSize: {
    fontSize: "13px",
    textAlign: 'center',
    marginTop: "0.5em",
    width: '80%',
    "& h6": {
      fontWeight:'bolder',
      fontFamily:'Roboto',
      letterSpacing:'0.7px'
    },
    "& p": {
      marginTop:'-5px',
      fontWeight:'lighter',
      fontFamily:'Roboto',
      letterSpacing:'0.5px'
    }
  },
  arrowIcon: {
    // marginTop: "1.5em",
    // marginLeft: "-1.5em",
    fontSize: '25px',
    marginRight: "1.5em",
    marginBottom: '4em',
    [theme.breakpoints.down('sm')] : {
      marginBottom: '6em',
    marginRight: "1.1em",

    },
    [theme.breakpoints.down('xs')] : {
      display: 'none'
    },
    color: "#9cf744",
    // paddingRight: '5px'
    // alignSelf: 'center'
  },
  downArrowIcon: {
    [theme.breakpoints.up('sm')] : {
      display: 'none'
    },
    color: "#9cf744",
    marginTop:'10px',
    marginBottom:'10px',
    fontSize:'25px'

  },
  accIcon: {
    margin: "11px",
    fontSize:'25px',
    // textAlign:'center',

    color: theme.palette.secondary.main,
  },
  secondTypo: {
    fontSize: "12px",
    marginTop: "8px",
  },
}));

const defaultProps = {
  bgcolor: "#d7eff8",
  borderColor: "#d7eff8",
  m: 1,
  border: 1,
  style: { 
    width: "5rem",
     height: "5rem",
    borderRadius:'10px'},

};

const FourSteps = (props) => {
  const classes = useStyles();
  const theme = useTheme()
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  
  return (
    <Container  className={classes.secondSection} >

    <Grid container direction="column" style={{ marginTop: "9em" }}>
      <Grid item container justify="center">
        <Typography variant="h5" className={classes.mainText}>
          <b>4 easy</b> <span style={{ color: "#9cf744" }}>steps</span>{" "}
          <b>to book</b>
        </Typography>
      </Grid>
      <Grid item container justify="center">
        <Typography className={classes.secondTypo}>
          Lorem ipsum dolor sit amet
        </Typography>
      </Grid>
      <Grid item container direction={matchesXS? 'column' : 'row'} justify="center" style={{ marginTop: "1em" }} alignItems='center'>
       
        <Grid item container direction='column' alignItems={matchesXS? 'center' : ''} xs style={{}}>
          <Grid container item  justify='center' className={classes.box}>
          <Box borderRadius={10} {...defaultProps} >
              {" "}
              <AccountCircleIcon className={classes.accIcon} />{" "}
            </Box>
          </Grid>
          <Grid container item className={classes.fontSize} justify='center'>
            <h6 >Meeting</h6>
            <p>
            Lorem ipsum, dolor sit amet consectetur earum
              dignissimos deleniti eum assumenda.
            </p>
          </Grid>
        </Grid>

        <ArrowRightAltIcon className={classes.arrowIcon} />
        <ArrowDownwardIcon className={classes.downArrowIcon}/>

        <Grid item container direction='column' xs alignItems={matchesXS? 'center' : ''}>
          <Grid container item  justify='center'  className={classes.box}>
          <Box borderRadius={20} {...defaultProps} >
              {" "}
              <AccountCircleIcon className={classes.accIcon} />{" "}
            </Box>
          </Grid>
          <Grid container item className={classes.fontSize} justify='center'>
            <h6 >Meeting</h6>
            <p>
            Lorem ipsum, dolor sit amet consectetur earum
              dignissimos deleniti eum assumenda.
            </p>
          </Grid>
        </Grid>
        <ArrowRightAltIcon className={classes.arrowIcon} />
        <ArrowDownwardIcon className={classes.downArrowIcon}/>

        <Grid item container direction='column' xs alignItems={matchesXS? 'center' : ''}>
          <Grid container item  justify='center'  className={classes.box}>
          <Box borderRadius={20} {...defaultProps} >
              {" "}
              <AccountCircleIcon className={classes.accIcon} />{" "}
            </Box>
          </Grid>
          <Grid container item style={{ marginTop: "0.5em" }} className={classes.fontSize}  justify='center'>
            <h6 >Meeting</h6>
            <p>
            Lorem ipsum, dolor sit amet consectetur earum
              dignissimos deleniti eum assumenda.
            </p>
          </Grid>
        </Grid>
        <ArrowRightAltIcon className={classes.arrowIcon} />
        <ArrowDownwardIcon className={classes.downArrowIcon}/>


        <Grid item container direction='column' xs style={{}} alignItems={matchesXS? 'center' : ''}>
          <Grid container item  justify='center'  className={classes.box}>
          <Box  {...defaultProps} >
              {" "}
              <AccountCircleIcon className={classes.accIcon} />{" "}
            </Box>
          </Grid>
          <Grid container item style={{ marginTop: "0.5em" }} justify='center' className={classes.fontSize} >
            <h6 >Meeting</h6>
            <p>
            Lorem ipsum, dolor sit amet consectetur earum
              dignissimos deleniti eum assumenda.
              
            </p>
          </Grid>
        </Grid>


        {/* <ArrowRightAltIcon className={classes.arrowIcon} /> */}


     
      </Grid>
    </Grid>
    </Container>
  );
};

export default FourSteps;
