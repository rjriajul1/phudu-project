import React, { use } from 'react';
import Banner from '../../components/banner/Banner';
import Doctors from '../doctors/Doctors';
import Counter from '../../components/counter/Counter';

const Home = ({dataPromise}) => {
    const doctorsPromise = use(dataPromise);
    const doctorsData = doctorsPromise.data;
    // console.log(doctors);
    return (
        <div className=''>
            <Banner/>
            <Doctors doctorsData={doctorsData}/>
            <Counter/>
        </div>
    );
};

export default Home;