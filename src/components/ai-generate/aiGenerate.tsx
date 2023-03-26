import {
  Accordion,
  AccordionSummary,
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
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const AiGenerate = (props: any) => {
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
    <div>
      <Accordion
        style={{
          width: "100%",
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        sx={{}}
        defaultExpanded={true}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          style={{
            paddingRight: "10px",
          }}
        >
          <div
            style={{
              fontSize: "25px",
              fontWeight: "bold",
              margin: "10px",
              width: "100%",
            }}
          >
            Generate Planner
          </div>
        </AccordionSummary>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div style={{ margin: "10px", width: "90%" }}>
            <TextField
              label="Start Time"
              fullWidth
              id="wake-up-time"
              type="time"
            />
          </div>
          <div style={{ margin: "10px", width: "90%" }}>
            <TextField
              label="Finish Time"
              fullWidth
              id="sleep-time"
              type="time"
            />
          </div>
          <div style={{ margin: "10px", width: "90%" }}>
            <TextField
              label="Study Length (minutes)"
              fullWidth
              id="study-time"
              type="number"
            />
          </div>
          <div style={{ margin: "10px", width: "90%" }}>
            <TextField
              label="Break Length (minutes)"
              fullWidth
              id="break-time"
              type="number"
            />
          </div>

          {/* TODO: <div style={{ margin: "10px" }}>Transport Time?</div> */}
          <div
            style={{
              margin: "10px",
              display: "flex",
              flexDirection: "column",
              width: "90%",
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
            style={{
              margin: "10px",
              marginBottom: "20px",
              display: "flex",
              justifyContent: "center",
            }}
            onClick={() => {
              props.setIsLoading(false);
              const today = new Date();
              const todayPST =
                today
                  .toLocaleString("en-US", {
                    timeZone: "America/Los_Angeles",
                  })
                  .split(",")[0] + ", ";
              console.log(todayPST);
              dispatch(
                generateTasks({
                  wakeUp:
                    todayPST +
                    (
                      document.getElementById(
                        "wake-up-time"
                      ) as HTMLInputElement
                    ).value,
                  sleep:
                    todayPST +
                    (document.getElementById("sleep-time") as HTMLInputElement)
                      .value,
                  time: TIMEPERIOD[time],
                  events: tasks,
                  uid: auth.currentUser?.uid,
                  callBack: (a: boolean) => {
                    props.setIsLoading(a);
                    console.log(a);
                  },
                  studyLength:
                    parseInt(
                      (
                        document.getElementById(
                          "study-time"
                        ) as HTMLInputElement
                      ).value
                    ) *
                    60 *
                    1000,
                  breakLength:
                    parseInt(
                      (
                        document.getElementById(
                          "break-time"
                        ) as HTMLInputElement
                      ).value
                    ) *
                    60 *
                    1000,
                })
              );
            }}
          >
            Generate
          </Button>
        </div>
      </Accordion>
    </div>
  );
};

export default AiGenerate;
