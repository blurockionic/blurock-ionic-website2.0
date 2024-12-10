import Image from 'next/image'
import React from 'react'
import mini1 from '../aboutus/assets/mini1.png'
import mini2 from '../aboutus/assets/mini2.png'
import mini3 from '../aboutus/assets/mini3.png'

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
          <img src="https://placehold.co/520x526" alt='placeholder'/>
        </div>
      </div>

      {/* -----------------------------------------------mission, vision-----------------------------------------------------  */}

      <div className='w-full flex justify-evenly'>
        <div className='flex justify-evenly'>
          <div className='flex flex-col justify-center text-center items-center'>
            <Image src={mini1} alt='miniSVG' width={24} height={24}/>
 
          </div>
          <div className='flex flex-col justify-center text-center items-center'>
            <Image src={mini2} alt='miniSVG' width={24} height={24}/>
            
          </div>
          <div className='flex flex-col justify-center text-center items-center'>
            <Image src={mini3} alt='miniSVG' width={24} height={24}/>
            
          </div>
        </div>
      </div>

    </>
  )
}

export default AboutUs