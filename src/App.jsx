import { Route, Routes } from "react-router-dom";
import "./App.css";
import Men from "./pages/Men";
import Navbar from "./components/shared/Navbar";
import Hamidullox from "./pages/hamidullox";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Men />} />
        <Route path="hamidullox" element={<Hamidullox />} />

      </Routes>
    </>
  );
}

export default App;
