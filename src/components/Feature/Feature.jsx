/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const Feature = ({feature}) => {
    return (
        <div className='flex items-center'>
            <span><CheckCircleIcon className="h-6 w-6 text-purple-500" /></span>
            <h3 className='pl-2'>{feature}</h3>
        </div>
    );
};

export default Feature;