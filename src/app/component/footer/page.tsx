import React from 'react';
import Image from 'next/image';



const Footer = () => {
  return (
    <>
<div className='w-[1440px] h-[380px]  bg-[#2A254B] flex  '>
    <div className='w-[108px] h-[175px]  text-[#FFFFFF] mt-[58px] ml-[70px]'>
        <p>Menu</p>
        <p>New arrivals</p>
        <p>Best sellers</p>
        <p>Recently viewed</p>
        <p>Popular this week</p>
        <p>All products</p>
    </div>

    <div className='w-[84px] h-[206px]  text-[#FFFFFF] mt-[58px] ml-[70px]'>
<p>Categories</p>
<p>Crockery</p>
<p>Furniture</p>
<p>Homeware</p>
<p>Plant pots</p>
<p>Chairs</p>
<p>Crockery</p>
    </div>

    <div className='w-[105px] h-[175px]  text-[#FFFFFF] mt-[58px] ml-[70px]'>
<p>Our company</p>
<p>About us</p>
<p>Vacancies</p>
<p>Contact us</p>
<p>Privacy</p>
<p>Returns policy</p>
    </div>


    <div className='flex flex-col justify-end text-white ml-[100px]  w-[800px] h-[200px]  '>
        <div className='mb-14 ml-14'>
        <p >Join our mailing list</p>
        </div>
        <div className='w-[472px] h-[56px]  ml-[50px] flex'>
    <div className='mb-14 flex'>
        <input className='bg-[#FFFFFF26] w-[509px] h-[56px] pl-[30px]' type="text" name='email' placeholder='your@email.com'/>
  
        <button className='w-[118px] h-[56px] bg-[#FFFFFFFF] text-[#2A254B] '>Sign Up</button>
    </div>

</div>
    </div>


</div>

<div className=' px-[80px] w-[1440px] h-[40px] bg-[#2A254B] flex items-center justify-between'> 
<div>
    <h1 className='text-white'>Copyright 2022 Avion LTD</h1>
</div>
<div>
    <ul className='flex items-center justify-center gap-4'>
        <p> <Image src={"/inin.svg"} alt='wait' width={24} height={24}></Image></p>
        <p> <Image src={"/fbfb.svg"} alt='wait' width={24} height={24}></Image></p>
        <p> <Image src={"/insins.svg"} alt='wait' width={24} height={24}></Image></p>
        <p> <Image src={"/againv.svg"} alt='wait' width={24} height={24}></Image></p>
        <p><Image src={"/twiti.svg"} alt='wait' width={24} height={24}></Image></p>
        <p><Image src={"/pppp.svg"} alt='wait' width={24} height={24}></Image></p>
    </ul>
</div>
</div>








</>
  )
}

export default Footer
