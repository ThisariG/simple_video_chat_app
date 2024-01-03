import React, { useContext } from "react";
import { Grid, Typography, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { SocketContext } from "../SocketContext";

const useStyles = makeStyles((theme) => ({
  video: {
    width: "550px",
    // height: "300px",
  },
  gridContainer: {
    justifyContent: "center",
  },
  paper: {
    padding: "10px",
    margin: "10px",
    // height: "300px",
  },
}));

const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } =
    useContext(SocketContext);
  const classes = useStyles();
  return (
    <Grid container className={classes.gridContainer}>
      {stream && (
        <Paper elevation={10} className={classes.paper}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              {name || "Name"}
            </Typography>
            <video playsInline muted ref={myVideo} autoPlay className={classes.video} />{" "}
          </Grid>
        </Paper>
      )}
      {callAccepted && !callEnded && (
        <Paper elevation={10} className={classes.paper}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              {call.name || "Name"}
            </Typography>
            <video playsInline ref={userVideo} autoPlay className={classes.video} />{" "}
          </Grid>
        </Paper>
      )}
    </Grid>
  );
};

export default VideoPlayer;
