import React from 'react';
import { Link } from 'react-router';

const EmptyMessage = () => {
    return (
        <div className='py-10'>
            <h1 className='font-bold text-2xl text-center'>Not Item here</h1>
            <p className='text-center py-4'>Added an Doctor Appointment Please</p>
           <div className='flex justify-center'>
           <Link to='/'><button className='btn btn-primary'>Back To HomePage</button></Link>
           </div>
        </div>
    );
};

export default EmptyMessage;