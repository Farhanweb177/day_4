import React from 'react';
import Image from 'next/image';
import Header from '../component/header/page';
import Footer from '../component/footer/page';

const page = () => {
  return (
    <div>
      <Header></Header>

      <div id='pic' className='w-[1440px] h-[704] '>

      </div>

      <div className='w-[1440px] h-[476px] '>
        <p className=' text-center text-[#2A254B] mt-[100px]'>What makes our brand different</p>
        <div className='w-[1440px] h-[250px]  flex gap-[70px] mt-[100px] ml-[80px]'>
          <div className='w-[270px] h-[124px] text-[#2A254B]'>
            <Image src={"/truck.svg"} alt='wait' width={24} height={24}></Image>
            <p>Next day as standard</p>
            <p>Order before 3pm and get your order
              the next day as standard</p>
          </div>

          <div className='w-[270px] h-[124px]  text-[#2A254B]'>
            <Image src={"/correcttiksign.svg"} alt='wait' width={24} height={24}></Image>
            <p >Made by true artisans</p>
            <p>Handmade crafted goods made with
              real passion and craftmanship</p>
          </div>

          <div className='w-[270px] h-[124px]  text-[#2A254B]'>
            <Image src={"/purchas.svg"} alt='wait' width={24} height={24}></Image>
            <p >Unbeatable prices</p>
            <p>For our materials and quality you won’t find better prices anywhere</p>
          </div>

          <div className='w-[270px] h-[124px]  text-[#2A254B]'>
            <Image src={"/flawer.svg"} alt='wait' width={24} height={24}></Image>
            <p >Recycled packaging</p>
            <p>We use 100% recycled packaging to ensure our footprint is manageable</p>
          </div>
        </div>
      </div>

      <div className='w-[1440px] h-[634px] '>


        <div className='w-[1440px] h-[462px]  flex gap-[30px] ml-[80px] mt-[40px]'>
          <div className='w-[305px] h-[462px] text-[#2A254B] font-normal ]'>
            <Image src={"/chair.svg"} alt='wait' width={305} height={375}></Image>
            <p className='mt-[25px]'>The Dandy chair</p>
            <p className='mt-[17px]'>£250</p>
          </div>

          <div className='w-[305px] h-[462px] text-[#2A254B] font-normal ]'>
            <Image src={"/matca.svg"} alt='wait' width={305} height={375}></Image>
            <p className='mt-[25px]'>Rustic Vase Set</p>
            <p className='mt-[17px]'>£155</p>
          </div>

          <div className='w-[305px] h-[462px] text-[#2A254B] font-normal ]'>
            <Image src={"/botal.svg"} alt='wait' width={305} height={375}></Image>
            <p className='mt-[25px]'>The Silky Vase</p>
            <p className='mt-[17px]'>£125</p>
          </div>

          <div className='w-[305px] h-[462px] text-[#2A254B] font-normal ]'>
            <Image src={"/topbulb.svg"} alt='wait' width={305} height={375}></Image>
            <p className='mt-[25px]'>The Lucy Lamp</p>
            <p className='mt-[17px]'>£399</p>
          </div>

        </div>
        {/* button */}
        <button className='w-[170px] h-[56px] bg-[#F9F9F9]  ml-[700px] mt-[60px] hover:text-red-600'>View collection</button>
      </div>

      {/* <div></div> */}
      <div className='w-[1440px] h-[598px]  flex justify-center items-center gap-12 ml-6'>

        <div className='w-[634px] h-[478px] bg-[#2A254B] '>


          <h1 className='text-white font-400px text-3xl mx-24 mt-12'>It started with a small idea</h1>
          <p className='text-white mx-24'>A global brand with local beginnings, our story begain in a <br />
            small studio in South London in early 2014</p>

          <button className='w-[170px] h-[56px] bg-[#F9F9F926] font-normal text-white mt-48 ml-24'>veiw content</button>
        </div>
        <Image src={"/ImageBlock.svg"} alt='wait' width={630} height={478}></Image>

      </div>


      {/* last */}

      <div id='again' className='w-[1440px] h-[444px] border border-black flex justify-center items-end pb-20'>

        <div className='w-[472px] h-[56px]   flex'>
          <div className=' flex'>
            <input className='bg-white w-[354px] h-[56px] ' type="text" name='email' placeholder='your@email.com' />

            <button className='w-[118px] h-[56px] bg-[#2A254B] text-white '>Sign Up</button>
          </div>

        </div>

      </div>





      <Footer></Footer>
    </div>
  )
}

export default page
