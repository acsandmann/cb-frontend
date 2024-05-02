import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "flowbite-react";


const Header = () => {
    return (
        <div>
            <header className="z-50 sticky top-0 border-main-purple bg-main-header">
                <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
                    <a href="/" className="font-bold flex items-center space-x-3 rtl:space-x-reverse text-white">
                        CS 172 Final
                    </a>
                    <nav className="hidden md:ml-auto md:mr-auto md:flex md:flex-wrap items-center text-base justify-center" id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                            <li>
                                <motion.a whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }} href="/" className="border-main-500 px-3 text-sm flex hover:opacity-75 items-center text-white font-medium hover:text-white mr-5">Home</motion.a>
                            </li>
                            <li>
                                <motion.a whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }} href="/brands" className="border-main-500 px-3 text-sm flex hover:opacity-75 items-center text-white font-medium hover:text-white mr-5">Brands</motion.a>
                            </li>
                            <li>
                                <motion.a whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }} href="/analytics" className="border-main-500 px-3 text-sm flex hover:opacity-75 items-center text-white font-medium hover:text-white mr-5">Analytics</motion.a>
                            </li>
                        </ul>
                    </nav>
                    <Button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => {
                            window.location.href = `https://github.com/acsandmann/cb-frontend`
                        }}
                        className='border-none md:inline-flex hidden opacity-75 mr-10 mx-2 transition ease-in duration-200 py-4 px-6 mt-4 md:mt-0 rounded-md'
                    >
                        <span className="text-white">Github</span>
                    </Button>
                </div>
            </header>

        </div>
    );
};

export default Header;