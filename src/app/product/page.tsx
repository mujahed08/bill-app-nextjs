"use client";


import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Breadcrumb from './startwith';
import { useRouter } from 'next/navigation';
import { get_products } from '@/apis/product';


const Product: React.FC = () => {
  const router = useRouter();

  const editProduct = (id: number = 1) => {
    router.push("/product/edit/1");
  };

  // Rememeber
  const [products, setProducts] = useState<any[]>([]);


    const router = useRouter()

    const editProduct = (id:number = 1) => {
        router.push('/product/edit/1')
    }

    const productName = 'Amol Ice cream'

    // Rememeber
    const [products, setProducts] = useState<any[]>([]);

    useEffect(() => {

        get_products().then((data) => {
            setProducts(data)
        })

    }, [])

    return (
    <div>
        <Breadcrumb></Breadcrumb>
        <div className="flex flex-col m-4 md:m-8  rounded bg-gray-800 drop-shadow-md">
            <div className="actions-btns p-6 flex border-b border-gray-900">
                <span className="p-2">
                    <Link href={'/product/create'} className="flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Create
                    </Link>
                </span>
                <span className="p-2">
                    <button onClick={() => {editProduct()}} className="flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                        Edit
                    </button>
                </span>
            </div>
            <div className="p-4 md:p-8 border-b border-gray-900 lg:hidden">
                <div className="flex flex-col">
                    <table className="table-fixed w-full mb-4">
                        <thead className="border-l border-gray-900">
                            <tr>
                                <th className="ps-2 text-sm text-left text-gray-400 w-1/4">
                                    Select
                                </th>
                                <th className="text-left">
                                    <input type="checkbox"/>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="border-l border-gray-900 ">
                            <tr>
                                <td className="ps-2 text-sm text-gray-400">Product Name</td>
                                <td colSpan={3}>{productName}</td>
                            </tr>
                            <tr>
                                <td className="ps-2 text-sm text-gray-400">Product Code</td>
                                <td>SBNP</td>
                                <td className="ps-2 text-sm text-gray-400 border-l border-gray-900 ">Packing</td>
                                <td>Bags</td>
                            </tr>
                            <tr>
                                <td className="ps-2 text-sm text-gray-400">Quantity</td>
                                <td>10</td>
                                <td className="ps-2 text-sm text-gray-400 border-l border-gray-900 ">Unit Price</td>
                                <td>30</td>
                            </tr>
                            <tr>
                                <td className="ps-2 text-sm text-gray-400">Discount (%)</td>
                                <td>2</td>
                                <td className="ps-2 text-sm text-gray-400 border-l border-gray-900 ">Apply Discount</td>
                                <td>Yes</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="p-4 md:p-8 border-b border-gray-900 lg:hidden">
                <div className="flex flex-col">
                    <table className="table-fixed w-full mb-4">
                        <thead className="border-l border-gray-900">
                            <tr>
                                <th className="ps-2 text-sm text-left text-gray-400 w-1/4">
                                    Select
                                </th>
                                <th className="text-left">
                                    <input type="checkbox"/>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="border-l border-gray-900 ">
                            <tr>
                                <td className="ps-2 text-sm text-gray-400">Product Name</td>
                                <td colSpan={3}>{productName}</td>
                            </tr>
                            <tr>
                                <td className="ps-2 text-sm text-gray-400">Product Code</td>
                                <td>SBNP</td>
                                <td className="ps-2 text-sm text-gray-400 border-l border-gray-900 ">Packing</td>
                                <td>Bags</td>
                            </tr>
                            <tr>
                                <td className="ps-2 text-sm text-gray-400">Quantity</td>
                                <td>10</td>
                                <td className="ps-2 text-sm text-gray-400 border-l border-gray-900 ">Unit Price</td>
                                <td>30</td>
                            </tr>
                            <tr>
                                <td className="ps-2 text-sm text-gray-400">Discount (%)</td>
                                <td>2</td>
                                <td className="ps-2 text-sm text-gray-400 border-l border-gray-900 ">Apply Discount</td>
                                <td>Yes</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            
            
            
            <div className="p-4 md:p-8 border-b border-gray-900 hidden lg:block">
                <table className="tbl table-fixed w-full">
                    <thead>
                        <tr>
                            <th className="w-12 text-left">#</th>
                            <th className="w-1/2 text-left">Product Name</th>
                            <th className="w-24 text-left">Code</th>
                            <th className="w-24 text-left">Packing</th>
                            <th className="w-24 text-left">Quantity</th>
                            <th className="w-24 text-left">Unit Price</th>
                            <th className="w-24 text-left">Discount (%)</th>
                            <th className="w-24 text-left">Apply Discount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='border-y border-gray-900'>
                            <td><input type="checkbox"/></td>
                            <td>{productName}</td>
                            <td>Lockyer</td>
                            <td>Bags</td>
                            <td>10</td>
                            <td>30</td>
                            <td>2</td>
                            <td>Yes</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            

        </div>
      </div>
    </div>
  );
};

export default Product;
