import React from 'react';
import bannerImg from '../../assets/banner-img-1.png'

const Banner = () => {
    return (
        <div>
          <div className='text-center py-10 '>
          <h1 className='font-bold text-2xl  md:text-3xl'>Dependable Care, Backed by Trusted <br /> Professionals.</h1>
           <p className='py-4 text-sm p-1'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
           <form>
            <input className='border p-2 rounded-2xl border-gray-300 w-2/3 focus:outline-0' type="search" name="" placeholder='Search any doctor....' />
            <input className='btn text-white font-bold text-xl btn-info ml-4 rounded-2xl md:mt-0 mt-2' type="submit" value="search Now" />
           </form>
          </div>
          <div className='grid md:grid-cols-2 gap-6 p-4'>
            <img src={bannerImg} alt="" />
            <img src={bannerImg} alt="" />
          </div>
        </div>
    );
};

export default Banner;