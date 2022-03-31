import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
const Footer = () => {
    return (
        <div className='my-10 w-full top-full'>
            <div className='text-2xl text-gray-500 my-3'>
                <a href="" className='mx-4'>
                    <i class="fa-brands fa-facebook-f"></i>
                </a>
                <a href="" className='mx-4'>
                    <i class="fa-brands fa-twitter"></i>
                </a>
                <a href="" className='mx-4'>
                    <i class="fa-brands fa-github"></i>
                </a>
                <a href="" className='mx-4'>
                    <i class="fa-brands fa-linkedin"></i>
                </a>
                <a href="" className='mx-4'>
                    <i class="fa-brands fa-amazon"></i>
                </a>
            </div>
            <div className='my-5'>
                <h1 className='text-cyan-600'>All Rights Reserved By © Crypto Cafe | 2022-2026</h1>
            </div>
        </div>
    );
};

export default Footer;