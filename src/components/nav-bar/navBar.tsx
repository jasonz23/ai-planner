import { useState } from "react";
import {
  AppBar,
  Drawer,
  List,
  ListItemIcon,
  Toolbar,
  Divider,
  Button,
  IconButton,
  ListItemButton,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ListAltIcon from "@mui/icons-material/ListAlt";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SettingsIcon from "@mui/icons-material/Settings";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "./nav-bar.css";
import { useNavigate } from "react-router-dom";
import { minWidth } from "../../constants/dimensions";

const NavBar = () => {
  const CONTENTS = {
    link1: "Home",
    link2: "Tasks",
    link3: "Calendar",
    link4: "Settings",
  };

  const navigate = useNavigate();
  const [showDrawer, setShowDrawer] = useState(false);

  const signOut = () => {
    //   const auth = getAuth();
    //   signOutFireBase(auth).then(() => {
    //     console.log("signed out");
    //     navigate("/sign-in");
    //   });
  };

  return (
    <div>
      <AppBar
        position="fixed"
        style={{ zIndex: "1000px", height: "70px", paddingLeft: "0" }}
      >
        <Toolbar
          style={{
            flexGrow: "1",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            width: "100%",
          }}
        >
          {window.innerWidth <= minWidth && (
            <div
              style={
                window.innerWidth <= minWidth
                  ? {
                      fontSize: "8px",
                      marginLeft: "-20px",
                      justifySelf: "flex-start",
                    }
                  : { justifySelf: "flex-start" }
              }
            >
              <Button
                style={{ padding: 0 }}
                onClick={() => {
                  setShowDrawer(true);
                }}
              >
                <MenuIcon style={{ color: "white", fontSize: "35px" }} />
              </Button>
            </div>
          )}
          <h1
            style={
              window.innerWidth <= minWidth
                ? { fontSize: "15px" }
                : { marginLeft: "auto" }
            }
          >
            Health Research Manager
          </h1>
          {window.innerWidth > minWidth && (
            <div style={{ marginLeft: "auto" }}>
              <Button
                variant="outlined"
                style={{
                  color: "#ffff",
                  border: "1px solid white",
                  marginRight: "50px",
                }}
                onClick={() => {
                  signOut();
                }}
              >
                Sign Out
              </Button>
            </div>
          )}
        </Toolbar>
      </AppBar>

      {window.innerWidth > minWidth && (
        <Drawer variant="permanent">
          <Toolbar />
          <div>
            <List
              style={{
                height: "90vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
              }}
            >
              <ListItemButton key={CONTENTS["link1"]}>
                <ListItemIcon className="icon-box">
                  <HomeIcon style={{ fontSize: "35px" }} />
                </ListItemIcon>
              </ListItemButton>
              <ListItemButton key={CONTENTS["link2"]}>
                <ListItemIcon className="icon-box">
                  <ListAltIcon style={{ fontSize: "35px" }} />
                </ListItemIcon>
              </ListItemButton>
              <ListItemButton key={CONTENTS["link3"]}>
                <ListItemIcon className="icon-box">
                  <CalendarMonthIcon style={{ fontSize: "35px" }} />
                </ListItemIcon>
              </ListItemButton>
              <Divider />
              <ListItemButton
                key={CONTENTS["link4"]}
                style={{ marginTop: "auto" }}
              >
                <ListItemIcon className="icon-box">
                  <SettingsIcon style={{ fontSize: "35px" }} />
                </ListItemIcon>
              </ListItemButton>
            </List>
          </div>
        </Drawer>
      )}
      <Drawer
        open={showDrawer}
        anchor="left"
        onClose={() => setShowDrawer(false)}
      >
        <div
          style={{
            width: "100vw",
            backgroundColor: "white",
            flexDirection: "column",
            display: "flex",
          }}
        >
          <div
            style={{
              alignSelf: "flex-end",
              paddingTop: "10px",
              paddingRight: "10px",
            }}
          >
            <IconButton
              size="medium"
              onClick={() => {
                setShowDrawer(false);
              }}
            >
              <CloseIcon style={{ fontSize: "30px" }} />
            </IconButton>
          </div>
          <List
            style={{
              height: "88vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
            }}
          >
            <ListItemButton key={CONTENTS["link1"]}>
              <ListItemIcon className="icon-box">
                <HomeIcon style={{ fontSize: "35px" }} />
              </ListItemIcon>
            </ListItemButton>
            <ListItemButton key={CONTENTS["link2"]}>
              <ListItemIcon className="icon-box">
                <ListAltIcon style={{ fontSize: "35px" }} />
              </ListItemIcon>
            </ListItemButton>
            <ListItemButton key={CONTENTS["link3"]}>
              <ListItemIcon className="icon-box">
                <CalendarMonthIcon style={{ fontSize: "35px" }} />
              </ListItemIcon>
            </ListItemButton>
            <Divider />
            <ListItemButton
              key={CONTENTS["link4"]}
              style={{ marginTop: "auto" }}
              onClick={() => {
                navigate("/settings");
              }}
            >
              <ListItemIcon className="icon-box">
                <SettingsIcon style={{ fontSize: "35px" }} />
              </ListItemIcon>
            </ListItemButton>
          </List>
        </div>
      </Drawer>
    </div>
  );
};

export default NavBar;
