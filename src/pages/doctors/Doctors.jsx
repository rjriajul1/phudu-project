import React, { useEffect, useState } from 'react';
import Doctor from '../doctor/Doctor';

const Doctors = ({doctorsData}) => {

const [doctors,setDoctors] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(()=>{
      if(showAll){
        setDoctors(doctorsData)
      }else{
        setDoctors(doctorsData.slice(0,6))
      }
    },[showAll,doctorsData])
   

    return (
        <div className='my-10 p-4'>
            <div className='text-center py-5 rounded-2xl bg-gray-200'>
                <hr className='w-4 mx-auto border-1 border-red-500 rounded-2xl ' /> 
                <h1 className='text-3xl pt-2 font-bold'>Our Best Doctors</h1>
                <p className='py-4'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
                </div>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4 '>
                    {
                        doctors.map(singleDoctor=><Doctor key={singleDoctor.id} singleDoctor={singleDoctor}></Doctor>)
                    }
                </div>

               <div className='flex justify-center py-6'>
               <button onClick={()=>{
                setShowAll((rev)=>!rev);
                if(showAll) return window.scrollTo(0,800)
               }} className='btn btn-success text-white'>{showAll ? 'Show Less Doctors':'View All Doctors'}</button>
               </div>
            
        </div>
    );
};

export default Doctors;