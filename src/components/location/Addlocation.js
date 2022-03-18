import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import {  
    useNavigate,
  } from "react-router-dom";
import Citydetail from '../city/Citydetail';
function Addlocation() {
  const base_url = 'https://testapi.photodino.de'
  const navigate = useNavigate();

  const { register, handleSubmit,reset, watch, formState: { errors } } = useForm({
    mode:"all"
  })
  const [loading, setLoading] = useState(true);
  const [allcities, setAllcities] = useState([]);
  useEffect(() => {
      fetchcity();
    }
  , []);
  const fetchcity = async () => {
    await axios.get(`${base_url}/cities/`).then((res) => {
        const data = res.data;
        setAllcities(data);
      });
    };
  const onSubmit = async (data) => { 
    console.log(data)
    return await axios.post(`${base_url}/locations/`,{
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
    <div>
    <div className="container" >
   <div className='d-flex justify-content-center'>
     <div className='shadow w-75 p-5'>
       <div>
          <h5 className="text-center fs-2 text" id="exampleModalLabel">Add location </h5>
      
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="city" className="form-label">City</label>
            <select  {...register("city", { required: true })} className="form-select" aria-label="Default select example">
           {allcities.map((cit, index) =>(
         <option key={index} value={cit.id}>{cit.name}</option>
                 ))
                }
           </select>
           {errors.city && <span className='text-danger'>This field is required</span>}
           </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input  {...register("name", { required: true })} type="text" className="form-control" id="name" placeholder="name"/>
          {errors.name && <span className='text-danger'>This field is required</span>}
          </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input  {...register("email", { required: true })} type="text" className="form-control" id="email" placeholder="name@example.com"/>
          {errors.email && <span className='text-danger'>This field is required</span>}
          </div>
           <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone</label>
          <input  {...register("phone", { required: true })} type="text" className="form-control" id="phone" placeholder="+1234567890"/>
          {errors.phone && <span className='text-danger'>This field is required</span>}
          </div>
          <div className="mb-3">
          <label htmlFor="rent" className="form-label">Rent</label>
          <input  {...register("rent", { required: true })} type="number" className="form-control" id="rent" placeholder="100"/>
          {errors.rent && <span className='text-danger'>This field is required</span>}
          </div>
          <div className="mb-3">
          <label htmlFor="contact_person" className="form-label">Contact person</label>
          <input  {...register("contact_person", { required: true })} type="text" className="form-control" id="contact_person" placeholder="JOE"/>
          {errors.contact_person && <span className='text-danger'>This field is required</span>}
          </div>
          <div className="mb-3">
          <label htmlFor="street_number" className="form-label">Street number</label>
          <input  {...register("street_number", { required: true })} type="text" className="form-control" id="street_number" placeholder="345"/>
          {errors.street_number && <span className='text-danger'>This field is required</span>}
          </div>
          <div className="mb-3">
          <label htmlFor="street_name" className="form-label">Street name</label>
          <input  {...register("street_name", { required: true })} type="text" className="form-control" id="street_name" placeholder="Mario strret"/>
          {errors.street_name && <span className='text-danger'>This field is required</span>}
          </div>
          <div className="mb-3">
          <label htmlFor="postal_code" className="form-label">Postal code</label>
          <input  {...register("postal_code", { required: true })} type="text" className="form-control" id="postal_code" placeholder="4456"/>
          {errors.postal_code && <span className='text-danger'>This field is required</span>}
          </div>
          <select  {...register("status")} className="form-select" aria-label="Default select example">
   
              <option value="Unavailable">Unavailable</option>
              <option value="Available">Available</option>
              <option value="Active">Active</option>
              </select>
              <div className="d-flex justify-content-end my-3">
          <button type="submit" className="btn btn-primary">Save changes</button>
        </div>
            </form>
            </div>
            
        </div>
       
        </div>

</div>
      </div>
  
  )
}

export default Addlocation