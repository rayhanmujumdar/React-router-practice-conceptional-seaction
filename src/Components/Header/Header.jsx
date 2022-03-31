import React, { useState } from 'react';
import {MenuAlt3Icon, XIcon} from '@heroicons/react/solid'
import CustomLink from '../CoustomLink/CoustomLink';
const Header = () => {
    const [nav,setNav] = useState(false)
    const navBar = (open) => {
        setNav(open)
    }
    return (
        <div className='flex justify-between md:flex-row py-6 w-full bg-white sticky top-0 z-30 md:justify-between'>
            <div className='ml-4'>
                <h1 className='text-2xl font-bold font-mono text-gray-600'>Crypto Cafe</h1>
            </div>
            <div className='mr-4 text-left'>
                <div onClick={() => navBar(!nav)} className='md:hidden w-6 h-6 m-auto'>
                    {
                        nav ? <XIcon></XIcon> : <MenuAlt3Icon></MenuAlt3Icon>
                    }
                </div> 
                <div className={`md:block ${nav ? "block": 'hidden'}`}>
                <ul className={`flex flex-col md:flex-row font-mono text-2xl justify-center md:my-0 my-3`}>
                    <li className='mx-2 hover:text-teal-800'><CustomLink  to='/'>Home</CustomLink></li>
                    <li className='mx-2 hover:text-teal-800'><CustomLink to='/coins'>Coin</CustomLink></li>
                    <li className='mx-2 hover:text-teal-800'><CustomLink to='/contact'>Contact</CustomLink></li>
                    <li className='mx-2 hover:text-teal-800'><CustomLink to='/about'>About</CustomLink></li>
                </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;