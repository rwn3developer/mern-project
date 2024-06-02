import { BrowserRouter, Routes, Route } from "react-router-dom";
import Topbar from "./component/topbar/Topbar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import UserPrivateRoute from "./PrivateRoute/UserPrivateRoute";
import CreatePost from "./pages/post/CreatePost";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import Profile from "./pages/Userprofile/Profile";
import Mypost from "./pages/mypost/Mypost";
import Userdetails from "./pages/userdetails/Userdetails";

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
            <Route path="/userprofile" element={< Profile/>}/>
            <Route path="/mypost" element={< Mypost/>}/>
            <Route path="/userdetails/:id" element={<Userdetails/>}/>
        </Route>
          

      </Routes>
    </BrowserRouter>
  );
}

export default App;
