import React from 'react'
import {FcBullish } from 'react-icons/fc'
import { DASHBOARD_SIDEBAR_BOTTOM_LINKS, DASHBOARD_SIDEBAR_LINKS } from '../constants'
import { Link, useLocation } from 'react-router-dom'
// import { HiOutlineLogout } from 'react-icons/hi'

const Sidebar = () => {
  return (
    <div className='bg-neutral-900 h-screen w-60 p-3 flex flex-col text-white'>
        <div className='flex items-center gap-2 px-1 py-3'>
            <FcBullish fontSize={24}/>
            <span className='text-neutral-100 text-lg'>Pinsoe Travel Blog</span>
        </div>
        <div className='flex-1 py-8 flex flex-col gap-0.5 justify-around'>
            { DASHBOARD_SIDEBAR_LINKS.map((item) => (
                <SidebarLink key={item.key} item={item} /> 
            ))}
        </div>
        <div className='flex flex-col gap-0.5 pt-2 border-t border-neutral-700'>
            { DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
                <SidebarLink key={item.key} item={item} />
            ))}
            <div className='text-red-500 cursor-pointer'>
                <span className='text-xl'>
                    {/* <HiOutlineLogout /> */}
                </span>
                Logout
            </div>
        </div>
    </div>
  )
}

function SidebarLink({ item }) {
    const { pathname } = useLocation();
    return (
        <div>
        <Link to={item.path} className= {pathname === item.path ? 'bg-neutral-700 text-white' : 'text-neutral-400'}>
            <span className='text-xl'>{item.icon}</span>
            {item.label}
        </Link>
        </div>
    )
}

export default Sidebar