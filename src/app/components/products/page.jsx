import dbConnect from '@/lib/dbConnect';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default async function ProductsSection() {
    const data = await dbConnect('products').find() .sort({ _id: -1 }) .limit(3).toArray();
    return (
        <div>
            <h1 className='text-center font-bold text-3xl py-4'>Products Highlights</h1>
            <div className='grid grid-cols-12 container mx-auto'>
                {data.map((item) => {
                    return (
                        <div className='col-span-1 md:col-span-6 lg:col-span-4' key={item._id}>

                            <div className="card bg-base-100 w-96 shadow-sm">
                                <figure className="px-10 pt-10">
                                    <Image src={item.img} width={314} height={208} alt='null'></Image>
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">{item.title}</h2>
                                    <p>Price : {item.price}</p>
                                    <div className="card-actions">
                                        <Link href={`/products/${item._id}`}><button className="btn btn-primary">View details</button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>

    )

}
