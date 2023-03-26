import { HashRouter, Route, Routes } from "react-router-dom";
import MainPage from "./main-page/mainPage";
import SettingsPage from "./settings/settingsPage";
import TasksPage from "./tasks-page/tasksPage";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import CalendarPage from "./calendar/calendar";
import { getFirestore } from "firebase/firestore";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "react-toastify/dist/ReactToastify.css";
import "./global.css";
import { ToastContainer } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyCT91Qc_y9wARXQBTFfWljMfGXlQyTzmU8",

  authDomain: "ai-planner-abaca.firebaseapp.com",

  projectId: "ai-planner-abaca",

  storageBucket: "ai-planner-abaca.appspot.com",

  messagingSenderId: "605428409082",

  appId: "1:605428409082:web:3ddab5e25a2e07805edf43",

  measurementId: "G-9675QBEZDN",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffa6b5",
      light: "#ffa6b5",
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <HashRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/tasks" element={<TasksPage />} />
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </HashRouter>
        <ToastContainer position="bottom-right" />
      </ThemeProvider>
    </>
  );
}

export default App;
