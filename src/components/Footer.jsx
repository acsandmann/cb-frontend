import React from 'react';

const Footer = () => {
    return (
        <footer className="text-gray-500 bg-main-200 body-font z-50">
                <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                    <span className="text-sm sm:text-center text-gray-400">CS 172 Final Project - Atticus Sandmann & Sohum Balsara
                    </span>
                    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-600 sm:mt-0">
                        <li className='mx-3'>
                            <a href="/" className="hover:text-white hover:underline">Home</a>
                        </li>
                        <li className='mx-3'>
                            <a href="/analytics" className="hover:text-white hover:underline">Analytics</a>
                        </li>
                        <li className='mx-3'>
                            <a href="/" className="hover:text-white hover:underline">About</a>
                        </li>
                    </ul>
                </div>
            </footer>
    );
};

export default Footer;