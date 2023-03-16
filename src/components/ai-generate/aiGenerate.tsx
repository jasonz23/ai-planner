import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
const AiGenerate = () => {
  const [time, setTime] = useState("");
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div style={{ fontSize: "25px", fontWeight: "bold", margin: "10px" }}>
        Generate Planner
      </div>
      <div style={{ margin: "10px", width: "80%" }}>
        <TextField label="Wake Up Time" fullWidth />
      </div>
      <div style={{ margin: "10px", width: "80%" }}>
        <TextField label="Sleep Time" fullWidth />
      </div>

      {/* TODO: <div style={{ margin: "10px" }}>Transport Time?</div> */}
      <div
        style={{
          margin: "10px",
          display: "flex",
          flexDirection: "column",
          width: "80%",
        }}
      >
        <FormControl fullWidth>
          <InputLabel id="time-period-select-label">Time period</InputLabel>
          <Select
            labelId="time-period-select-label"
            id="time-period-select"
            value={time}
            onChange={(e: SelectChangeEvent) => {
              setTime(e.target.value as string);
            }}
          >
            <MenuItem value={0}>1 Day</MenuItem>
            <MenuItem value={1}>3 Day</MenuItem>
            <MenuItem value={2}>1 Week</MenuItem>
          </Select>
        </FormControl>
      </div>
      <Button
        variant="contained"
        style={{ margin: "10px", marginBottom: "20px" }}
      >
        Generate
      </Button>
    </div>
  );
};

export default AiGenerate;
