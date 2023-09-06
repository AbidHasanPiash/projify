import Link from 'next/link';

export default function Register() {
  let dot = new Array;
  for (let index = 0; index < 4; index++) {
    dot[index]=<div className='w-10 h-10 bg-gray-950 rounded-full'></div>
  }
  return (
    <section className='h-screen flex items-center justify-center'>
      <div className='grid lg:grid-cols-2 p-6 m-3 w-full md:w-4/6 lg:w-3/5 rounded-xl bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-gray-700 via-gray-600 to-gray-900'>
        <div className='hidden lg:flex flex-col space-y-16'>
          <div className='flex space-x-16'>{dot}</div>
          <div className='flex space-x-16'>{dot}</div>
          <div className='flex items-center'>
            <div className='w-10 h-10 bg-orange-500 rounded-full'></div>
            <p className='text-4xl font-bold select-none'>rganize it all</p>
          </div>
          <div className='flex space-x-16'>{dot}</div>
          <div className='flex space-x-16'>{dot}</div>
        </div>
        <div className='flex flex-col items-center justify-center space-y-6'>
          <h1 className='text-4xl font-bold select-none'>Register and Control</h1>
          <form className='flex flex-col items-center justify-center space-y-6'>
            <input 
              type="text" 
              placeholder='User name' 
              className='w-80 outline-none px-4 py-4 bg-gray-950 rounded-full focus:ring-2 ring-orange-500'/>
            <input 
              type="password" 
              placeholder='Password' 
              className='w-80 outline-none px-4 py-4 bg-gray-950 rounded-full focus:ring-2 ring-orange-500'/>
              <button 
                type="submit"
                className='w-80 px-4 py-4 bg-gray-950 text-orange-500 font-bold rounded-full focus:ring-2 ring-orange-500 hover:tracking-widest transition-all duration-200'>
                Register
              </button>
          </form>
          <div className='flex flex-col items-center justify-center'>
            <p className='text-gray-400'>or</p>
            <div className='space-x-4'>
              <Link href={'/auth/login'} className='tracking-widest hover:text-orange-500 hover:underline underline-offset-4 transition-colors duration-200'>I've Account</Link>
              <Link href={'/'} className='tracking-widest hover:text-orange-500 hover:underline underline-offset-4 transition-colors duration-200'>Go Home</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
