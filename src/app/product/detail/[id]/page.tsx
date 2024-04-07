'use client'

import Breadcrumb from '../startwith';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

type FormData = {
  product_name: string;
  product_code: string;
  packing: string;
  qty : number
  unit_price : number,
  discount : number
};

const ProductDetail: React.FC = () => {

  
  return (
    <div>
      <Breadcrumb></Breadcrumb>
      <div className="flex flex-col items-center sm:flex-row sm:justify-center">
          <div className="flex flex-col rounded bg-gray-800 md:w-2/3 lg:w-3/5 mx-4 md:my-8 drop-shadow-md">
              <div className="p-4 sm:p-8 border-b border-gray-900">
                <h1 className="text-2xl sm:text-4xl">Product Detail</h1>
              </div>
              <div className="p-4 md:p-8">
                <div className="flex flex-col">
                    <table className="tbl table-fixed w-full mb-4">
                        <thead className="border-l border-gray-900">
                            <tr>
                                <th className="ps-2 text-sm text-left text-gray-400 w-1/4">
                                    Actions
                                </th>
                                <th className="text-left" colSpan={3}>
                                    <button className="me-2 py-1 px-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                                        Edit
                                    </button>
                                    <button className="mx-2 py-1 px-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                                        Delete
                                    </button>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="border-l border-gray-900 ">
                            <tr>
                                <td className="ps-2 text-sm text-gray-400">Product Name</td>
                                <td colSpan={3}>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
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
          </div>
      </div>
    </div>
  );
};

export default ProductDetail;
