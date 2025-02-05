import React from 'react'
import Image from 'next/image';
import Link from 'next/link';


const Header = () => {
  return (
    <div className='w-[1440px] h-[132px]  flex-col'>


      <div className='w-[1440px] h-[66px] border border-b-black flex justify-between '>
      <div className='ml-[28px] mt-[26px]'><Image src={"/searchbar.svg"} alt='wait' width={16} height={16}></Image> </div>
      <div className='mt-[20px] font-normal'><h1>Avion</h1></div>
      <div className='flex mt-[26px]  w-[70px]'>
      <span className='mr-[20px]'><Image src={"/shopingtrali.svg"} alt='wait' width={16} height={16}></Image></span>
      <span className=''><Image src={"/manicon.svg"} alt='wait' width={16} height={16}></Image></span>
      </div>
      </div>

      <div className='w-[800px] h-[22px]  flex gap-10 mt-[25px] ml-[375px]'>
        <Link href="/" className='text-[#726E8D]'>Plant pots</Link>
        <Link href="Ceramics" className='text-[#726E8D]'><h1>Ceramics</h1></Link>
        <Link href="furniture" className='text-[#726E8D] '>API DATA</Link>
        <Link href="headertwo" className='text-[#726E8D]'>Tables</Link>
        <Link href="" className='text-[#726E8D]'>Chairs</Link>
        <Link href="" className='text-[#726E8D]'>Crockery</Link>
        <Link href="" className='text-[#726E8D]'>Tableware</Link>
        <Link href="" className='text-[#726E8D] '>Cutlery</Link>
        
      </div>
      
      
    </div>
  )
}

export default Header
