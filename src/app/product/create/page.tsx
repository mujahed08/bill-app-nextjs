'use client'

import { create_product } from '@/apis/product';
import Breadcrumb from './startwith';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from "next/navigation";

type FormData = {
  product_name: string;
  product_code: string;
  packing: string;
  qty : number
  unit_price : number,
  discount : number,
  apply_discount:boolean
};

const ProductCreate: React.FC = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    
  } = useForm<FormData>({
    defaultValues : {
      'unit_price' : 0,
      'qty' : 1,
      'discount' : 0,
      'apply_discount':true
    }
  });
  const router = useRouter()

  //setValue('unit_price', 0)

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    // console.log(data);
    const response=await create_product(data);
    console.log(response.data);
    router.push('/product')
  };

  return (
    <div>
      <Breadcrumb></Breadcrumb>
      <div className="flex flex-col items-center sm:flex-row sm:justify-center">
          <div className="px-4 w-full md:w-3/4 lg:w-3/5 md:m-8">
          <div className="flex flex-col rounded bg-gray-800 drop-shadow-md w-full">
              <div className="p-4 sm:p-8 border-b border-gray-900">
                <h1 className="text-2xl sm:text-4xl">Create Product</h1>
              </div>
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className="flex flex-col sm:flex-row flex-wrap p-4 sm:p-8">
                  <div className="p-2 sm:p-4 rounded-lg w-full md:w-5/6">
                    <label htmlFor="product_name" className="block text-white mb-2">Product name</label>
                    <input id="product_name" 
                      placeholder="Product Name"
                      {...register('product_name', { required: 'Product Name is required' })}
                      type="text" className="bg-gray-800 text-white focus:outline-none focus:ring focus:border-blue-500 border border-gray-700 rounded-md px-4 py-2 w-full" />
                      {errors.product_name && (
                      <p className="text-red-500 text-sm mt-1">{errors.product_name.message}</p>
                    )}
                  </div>
                  <div className="p-2 sm:p-4 rounded-lg w-2/3 md:w-1/2">
                    <label htmlFor="product_code" className="block text-white mb-2">Product Code</label>
                    <input id="product_code"
                      placeholder="Product Code"
                      {...register('product_code', { required: 'Product Code is required' })}
                      type="text" className="bg-gray-800 text-white focus:outline-none focus:ring focus:border-blue-500 border border-gray-700 rounded-md px-4 py-2 w-full" />
                      {errors.product_code && (
                      <p className="text-red-500 text-sm mt-1">{errors.product_code.message}</p>)}
                  </div>
                  <div className="p-2 sm:p-4 rounded-lg w-2/3 md:w-1/2">
                    <label htmlFor="product_code" className="block text-white mb-2">Packing</label>
                    <select id="packing"  
                      {...register('packing', { required: 'Packing is required' })}
                      className="bg-gray-800 text-white focus:outline-none focus:ring focus:border-blue-500 border border-gray-700 rounded-md px-4 py-2 w-full">
                        <option value="">Select...</option>
                        <option value="Box">Box</option>
                        <option value="Unit">Unit</option>
                        <option value="Bag">Bag</option>
                        <option value="Carton">Carton</option>
                        <option value="Dozen">Dozen</option>
                    </select>
                    {errors.packing && (
                      <p className="text-red-500 text-sm mt-1">{errors.packing.message}</p>)}
                  </div>
                  <div className="p-2 sm:p-4 rounded-lg w-2/3 md:w-1/2">
                    <label htmlFor="qty" className="block text-white mb-2">Quantity</label>
                    <input  type="number" 
                      {...register('qty', { required: 'Qty is required' })}
                    placeholder="Quantity" className="bg-gray-800 text-white focus:outline-none focus:ring focus:border-blue-500 border border-gray-700 rounded-md px-4 py-2 w-full" id="qty" />
                    {errors.qty && (
                      <p className="text-red-500 text-sm mt-1">{errors.qty.message}</p>)}
                  </div>

                  <div className="p-2 sm:p-4 rounded-lg w-2/3 md:w-1/2">
                      <label htmlFor="unit_price" className="block text-white mb-2">Unit Price</label>
                      <input type="number" 
                      {...register('unit_price', { required: 'Unit Price is required' })}
                      placeholder="Unit Price" className="bg-gray-800 text-white focus:outline-none focus:ring focus:border-blue-500 border border-gray-700 rounded-md px-4 py-2 w-full" id="unit_price" />
                    {errors.unit_price && (
                      <p className="text-red-500 text-sm mt-1">{errors.unit_price.message}</p>)}
                  </div>

                  <div className="p-2 sm:p-4 rounded-lg w-2/3 md:w-1/2">
                      <label htmlFor="discount" className="block text-white mb-2">Discount</label>
                      <input type="number" 
                      {...register('discount', { required: 'Discount is required' })}
                        placeholder="Discount" className="bg-gray-800 text-white focus:outline-none focus:ring focus:border-blue-500 border border-gray-700 rounded-md px-4 py-2 w-full" id="discount" />
                      {errors.discount && (
                      <p className="text-red-500 text-sm mt-1">{errors.discount.message}</p>)}
                  </div>

                  <div className="flex items-center  p-2 sm:p-4 w-full md:w-2/3">
                      <input type="checkbox" placeholder="enableDiscount" className="m-3" id="enableDiscount" />
                      <label htmlFor="enableDiscount" className="text-white ps-4">Enable Discount</label>
                  </div>
                </div>
                <div className="flex justify-center pb-16">
                  <div className="p-2">
                    <button className="flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" type="submit">
                      Submit form
                    </button>
                  </div>
                  <div className="p-2">
                    <button className="flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500" type="reset">
                      Cancel
                    </button>
                  </div>
                </div>
              </form>
          </div>
          </div>
        </div>
    </div>
  );
};

export default ProductCreate;
