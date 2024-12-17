"use client"
import Image from 'next/image'
import React from 'react'
import mini1 from '../aboutus/assets/mini1.png'
import mini2 from '../aboutus/assets/mini2.png'
import mini3 from '../aboutus/assets/mini3.png'
import PlaceHolder1 from '../aboutus/assets/placeholder526520.png'
import Avatar from '../aboutus/assets/avatar.png'
import CardEmp from '@/app/components/About/CardEmp'

const AboutUs = () => {
  return (
    <>
      <header className='text-center flex flex-col justify-center gap-[50px] mt-[164px] items-center'>
        <h1 className='text-[80px] leading-[0.90]'>Empowering Business <br /> Transforming Futures</h1>
        <p>Crafting innovative solutions for a sustainable tomorrow</p>
        <button className='bg-[#5550FF] rounded-md hover:bg-[#6460e5] w-fit px-[29px] py-[12px] text-white'>Explore Our Journey</button>
      </header>
      
      {/* -----------------------------------------------Who we Are----------------------------------------------------------  */}
      
      <div className='my-[97px] py-[15px] flex justify-evenly mx-[64px]'>
        <div className='flex flex-col gap-[24px]'>
          <p className='text-slate-400'>About Us</p>
          <h1 className='text-[48px] font-bold'>Who We Are?</h1>
          <p className='text-[24px] font-bold'>Blurock Ionic combines <span className='text-[#5550FF]'>innovation, sustainability </span>, and <span className='text-[#5550FF]'>expertise</span> to revolutionize how businesses operate in the digital era.</p>
          <ul className='py-[20px]'>
            <li>Empowering business with innovative tech solutions.</li>
            <li>Simplifying processes for efficiency and growth</li>
            <li>Commmited to excellence and sustainability</li>
          </ul>
        </div>
        <div>
          <Image src={PlaceHolder1} alt='placeholder' width={526} height={520}/>
        </div>
      </div>

      {/* -----------------------------------------------mission, vision-----------------------------------------------------  */}

      <div className='w-full flex justify-evenly '>
          <div className='flex justify-evenly mx-[235px] px-[7px] py-[17px] gap-[56px] rounded-2xl shadow-inner'>
            <div className='flex flex-col justify-center text-center items-center gap-[10px]'>
              <Image src={mini1} alt='miniSVG' width={24} height={24}/>
              <h1 className='text-[#5550ff] text-lg font-semibold leading-tight'>Mission</h1>
              <p className='text-sm font-medium leading-tight'>Simplify complexity and drive growth through technology.</p>
            </div>
            <div className="w-px h-[124px] relative bg-[#ebebeb]" />
            <div className='flex flex-col justify-center text-center items-center gap-[10px]'>
              <Image src={mini2} alt='miniSVG' width={24} height={24}/>
              <h1 className='text-[#5550ff] text-lg font-semibold leading-tight'>Vision</h1>
              <p className='text-sm font-medium leading-tight'>To be a trusted partner in digital innovation.</p>
            </div>
            <div className="w-px h-[124px] relative bg-[#ebebeb]" />
            <div className='flex flex-col justify-center text-center items-center gap-[10px]'>
              <Image src={mini3} alt='miniSVG' width={24} height={24}/>
              <h1 className='text-[#5550ff] text-lg font-semibold leading-tight'>Values</h1>
              <p className='text-sm font-medium leading-tight'>Sustainability, People-first, and Excellence.</p>
            </div>
          </div>
      </div>

      <div className='flex items-center text-center flex-col justify-between w-full px-[230px] py-[72px]'>
        <div>

          <div className='flex gap-[33px] text-center p-[12px] rounded-md shadow-inner'>
            <Image src={Avatar} height={48} width={48} alt='avatar'/>
            <h1 className='text-2xl font-semibold text-center leading-[3rem]'>9+ Team Members</h1>
          </div>

        </div>

        <div className='flex mt-[54px] gap-[54px]'>

          <div className='flex gap-[33px] text-center p-[12px] rounded-md shadow-inner'>
            <Image src={Avatar} height={48} width={48} alt='avatar'/>
            <h1 className='text-2xl font-semibold text-center leading-[3rem]'>9+ Team Members</h1>
          </div>

          <div className='flex gap-[33px] text-center p-[12px] rounded-md shadow-inner'>
            <Image src={Avatar} height={48} width={48} alt='avatar'/>
            <h1 className='text-2xl font-semibold text-center leading-[3rem]'>9+ Team Members</h1>
          </div>
        </div>
      </div>

      {/* ------------------------------ Our Team --------------------------------------------- */}

      <div className='w-full p-[64px] flex flex-col justify-center items-center text-center mb-[80px]'>
        <div className='flex flex-col justify-center items-center text-center gap-[24px]'>
          <p className='font-bold text-md'>Meet</p>
          <h1 className='text-3xl font-bold text-[#5550ff]'>Our Team</h1>
          <p className='text-md'>Dedicated proffessionals committed to excellence</p>
        </div>

        <div className='flex gap-[32px]'>
          <CardEmp/>
          <CardEmp/>
          <CardEmp/>
          <CardEmp/>
        </div>
      </div>

    </>
  )
}

export default AboutUs