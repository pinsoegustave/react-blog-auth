import React from 'react'
import { NAVBAR_LINKS } from '../constants'
import { Link } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";

const NavBar = () => {
  return (
    <div className='h-20 bg-slate-500 border border-b border-red-400'>
      <div className='p-4 flex gap-2 justify-between'> 
        <div className='font-extrabold text-5xl'>
          <Link to="/">
         PTB
          </Link>
        </div>
      <div className='hidden md:flex gap-5 justify-between'>
        { NAVBAR_LINKS.map((item) => (
          <ul key={item.sublabel} className='mt-2 text-xl hover:cursor-pointer hover:text-slate-100'>
              <li>{item.label}</li>
          </ul>
        ))}
      </div>
      <div className=''>
          <button className='btn-primary'>
           <Link to="/login">Login</Link>  / <Link to="/registration">Signup</Link>
          </button>
      </div>
      </div>
    </div>
  )
}

export default NavBar