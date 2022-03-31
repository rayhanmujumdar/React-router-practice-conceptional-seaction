import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CoinDetail = () => {
    const {detailId} = useParams();
    const [detail,setDetail] = useState({});
    
    useEffect(()=>{
        const url = `https://api.coingecko.com/api/v3/coins/${detailId}`
        axios.get(url)
        .then(data => setDetail(data.data))
    },[detailId])
    const {image,name,market_cap_rank,hashing_algorithm,genesis_date,country_origin,community_score,developer_score,liquidity_score,public_interest_score} = detail
    console.log(detail)
    return (
        <div  className='flex md:justify-evenly md:flex-row flex-col items-center h-[80vh] bg-slate-200 '>
            <div className='my-10 order-2 md:order-1'
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="1000"
            >
                <div className='text-left'>
                    <h1 className='text-3xl my-1'>General info:</h1>
                    <p>Coin Name: {name}</p>
                    <p>Market Cap Rank: {market_cap_rank}</p>
                    <p>Origin: {country_origin || 'Not Found'}</p>
                    <p>Contract Address: </p>
                    <p>Hashing Algorithm: {hashing_algorithm}</p>
                    <p>Genesis Date: {genesis_date}</p>
                    <p>Last Updated: {new Date().getDate(2022)}</p>
                </div>
                <div className='text-left'>
                    <h1 className='text-3xl my-1'>Scores</h1>
                    <p>Community Score: {community_score}</p>
                    <p>Developer Score: {developer_score}</p>
                    <p>Liquidity Score: {liquidity_score}</p>
                    <p>Public Interest Score: {public_interest_score}</p>
                </div>
            </div>
            <div className='flex justify-center items-center order-1 md:order-2' data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="1000">
                <img src={image?.large} alt="" className='max-w-full'/>
            </div>
        </div>
    );
};

export default CoinDetail;