import React from 'react';
import { useParams } from 'react-router-dom';

const CoinDetail = () => {
    const {detail} = useParams();
    return (
        <div>
            <p>{detail}</p>
            <h1>hello borther</h1>
        </div>
    );
};

export default CoinDetail;