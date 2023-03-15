import React from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { useState } from "react";

const InputTask = () => {
  const [day, setDay] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    console.log(event.target.value);
    setDay(event.target.value as string);
  };
  return (
    <div
      style={{
        width: "100%",
        height: "10vh",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        marginTop: "20px",
        marginBottom: "20px",
      }}
    >
      <div style={{ fontSize: "25px", fontWeight: "bold" }}>Add Task</div>
      <div>
        <FormControl style={{ width: "200px" }}>
          <InputLabel id="user-input-task-day-selector-label">Day</InputLabel>
          <Select
            labelId="user-input-task-day-selector-label"
            id="user-input-task-day-selector"
            value={day}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={0}>Monday</MenuItem>
            <MenuItem value={1}>Tuesday</MenuItem>
            <MenuItem value={2}>Wednesday</MenuItem>
            <MenuItem value={3}>Thursday</MenuItem>
            <MenuItem value={4}>Friday</MenuItem>
            <MenuItem value={5}>Saturday</MenuItem>
            <MenuItem value={6}>Sunday</MenuItem>
          </Select>
        </FormControl>
        <FormControl style={{ width: "400px" }}>
          <TextField
            id="user-input-task-name-textfield"
            label="Task Name"
            variant="outlined"
          />
        </FormControl>
      </div>
    </div>
  );
};

export default InputTask;
