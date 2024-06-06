'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/context/AuthContext';

export default function Header() {
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="font-mono shadow-md py-4 px-4 sm:px-10 w-full fixed top-0 left-0 z-50 flex items-center justify-between">
      <div className="text-lg font-semibold">
        {user ? `Hello, ${user.name || user.email}.` : 'Hello.'}
      </div>
      <div className="lg:hidden">
        <button
          onClick={toggleMenu}
          className="text-muted-leaf hover:text-muted-leaf-hover focus:outline-none focus:text-muted-leaf-hover"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      <nav className={`fixed top-0 right-0 w-64 bg-soft-dirt shadow-md transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform lg:relative lg:transform-none lg:transition-none lg:flex lg:flex-row lg:items-center lg:space-x-4`}>
        <div className="flex justify-between items-center p-4 lg:hidden">
          <div className="text-lg font-semibold">Menu</div>
          <button
            onClick={toggleMenu}
            className="text-muted-leaf hover:text-muted-leaf-hover focus:outline-none focus:text-muted-leaf-hover"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <ul className={`flex flex-col space-y-4 p-4 ${isOpen ? 'block' : 'hidden'} lg:flex lg:flex-row lg:items-center lg:space-x-4 lg:p-0`}>
          <li><a href="/login" className="rounded-lg block px-4 py-2 text-white hover:bg-muted-leaf-hover lg:hover:text-muted-leaf-hover">Login or Sign Up</a></li>
          <li><a href="/plants" className="rounded-lg block px-4 py-2 text-white hover:bg-muted-leaf-hover lg:hover:bg-transparent lg:hover:text-muted-leaf-hover">My Plants</a></li>
          <li><a href="/research" className="rounded-lg block px-4 py-2 text-white hover:bg-muted-leaf-hover lg:hover:bg-transparent lg:hover:text-muted-leaf-hover">My Research</a></li>
          <li><a href="/account" className="rounded-lg block px-4 py-2 text-white hover:bg-muted-leaf-hover lg:hover:bg-transparent lg:hover:text-muted-leaf-hover">My Account</a></li>
        </ul>
      </nav>
    </header>
  );
}
