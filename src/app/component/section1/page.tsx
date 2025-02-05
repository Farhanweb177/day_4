import React from 'react';
import Image from 'next/image';
import Footer from '../footer/page';

const Section1 = () => {
    return (
        <div className='w-[1440px] h-[704px] '>

            {/* image section */}
            <div className='my-[60px] mx-[80px]'>
                <Image src={"/blackchair.svg"} alt='wait' width={1280} height={584}></Image>
            </div>


            {/* component properties */}
            <div className='w-[1440px] h-[355px] '>
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

            {/* pictures */}
            <div className='w-[1440px] h-[761px] '>
                <div className='text-3xl text-[#2A254B] ml-[80px] mt-[80px]'>
                    <p>New ceramics</p>
                </div>

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


            <div className='w-[1440px] h-[744px] '>
                <p className='text-3xl mt-[50px] ml-[70px] text-[#2A254B]'>Our popular products</p>

                <div className='w-[1440px] h-[462px]   flex gap-[50px] ml-[70px] mt-[25px] '>
                    <div className='w-[630px] h-[462px] text-[#2A254B]'>
                        <Image src={"/bigsofa.svg"} alt='wait' width={630} height={375}></Image>
                        <p className='mt-[20px]'>The Poplar suede sofa</p>
                        <p className='mt-[10px]'>£980</p>

                    </div>

                    <div className='w-[305px] h-[462px] text-[#2A254B]'>
                        <Image src={"/blakcahir.svg"} alt='wait' width={305} height={375}></Image>
                        <p className='mt-[20px]'>The Dandy chair</p>
                        <p className='mt-[10px]'>£250</p>
                    </div>

                    <div className='w-[305px] h-[462px] text-[#2A254B]'>
                        <Image src={"/stolchair.svg"} alt='wait' width={305} height={375}></Image>
                        <p className='mt-[20px]'>The Dandy chair</p>
                        <p className='mt-[10px]'>£250</p>
                    </div>

                </div>

                <button className='w-[170px] h-[56px] bg-[#F9F9F9]  ml-[700px] mt-[60px] hover:text-red-600'>View collection</button>

            </div>


            <div className='w-[1440px] h-[550px] pt-10  bg-[#F9F9F9]'>
<div className='w-[1273px] h-[364px] my-[52px] mx-[93px] bg-white   '>
<h1 className='text-4xl ml-[400px]'>Join the club and get the benefits</h1>
<p className=' ml-[450px] mt-4'>Sign up for our newsletter and receive exclusive offers on new </p> 
<p className=' ml-[500px]'> ranges, sales, pop up stores and more</p>
<div className=' flex ml-[450px] mt-[150px]'>
            <input className='bg-[#F9F9F9] w-[354px] h-[56px] ' type="text" name='email' placeholder='your@email.com' />

            <button className='w-[118px] h-[56px] bg-[#2A254B] text-white '>Sign Up</button>
          </div>
</div>
            </div>


            <div className='w-[1440px] h-[603px] flex'>
                <div className='w-[720px] h-[603px]'>
                    <div className='w-[536px] h-[252px] ml-[100px] mt-[90px]'>
                        <h1 className='text-2xl font-semibold text-[#2A254B]'>From a studio in London to a global brand with <br />
                            over 400 outlets</h1><br />
                        <h1 className='text-[15px] text-[#505977]'>When we started Avion, the idea was simple. Make high quality furniture
                            affordable and available for the mass market.</h1> <br />
                        <br />
                        <h1 className='text-[15px] text-[#505977]'> Handmade, and lovingly crafted furniture and homeware is what we live,
                            breathe and design so our Chelsea boutique become the hotbed for the
                            London interior design community.</h1>
                        <div>
                            <button className='w-[150px] h-[56px] bg-[#F9F9F9]   mt-[60px] hover:text-red-600'>Get in touch</button>
                        </div>
                    </div>
                </div>
                <Image src={"/halfsofa.svg"} alt='wait' width={720} height={603}></Image>
            </div>

            {/* footer */}


            <Footer></Footer>


        </div>
    )
}

export default Section1
