import { createMuiTheme } from '@material-ui/core/styles';

const blueTheme = '#197519'
const whiteTheme = '#FFFFFF'
const darkWhite ='#afafaf'
const lightGreen = '#f9fbf9'
const fontFamily = 'Tenor Sans'

export default createMuiTheme ({
    palette: {
        common: {
            blue: `${blueTheme}`,
            orange: `${whiteTheme}`
        },
        primary: {
            main: `${whiteTheme}`
        },
        secondary: {
            main: `${blueTheme}`
        },
        tertiary: {
         main: 'rgba(0,0,0,0.4)'
        },
        advance: {
            main: `${darkWhite}`
        },
        banner: {
            main :`${lightGreen}`
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