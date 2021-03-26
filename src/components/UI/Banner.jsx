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
    backgroundColor: theme.palette.secondary.main,
    marginTop: "5em",
    // height: "100%",
  },
  bannerbg: {
    // maxHeight: "20em",
    width: "",
    height:'32em',
    // alignItems: "center",
    marginLeft:'4em',
    [theme.breakpoints.down('sm')] : {
     marginLeft:0,
     marginTop:'3em'   
    }
  },
  btn: {
    marginTop: "1.7em",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    borderRadius: 0,
  },
  firstTypo: {
    color: theme.palette.primary.main,
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
    letterSpacing:'2.1px'

  },
  thirdTypo: {
    fontSize: "11px",
    marginBottom: "8px",
    marginTop:'1em',
    width: "80%",
    fontFamily:'Roboto',
    letterSpacing:'2.1px'
  },
  rowCont: {
    paddingBottom: "1.5em",
  },
}));

const Banner = (props) => {
  const classes = useStyles();
  return (
    <Grid container direction="column" className={classes.mainContainer}>
        
<Container>
<Grid item container direction="column">
  <Grid item container>
    <Typography
      style={{ marginTop: "3em" }}
      className={classes.firstTypo}
    >
      Featured Plants
    </Typography>
  </Grid>
  <Grid
    container
    justify=""
    className={classes.rowCont}
    alignItems='center'
  >
    <Grid
      item
      direction="column"
      sm
      justify="center"
    >
      <Typography color="primary" 
      
      className={classes.secondTypo}>
        Lorem Ipsum
      </Typography>
      <Typography
        style={{}}
        color="primary"
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
      <Button variant="contained" className={classes.btn}>
        Lorem{" "}
      </Button>
    </Grid>
    <Grid item style={{}} sm>
      <img src={banner} className={classes.bannerbg} />
    </Grid>
  </Grid>
</Grid>
</Container>
        {/* <Grid item>
            <Typography>Featured Plants</Typography>
        </Grid>
        <Grid item container direction='row'>
            <Grid item>
                <img src={banner} className={classes.bannerbg} alt='ban'/>
            </Grid>
        </Grid> */}
    </Grid>
  );
};

export default Banner;


{/* <Container>
<Grid item container direction="column">
  <Grid item container>
    <Typography
      style={{ marginTop: "3em" }}
      className={classes.firstTypo}
    >
      Featured Plants
    </Typography>
  </Grid>
  <Grid
    container
    justify="space-between"
    
    className={classes.rowCont}
  >
    <Grid
      item
      direction="column"
      xs
    //   alignItems="flex-start"
      justify="center"
    >
      <Typography color="primary" 
      
      className={classes.secondTypo}>
        Lorem Ipsum
      </Typography>
      <Typography
        style={{}}
        color="primary"
        className={classes.thirdTypo}
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
      <Button variant="contained" className={classes.btn}>
        Lorem{" "}
      </Button>
    </Grid>
    <Grid item style={{}} xs>
      <img src={banner} className={classes.bannerbg} />
    </Grid>
  </Grid>
</Grid>
</Container> */}