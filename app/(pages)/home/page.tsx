
import Image from 'next/image';
import React from 'react'
import Homeimg from './assets/mainbodyimage.png'
import HomeCard from '@/app/components/Home/homeCard';
import HomeCard2 from '@/app/components/Home/homeCard2';
import card1icon from '@/app/assets/producthomeCard.png';
import blurockWlogo from '@/app/assets/blurockwealthlogo.png'
import card21 from '@/app/assets/card21.png'
import card22 from '@/app/assets/card22.png'
import card23 from '@/app/assets/card23.png'
import card24 from '@/app/assets/card24.png'
import card25 from '@/app/assets/card25.png'
import card26 from '@/app/assets/card26.png'
import Logo from '@/app/assets/BlurockLogo.png'
import { FAQs } from '@/app/components/Home/faq';

const Home = () => {
  return (
    <div className='text-center  flex flex-col items-center justify-center'>
      <div className="mt-[164px] p-2.5 justify-center items-center gap-2.5 inline-flex">
        <div className="w-[1020px] text-center text-black text-[56px] font-bold leading-[72px]">Comprehensive Software Solutions for Tomorrow’s Enterprises</div>
      </div>

      {/* <div className='mt-[82px] border-2 rounded-lg w-fit text-left p-[8px] flex-col items-center'>
        <p className='font-bold mb-[19px] text-[20px]'>Our Offerings</p>
        <div className='px-[6px] py-[12px] mt-2 bg-[#F5CC0029] rounded-lg'>Empowering Business Growth</div>
        <div className='px-[6px] py-[12px] mt-2 bg-[#FF707029] rounded-lg'>Nex-Gen Software</div>
        <div className='px-[6px] py-[12px] mt-2 bg-[#9B70FF29] rounded-lg'>Full Suite Software Solutions</div>
      </div> */}

      <Image src={Homeimg} alt='' className='items-center'/>

      {/* ------------------------------------What's for your section ------------------------------------------------------------ */}

      <div className='w-full flex flex-col items-center justify-center border-[#C8F169] border-[10px] bg-[#F6F8F9] py-[80px] mt-[24px]'>
        <div className=' w-fit text-center flex-col'>
          <h2 className='font-bold text-2xl mb-[14px]'>What’s for you</h2>
          <p className='text-md'>Our core services are tailored to meet your business needs.</p>
        </div>
        <div className='flex gap-[49px] my-[28px] px-[130px]'>
          <HomeCard title={"Products"} description={"Embrace the future with our next-gen, custom-tailored business software."} imgSrc={card1icon.src}/>
          <HomeCard title={"Products"} description={"Embrace the future with our next-gen, custom-tailored business software."} imgSrc={card1icon.src}/>
          <HomeCard title={"Products"} description={"Embrace the future with our next-gen, custom-tailored business software."} imgSrc={card1icon.src}/>
          <HomeCard title={"Products"} description={"Embrace the future with our next-gen, custom-tailored business software."} imgSrc={card1icon.src}/>
        </div>
        <div className='flex gap-[40px] '>
          <Image src={blurockWlogo} alt='blurock wealth'/>
          <Image src={blurockWlogo} alt='blurock wealth'/>
          <Image src={blurockWlogo} alt='blurock wealth'/>
          <Image src={blurockWlogo} alt='blurock wealth'/>
          <Image src={blurockWlogo} alt='blurock wealth'/>
          <Image src={blurockWlogo} alt='blurock wealth'/>
          <Image src={blurockWlogo} alt='blurock wealth'/>
        </div>
      </div>

      {/* ------------------------------------ Full cycle software development ------------------------------------------------------------ */}


      <div className='flex flex-col items-center justify-center my-[97px]'>
        <h1 className='font-bold text-2xl mb-[14px]'>Full Cycle Software Development</h1>
        <p className='text-[16px] mt-[24px]'>Effortlessly create stunning sites with real-time <br /> support every step of the way.</p>

        <h1 className='font-bold mt-[97px] text-2xl mb-[14px]'>Comprehensive All-in-One Feature Suite</h1>
        <p className='text-[16px] mt-[24px]'>Explore a spectrum of solutions meticulously designed to empower your <br/> business growth.</p>

        <div className='mt-[97px]'>
          <div className="flex flex-col gap-[35px] mx-[190px]">
            <div className="flex gap-4">
              <HomeCard2 title='01 — Scalability optimization' description='Our scalability solutions analyze your current infrastructure, identifying bottlenecks and optimizing processes.' imgSrc={card21.src} imgSrc2={Logo.src}/>
              <HomeCard2 title='01 — Scalability optimization' description='Our scalability solutions analyze your current infrastructure, identifying bottlenecks and optimizing processes.' imgSrc={card22.src} imgSrc2={Logo.src}/>
              <HomeCard2 title='01 — Scalability optimization' description='Our scalability solutions analyze your current infrastructure, identifying bottlenecks and optimizing processes.' imgSrc={card23.src} imgSrc2={Logo.src}/>
            </div>
            <div className="flex gap-4">
              <HomeCard2 title='01 — Scalability optimization' description='Our scalability solutions analyze your current infrastructure, identifying bottlenecks and optimizing processes.' imgSrc={card24.src} imgSrc2={Logo.src}/>
              <HomeCard2 title='01 — Scalability optimization' description='Our scalability solutions analyze your current infrastructure, identifying bottlenecks and optimizing processes.' imgSrc={card25.src} imgSrc2={Logo.src}/>
              <HomeCard2 title='01 — Scalability optimization' description='Our scalability solutions analyze your current infrastructure, identifying bottlenecks and optimizing processes.' imgSrc={card26.src} imgSrc2={Logo.src}/>
            </div>
          </div>

          <h1 className='font-bold my-[97px] text-2xl mb-[14px]'>End-to-End Automation Solutions</h1>
          <p className='text-[16px] mt-[24px]'>All-in-one solutions to build software, reach customers, save time, and <br /> boost sales.</p>
          
        </div>
      </div>

      {/* --------------------------------------------- FAQ section --------------------------------------------------- */}

     
      <div className='mt-[97px] w-full flex flex-col justify-center items-center px-[120px]'>
        <h1 className='font-bold mx-[97px] text-2xl mb-[14px]'>End-to-End Automation Solutions</h1>
        <p className='text-[16px] mt-[24px]'>All-in-one solutions to build software, reach customers, save time, and <br /> boost sales.</p>
        <FAQs/>
      </div>
    </div>
  )
}

export default Home;