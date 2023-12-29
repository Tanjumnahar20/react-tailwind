/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';


const Header = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        {
            id: 1,
            name: 'Home',
            path: '/'

        },
        {
            id: 2,
            name: 'Service',
            path: '/'

        },
        {
            id: 2,
            name: 'About',
            path: '/about'

        },
        {
            id: 3,
            name: 'Contact  ',
            path: '/contact'

        },
        {
            id: 4,
            name: 'Product',
            path: '/product'

        }

    ]
    return (
        <nav className='bg-gray-600'>

        <div>

            <div onClick={() => setOpen(!open)} className='md:hidden'>
                <span>
                    {open === true ? <XMarkIcon className="h-6 w-6 text-purple-500" />
                        : <Bars3Icon className="h-6 w-6 text-purple-500" />}
                </span>


            </div>

            <ul className={`md:flex absolute pl-5 pb-2 px-2 py-2 bg-red-300 md:static duration-500 ${open ?  'top-6' : '-top-48'}`}>
                    {
                        routes.map(route => <Link
                            key={route.id}
                            route={route}
                        ></Link>)
                    }
                </ul>
        </div>
            </nav>
    );
};

export default Header;