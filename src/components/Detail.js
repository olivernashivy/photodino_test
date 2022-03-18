import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from "axios";
function Detail() {
    const base_url = 'https://testapi.photodino.de'
    const navigate = useNavigate();
    const location = useLocation();
    const loc = location.state.location 
    const { register, handleSubmit,reset, watch, formState: { errors } } = useForm({
        mode:"all"
      })
    const deletelocation = async (id) => {
     await axios.delete(`${base_url}/locations/${id}/`).then(
        navigate('/')
      ) 
  
    }
    console.log(loc.name)
    useEffect(() => {
      reset(loc)
    }
  , []);
   
    const onSubmit = async (data) => { 
      console.log(data)
      return await axios.put(`${base_url}/locations/${loc.id}/`,{
          city: Number(data.city),
          name: data.name,
          rent: data.rent,
          email: data.email,
          phone: data.phone,
          contact_person: data.contact_person,
          street_number: data.street_number,
          street_name: data.street_name,
          postal_code: data.postal_code,
          status: data.status
      }
      ).then(
        navigate('/')
      ) 
  
    }
  return (
    <div >
     <div className="container d-flex justify-content-center h-100">
     <div className="card" >
      
  <div className="card-body ">
      <div className='d-flex justify-content-around p-3 align-items-center'>
      <h5 className="card-title">{loc.name} </h5>
    <button className="btn btn-dark" onClick={() => navigate(-1)}>Go back</button>
      </div>
   
    <div className='d-flex'>
<div className="card border-primary mb-3" >
  <div className="card-header">Info</div>
  
  <div className="card-body text-success">
  <ul className="list-group list-group-flush">
   <li className="list-group-item">Email:{loc.email}</li>
   <li className="list-group-item">Phone:{loc.phone}</li>
   <li className="list-group-item">Contact person:{loc.contact_person}</li>
   <li className="list-group-item">Street number :{loc.street_number}</li>
   <li className="list-group-item">street name :{loc.street_name}</li>
   <li className="list-group-item">postal code :{loc.postal_code}</li>
   </ul>
  </div>
    </div>
    
  </div>
  <div className="card-body">
    <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal" className="card-link">Edit </a>
    <a onClick={ () =>deletelocation(loc.id)} href="#" className="card-link">Delete </a>
  </div>
 
<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Edit {loc.name}</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input  {...register("name")} type="text" className="form-control" id="name" placeholder="name"/>
        </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email address</label>
        <input  {...register("email")} type="email" className="form-control" id="email" placeholder="name@example.com"/>
        </div>
         <div className="mb-3">
        <label htmlFor="phone" className="form-label">Phone</label>
        <input  {...register("phone")} type="text" className="form-control" id="phone" placeholder="+1234567890"/>
        </div>
        <div className="mb-3">
        <label htmlFor="contact_person" className="form-label">Contact person</label>
        <input  {...register("contact_person")} type="text" className="form-control" id="contact_person" placeholder="JOE"/>
        </div>
        <div className="mb-3">
        <label htmlFor="street_number" className="form-label">Street number</label>
        <input  {...register("email")} type="text" className="form-control" id="street_number" placeholder="345"/>
        </div>
        <div className="mb-3">
        <label htmlFor="street_name" className="form-label">Street name</label>
        <input  {...register("street_name")} type="text" className="form-control" id="street_name" placeholder="Mario strret"/>
        </div>
        <div className="mb-3">
        <label htmlFor="postal_code" className="form-label">Postal code</label>
        <input  {...register("postal_code")} type="text" className="form-control" id="postal_code" placeholder="4456"/>
        </div>
        <select  {...register("status")} className="form-select" aria-label="Default select example">
 
            <option value="Unavailable">Unavailable</option>
            <option value="Available">Available</option>
            <option value="Active">Active</option>
            </select>
            <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="submit" className="btn btn-primary">Save changes</button>
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

export default Detail