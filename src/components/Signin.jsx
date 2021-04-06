import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import EmailIcon from "@material-ui/icons/Email";
import LockIcon from "@material-ui/icons/Lock";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import {
  Button,
  Grid,
  Typography,
  Box,
  TextField,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { OutlinedInput, InputBase } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import secureFiles from "../assets/securefiles.svg";
import secondSecFiles from "../assets/secsecurefiles.svg"


import {
  faFacebookF,
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
// import './style.css'

/**
 * @author
 * @function Signin
 **/

const useStyles = makeStyles((theme) => ({
  cont: {
    position: "relative",
    width: "100%",
    background: "#fff",
    minHeight: "100vh",
    overflow: "hidden",
    [theme.breakpoints.down('xs')]:{
      minHeight:'800px',
      height:'100vh'
    },
  
    "&:before": {
      content: '"-"',
      position: "absolute",
      height: "3000px",
      width: "2000px",
      borderRadius: "50%",
      background: theme.palette.secondary.main,
      top: "-10%",
      right: "48%",
      transform: "translateY(-50%)",
      zIndex: 6,
      transition: "1.8s ease-in-out",
      [theme.breakpoints.down('xs')]:{
        width:'1500px',
        height:'1500px',
        left:'30%',
        bottom:'68%',
        transform:'translateX(-50%)',
        right:'initial',
        top:'initial',
        transition: '2s ease-in-out'
      },
   
    },
  },
  contAnime: {
    position: "relative",
    width: "100%",
    background: "#fff",
    minHeight: "100vh",
    overflow: "hidden",
    "&:before": {
      content: '"-"',
      position: "absolute",
      height: "3000px",
      width: "2000px",
      borderRadius: "50%",
      background: theme.palette.secondary.main,

      top: "-10%",
      right: "48%",
      transform: "translateY(-50%)",
      zIndex: 6,
      transition: "1.8s ease-in-out",
      transform: "translate(100%, -50%)",
      right: "52%",
      [theme.breakpoints.down('xs')]: {
        transform: 'translate(-50%, 100%)',
        bottom: '38%',
        right:'initial',
        
        height:'520px',
        width:'2000px',
        // top:'28%'
      }
    
    },
  },
  formCont: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
  },
  signInUp: {
    position: "absolute",
    top: "50%",
    transform: "translate(-50%, -50%)",
    left: "75%",
    width: "50%",
    transition: "1s 0.7s ease-in-out",
    display: "grid",
    gridTemplateColumns: "1fr",
    zIndex: 5,
    [theme.breakpoints.down('xs')]:{
      width:'100%',
      left:'50%',
      top:'78%',
      transform: "translate(-50%, -100%)",
    transition: "1s 0.7s ease-in-out",

    },
  
  },
  signInUpAnime: {
    position: "absolute",
    top: "50%",
    transform: "translate(-50%, -50%)",
    left: "25%",
    width: "50%",
    transition: "1s 0.7s ease-in-out",
    display: "grid",
    gridTemplateColumns: "1fr",
    zIndex: 5,
    [theme.breakpoints.down('xs')]: {
      width:'100%',
      top:'1%',
      transform: 'translate(-50%, 0)',
      left:'50%'
    },
  
  },
  signInForm: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    gridColumn: " 1 / 2",
    gridRow: "1 / 2",
    zIndex: 2,

    padding: "0rem 5rem",
    transition: " 0.2s 0.7s ease-in-out",
    overflow: "hidden",
  },
  signInFormAnime: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    gridColumn: " 1 / 2",
    gridRow: "1 / 2",
    zIndex: 1,
    opacity: 0,
    transition: " 0.2s 0.7s ease-in-out",

    padding: "0rem 5rem",
    // transition: "all 0.2s 0.7s",
    overflow: "hidden",
  },
  title: {
    fontSize: "24px",
    color: theme.palette.secondary.main,
    fontFamily: theme.font.primary.main,
    fontWeight: 700,
    marginBottom: "20px",
  },

  btn: {
    // width: "150px",
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.secondary.main,
    fontFamily: theme.font.primary.main,
    fontSize: "12px",
    padding:'5px 20px',
    borderRadius: '5px',
    margin: "10px 0",
    textTransform:'none',
    "&:hover": {
    backgroundColor: theme.palette.secondary.main,

    },
   
  },
  root: {
    background: "#e4fcfa",
    outline: 10,
    // lineHeight: 1,
    fontWeight: 600,
    width: "290px",
    // fontSize:'20px'
    // height: "20px",
  

    fontSize: "190px",
    border: "1px solid black",
    // color: "#333",
    // borderRadius: "99px",
    border: 0,

    [theme.breakpoints.down('xs')]:{
      fontSize: '60px',
      marginTop:'-10px'
      // height:'22px'
    },

    marginBottom: "20px",
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: theme.palette.secondary.main,
      // borderRadius: "99px",
    },
    "&:hover  .MuiOutlinedInput-notchedOutline": {
      borderColor: theme.palette.secondary.main,
      // border: 0
    },
  },

  signUpForm: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    gridColumn: " 1 / 2",
    gridRow: "1 / 2",
    zIndex: 1,
    opacity: 0,
    transition: " 0.2s 0.7s ease-in-out",

    padding: "0rem 5rem",
    overflow: "hidden",

    // transition: "all 0.2s 0.7s",
  },
  signUpFormAnime: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    gridColumn: " 1 / 2",
    gridRow: "1 / 2",
    zIndex: 2,
    transition: " 0.2s 0.7s ease-in-out",

    padding: "0rem 5rem",
    overflow: "hidden",
    [theme.breakpoints.down('xs')]:{
      padding: '0px 1px'
     },
  },
  iconsCont: {
    display: "flex",
    justifyContent: "center",
  },
  textCont: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: 0,
    left: 0,
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    [theme.breakpoints.down('xs')]:{

     gridTemplateColumns:'1fr',
     gridTemplateRows:'1fr 2fr 1fr'
    },
  
  },
  leftImg: {
    width: "100%",
    transition: "transform 1.1s 0.4s ease-in-out",
    [theme.breakpoints.down('xs')]:{
      width:'150px',
    transition: "transform 0.9s 0.6s ease-in-out",

     },
    // transform: "translateX(-800px)",
  },
  leftimgAnime: {
    width: "100%",
    transition: "transform 1.1s 0.4s ease-in-out",
    transform: "translateX(-800px)",
    [theme.breakpoints.down('xs')]:{
      width:'150px',
    transform: "translateY(-300px)",

     },
  },
  rightImg: {
    width: "100%",
    transform: "translateX(800px)",
    transition: "transform 0.9s 0.6s ease-in-out",
    [theme.breakpoints.down('xs')]:{
     transform:"translateY(300px)",
     width:'150px',
    transition: "transform 0.9s 0.6s ease-in-out",

    },
   
  },
  rightImgAnime: {
    width: "100%",
    transform: "translateX(0px)",
    transition: "transform 0.9s 0.6s ease-in-out",
    [theme.breakpoints.down('xs')]:{
    //  transform:"translateY(300px)",

      width:'150px'
     },
   
  },
  RightPanel: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    padding: "3rem 12% 2rem 17%",
    justifyContent: "space-around",
    textAlign: "center",
    zIndex: 6,
    pointerEvents: "none",
    [theme.breakpoints.down('xs')]:{
      flexDirection:'row',
      justifyContent:'space-around',
      alignItems: 'center',
      gridRow: '3 / 4',
      padding:'2.5rem 8%'
     },
   
  
  },
  RightPanelAnime: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    padding: "3rem 12% 2rem 17%",
    justifyContent: "space-around",
    textAlign: "center",
    zIndex: 6,
    pointerEvents: "all",
    [theme.breakpoints.down('xs')]:{
      flexDirection:'row',
      justifyContent:'space-around',
      alignItems: 'center',
      gridRow: '3 / 4',
      padding:'2.5rem 8%'

     },
  },
  leftPanel: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    padding: "3rem 17% 2rem 12%",
    justifyContent: "space-around",
    textAlign: "center",
    zIndex: 6,
    pointerEvents: "all",
    [theme.breakpoints.down('xs')]:{
      flexDirection:'row',
      justifyContent:'space-around',
      alignItems: 'center',
      gridRow: '1 / 2',
      padding:'2.5rem 8%'
     },
 
  },

  leftPanelAnime: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    padding: "3rem 17% 2rem 12%",
    justifyContent: "space-around",
    textAlign: "center",
    zIndex: 6,
    pointerEvents: "none",
    [theme.breakpoints.down('xs')]:{
      flexDirection:'row',
      justifyContent:'space-around',
      alignItems: 'center',
      gridRow: '1 / 2',
      padding:'2.5rem 8%'
     },
  },
  rightcontent: {
    transform: "translateX(800px)",
    color: theme.palette.primary.main,

    transition: "transform 0.9s 0.6s ease-in-out",
    [theme.breakpoints.down('xs')]:{
      transform:"translateY(300px)",
     },
  
   
  },
  rightcontentAnime: {
    transform: "translateX(0px)",
    color: theme.palette.primary.main,
    transition: "transform 0.9s 0.6s ease-in-out",
    [theme.breakpoints.down('xs')]:{
      fontSize: '5px'
     },
   
  },
  leftContent: {
    color: theme.palette.primary.main,

    transition: "transform 1.1s 0.4s ease-in-out",
   
  },
  leftContentAnime: {
    transition: "transform 0.9s 0.6s ease-in-out",
    transform: "translateX(-800px)",
    color: theme.palette.primary.main,
    [theme.breakpoints.down('xs')]:{
    transform: "translateY(-300px)",

    }
  
  },
  textBtn: {
    borderColor: theme.palette.primary.main,
    color: theme.palette.primary.main,
    fontFamily: theme.font.primary.main,
    fontSize: "12px",
    padding:'5px 20px',
    borderRadius: "5px",
    textTransform:'none',

    [theme.breakpoints.down('xs')]:{
      fontSize: '10px',
  
      
    
        
     },
  },
  h3: {
    fontFamily: theme.font.primary.main,
    fontSize: "24px",
    [theme.breakpoints.down('xs')]:{
      fontSize: '15px'
     },
  },
  p: {
    fontFamily: theme.font.primary.main,
    fontSize: "16px",
    [theme.breakpoints.down('xs')]:{
      fontSize: '13px'
     },
  },
  socialP: {
    fontFamily: theme.font.primary.main,
    fontSize: "16px",
    color: "black",
    fontWeight: 400,
  },
  iconsCont: {
    marginTop: "24px",
    display: "flex",
    textAlign: "center",
    [theme.breakpoints.down('xs')]:{
      marginTop:'1px'
      // fontSize: '10px'
     },

  },
  icons: {
    fontSize: "25px",
    // paddingLeft:"13px",
    // margin:'11.5px',
    marginTop: "8px",
    [theme.breakpoints.down('xs')]:{
      // fontSize: '15px'
     },

    color: theme.palette.primary.main,
    // padding:'10px',
    // backgroundColor:'black'
  },
  iconsInst: {
    color: theme.palette.primary.main,
    fontSize: "25px",
    alignItems: "center",
    textAlign: "center",
    marginTop: "8px",
    // marginLeft: "14px",
    // margin:'12px'
    // marginRight: "14px",
  },
  resize:{
    fontSize:'15px'
  }
}));

const defaultProps = {
  bgcolor: "#197519",
  // borderColor: "rgba(0,0,0,0.4)",
  m: 1,
  // border: 1,
  style: { width: "4.3rem", height: "4.3rem" },
};

const Signin = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [animate, setAnimate] = useState(false);
  const [anotherAnimate, setAnotherAnimate] = useState(false);

  const matchesXS = useMediaQuery(theme.breakpoints.down("sm"));

  const [values, setValues] = React.useState({
    pWord: "",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const animationclass = () => {
    setAnimate(true);
  };

  const anotheranimationclass = () => {
    setAnimate(false);
  };

  return (
    <React.Fragment>
      <div
        class="container"
        className={animate ? classes.contAnime : classes.cont}
      >
        <div class="forms-container" className={classes.formCont}>
          <div
            class="signin-signup"
            className={animate ? classes.signInUpAnime : classes.signInUp}
          >
            <form
              action="#"
              class="sign-in-form"
              className={animate ? classes.signInFormAnime : classes.signInForm}
            >
              <h2 class="title" className={classes.title}>
                Sign in
              </h2>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="Email"
                disableUnderline={false}
                // label="Phone Number"
                name="phoneNumber"
                className={classes.root}
                placeholder="Email"
                InputProps={{
                  classes:{
                    input: classes.resize
                  },
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircleIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="password"
                type={values.showPassword ? "text" : "password"}
                disableUnderline={false}
                // label="Phone Number"
                name="password"
                className={classes.root}
                placeholder="password"
                InputProps={{
                  classes:{
                    input: classes.resize
                  },
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {values.showPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <Button variant="contained" className={classes.btn}>
                Sign in
              </Button>
           
            </form>
            <form
              action="#"
              class="sign-up-form"
              className={animate ? classes.signUpFormAnime : classes.signUpForm}
            >
              <h2 class="title" className={classes.title}>
                Sign up
              </h2>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="Email"
                disableUnderline={false}
                // label="Phone Number"
                name="phoneNumber"
                className={classes.root}
                placeholder="Email"
                InputProps={{
                  classes:{
                    input: classes.resize
                  },
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircleIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="password"
                type={values.showPassword ? "text" : "password"}
                disableUnderline={false}
                // label="Phone Number"
                name="password"
                className={classes.root}
                placeholder="password"
                InputProps={{
                  classes:{
                    input: classes.resize
                  },
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {values.showPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="Email"
                disableUnderline={false}
                // label="Phone Number"
                name="phoneNumber"
                className={classes.root}
                placeholder="Name"
                InputProps={{
                  classes:{
                    input: classes.resize
                  },
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircleIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="Email"
                disableUnderline={false}
                // label="Phone Number"
                name="phoneNumber"
                className={classes.root}
                placeholder="Phone Number"
                InputProps={{
                  classes:{
                    input: classes.resize
                  },
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircleIcon />
                    </InputAdornment>
                  ),
                }}
              />

              <Button className={classes.btn}>Sign up</Button>
             
            </form>
          </div>
        </div>
        <div className={classes.textCont}>
          <div className={animate ? classes.leftPanelAnime : classes.leftPanel}>
            <div
              className={
                animate ? classes.leftContentAnime : classes.leftContent
              }
            >
              <h3 className={classes.h3}>New Here ?</h3>
              <p className={classes.p}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quo
                velit necessitatibus minima
              </p>
              <Button
                variant="outlined"
                onClick={animationclass}
                className={classes.textBtn}
              >
                Sign up
              </Button>
            </div>
            <img
              src={secureFiles}
              className={animate ? classes.leftimgAnime : classes.leftImg}
            />
          </div>

          <div
            className={animate ? classes.RightPanelAnime : classes.RightPanel}
          >
            <div
              className={
                animate ? classes.rightcontentAnime : classes.rightcontent
              }
            >
              <h3 className={classes.h3}>One of Us ?</h3>
              <p className={classes.p}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quo
                velit necessitatibus minima
              </p>
              <Button
                variant="outlined"
                onClick={anotheranimationclass}
                className={classes.textBtn}
              >
                Sign in
              </Button>
            </div>
            <img
              src={secureFiles}
              className={animate ? classes.rightImgAnime : classes.rightImg}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Signin;

// import {signin} from '../actions'
// import { Redirect, Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// const dispatch = useDispatch()

//   const auth = useSelector(state => state.auth)

//   if(auth.authenticate){
//     return <Redirect to = {'/crimereport'}/>
//   }else{
//     // return <Redirect to = {'/signup'} />
//   }

//   const userSignin = (e) => {
//     e.preventDefault()
//     const user = {
//       email,
//       password
//     }
//     dispatch(signin(user))
//   }
{
  /* <Grid
        container
        direction="column"
        alignItems="flex-end"
        style={{ marginTop: "2em" }}
      >
        ><Grid item>Sign In</Grid>
        <Grid item>
          <FormControl
            className={clsx(classes.margin, classes.textField)}
            variant="outlined"
            style={{ marginBottom: "1em" }}
          >
            <InputLabel htmlFor="outlined-adornment-password" color="primary">
              <EmailIcon className={classes.inp} color="secondary" />
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              labelWidth={20}
              fullWidth={true}
              style={{ color: "white" }}
              className={classes.root}
            />
          </FormControl>
        </Grid>
        <Grid item>
          <FormControl
            className={clsx(classes.margin, classes.textField)}
            variant="outlined"
            style={{ marginBottom: "1em" }}

            // style={{backgroundColor: 'white'}}
          >
            <InputLabel htmlFor="outlined-adornment-password" color="primary">
              <LockIcon className={classes.inp} color="secondary" />
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              style={{ color: "white" }}
              type={values.showPassword ? "text" : "password"}
              labelWidth={20}
              fullWidth={true}
              className={classes.root}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </Grid>
        <Grid item style={{}}>
          <Button
            style={{
              background: "#0B72B9",
              // color: "white",
              width: "26ch",
              marginTop: "1em",
            }}
            color="secondary"
          >
            Sign Up
          </Button>
        </Grid>
        <Grid />
        <Grid item>
          <Grid item>Sign In</Grid>

          <Grid item>
            <FormControl
              className={clsx(classes.margin, classes.textField)}
              variant="outlined"
              style={{ marginBottom: "1em" }}
            >
              <InputLabel htmlFor="outlined-adornment-password" color="primary">
                <EmailIcon className={classes.inp} color="secondary" />
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                labelWidth={20}
                fullWidth={true}
                style={{ color: "white" }}
                className={classes.root}
              />
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl
              className={clsx(classes.margin, classes.textField)}
              variant="outlined"
              style={{ marginBottom: "1em" }}

              // style={{backgroundColor: 'white'}}
            >
              <InputLabel htmlFor="outlined-adornment-password" color="primary">
                <LockIcon className={classes.inp} color="secondary" />
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                style={{ color: "white" }}
                type={values.showPassword ? "text" : "password"}
                labelWidth={20}
                fullWidth={true}
                className={classes.root}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </Grid>

          <Grid item style={{}}>
            <Button
              style={{
                background: "#0B72B9",
                // color: "white",
                width: "26ch",
                marginTop: "1em",
              }}
              color="secondary"
            >
              Sign Up
            </Button>
          </Grid>
        </Grid>
      </Grid> */
}

// txf: {
//   border: " 1px solid blue",
//   borderRadius: theme.shape.borderRadius,
//   height: "3.5em",
// },
// root: {
//   "& .MuiOutlinedInput-notchedOutline": {
//     // borderColor: theme.palette.secondary.main,
//   },
//   "&:hover  .MuiOutlinedInput-notchedOutline": {
//     // borderColor: theme.palette.primary.main,
//   },
//   maxWidth: "18em",
//   borderRadius: "10px",
// },
// margin: {
//   margin: theme.spacing(1),
// },
// textField: {
//   width: "25ch",
// },

// inp: {
//   "&:hover": {
//     color: theme.palette.secondary.main,
//   },
//   zzz: {
//     zIndex: theme.zIndex.modal - 7,
//   },
// },
