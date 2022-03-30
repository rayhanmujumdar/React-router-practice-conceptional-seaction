import React from 'react';
const Home = () => {
    return (
        <div className='h-[92vh] flex flex-col justify-center items-center bg-slate-200'>
            <h1 className='text-5xl font-semibold text-gray-600 font-mono'>Welcome to CRYPTO CAFE<span className='text-6xl leading-3'>☕</span></h1>
            <button className='bg-sky-700 text-white px-4 py-3 my-3 rounded-full hover:bg-green-700'>Explore Coins</button>
        </div>
    );
};

export default Home;