import React from "react";
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

/**
 * @author
 * @function Banner
 **/
const useStyles = makeStyles((theme) => ({
  mainContainer: {
    backgroundColor: theme.palette.banner.main,
    marginTop: "5em",
    // height: "100%",
  },
  bannerbg: {
    // maxHeight: "20em",
    width: "",
    height:'32em',
    [theme.breakpoints.down('sm')]:{
        width:'13em'
    },
    [theme.breakpoints.down('xs')]:{
        width:'22em'
    },
    // alignItems: "center",
    marginLeft:'6em',
    [theme.breakpoints.down('sm')] : {
     marginLeft:0,
     marginTop:'3em'   
    }
  },
  btn: {
    marginTop: "1.7em",
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.secondary.main,
    borderRadius: 0,
    // width:'100%',
    [theme.breakpoints.down('xs')]:{
        textAlign:'center',
        alignItems:'center',
        alignSelf:'center'
    },
  },
  firstTypo: {
    color: theme.palette.secondary.main,
    fontSize: "16px",
    letterSpacing:'1.7px',
    [theme.breakpoints.up('md')] : {
        paddingTop: "5em",

       }


  },
  secondTypo: {
    fontSize: "14px",
    [theme.breakpoints.up('md')]:{
        marginTop: "-2em",

    },
    [theme.breakpoints.down('xs')]:{
        textAlign:'center'
    },
    letterSpacing:'2.1px'

  },
  thirdTypo: {
    fontSize: "11px",
    marginBottom: "8px",
    marginTop:'1em',
    width: "80%",
    fontFamily:'Roboto',
    letterSpacing:'2.1px',
    [theme.breakpoints.down('xs')]:{
        textAlign:'center',
        width:'100%'
    },
  },
  rowCont: {
    paddingBottom: "1.5em",
  },
}));

const Banner = (props) => {
  const classes = useStyles();
  const theme = useTheme()

  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Grid container direction="column" className={classes.mainContainer}>
        
<Container>
<Grid item container direction="column">
  <Grid item container justify={matchesXS? 'center':""}>
    <Typography
      style={{ marginTop: "3em" }}
      className={classes.firstTypo}
    >
      Featured Plants
    </Typography>
  </Grid>
  <Grid
    container
    // justify="space-between"
    className={classes.rowCont}
    alignItems='center'
    // direction={matchesXS ? 'column' : 'row'}
    justify={matchesXS? 'center':""}
  >
    <Grid
      item
      direction="column"
      sm
    //   justify="center"
    >
      <Typography color="secondary" 
      
      className={classes.secondTypo}>
        Lorem Ipsum
      </Typography>
      <Typography
        style={{}}
        color="secondary"
        className={classes.thirdTypo}
        variant='body1'

      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Sapiente dolore perspiciatis id assumenda, vero, nesciunt
        perferendis eveniet qui ea sequi rerum magni iure aspernatur
        unde doloribus illum illo distinctio modi? Lorem ipsum dolor sit
        amet consectetur, adipisicing elit. Harum vitae rem expedita
        nobis omnis consectetur assumenda reprehenderit, nostrum
        dignissimos explicabo? Aliquam temporibus, soluta sapiente ut
        facilis autem non ea fugiat!
      </Typography>
      <Grid item container justify={matchesXS ? 'center':''}>
      <Button variant="contained" className={classes.btn}>
        <Typography>Lorem</Typography> 
      </Button>
      </Grid>
    </Grid>
    <Grid item style={{}} sm>
      <img src={banner} className={classes.bannerbg} />
    </Grid>
  </Grid>
</Grid>
</Container>

    </Grid>
  );
};

export default Banner;

