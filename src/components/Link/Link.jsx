/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Link = ({route}) => {
    return (
        <li className='mr-12 hover:bg-red-800'>
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

export default Link;