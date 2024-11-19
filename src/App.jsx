import { Route, Routes } from "react-router-dom";
import "./App.css";
import Men from "./pages/Men";
import Mohinur from "./pages/mohinur";
import Navbar from "./components/shared/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Men />} />
        <Route path="mohinur" element={<Mohinur />} />
      </Routes>
    </>
  );
}

export default App;
