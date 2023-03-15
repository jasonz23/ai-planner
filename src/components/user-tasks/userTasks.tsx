import { Divider } from "@mui/material";
import React from "react";
const UserTasks = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "60vh",
        display: " flex",
        flexDirection: "row",
        backgroundColor: "white",
      }}
    >
      <div
        style={{
          flex: "1",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div style={{ margin: "10px" }}>Monday</div>
        <Divider style={{ width: "100%" }} />
      </div>
      <div style={{ height: "100%", borderLeft: "1px solid #e0e0e0" }}></div>
      <div
        style={{
          flex: "1",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div style={{ margin: "10px" }}>Tuesday</div>
        <Divider style={{ width: "100%" }} />
      </div>
      <div style={{ height: "100%", borderLeft: "1px solid #e0e0e0" }}></div>
      <div
        style={{
          flex: "1",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div style={{ margin: "10px" }}>Wednesday</div>
        <Divider style={{ width: "100%" }} />
      </div>
      <div style={{ height: "100%", borderLeft: "1px solid #e0e0e0" }}></div>
      <div
        style={{
          flex: "1",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div style={{ margin: "10px" }}>Thursday</div>
        <Divider style={{ width: "100%" }} />
      </div>
      <div style={{ height: "100%", borderLeft: "1px solid #e0e0e0" }}></div>
      <div
        style={{
          flex: "1",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div style={{ margin: "10px" }}>Friday</div>
        <Divider style={{ width: "100%" }} />
      </div>
      <div style={{ height: "100%", borderLeft: "1px solid #e0e0e0" }}></div>
      <div
        style={{
          flex: "1",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div style={{ margin: "10px" }}>Saturday</div>
        <Divider style={{ width: "100%" }} />
      </div>
      <div style={{ height: "100%", borderLeft: "1px solid #e0e0e0" }}></div>
      <div
        style={{
          flex: "1",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div style={{ margin: "10px" }}>Sunday</div>
        <Divider style={{ width: "100%" }} />
      </div>
    </div>
  );
};

export default UserTasks;
