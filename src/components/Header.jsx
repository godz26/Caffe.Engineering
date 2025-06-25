import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import {
  FaArrowUp,
  FaCopyright,
  FaFacebook,
  FaEnvelope,
  FaFacebookMessenger,
} from "react-icons/fa";



export const Header = () => {
  return (
    <div className='w-full h-[40px] flex justify-between items-center bg-gradient-to-r from-[#ff3131] to-[#ff914d] text-white'>
        <div className='flex ml-[30px]'>
            <IoLocationOutline className='size-[28px] mr-[5px]' />
            <strong>Cebu</strong>
            <BsTelephone className='size-[25px] ml-[30px] mr-[10px]' />       
            <strong>{"(032)"} 492-0171</strong>
        </div>
        <div className='flex gap-[15px] mr-[20px]'>
            <a href="https://www.facebook.com/caffeengineering">
                <FaFacebook className='size-[25px]' />
            </a>
            <a href="mailto:caffeengineering.ladyros2021@gmail.com">
                <FaEnvelope className='size-[25px]' />
            </a>
            <a href="https://www.facebook.com/messages/t/311288022867857">
                <FaFacebookMessenger className='size-[25px]' />
            </a>
        </div>
    </div>
  )
}
