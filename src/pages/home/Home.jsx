import React, { use } from 'react';
import Banner from '../../components/banner/Banner';
import Doctors from '../doctors/Doctors';

const Home = ({dataPromise}) => {
    const doctorsPromise = use(dataPromise);
    const doctorsData = doctorsPromise.data;
    // console.log(doctors);
    return (
        <div className=''>
            <Banner/>
            <Doctors doctorsData={doctorsData}/>
        </div>
    );
};

export default Home;