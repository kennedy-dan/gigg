import React,{useState} from "react";
import { Button, Grid, Typography, Box, useMediaQuery, useTheme, Container } from "@material-ui/core";
import FirstBaground from "./UI/firstbg";
import { fade, makeStyles } from "@material-ui/core/styles";
import bg1 from "../assets/bg1.jpg";
import bg5 from "../assets/bg2.jpg";
import bg3 from "../assets/bg3.jpg";
import bg4 from "../assets/bg4.jpg";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import FourSteps from "./UI/FourSteps";
import Header from "./UI/Header";
import SecondSection from "./UI/secondSection";

/**
 * @author
 * @function Home
 **/

const useStyles = makeStyles((theme) => ({



  secondSection:{
    marginTop:'100px',
    // marginLeft: '18px',
    // marginRight: '18px'
    [theme.breakpoints.down('sm')]: {
      maxWidth: '600px'
    },
    [theme.breakpoints.up('md')]: {
      maxWidth: '960px'
    },
    [theme.breakpoints.up('lg')]: {
      maxWidth: '1280px'
    },
   
  },

  subText:{
    [theme.breakpoints.down('xs')]: {
      // alignItems:'center'
    },
    // marginLeft:'1% !important',
    // paddingRight:'1% !important',
  },
 
  // caption:{
  //   textAlign:'center',
  //   width:'80%',
  // },

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

 


  firstsec1: {
    // marginLeft: "1%",
  },
  firstsec2: {
    // marginRight: "1%",
  },
banner1:{
    maxWidth: "300px",
    height: "350px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    [theme.breakpoints.down("md")]: {      
      maxWidth:'220px',
    },
    [theme.breakpoints.down("sm")]: {      
      maxWidth:'260px',
      height: '280px',
      marginBottom: '6em'
    },
    [theme.breakpoints.down("xs")]: {      
      maxWidth:'400px',
      height: '280px',
      marginBottom: '6em'
    },
  },
   bg4: {
    backgroundImage: `url(${bg4})`,
    [theme.breakpoints.down('md')]:{
      // marginRight: '4%',

    }

  },
  bg3: {
    backgroundImage: `url(${bg3})` ,
   
  },
  bg1: {
    backgroundImage: `url(${bg5})` ,
  
  },
  bg: {
    backgroundImage: `url(${bg1})`,
    [theme.breakpoints.down('md')]:{
      // marginLeft: '4%',

    }

  },
  galleryGrid : {
    [theme.breakpoints.down('sm')]:{
      // alignContent: 'center'
      // marginRight: '4%'

    }
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
  fontSize: {
    fontSize: "13px",
  },
  wrapper: {
    backgroundColor: "black",
  },
  typoTypes: {
    fontSize: "12px ",
  },
  btnType: {
    fontSize: "12px",
    boxShadow:'none',
    // marginLeft: '28em'
  },
  typeCont:{
    marginTop: '8px'
  },
 hiddenTypo: {
   marginTop: '10em',
   marginLeft: '80px',
   fontSize: '13px',
   color:'none',
   "&:hover": {
     display: 'inline-block'
   }
 }
}));

const defaultProps = {
  bgcolor: "#d7eff8",
  borderColor: "#d7eff8",
  m: 1,
  border: 1,
  style: { width: "5rem", height: "5rem" },
};



const Home = (props) => {
  const classes = useStyles();
  const theme =useTheme()
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesLG = useMediaQuery(theme.breakpoints.down("lg"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));




  
  return (
    <Grid container direction="column">
      <Grid item>
        <FirstBaground />
      </Grid>





      <Container Container   className={  `${classes.secondSection} container`} >



      <Grid item container justify={matchesXS ? 'center': 'inherit'}  className={  classes.subText} >
        <Typography >
          <Typography variant={matchesSM ? 'h4': 'h3'}><b>Types of <span style={{ color: "#9cf744" }}> Work </span>
          Space Available </b></Typography>
        </Typography>
      

                {/* SUB-TEXT */}
      <Grid
        item
        container 
        direction={matchesXS ? 'column' : 'row'}
        justify={matchesXS ? 'center' : 'space-between'}
        style={{ marginBottom: "2em" }}
        alignItems= {matchesXS ? 'center': null}
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
      
          {/* GALERY */}

          


      <Grid container direction={matchesXS ? 'column' : 'row'}  justify={matchesXS? 'center':'space-between'}      
        alignItems= {matchesXS ? 'center': null}
      
      style={{padding:'0 !important'}} className={classes.galleryGrid}>
        <Grid item   >
          <Grid item container justify="center" className={  `${classes.banner1} ${classes.bg}`} >
            <Grid container item className={classes.cont}>
              <div style={{position: 'absolute'}} className={classes.hiddenTypo}>
                <Typography className={classes.hoverTypo}>Accomodation</Typography>
              </div>
            </Grid>
            <div className={classes.caption}  >
            <h6>Meeting room</h6>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
               Ad, illum minima</p>
          </div>
          </Grid>
        </Grid>



        
        <Grid item  direction="column" style={{  }}>
          <Grid item container justify="center" className={  `${classes.banner1} ${classes.bg1}`} >
          <Grid container item className={classes.cont}>
          <div style={{position: 'absolute'}} className={classes.hiddenTypo}>
                <Typography className={classes.hoverTypo}>Accomodation</Typography>
              </div>
          </Grid>
          <div className={classes.caption}  >
            <h6>Meeting room</h6>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
               Ad, illum minima</p>
          </div>
          </Grid>
        </Grid>


        <Grid item direction="column" style={{  }} >
          <Grid item container justify="center" className={  `${classes.banner1} ${classes.bg3}`} >
          <Grid container item className={classes.cont}>
          <div style={{position: 'absolute'}} className={classes.hiddenTypo}>
                <Typography className={classes.hoverTypo}>Accomodation</Typography>
              </div>
          </Grid>

          <div className={classes.caption}  >
            <h6>Meeting room</h6>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
               Ad, illum minima</p>
          </div>
          </Grid>

        </Grid>
        <Grid item direction="column" style={{ }} >
          <Grid item container justify="center"  className={  `${classes.banner1} ${classes.bg4}`}  >
          <Grid container item className={classes.cont}>
          <div style={{position: 'absolute'}} className={classes.hiddenTypo}>
                <Typography className={classes.hoverTypo}>Accomodation</Typography>
              </div>
          </Grid>
          <div className={classes.caption}  >
            <h6>Meeting room</h6>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
               Ad, illum minima</p>
          </div>
          </Grid>
          {/* <Grid item container direction="column" alignItems="center" className={classes.typeCont}>
            <Typography className={classes.typoTypes}>
              <b>Meeting room</b>
            </Typography>
            <Typography className={classes.typoTypes}>
              Lorem ipsum dolor sit amet,
            </Typography>
            <Typography className={classes.typoTypes}>
              Lorem ipsum dolor ,
            </Typography>
          </Grid> */}
        </Grid>
      </Grid>
      
      </Container>
     
  

     

      <FourSteps />
      <SecondSection />
    </Grid>
  );
};

export default Home;
