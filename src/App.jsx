import { Route, Routes } from "react-router-dom";
import "./App.css";
import Men from "./pages/Men";
import Ibrohim from "./pages/ibrohim"

function App() {
  return (
    <>
      <h1 className="text-red-500">Boshlaymiz...</h1>
      <Routes>
        <Route path="/" element={<Men />} />
        <Route path="/ibrohim" element={<Ibrohim />} />
      </Routes>
    </>
  );
}

export default App;
