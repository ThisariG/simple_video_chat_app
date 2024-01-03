import React, { useContext } from "react";
import { Button, Typography } from "@mui/material";
import { SocketContext } from "../SocketContext";

const Notifications = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);
  
  return (
    <div>
      {call.isReceivedCall && !callAccepted && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Typography variant="h6">{call.name} is calling </Typography>
          <Button style={{marginLeft:"20px"}} variant="contained" color="primary" onClick={answerCall}>
            Answer
          </Button>
        </div>
      )}
    </div>
  );
};

export default Notifications;
