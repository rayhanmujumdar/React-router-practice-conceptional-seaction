import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Coin from '../Coin/Coin';

const Coins = () => {
    const [coins,setCoins] = useState([]);
    useEffect(()=>{
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false')
        .then(data => setCoins(data.data))
    },[])
    return (
        <div className='bg-slate-200 p-10'>
            <div className='text-center'>
                <h1 className='text-2xl font-bold'>Available Crypto Currencies</h1>
                <p className='my-2'>Total Coins: {coins.length}</p>
            </div>
            <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 justify-center gap-10 m-auto my-10'>
                {
                    coins.map(coin => <Coin key={coin.id} coin={coin}></Coin>)
                }
            </div>
        </div>
    );
};

export default Coins;