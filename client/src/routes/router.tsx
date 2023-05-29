import React from "react";

import { Navigate, Route, Routes } from "react-router-dom";

import { useAuth } from "../contexts/auth";
import { PrivateRoute } from "./PrivateRoute";
import { HomePage } from "../pages/Home";
import Signin from "../pages/Signin";
import { VisitasBLira } from "../pages/VisitasBLira";
import { Visitas } from "../pages/Visitas";
import { MapPage } from "../pages/MapPage";

 export function Router() {
    
    const  {signed}  = useAuth();
    return(
        <Routes>
            {/* <Route path="/" element={<PrivateRoute />}>  */}
            <Route path="/" element={signed?<HomePage />: <Signin/>} />
            {/* </Route> */}

           
            <Route path="/vbLira" element={ signed? <VisitasBLira/> : <Signin />}/>
            <Route path="/visitas" element={signed? <Visitas/> :  <Signin />}/>
            <Route path="/mapa" element={signed? <MapPage/> :  <Signin />}/>
            <Route path="/login" element={<Signin />}/>

            <Route 
            path="/login" 
            element={ signed ? <Navigate to="/" /> : <Signin />}
            />

        <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )
    }
