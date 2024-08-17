import Icon from '@/shared/Icon'
import React from 'react'

export default function page() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col bg-white shadow-lg px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-lg w-full max-w-md">
        <div className="font-medium self-center text-xl sm:text-2xl uppercase text-gray-800">Login To Your Account</div>
        <button className="relative mt-6 border rounded-md py-2 text-sm text-gray-800 bg-gray-100 hover:bg-gray-200">
          <span className="absolute left-0 top-0 flex items-center justify-center h-full w-10 text-blue-500"><i className="fab fa-facebook-f"></i></span>
          <span>Login with Facebook</span>
        </button>
        <div className="relative mt-10 h-px bg-gray-300">
          <div className="absolute left-0 top-0 flex justify-center w-full -mt-2">
            <span className="bg-white px-4 text-xs text-gray-500 uppercase">Or Login With Email</span>
          </div>
        </div>
        <div className="mt-10">
          <form action="#">
            <div className="flex flex-col mb-6">
              <label htmlFor="email" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">E-Mail Address:</label>
              <div className="relative">
                <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                  <Icon iconName="alternate_email" className="fill-gray-500 w-4 h-4" />
                </div>
                <input id="email" type="email" name="email" className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="E-Mail Address" />
              </div>
            </div>

            <div className="flex flex-col mb-6">
              <label htmlFor="password" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">Password:</label>
              <div className="relative">
                <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                  <Icon iconName='https' className="fill-gray-500 w-4 h-4" />
                </div>
                <input id="password" type="password" name="password" className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-10 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="Password" />
                <button className='inline-flex items-center justify-center absolute right-0 top-0 h-full -translate-x-3'>
                  <Icon iconName="remove_red_eye" className="fill-gray-500 w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="flex items-center mb-6 -mt-4">
              <div className="flex ml-auto">
                <a href="#" className="inline-flex text-xs sm:text-sm text-blue-500 hover:text-blue-700">Forgot Your Password?</a>
              </div>
            </div>

            <div className="flex w-full">
              <button type="submit" className="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded py-2 w-full transition duration-150 ease-in">
                <span className="mr-2 uppercase">Login</span>
                <span>
                  <Icon iconName='forward' className='fill-white h-6 w-6' />
                </span>
              </button>
            </div>
          </form>
        </div>
        <div className="flex justify-center items-center mt-6">
          <a href="#" target="_blank" className="inline-flex items-center font-bold text-blue-500 hover:text-blue-700 text-xs text-center">
            <span>
              <Icon iconName='person_add' className='fill-blue-500 w-6 h-6'/>
            </span>
            <span className="ml-2">You don't have an account?</span>
          </a>
        </div>
      </div>
    </main>
  )
}
