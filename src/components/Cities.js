import React, { useEffect, useState } from "react";
import '../App.css';
import Header from './Header';
import Cityitem from "./city/Cityitem";
import axios from "axios";
import { Link } from 'react-router-dom';
function Cities() {
  const base_url = 'https://testapi.photodino.de'
  const [loading, setLoading] = useState(true);
  const [City, Setcities] = useState([]);
  useEffect(() => {
    
      fetchcities();

    }
  , []);
  const fetchcities= async () => {
    await axios.get(`${base_url}/cities/`).then((res) => {
        const data = res.data;
        Setcities(data);
      });
  };
  return (
     <div className="container d-flex justify-content-center h-100">
    
     <ul className="list-group gap-3 m-5 p-2 shadow w-50 d-flex p-auto">
     <div className="d-flex justify-content-around">
       <Link className="btn btn-dark" to='/addcity'>Add City</Link>
       </div>
      {City.map((loc,index) =>(
        <div key={index} className="container">       
          <li className="list-group-item">
          <Cityitem city ={loc}/></li>
        </div>
      ))}
      </ul>
    </div>
  
  );
}

export default Cities;
