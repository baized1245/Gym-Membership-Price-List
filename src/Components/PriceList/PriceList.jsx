import React, { useEffect, useState } from 'react';
import PriceCard from '../PriceCard/PriceCard';

const PriceList = () => {
    const [prices, setprices] = useState([]);

    useEffect(() =>{
    fetch('price.json')
    .then(res => res.json())
    .then(data => setprices(data))
    },[])
    return (
        <div className='mx-12'>
           <h2 className='text-5xl py-2 text-center text-purple-950 bg-purple-300'>Awesome Affordable Prices</h2> 
           <div className='grid md:grid-cols-3 gap-3   '>
           {
            prices.map(price => <PriceCard
            key={price.id}
            price={price}
            ></PriceCard>)
           }
           </div>
        </div>
    );
};

export default PriceList;