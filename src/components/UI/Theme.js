import { createMuiTheme } from '@material-ui/core/styles';

const greenTheme = '#197519'
const whiteTheme = '#FFFFFF'
const darkWhite ='#afafaf'
const orange ='#FFBA60'
// const lightGreen = '#f9fbf9'
const fontFamily = 'Raleway'
const lightGreen = '#f9fbf9'
// const blueTheme = '#197519'


export default createMuiTheme ({
    palette: {
        common: {
            blue: `${greenTheme}`,
            orange: `${whiteTheme}`
        },
        primary: {
            main: `${whiteTheme}`
        },
        secondary: {
            main: `${greenTheme}`
        },
        tertiary: {
         main: 'rgba(0,0,0,0.4)'
        },
        advance: {
            main: `${darkWhite}`
        },
        banner: {
            main :`${lightGreen}`
        },
        preSec: {
            main: `${orange}`
        }
    },
    font: {
        primary: {
            main:`${fontFamily}`
        }
    },
    typography: {
        h3 : {
            fontWeight: 300
        }
    }
})