import React from 'react';
import Feature from '../Feature/Feature';

const PriceCard = ({price}) => {
    return (
        <div className='bg-indigo-400 mt-4 rounded-md p-4 flex flex-col'>
            <h2 className='text-center'>
            <span className='text-purple-600 text-5xl font-extrabold'>{price.price}</span>
            <span className='text-2xl font-bold text-white'>/month</span>
            </h2>
            
            <h5 className='text-2xl font-bold text-center'>{price.name}</h5>
            <p className='font-bold text-white underline'>Features:</p>
            {
                price.features.map((feature, idx) => <Feature 
                feature={feature}
                key={idx}
                ></Feature>)
            }
            <button className='bg-green-500 w-full py-2 font-bold rounded-md text-white mt-auto hover:bg-green-700'>Buy Now</button>
        </div>
    );
};

export default PriceCard;