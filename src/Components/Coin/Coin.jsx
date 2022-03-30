import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Coin = ({coin}) => {
    const {image,symbol,id} = coin
    return (
        <Link to={`/coin-detail/${id}`}>
            <div className='flex w-64 justify-between m-auto bg-slate-50 px-5 py-4 rounded-md shadow-lg'>
                <div className='w-16'>
                    <img src={image} alt="" />
                </div>
                <div className='text-right'>
                    <h5 className='text-lg text-gray-600 font-semibold font-mono'>{id}</h5>
                    <p>{symbol}</p>
                </div>
            </div>
        </Link>
    );
};

export default Coin;