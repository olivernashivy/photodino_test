import React from 'react'
import {  
    Link,useNavigate,
  } from "react-router-dom";
function Locationitem({location}) {
    const navigate = useNavigate();
    const todetails=()=>{
        navigate(`location/${location.id}`,{state:{location}});
          }
  return (
    <div className="d-flex align-items-center gap-4">
    <div>
    <button className='bg-primary color-white border border-none p-4'>
    <i className="bi bi-geo-alt-fill text-white fs-2"></i>
    </button>
    </div>
    <div>
        <p><u> {location.name}</u></p>
        <p className='fw-lighter'> Rent:{location.rent} $</p>
        <p className='fw-lighter'> Phone:{location.phone} </p>
        <button className="btn btn-dark" onClick={()=>{todetails()}} >See More</button>
    </div>
    </div>
  )
}

export default Locationitem