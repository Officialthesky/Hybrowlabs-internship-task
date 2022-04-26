import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Home";
import Problem1 from "./Components/Problem1";
import Problem2 from "./Components/Problem2";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/problem1" element={<Problem1 />} />
        <Route path="/problem2" element={<Problem2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
