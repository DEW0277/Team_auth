import { Route, Routes } from "react-router-dom";
import "./App.css";
import Men from "./pages/Men";

function App() {
  return (
    <>
      <h1 className="text-red-500">Boshlaymiz...</h1>
      <Routes>
        <Route path="/" element={<Men />} />
      </Routes>
    </>
  );
}

export default App;
