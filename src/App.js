import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Navbar from "./Pages/Shared/Navbar/Navbar";
import Login from "./Pages/Login/Login";
import Appointment from "./Pages/Appointment/Appointment";
import SignUp from "./Pages/Login/SignUp";
import RequireAuth from "./Pages/Login/RequireAuth";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DashBoard from "./Pages/DashBoard/DashBoard";
import MyAppointment from "./Pages/DashBoard/MyAppointment";
import MyReviews from "./Pages/DashBoard/MyReviews";
import MyHistory from "./Pages/DashBoard/MyHistory";
import AllUsers from "./Pages/DashBoard/AllUsers";
import RequireAdmin from "./Pages/Login/RequireAdmin";


function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="appointment" element={
          <RequireAuth>
            <Appointment/>
          </RequireAuth>
        } />
        <Route path="dashboard" element={
          <RequireAuth>
            <DashBoard/>
          </RequireAuth>
        } >
          <Route index element={<MyAppointment />}></Route>
          <Route path="myReviews" element={<MyReviews />}></Route>
          <Route path="myHistory" element={<MyHistory />}></Route>
          <Route path="users" element={<RequireAdmin><AllUsers /></RequireAdmin>}></Route>
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
