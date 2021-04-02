import { ThemeProvider } from "@material-ui/styles";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import React from "react";
import theme from "./components/UI/Theme";
import Header from './components/UI/Header'
import Home from "./components/Home";
import Footer from "./components/UI/Footer";
import Signin from "./components/Signin";

function App() {
  return (
    <ThemeProvider theme={theme}>
     <Router>
       {/* <Header /> */}
       <Switch>
         <Route exact path='/' component={Home} />
         <Route exact path='/signin' component={Signin}/>
       </Switch>
     </Router>
     {/* <Footer /> */}
    </ThemeProvider>
  );
}

export default App;
