import React from 'react';
import CountUp from 'react-countup';
import succesLogo1 from '../../assets/success-doctor.png'
import succesLogo2 from '../../assets/success-patients.png'
import succesLogo3 from '../../assets/success-review.png'
import succesLogo4 from '../../assets/success-staffs.png'


const Counter = () => {
    return (
<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4 p-4'>
<div className='shadow rounded-2xl space-y-4 p-6 bg-gray-200'>
    <img src={succesLogo1} alt="" />
<div className='font-bold text-2xl flex'>
<CountUp
        className="account-balance"
        start={0}
        end={195}
        duration={10}
        useEasing={true}
        separator=","
      />
      <p>+</p>
</div>
      
      <p>Total Doctors</p>
</div>
<div className='shadow rounded-2xl space-y-4 p-6 bg-gray-200'>
    <img src={succesLogo2} alt="" />
<div className='font-bold text-2xl flex'>
<CountUp
        className="account-balance"
        start={0}
        end={495}
        duration={10}
        useEasing={true}
        separator=","
      />
      <p>+</p>
</div>
      
      <p>Total Reviews</p>
</div>
<div className='shadow rounded-2xl space-y-4 p-6 bg-gray-200'>
    <img src={succesLogo3} alt="" />
<div className='font-bold text-2xl flex'>
<CountUp
        className="account-balance"
        start={0}
        end={1995}
        duration={10}
        useEasing={true}
        separator=","
      />
      <p>+</p>
</div>
      
      <p>Patients </p>
</div>
<div className='shadow rounded-2xl space-y-4 p-6 bg-gray-200'>
    <img src={succesLogo4} alt="" />
<div className='font-bold text-2xl flex'>
<CountUp
        className="account-balance"
        start={0}
        end={295}
        duration={10}
        useEasing={true}
        separator=","
      />
      <p>+</p>
</div>
      
      <p>Total Stuffs</p>
</div>

</div>
    );
};

export default Counter;