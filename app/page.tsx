import React from 'react'
import Image from 'next/image';
import Homeimg from '@/app/assets/mainbodyimage.png'
import HomeCard from '@/app/components/Home/homeCard';
import HomeCard2 from '@/app/components/Home/homeCard2';
import card1icon from '@/app/assets/producthomeCard.png';
import blurockWlogo from '@/app/assets/blurockwealthlogo.png'
import card21 from '@/app/assets/card21.png'
import card22 from '@/app/assets/card22.png'
import card23 from '@/app/assets/card23.png'
import card24 from '@/app/assets/card24.png'
import Logo from '@/app/assets/BlurockLogo.png'
import { FAQs } from '@/app/components/Home/faq';
import OurProductSection from './components/Home/OurProductSection';
import ClientFirstSection from './components/Home/ClientFirstSection';
import LaunchCTASection from './components/Home/LaunchCTASection';

const page = () => {
  return (
   <>
   <p className='bg-blue-200 z-50 p-1 text-center'> Wesite is under developement.</p>
    <div className='text-center  flex flex-col items-center justify-center'>
    <div className="px-4 md:px-10 py-2 mt-3 justify-center items-center gap-2.5 inline-flex w-full">
      <h1 className="w-full text-center text-black text-[4vw] md:text-[4vw] font-bold ">Comprehensive Software Solutions for Tomorrow’s Enterprises</h1>
    </div>

   

    <Image src={Homeimg} alt='' className='items-center'/>

    {/* ------------------------------------What's for your section ------------------------------------------------------------ */}

    <div className='w-full flex flex-col items-center justify-center border-[#C8F169] border-[10px] bg-[#F6F8F9] py-[80px] mt-[24px]'>
      <div className=' w-fit text-center flex-col'>
        <h2 className='font-bold text-2xl mb-[14px]'>What’s for you</h2>
        <p className='text-md'>Our core services are built to elevate your enterprise with cutting-edge technology and design.</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 mt-5'>
        <HomeCard title={"Web & Mobile App Development"} description={"From scalable web platforms to intuitive mobile apps — we deliver custom solutions to match your vision."} imgSrc={card1icon.src}/>
        <HomeCard title={"Graphic Design & Branding"} description={"Leave a lasting impression with clean, impactful visual identities, UI/UX design, and print-ready materials."} imgSrc={card1icon.src}/>
        <HomeCard title={"Digital Marketing & SEO"} description={"Boost your visibility, drive organic growth, and generate qualified leads through multi-channel campaigns."} imgSrc={card1icon.src}/>
        <HomeCard title={"Social Media Management"} description={"Let us handle your brand’s digital voice with strategic content, engagement, and consistent branding."} imgSrc={card1icon.src}/>
      </div>
      <div className='xl:flex xl:gap-20 mt-5 hidden'>
        <Image src={blurockWlogo} alt='blurock wealth'/>
        <Image src={blurockWlogo} alt='blurock wealth'/>
        <Image src={blurockWlogo} alt='blurock wealth'/>
        <Image src={blurockWlogo} alt='blurock wealth'/>
        <Image src={blurockWlogo} alt='blurock wealth'/>
        <Image src={blurockWlogo} alt='blurock wealth'/>
        <Image src={blurockWlogo} alt='blurock wealth'/>
      </div>
    </div>

    {/* product section  */}
    <div className='w-full mt-5'>
      <OurProductSection/>
    </div>

    {/* ------------------------------------ Full cycle software development ------------------------------------------------------------ */}


    <div className='flex flex-col items-center justify-center my-10 px-4'>
      {/* <h1 className='font-bold text-2xl '>Full Cycle Software Development</h1>
      <p className='text-[16px] mt-[24px]'>Effortlessly create stunning sites with real-time <br /> support every step of the way.</p> */}

      <h1 className='font-bold mt-[97px] text-2xl mb-[14px]'>Why Choose Blurock Ionic?</h1>
      <p className='text-[16px] mt-[24px]'>Explore a spectrum of solutions meticulously designed to empower your <br/> business growth.</p>

      <div className='mt-10'>
        <div className="flex flex-col  gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <HomeCard2 title='Full-Cycle Software Development'
             description='From ideation to deployment, we support you every step of the way — delivering functional, beautiful solutions.' imgSrc={card21.src} imgSrc2={Logo.src}/>
            <HomeCard2 
            title='Scalability Optimization' 
            description='We analyze and improve your existing systems to ensure your infrastructure can grow with you.' imgSrc={card22.src} imgSrc2={Logo.src}/>
            <HomeCard2
             title='All-in-One Feature Suite' 
             description='A powerful stack of features and tools to launch, scale, and manage your digital presence — without hassle.' imgSrc={card23.src} imgSrc2={Logo.src}/>
            <HomeCard2
             title='End-to-End Automation'
              description='Streamline operations, save time, and improve customer experiences with smart, automated solutions.' imgSrc={card24.src} imgSrc2={Logo.src}/>
          </div>
        </div>        
      </div>
    </div>


    {/* client first section  */}
    <ClientFirstSection/>

    {/* --------------------------------------------- FAQ section --------------------------------------------------- */}

   <div className='mb-10'>
   <FAQs/>
   </div>

   {/* LouchCTA SECTION  */}
   <LaunchCTASection/>
  </div>
   </>
  )
}

export default page