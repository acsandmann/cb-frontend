import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "flowbite-react";


const Header = () => {
    return (
        <div>
            <header className="border-gray-200 bg-gray-900">
                <div className="container mx-auto flex flex-wrap p-5  flex-col md:flex-row items-center">
                    <a href="/" className="font-bold flex items-center space-x-3 rtl:space-x-reverse text-white">
                        CS 172 Final
                    </a>
                    <nav className="hidden md:ml-auto md:mr-auto md:flex md:flex-wrap items-center text-base justify-center" id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-gray-800 md:bg-gray-900 border-gray-700">
                            <li>
                                <motion.a whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }} href="/" className="block py-2 px-3 md:p-0 text-white">Home</motion.a>
                            </li>
                            <li>
                                <motion.a whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }} href="/brands" className="block py-2 px-3 md:p-0 text-white">Brands</motion.a>
                            </li>
                            <li>
                                <motion.a whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }} href="/analytics" className="block py-2 px-3 md:p-0 text-white">Analytics</motion.a>
                            </li>
                        </ul>
                    </nav>
                    <Button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => {
                            window.location.href = `https://github.com/acsandmann/cb-frontend`
                        }}
                    >
                        <span className="text-white">Github</span>
                    </Button>
                </div>
            </header>

        </div>
    );
};

export default Header;