"use client";
import React, { useEffect } from 'react';
import Logo from '@/assets/logo.png'; // Adjust the path based on your project structure


export const Header = () => {
    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector("header");
            if (window.scrollY > 0) {
                header?.classList.add("sticky");
            } else {
                header?.classList.remove("sticky");
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className="bg-gray-800 text-white p-4 flex justify-between items-center absolute top-0 left-0 w-full transition-all duration-300">
            <div className="text-xl font-bold flex flex-row space-x-2">
                <img src="/logo.png" alt="FusionWorks Logo" className="h-8 w-8 object-contain" />
                <p>
                FusionWorkz
                </p>
            </div>
            <nav className="space-x-4">
                <a href="/">Home</a>
                <a href="/contact">Enquiries</a>
                <a href="/about">About Us</a>
                <a href="/blog">Blog</a>
            </nav>
        </header>
        
    );
}