import React from "react";
import NavBar from "../../components/nav-bar/navBar";
import { Scheduler } from "../../components/scheduler";
import { minWidth } from "../../constants/dimensions";
import { useAppSelector } from "../../slices";

const CalendarPage = () => {
  const tasks = useAppSelector((state) => state?.tasks?.tasks);
  return (
    <div>
      <NavBar />
      <div
        style={{
          marginTop: "70px",
          marginLeft: window.innerWidth <= minWidth ? "" : "88px",
        }}
      >
        <Scheduler
          events={tasks}
          view="month"
          editable={false}
          month={{
            weekDays: [0, 1, 2, 3, 4, 5, 6],
            weekStartOn: 0,
            startHour: 0,
            endHour: 23,
          }}
        />
      </div>
    </div>
  );
};

export default CalendarPage;
