import React, { useState } from "react";
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
  Modal,
  Box,
  TextField,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ListAltIcon from "@mui/icons-material/ListAlt";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SettingsIcon from "@mui/icons-material/Settings";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate, useLocation } from "react-router-dom";
import { minWidth } from "../../constants/dimensions";
import { auth } from "../../pages/App";
import {
  signOut as signOutFireBase,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useAppDispatch } from "../../slices";
import { setUser } from "../../slices/user";
import { setTasks } from "../../slices/tasks";
import { CONTENTS, NAVIGATE } from "../../constants/routes";
import "./nav-bar.css";
import { toast } from "react-toastify";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: window.innerWidth > minWidth ? 400 : "98%",
  bgcolor: "white",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const NavBar = () => {
  const location = useLocation();

  const dispatch = useAppDispatch();

  const navigate = useNavigate();
  const [showDrawer, setShowDrawer] = useState(false);
  const [showModal, setShowModal] = useState({ show: false, option: 0 });

  const signOut = () => {
    signOutFireBase(auth)
      .then(() => {
        dispatch(setTasks([]));
        dispatch(setUser({}));
        toast.success("Signed Out");
      })
      .catch(() => {
        toast.error("Failed to Sign Out. Please Retry.");
      });
  };
  const signIn = async () => {
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const password = (document.getElementById("password") as HTMLInputElement)
      .value;
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        //setShowModal({ show: false, option: 0 });
        dispatch(setUser(userCredential));
        window.location.reload();
      })
      .catch(() => {
        toast.error("Failed to Sign In. Please Retry.");
      });
  };
  const signUp = async () => {
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const password = (document.getElementById("password") as HTMLInputElement)
      .value;
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        //setShowModal({ show: false, option: 0 });
        dispatch(setUser(userCredential));
        window.location.reload();
      })
      .catch(() => {
        toast.error("Failed to Sign Up. Please Retry.");
      });
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
                : { marginLeft: "100px" }
            }
          >
            Planner
          </h1>
          {auth.currentUser ? (
            <div
              style={
                window.innerWidth > minWidth
                  ? { marginLeft: "auto" }
                  : {
                      display: "flex",
                      flexDirection: "row",
                      marginLeft: "auto",
                    }
              }
            >
              <Button
                variant="outlined"
                style={{
                  color: "#ffff",
                  border: "1px solid white",
                  marginRight: window.innerWidth > minWidth ? "50px" : "25px",
                }}
                onClick={() => {
                  signOut();
                }}
              >
                Sign Out
              </Button>
            </div>
          ) : (
            <div
              style={
                window.innerWidth > minWidth
                  ? { marginLeft: "auto" }
                  : {
                      display: "flex",
                      flexDirection: "row",
                      marginLeft: "auto",
                    }
              }
            >
              <Button
                variant="outlined"
                style={{
                  color: "#ffff",
                  border: "1px solid white",
                  marginLeft: window.innerWidth > minWidth ? "" : "20px",
                  marginRight: window.innerWidth > minWidth ? "20px" : "5px",
                  fontSize: window.innerWidth > minWidth ? "" : "10px",
                }}
                onClick={() => {
                  setShowModal({ show: true, option: 0 });
                }}
              >
                Sign In
              </Button>
              <Button
                variant="outlined"
                style={{
                  color: "#ffff",
                  border: "1px solid white",
                  marginRight: window.innerWidth > minWidth ? "50px" : "25px",
                  fontSize: window.innerWidth > minWidth ? "" : "10px",
                }}
                onClick={() => {
                  setShowModal({ show: true, option: 1 });
                }}
              >
                Sign Up
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
                height: "85vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
              }}
            >
              <ListItemButton
                key={CONTENTS["link1"]}
                onClick={() => {
                  navigate(NAVIGATE["link1"]);
                }}
                selected={location.pathname === NAVIGATE["link1"]}
              >
                <ListItemIcon className="icon-box">
                  <HomeIcon style={{ fontSize: "35px" }} />
                </ListItemIcon>
              </ListItemButton>
              <ListItemButton
                key={CONTENTS["link2"]}
                onClick={() => {
                  navigate(NAVIGATE["link2"]);
                }}
                selected={location.pathname === NAVIGATE["link2"]}
              >
                <ListItemIcon className="icon-box">
                  <ListAltIcon style={{ fontSize: "35px" }} />
                </ListItemIcon>
              </ListItemButton>
              <ListItemButton
                key={CONTENTS["link3"]}
                onClick={() => {
                  navigate(NAVIGATE["link3"]);
                }}
                selected={location.pathname === NAVIGATE["link3"]}
              >
                <ListItemIcon className="icon-box">
                  <CalendarMonthIcon style={{ fontSize: "35px" }} />
                </ListItemIcon>
              </ListItemButton>
              <Divider />
              <ListItemButton
                key={CONTENTS["link4"]}
                style={{ marginTop: "auto" }}
                onClick={() => {
                  navigate(NAVIGATE["link4"]);
                }}
                selected={location.pathname === NAVIGATE["link4"]}
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
            <ListItemButton
              key={CONTENTS["link1"]}
              onClick={() => {
                navigate(NAVIGATE["link1"]);
              }}
              selected={location.pathname === NAVIGATE["link1"]}
            >
              <ListItemIcon className="icon-box">
                <HomeIcon style={{ fontSize: "35px" }} />
                <div style={{ margin: "auto" }}>Home</div>
              </ListItemIcon>
            </ListItemButton>
            <ListItemButton
              key={CONTENTS["link2"]}
              onClick={() => {
                navigate(NAVIGATE["link2"]);
              }}
              selected={location.pathname === NAVIGATE["link2"]}
            >
              <ListItemIcon className="icon-box">
                <ListAltIcon style={{ fontSize: "35px" }} />
                <div>Tasks</div>
              </ListItemIcon>
            </ListItemButton>
            <ListItemButton
              key={CONTENTS["link3"]}
              onClick={() => {
                navigate(NAVIGATE["link3"]);
              }}
              selected={location.pathname === NAVIGATE["link3"]}
            >
              <ListItemIcon className="icon-box">
                <CalendarMonthIcon style={{ fontSize: "35px" }} />
                <div>Calendar</div>
              </ListItemIcon>
            </ListItemButton>
            <Divider />
            <ListItemButton
              key={CONTENTS["link4"]}
              style={{ marginTop: "auto" }}
              onClick={() => {
                navigate(NAVIGATE["link4"]);
              }}
              selected={location.pathname === NAVIGATE["link4"]}
            >
              <ListItemIcon className="icon-box">
                <SettingsIcon style={{ fontSize: "35px" }} />
                <div>Settings</div>
              </ListItemIcon>
            </ListItemButton>
          </List>
        </div>
      </Drawer>
      <Modal
        open={showModal.show}
        onClose={() => {
          setShowModal({ show: false, option: 0 });
        }}
      >
        <Box sx={style}>
          <div style={{ fontSize: "30px", fontWeight: "bold" }}>
            {showModal.option === 0 ? "Sign In" : "Sign Up"}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <TextField
              label="Email"
              fullWidth
              style={{ marginTop: "16px" }}
              id="email"
            />
            <TextField
              label="Password"
              fullWidth
              style={{ marginTop: "16px" }}
              id="password"
              type="password"
            />
            <Button
              variant="contained"
              style={{ marginTop: "16px" }}
              onClick={() => {
                if (showModal.option === 0) {
                  signIn();
                } else {
                  signUp();
                }
              }}
            >
              {showModal.option === 0 ? "Sign In" : "Sign Up"}
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default NavBar;
