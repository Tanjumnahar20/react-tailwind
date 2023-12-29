/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import Feature from '../Feature/Feature';

const Price = ({price}) => {
    return (
        <div className='bg-slate-300 mt-6 p-5 rounded flex flex-col'>
            <h2 className='text-center'>
                <span className='text-4xl font-bold text-purple-500'>{price.price}</span>/month
            </h2>
            <h2 className='text-2xl text-center my-5 font-medium'>{price.name}</h2>
            <p className='text-2xl underline'>features:</p>
            {
                price.features.map((feature,idx) => <Feature
                key ={idx}
                feature={feature}
                >

                </Feature>)
            }
                      <button className='w-full hover:bg-purple-800 bg-purple-400 rounded py-2 mt-auto text-2xl'>Buy now</button>

        </div>
    );
};

export default Price;