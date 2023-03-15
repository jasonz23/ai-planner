import { Button } from "@mui/material";
import React from "react";
const AiGenerate = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div>Generate Planner</div>
      <div>Wake up</div>
      <div>Sleep</div>
      <div>Transport Time?</div>
      <div>
        Time period you want to create a planner for (time from now) 1 day, 1
        week, 1 month
      </div>
      <Button variant="contained">Generate</Button>
    </div>
  );
};

export default AiGenerate;
