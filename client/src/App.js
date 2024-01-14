import React from 'react'
import { Typography, AppBar } from "@mui/material";
import { makeStyles } from '@mui/styles';

import { createTheme, ThemeProvider } from "@mui/material/styles";

import VideoPlayer from './components/VideoPlayer'
import Options  from './components/Options';
import Notifications from './components/Notifications'

const theme = createTheme();


const App = () => {  
  const useStyles = makeStyles((theme) => ({
    appBar: {
      padding: "10px 100px",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
    },
    image: {
      marginLeft: "15px",
    },
    wrapper: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
    },
  }));
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div>
        <AppBar position="static" color="inherit" className={classes.appBar}>
          <Typography variant="h2" align="center">
            EasyTalk
          </Typography>
        </AppBar>
        <VideoPlayer />
        <Options>
          <Notifications />
        </Options>
      </div>
    </ThemeProvider>
  );
}


export default App
