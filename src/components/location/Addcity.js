import React from 'react'
import { useForm } from "react-hook-form";
import axios from "axios";
import Header from '../Header';
import {  
    useNavigate,
  } from "react-router-dom";
function Addcity() {
    const base_url = 'https://testapi.photodino.de'
    const navigate = useNavigate();
  
    const { register, handleSubmit,reset, watch, formState: { errors } } = useForm({
      mode:"all"
    })
    const onSubmit = async (data) => { 
      return axios.post(`${base_url}/cities/`,{
        name: data.name
      }).then(
        navigate('/city')
      ) 
  
    }
  return (
    <div className='container shadow w-75 p-5'> <form onSubmit={handleSubmit(onSubmit)}>
         <h5 className="text-center fs-2 text">Add City </h5>
    <div className="mb-3">
      <label htmlFor="name" className="form-label">Name</label>
      <input  {...register("name", { required: true })} type="text" className="form-control" id="name" placeholder="name"/>
      {errors.name && <span className='text-danger'>This field is required</span>}
      </div>
      <div className="d-flex justify-content-end my-3">
          <button type="submit" className="btn btn-primary">Save changes</button>
        </div>
      </form></div>
  )
}

export default Addcity