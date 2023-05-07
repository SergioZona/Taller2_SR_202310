import { Route, Routes } from "react-router-dom";
import React from 'react';
import Home from "../pages/home/home";
import Login from "../pages/logIn/login";

const CreateRoutes = () => (
    <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/home" element={<Home />} />
    </Routes>
);

export default CreateRoutes;