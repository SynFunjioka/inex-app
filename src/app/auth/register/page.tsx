import Icon from '@/shared/Icon'
import './register.css'
import Link from 'next/link'
import RegisterForm from './ui/RegisterForm'

export default function page() {
  return (
    <div className="h-screen flex">
      <div className="hidden lg:flex w-full lg:w-1/2 login_img_section justify-around items-center">
        <div className="bg-black opacity-20 inset-0 z-0"></div>
        <div className="w-full mx-auto px-20 flex-col items-center space-y-6">
          <h1 className="text-white font-bold text-5xl font-sans">Inex App</h1>
          <p className="text-white mt-1 text-lg">Take control of your finances</p>
          {/* <div className="flex justify-center lg:justify-start mt-6">
              <a href="#" className="hover:bg-indigo-700 hover:text-white hover:-translate-y-1 transition-all duration-500 bg-white text-indigo-800 mt-4 px-4 py-2 rounded-2xl font-bold mb-2">Get Started</a>
          </div> */}
        </div>
      </div>
      <main className="min-h-screen grow flex flex-col items-center justify-center">
        <div className="flex flex-col bg-white shadow-lg px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-lg w-full max-w-md">
          <div className="font-medium self-center text-xl sm:text-2xl uppercase text-gray-800">Create a new Account</div>
          <button className="relative mt-6 border rounded-md py-2 text-sm text-gray-800 bg-gray-100 hover:bg-gray-200">
            <span className="absolute left-0 top-0 flex items-center justify-center h-full w-10 text-blue-500"><i className="fab fa-facebook-f"></i></span>
            <span>Sign up with Facebook</span>
          </button>
          <div className="relative mt-10 h-px bg-gray-300">
            <div className="absolute left-0 top-0 flex justify-center w-full -mt-2">
              <span className="bg-white px-4 text-xs text-gray-500 uppercase">Or Register With Email</span>
            </div>
          </div>
          <div className="mt-10">
            <RegisterForm />
          </div>
          <div className="flex justify-center items-center mt-6">
            <Link href="/auth/login" className="inline-flex items-center font-bold text-blue-500 hover:text-blue-700 text-xs text-center">
              <span>
                <Icon iconName='person' className='fill-blue-500 w-6 h-6'/>
              </span>
              <span className="ml-2">Are you a member? Sign in now!</span>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
