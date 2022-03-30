import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../image/404.jpg'
const NotFound = () => {
    // const navigate = useNavigate();
    // const navigates = () => {
    //     const path = '/'
    //     navigate(path)
    // }
    return (
        <div className='md:flex justify-center items-center text-left mx-4'>
            <div>
                <p><small>ERROR 404</small></p>
                <h1>Oops! The page you're looking for isn't here</h1>
                <p>You might have the wrong address,or the page may have moved</p>
                <div>
                    <button className='bg-[#0891B2] text-white px-4 py-2 my-3 mr-3'><Link to={'/'}>Back to homepage</Link></button>
                    <button className='bg-[#0891B2] text-white px-4 py-2 my-3 mr-3'><Link to={'/contact'}>Contact us</Link></button>
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <img src={image} alt="" className='img-fluid'/>
            </div>
        </div>
    );
};

export default NotFound;