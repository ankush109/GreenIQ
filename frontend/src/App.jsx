import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster, toast, useToasterStore } from "react-hot-toast";
import { useEffect } from "react";
import Register from "./Components/auth/Register";
import Login from "./Components/auth/Login";
import Test from "./Components/student/Test";
import Landing from "./pages/Home/Landing";
import Meeting from "./Components/student/Meeting";
import ConfirmBooking from "./Components/mentor/ConfirmBooking";
import Courses from "./Components/student/Course";
import CreateTest from "./Components/mentor/Createtest";
import Meetings from "./Components/mentor/Meetings";
import ProtectedRoute from "./Components/PrivateRoute";
import Mentortest from "./Components/mentor/mentor-test";
import Report from "./Components/student/Report";
import Discuss from "./Components/student/Discuss";
import Leaderboard from "./Components/student/Leaderboard";
import Newsfeed from "./Components/student/Newsfeed";
import Profile from "./Components/student/Profile";
import Settings from "./Components/student/Settings";
import Protectedroute1 from "./Components/Protectedroute1";
import Dashboard from "./Components/Dashboard";
import ProtectedRoute1 from "./Components/Protectedroute1";

import Leftbar from "./Components/Leftbar";
function App() {
  function isJWTValid() {
    const token = localStorage.getItem("token");
    if (token) {
      return true;
    }
    return false;
  }
  useEffect(() => {
    if (!isJWTValid()) {
      let val = localStorage.getItem("token");
      if (val !== null) {
        toast.error("Session expired! Please Login");
      }
      if (val === null) {
        toast.success("Please Login");
      }
    }
  }, []);

  const MAX_TOAST_LIMIT = 1;
  const { toasts } = useToasterStore();
  useEffect(() => {
    toasts
      .filter((t) => t.visible)
      .filter((_, i) => i >= MAX_TOAST_LIMIT)
      .forEach((t) => toast.dismiss(t.id));
  }, [toasts]);

  return (
    <div className="App">
      
        <Routes>
          <Route path="/">
            <Route path="/" element={<Landing />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
        <div className="flex flex-row justify-between ">  
        <div className=" md:w-1/4 sm:1/6 h-screen">
          <Leftbar/>
        </div>  
        <div className=" md:w-3/4 sm:5/6 h-screen">
 
          <Routes>
              <Route path="/user" element={<ProtectedRoute />}>
                
                  <Route path="courses" element={<Courses />} />
                  <Route path="test" element={<Test />} />

                  <Route path="book-meeting" element={<Meeting />} />
                  <Route path="discuss" element={<Discuss />} />
                  <Route path="report" element={<Report />} />
                  <Route path="leaderboard" element={<Leaderboard />} />
                  <Route path="newsfeed" element={<Newsfeed />} />
                  <Route path="profile" element={<Profile />} />
                  <Route path="settings" element={<Settings />} />
                  <Route path="confirm-booking/:id" element={<ConfirmBooking />} />
              </Route>
         
          
              <Route path="/mentor" element={<ProtectedRoute1 />}>
                  
                  <Route path="my-Test" element={<Mentortest />} />
                  <Route path="createtest" element={<CreateTest />} />
                  <Route path="Meetings" element={<Meetings />} />
              </Route>
          </Routes>
          </div>
        </div>
        
    </div>
  );
}

export default App;
