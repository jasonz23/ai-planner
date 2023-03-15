import { HashRouter, Route, Routes } from "react-router-dom";
import MainPage from "./main-page/mainPage";

const firebaseConfig = {
  apiKey: "AIzaSyCT91Qc_y9wARXQBTFfWljMfGXlQyTzmU8",

  authDomain: "ai-planner-abaca.firebaseapp.com",

  projectId: "ai-planner-abaca",

  storageBucket: "ai-planner-abaca.appspot.com",

  messagingSenderId: "605428409082",

  appId: "1:605428409082:web:3ddab5e25a2e07805edf43",

  measurementId: "G-9675QBEZDN",
};

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
