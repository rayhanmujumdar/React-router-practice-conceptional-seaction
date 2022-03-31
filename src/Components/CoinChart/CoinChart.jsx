import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const CoinChart = () => {
    const [coins,setCoins] = useState([]);
    let allCoins = []
    // const [mostCoinPrice,setCoinPrice] = useState([]);
    useEffect(()=>{
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false')
        .then(data => {
            setCoins(data.data)
        })
    },[]);
    const allprice = []
    for(const coin of coins){
        allprice.push(coin.current_price)
    }
    allprice.sort(function(a,b){return b-a})
    let price = []
    for(let i = 0; i<allprice.length; i++){
        const coin = coins.find(coin => coin.current_price === allprice[i])
        price.push(coin)
        
    }
    const coinPrice = price.slice(0,10)
    return (
        <div>
        <h1 className='my-10 text-5xl font-mono'>Most popluar Coins Price Chart</h1>
        <div className={`w-full flex min-h-[80vh] items-center justify-center`}>
            
            <ResponsiveContainer width='95%' height={350}>
                <LineChart width={800} height={600} data={coinPrice}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip/>
                <Legend />
                <Line dataKey="current_price" fill="#8884d8"/>
                </LineChart>
            </ResponsiveContainer>
        </div>
        </div>
    );
};

export default CoinChart;