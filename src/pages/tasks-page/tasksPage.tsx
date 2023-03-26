import react, { useEffect, useState } from "react";
import NavBar from "../../components/nav-bar/navBar";
import Task from "../../components/task/task";
import { minWidth } from "../../constants/dimensions";
import { useAppSelector } from "../../slices";
import { filterObjectsByEndTime } from "../../utils/helpers";
import { useNavigate } from "react-router-dom";
import { auth } from "../App";

const TasksPage = () => {
  const tasks = useAppSelector((state) => state?.tasks?.tasks);
  const [todayTasks, setTodayTasks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setTodayTasks(filterObjectsByEndTime(tasks));
    if (!auth.currentUser) {
      navigate("/");
    }
  }, [tasks]);

  return (
    <div>
      <NavBar />
      <div
        style={{
          marginTop: "70px",
          marginLeft: window.innerWidth <= minWidth ? "" : "88px",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <div
          style={{ marginTop: "20px", fontWeight: "bold", fontSize: "25px" }}
        >
          Todays Tasks
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
            width: "100%",
          }}
        >
          {todayTasks.map((task: any, index: number) => {
            return <Task index={index} task={task} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default TasksPage;
