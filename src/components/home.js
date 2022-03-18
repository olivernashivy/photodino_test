import React, { useEffect, useState } from "react";
import '../App.css';
import Header from './Header';
import Locationitem from "./location/Locationitem";
import axios from "axios";
import { Link } from 'react-router-dom';
function Home() {
  const base_url = 'https://testapi.photodino.de'
  const [loading, setLoading] = useState(true);
  const [locations, setLocations] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    
      fetchlocations();

    }
  , []);
  const search = (e) =>{
    setSearchText(e.target.value)
    if (searchText){
      locations.map((value) => {
        let searchword = value.name.toLowerCase().search(searchText) 
        // if(searchword == -1){
        //   //console.log(value)
        //   return locations.pop(value)
        // }
      })
        
    }
  }
  const fetchlocations= async () => {
    console.log("fetched")
    await axios.get(`${base_url}/locations/`).then((res) => {
        const data = res.data;
        setLocations(data);
      });
  };
  return (
    <div>
        <div className="d-flex justify-content-center gap-4 mt-5">
       <div className="d-flex justify-content-around">
       <input  
          onChange={(e) => search(e)} 
          type="text" placeholder="Search"/>
       <button className="btn btn-dark" to='addcity'>Search </button>
       </div>
       <div>
         Filter by
       </div>
    
       </div>
     <div className="container d-flex  justify-content-center h-100">
     <ul className="list-group gap-3 m-5 p-2 shadow w-50 d-flex p-auto">
    
     <div className="d-flex justify-content-around">
       <Link className="btn btn-dark" to='addlocation'>Add Location</Link>
       <Link className="btn btn-dark" to='addcity'>Add City</Link>
       </div>
      {locations.map((loc,index) =>(
        <div key={index} className="container">       
          <li className="list-group-item">
          <Locationitem location ={loc}/></li>
        </div>
      ))}
      </ul>
    </div>
    </div>
  
  );
}

export default Home;
