import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/home"  />
          <Route path="/about" />
          <Route path="/courses" />
          <Route path="/gallery" />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
