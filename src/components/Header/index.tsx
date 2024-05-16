"use client"

import React from 'react';
import Link from 'next/link';
import { useAppContext } from '@/context';

const Header: React.FC = () => {

  const { appState, dispatch } = useAppContext()

  return ( <>
    { appState.logged_in ? <header className="bg-gray-800 text-white p-4 border-b border-gray-900">
        <div className="mx-auto flex sm:flex-row flex-col justify-between">
          <div className="flex flex-col sm:flex-row">
            <div className="text-xl font-bold m-2 pe-4 md:pe-16">Bill App</div>
            <nav className="m-2">
              <ul className="flex sm:flex-row flex-col gap-y-4 gap-x-4 md:gap-x-8">
                <li><Link href="/home" className="hover:text-gray-300 p-2">Home</Link></li>
                <li><Link href="/bill" className="hover:text-gray-300 p-2">Generate Bill</Link></li>
                <li><Link href="/product" className="hover:text-gray-300 p-2">Products</Link></li>
                <li><Link href="/contact" className="hover:text-gray-300 p-2">Contact</Link></li>
              </ul>
            </nav>
          </div>
          <div className="m-2"><Link href="/login" className="hover:text-gray-300 p-2">Logout</Link></div>
        </div>

    </header> : ''}
  </> );
};

export default Header;
