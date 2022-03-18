import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
function Nopage() {
    const navigate = useNavigate();
  return (
    <div className='container'>
        <div className='text-center mt-5 w-75'>
            <h3>Sorry But we can't find this page</h3>
            <p>Here are some important Links</p>
            <div className='d-flex justify-content-around'>
            <button className="btn btn-dark" onClick={() => navigate(-1)}>Go back</button>
            <Link className="btn btn-primary" to='/'> Home</Link>
            </div>

        </div>
    </div>
  )
}

export default Nopage