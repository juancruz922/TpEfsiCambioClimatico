import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from "react";
import NabVar from '../assets/NabVar';
import EspacioC from '../assets/EspacioC';

export default function Home (){
    return (
        <>
        <NabVar></NabVar>
        <EspacioC></EspacioC>
        </>
    )
}