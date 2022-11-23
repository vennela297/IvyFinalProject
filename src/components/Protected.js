import { useEffect} from "react";
import {useNavigate} from 'react-router-dom';

export default function Protected({children}){

    //const {Component} =props
    const Navigate=useNavigate()

    useEffect(()=>{
        const login=localStorage.getItem('login')
        if(login==="false")
        {
           Navigate("/Login")
        }
    },[])
    return (
        <div>
        {children}
        </div>
    );



}