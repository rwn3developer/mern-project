import { BrowserRouter, Routes, Route } from "react-router-dom";
import Topbar from "./component/topbar/Topbar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import UserPrivateRoute from "./PrivateRoute/UserPrivateRoute";
import CreatePost from "./pages/post/CreatePost";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>

        {/* user route */}
        <Route element={<UserPrivateRoute/>}>
            <Route path="/home" element={<Home />}/>
            <Route path="/createpost" element={<CreatePost />}/>
        </Route>
          

      </Routes>
    </BrowserRouter>
  );
}

export default App;
