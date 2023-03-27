import React from 'react'


export const Navbar = () => {
    return(
        <div className='w-full h-[60px] bg-orange-500 flex justify-between items-center px-[30px]'>
            <div className='text-2xl text-white font-bold'>PW Skills</div>
            <ul className='hidden md:flex font-semibold'>
                <li className='mx-[10px]'>Home</li>
                <li className='mx-[10px]'>About</li>
                <li className='mx-[10px]'>Contact Us</li>
            </ul>
            <div className='hidden md:block'>
                <input className='w-[180px] rounded pl-[5px] bg-gray-100' placeholder='Search here...' />
            </div>
            <div className='md:hidden'>
            <img src="https://img.icons8.com/external-others-bomsymbols-/20/null/external-hamberger-flat-general-office-others-bomsymbols-.png" alt='hamberger'/>
            </div>
        </div>
    )
  
}