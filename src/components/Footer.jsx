import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 bottom-0 body-font z-50">
                <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                    <span className="text-sm sm:text-center text-gray-400">CS 172 Final Project - Atticus Sandmann & Sohum Balsara
                    </span>
                    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-400 sm:mt-0">
                        <li>
                            <a href="/" className="hover:underline me-4 md:me-6">Home</a>
                        </li>
                        <li>
                            <a href="/analytics" className="hover:underline me-4 md:me-6">Analytics</a>
                        </li>
                        <li>
                            <a href="/" className="hover:underline">About</a>
                        </li>
                    </ul>
                </div>
            </footer>
    );
};

export default Footer;