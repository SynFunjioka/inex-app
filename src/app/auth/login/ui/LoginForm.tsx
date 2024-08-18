'use client'

import Icon from "@/shared/Icon"
import { useState } from "react"
import { useForm } from "react-hook-form"

// type FormInputs = {
//   email: string
//   password: string
// }

export default function LoginForm() {
  // const [errorRegister, setErrorRegister] = useState('');
  // const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>()

  // const onSubmit = async(data: FormInputs) => {
  //   setErrorRegister(prev => prev = '');
  //   const { email, password } = data;

    // // server action
  // }

  return (
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
  )
}
