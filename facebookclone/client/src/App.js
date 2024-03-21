import { BrowserRouter, Routes, Route } from "react-router-dom";
import Topbar from "./component/topbar/Topbar";
import Home from "./pages/home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
