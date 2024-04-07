import Header from '@/components/Header';
import Link from 'next/link';
import React from 'react';

const Bill: React.FC = () => {
  return (
    <div className="bg-gray-900">
        <div className="row">
            <div className="actions-btns p-6 flex container mx-auto">
                <span className="p-2">
                    <Link href={'/product/create'} className="flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Create
                    </Link>
                </span>
                <span className="p-2">
                    <button className="flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                        Edit
                    </button>
                </span>
            </div>
        </div>
        <div className="flex flex-col container mx-auto bg-gray-800">
            <div className="p-4">I
                
            </div>
        </div>
    </div>
  );
};

export default Bill;
