"use client"

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { product } from '../../../write/product'
import { client } from '@/sanity/lib/client'
import { allProduct } from '@/sanity/lib/queries'
import { urlFor } from '@/sanity/lib/image'

const Shoes = () => {


    const [product,setProduct] = useState<product[]>([])

    useEffect(() => {

        async function fetchProduct(){
            const fetchProduct = await client.fetch(allProduct)
            console.log(fetchProduct)
            setProduct(fetchProduct)

        }
        fetchProduct()
    }, [])




  return (
    <div className='max-w-6xl mx-auto px-4 py-8 '>

        {product.map((product) => (
            <div key={product._id} >
                {product.productName}
                {product.image && ( 
                <Image
                src={urlFor(product.image).url()}
                alt="Image"
                width={200}
                height={200}
                
                />
            )}
              {product.price}
            </div>
        )
        )}
      
    </div>
  );
};

export default Shoes
