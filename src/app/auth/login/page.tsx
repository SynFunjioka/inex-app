import Icon from '@/shared/Icon'
import Link from 'next/link'
import LoginForm from './ui/LoginForm'

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
          <LoginForm />
        </div>
        <div className="flex justify-center items-center mt-6">
          <Link href="/auth/register" className="inline-flex items-center font-bold text-blue-500 hover:text-blue-700 text-xs text-center">
            <span>
              <Icon iconName='person_add' className='fill-blue-500 w-6 h-6'/>
            </span>
            <span className="ml-2">You don't have an account?</span>
          </Link>
        </div>
      </div>
    </main>
  )
}
