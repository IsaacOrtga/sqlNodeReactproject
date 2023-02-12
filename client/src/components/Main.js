import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from '../pages/Home'
import NewUser from "../pages/NewUser";
import { Schedule } from "../pages/Schedule";
import LoginPage from "../pages/Login";
import DashboardPage from "../pages/Dashboard";


const Main = () => {

    return (
        <div>
            <Routes>
               <Route path="/" element = {<Home/>}/>
               <Route path="/schedule" element = {<Schedule />} />
               <Route path="/user" element = {<LoginPage/>}/>
               <Route path="/newuser" element = {<NewUser />}/>
               <Route path="/dashboard" element = {<DashboardPage />}/>
            </Routes>

        </div>

    );

}

export default Main;