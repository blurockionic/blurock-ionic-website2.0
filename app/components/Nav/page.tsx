import React from 'react'
import Logo from "../../assets/BlurockLogo.png"
import Arrow from "../../assets/arrow.png"
import Image from 'next/image';

// import { Lato } from 'next/font/google'


const Navbar = () => {
  return (
    <nav className='flex justify-between px-[32px] py-[11px] w-full text-center items-center rounded-xl shadow backdrop-blur-[10px] absolute top-[36px]'>
      
      <div className='flex text-center items-center gap-[9px]'>
        <Image src={Logo} alt='Logo'/>
        <h1 className='text-black text-lg font-bold font-Lato'>Blurock Ionic</h1>
      </div>

      <ul className='gap-[14px] py-[11px] flex font-bold'>

        <li>
          <Link href="/home">Home</Link>
        </li>
        <li>
          <Link href="/aboutus">About Us</Link>
        </li>
        <li>
          <Link href="/services">Services</Link>
        </li>
        <li>
          <Link href="/solutions">Solutions</Link>
        </li>
        {/* <li>
          <Link href="/Help">Help</Link>
        </li> */}
        <li>
          <Link href="/contactus">Contact Us</Link>
        </li>

      </ul>

      <div className='flex gap-2'>
        <div className="h-[39.08px] px-[17px] py-2 rounded-xl border border-black/10 justify-center items-center inline-flex text-black text-base font-semibold hover:cursor-pointer hover:bg-slate-400">
          Sign Up
        </div>
        <div className="h-[39.08px] px-[17px] py-2 rounded-xl border border-white/10 justify-center items-center inline-flex text-white text-base font-semibold bg-black flex gap-1 hover:cursor-pointer hover:bg-slate-700 hover:transition-transform">
          <p>Sign In</p>
          <Image src={Arrow} alt='arrow'/>
        </div>
      </div>

    </nav>
  )
}

export default Navbar;