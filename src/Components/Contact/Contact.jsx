import React from 'react';
import { Link , Outlet } from 'react-router-dom';

const Contact = () => {
    return (
        <section>
            <div className='flex flex-col justify-center items-center my-20'>
            <h1 className='text-3xl'>Contact Us, Our Office Address Down Below</h1>
                <div className='my-10'>
                    <Link to={'bd-address'} className='bg-[#0891B2] px-4 py-2 rounded-md m-3 text-white hover:bg-gray-700'>BD Address</Link>
                    <Link to={'us-address'} className='bg-[#0891B2] px-4 py-2 rounded-md text-white hover:bg-gray-700'>US Address</Link>
                </div>  
            </div>
            <div className='flex justify-center items-center w-full py-44'>
                <Outlet></Outlet>
            </div>
        </section>
    );
};

export default Contact;