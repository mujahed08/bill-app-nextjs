'use client'

import { login } from "@/apis/login";
import { useAppContext } from "@/context";
import { setCookie, deleteCookie } from "cookies-next";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

const Login = () => {

  const { register, handleSubmit } = useForm();
  const router = useRouter()

  const { dispatch } = useAppContext()
  

  const onSubmit = async (data:any) => {
    console.log(data);
    
    const response = await login(data);
    const maxAge = { maxAge: 3600 };
    setCookie("access_token", response.access_token, maxAge);
    setCookie("refresh_token", response.refresh_token,  maxAge)
    setCookie("token_type", response.token_type,  maxAge)
    setCookie("email", data.email,  maxAge)
    setCookie("remember", data.remember,  maxAge)
    dispatch({ type : 'logged_in', payload: true})
    router.push('/product')
  };

  useEffect(() => {
    deleteCookie('access_token')
    deleteCookie('refresh_token')
    deleteCookie('token_type')
    deleteCookie('email')
    deleteCookie('remember')
    dispatch({ type : 'logged_in', payload: false})
  }, [])
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input
                id="email-address"
                {...register('email', { required: true })}
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                id="password"
                {...register('password', { required: true })}
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                {...register('remember')}
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Keep me logged in
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign in
            </button>
          </div>
        </form>

        <div className="text-sm text-center">
          <p className="text-gray-600">Don't have an account yet?</p>
          <Link href={'/signup'} className="font-medium text-indigo-600 hover:text-indigo-500">
            Register now
          </Link>
        </div>
      </div>
    </div>
  );
  
}

export default Login;