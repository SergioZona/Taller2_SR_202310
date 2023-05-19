import { Route, Routes } from "react-router-dom";
import React from 'react';
import Home from "../pages/home/home";
import Login from "../pages/logIn/login";
import DetailCard from "../pages/detailPlaces/detail";

const CreateRoutes = () => (
    <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/:id/lugares" element={<Home title='Lugares' />} />
        <Route exact path="/:id/recomendaciones" element={<Home title='Mis recomendaciones' />} />
        <Route exact path="/:id/:idBussiness/comentarios" element={<DetailCard comentarios={true} />} />
        <Route exact path="/:id/:idBussiness/calificacion" element={<DetailCard comentarios={false} />} />

    </Routes>
);

export default CreateRoutes;