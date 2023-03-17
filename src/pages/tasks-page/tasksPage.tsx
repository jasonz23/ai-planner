import react from "react";
import NavBar from "../../components/nav-bar/navBar";
import { minWidth } from "../../constants/dimensions";
const tasksPage = () => {
  return (
    <div>
      <NavBar />
      <div
        style={{
          marginTop: "70px",
          marginLeft: window.innerWidth <= minWidth ? "" : "88px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        Under Development
      </div>
    </div>
  );
};

export default tasksPage;
