import React, { useEffect, useState } from "react";
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from "axios";
function Citydetail() {
  const base_url = 'https://testapi.photodino.de'
  const navigate = useNavigate();
  const location = useLocation();
  const loc = location.state.city 
  const { register, handleSubmit,reset, watch, formState: { errors } } = useForm({
      mode:"all"
    })
  const deletecity = async (id) => {
      await axios.delete(`${base_url}/locations/${id}/`).then(
         navigate('/')
       ) 
   
     }
  const onSubmit = async (data) => { 
    console.log(data)
    return await axios.put(`${base_url}/cities/${loc.id}/`,{
        name: data.name,
    }
    ).then(
      navigate('/city')
    ) 
  }
  
  const [loading, setLoading] = useState(true);
  const [located, setLocated] = useState([]);
  useEffect(() => {
      fetchlocation();
      reset(loc)
    }
  , []);
  const fetchlocation = async () => {
    await axios.get(`${base_url}/locations/?city_id=${loc.id}`).then((res) => {
        const data = res.data;
        setLocated(data);
      });
    };
  return (
    <div >
     <div className="container d-flex justify-content-center h-100">
     <div className="card" >
      
  <div className="card-body ">
      <div className='d-flex justify-content-around p-3 align-items-center'>
      <h5 className="card-title"> City :{loc.name} </h5>
      </div>
   
    <div className='d-flex flex-column'>
    {located.length > 0  ? located.map((locati, index) =>(
        <div key={index} className="card border-primary mb-6 m-2" >
        <div className="card-header">{locati.name}</div>
        
        <div className="card-body text-success">
  <ul className="list-group list-group-flush">
   <li className="list-group-item">Email:{locati.email}</li>
   <li className="list-group-item">Phone:{locati.phone}</li>
   <li className="list-group-item">Contact person:{locati.contact_person}</li>
   <li className="list-group-item">Street number :{locati.street_number}</li>
   <li className="list-group-item">street name :{locati.street_name}</li>
   <li className="list-group-item">postal code :{locati.postal_code}</li>
   </ul>
  </div>
          </div>
    )) : <div>
      <p>No address yet you can add them here
        </p>
        <Link className="btn btn-dark" to='/addlocation'>Add Location</Link>
        </div>}

    
  </div>
  <div className="card-body">
    <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal" className="card-link">Edit </a>
    <a onClick={ () =>deletecity(loc.id)}  href="#" className="card-link">Delete </a>
  </div>
 
<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <form onSubmit={handleSubmit(onSubmit)}>
         <h5 className="text-center fs-2 text">Edit City Name</h5>
    <div className="mb-3">
      <label htmlFor="name" className="form-label">Name</label>
      <input  {...register("name", { required: true })} type="text" className="form-control" id="name" placeholder="name"/>
      {errors.name && <span className='text-danger'>This field is required</span>}
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
      </div>
      </form>
      </div>
     
     
    </div>
  </div>
</div>
</div>
     </div>
     </div> </div>
  )
}

export default Citydetail