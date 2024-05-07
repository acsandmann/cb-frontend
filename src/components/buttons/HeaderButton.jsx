import React from 'react';
import { Link, useLocation } from 'react-router-dom';
//hover:border-main-550
const active = 'text-white hover:text-white';
const inactive = 'text-main-header2 hover:text-white';

const HeaderButton = ({ text, path }) => {
    const location = useLocation();
    const isActive = (path) => {
        return location.pathname === path;
    };
    
    return (
        <Link 
            to={path}
            role='button'
            className={`${isActive(path) ? active : inactive} px-3 py-2 text-sm flex border border-transparent hover:bg-default-200 items-center font-medium mr-5 rounded-md`}
        >

                {text}
           
        </Link>
    );
};

export default HeaderButton;