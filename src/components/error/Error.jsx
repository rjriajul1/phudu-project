import React from 'react';
import error from '../../assets/error.jpg'
import { Link } from 'react-router';

const Error = () => {
    return (
        <div className='flex flex-col items-center py-10'>
            <img className='w-56' src={error} alt="This is a error image" />
            <p className='text-red-500 font-bold  py-4 text-xl'>You Somethings wrong so you can back home</p>
          <div >
          <Link to='/'> <button className='btn text-white btn-error '>GO BACK HOME</button></Link>
          </div>
        </div>
    );
};

export default Error;