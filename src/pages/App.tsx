import { HashRouter, Route, Routes } from "react-router-dom";
import MainPage from "./main-page/mainPage";

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
