import dbConnect from '@/lib/dbConnect';
import { ObjectId } from 'mongodb';
import Image from 'next/image';
import React from 'react';

export default async function ProductDetailsPage({ params }) {
    const p = await params;
    const productCollection = dbConnect('products');
    const data = await productCollection.findOne({ _id: new ObjectId(p.id) })
    console.log(data);
    return (
        <div className="container mx-auto px-6 py-12">
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure className="px-10 pt-10">
                    <Image src={data.img} width={314} height={208} alt='null'></Image>
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{data.title}</h2>
                    <p>Price : {data.price}</p>
                    <p> {data.description}</p>
                </div>
            </div>
        </div>
    );
}



