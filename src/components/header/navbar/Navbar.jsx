import React, { useState } from 'react';
import navbarLogo from '../../../assets/logo.png'
import { NavLink } from 'react-router';
import { GiHamburgerMenu } from "react-icons/gi";
import { RiFileCloseFill } from "react-icons/ri";
import './navbar.css'

const Navbar = () => {
    const [open,setOpen] = useState(false)
    return (
        <div >
            <div className='flex p-4 justify-between items-center shadow '>
                <div className='flex items-center'>
                    
                   <span onClick={()=>setOpen(!open)} className='mr-5 md:mr-0'>
                  {
                    open? <RiFileCloseFill size={30} className='md:hidden' />: <GiHamburgerMenu className='md:hidden' size={30}/>
                  }
               
                   </span>
                   <nav>
                    <ul className={`font-semibold md:hidden bg-gray-300 p-4 rounded-2xl absolute ${open? 'block mt-8':'hidden'}`}>
                        <NavLink  to='/'><li className='hover:bg-black hover:text-white hover:p-2 hover:rounded-xl'>Home</li></NavLink>
                        <NavLink  to='/myBookings'><li className='hover:bg-black hover:text-white hover:p-2 hover:rounded-xl' >My-Bookings</li></NavLink>
                        <NavLink  to='/blogs'><li className='hover:bg-black hover:text-white hover:p-2 hover:rounded-xl' >Blogs</li></NavLink>
                        <NavLink  to='/contactUs'><li className='hover:bg-black hover:text-white hover:p-2 hover:rounded-xl' >Contact Us</li></NavLink>
                    </ul>
                </nav>
                    <img className='w-10 mr-2' src={navbarLogo} alt="" />
                    <h1 className='text-2xl font-bold'>Phudu</h1>
                </div>
                <nav>
                    <ul className='md:flex hidden gap-6 font-semibold'>
                        <NavLink  to='/'><li>Home</li></NavLink>
                        <NavLink  to='/myBookings'><li>My-Bookings</li></NavLink>
                        <NavLink  to='/blogs'><li>Blogs</li></NavLink>
                        <NavLink  to='/contactUs'><li>Contact Us</li></NavLink>
                    </ul>
                </nav>
                <div>
                    <button className='btn btn-info text-white font-semibold'>Emergency</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;