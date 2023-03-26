import { Button, Paper } from "@mui/material";
import { deleteDoc, doc } from "firebase/firestore";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { db } from "../../pages/App";
import { deleteTask } from "../../slices/tasks";

interface PropsState {
  index: number;
  task: any;
}
const Task = (props: PropsState) => {
  const { task } = props;
  console.log(task);
  const dispatch = useDispatch();
  return (
    <Paper key={props.index} style={{ width: "90%", height: "100px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "100%",
        }}
      >
        <div style={{ margin: "10px" }}>
          <div style={{ fontSize: "25px", fontWeight: "400" }}>
            {task.title}
          </div>
          <div>{task.start.toLocaleString()}</div>
          <div>{task.end.toLocaleString()}</div>
        </div>
        <div style={{ margin: "10px" }}>
          <Button onClick={() => {}}>edit</Button>
          <Button
            onClick={() => {
              const doc_id = task.doc_id;
              const id = task.event_id;
              deleteDoc(doc(db, "events", doc_id)).then(() => {
                dispatch(deleteTask({ event_id: id }));
                return id;
              });
              toast.success("deleted");
            }}
          >
            delete
          </Button>
        </div>
      </div>
    </Paper>
  );
};

export default Task;
