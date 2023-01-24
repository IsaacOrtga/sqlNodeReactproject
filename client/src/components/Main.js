import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from '../pages/Home'
import NewUser from "../pages/NewUser";
import { Schedule } from "../pages/Schedule";
import User from '../pages/User'
import Dashboard from "./dashboard/Dashboard";


const Main = () => {

    return (
        <div>
            <Routes>
               <Route path="/" element = {<Home/>}/>
               <Route path="/schedule" element = {<Schedule />} />
               <Route path="/user" element = {<User/>}/>
               <Route path="/newuser" element = {<NewUser />}/>
               <Route path="/dashboard" element = {<Dashboard />}/>
            </Routes>

        </div>

    );

}

export default Main;