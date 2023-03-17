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
import { generateTasks } from "../../api/tasks";
import { auth } from "../../pages/App";
import { useAppDispatch, useAppSelector } from "../../slices";
const AiGenerate = () => {
  const [time, setTime] = useState("");
  const TIMEPERIOD: any = {
    "": "1 Day",
    "0": "1 Day",
    "1": "3 Day",
    "2": "1 Week",
  };
  const tasks = useAppSelector((state) => state?.tasks?.tasks);
  const dispatch = useAppDispatch();
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
        <TextField label="Wake Up Time" fullWidth id="wake-up-time" />
      </div>
      <div style={{ margin: "10px", width: "80%" }}>
        <TextField label="Sleep Time" fullWidth id="sleep-time" />
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
            <MenuItem value={1} disabled>
              3 Day
            </MenuItem>
            <MenuItem value={2} disabled>
              1 Week
            </MenuItem>
          </Select>
        </FormControl>
      </div>
      <Button
        variant="contained"
        style={{ margin: "10px", marginBottom: "20px" }}
        onClick={() => {
          dispatch(
            generateTasks({
              wakeUp: (
                document.getElementById("wake-up-time") as HTMLInputElement
              ).value,
              sleep: (document.getElementById("sleep-time") as HTMLInputElement)
                .value,
              time: TIMEPERIOD[time],
              tasks: tasks,
              uid: auth.currentUser?.uid,
            })
          );
        }}
      >
        Generate
      </Button>
    </div>
  );
};

export default AiGenerate;
