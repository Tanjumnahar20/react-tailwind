/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Price from '../Price/Price';

const PriceList = () => {
 
    const [prices,setPrice] = useState([]);
     
    useEffect(()=>{
        fetch('prices.json')
        .then(res=>res.json())
        .then(data=>setPrice(data))
    },[])

    return (
        <div className='pt-6 mx-12'>
          
          <h2 className='text-5xl text-center pt-2 font-bold'>Affordable prices!</h2>
          <div className=' md:grid grid-cols-3 gap-3'>
            {
                prices.map(price=><Price
                key={price.id}
                price={price}
                ></Price>)
            }
          </div>

        </div>
    );
};

export default PriceList;