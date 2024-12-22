"use client"
import Image from 'next/image'
import React from 'react'
import ProfilePic from '../About/assets/placholderProfile.png'
import { LinkedinIcon, TwitterIcon, WebhookIcon } from 'lucide-react'

const CardEmp = () => {
  return (
    <div className='flex flex-col gap-[24px] mt-[80px] justify-center items-center text-center'>
        <Image className='rounded-md' src={ProfilePic} alt='profile' width={309} height={296}/>
        <div className='flex flex-col gap-[16px]'>
            <h1 className='font-bold'>Full name</h1>
            <p>Job title</p>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, voluptate repudiandae adipisci exercitationem iusto quas ratione aliquam dolorum, deleniti nobis, fugiat neque accusamus dolorem.</p>

        <div className='flex gap-[12px]'>
            <LinkedinIcon/>
            <TwitterIcon/>
            <WebhookIcon/>
        </div>
    </div>
  )
}

export default CardEmp