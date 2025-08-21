"use client"

import alert from 'daisyui/components/alert';
import React, { useState } from 'react';

export default function AddProductForm(props) {

    const handleSubmit = async (e)=>{
        e.preventDefault();
        const form = e.target;
        const title = form.name.value;
        const img = form.photo.value;
        const price = form.price.value;
        const description = form.description.value;
        const payload = {title, img,price,description}
       const res = await fetch("http://localhost:3000/api/items", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
       const result = await res.json()
       console.log(result); 
       form.reset();
       alert("Product are added")
    }
    return (
        <div className="max-w-md mx-auto p-6">
            <h1 className="text-xl font-bold mb-4">Add Product</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    name='name'
                    placeholder=" Product Name"
                    className="w-full p-2 border rounded"
                    // onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                <input
                    type="text"
                    name='photo'
                    placeholder=" Enter your  photo URL"
                    className="w-full p-2 border rounded"
                    // onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                 <input
                    type="number"
                    name='price'
                    placeholder="Price"
                    className="w-full p-2 border rounded"
                    // onChange={(e) => setForm({ ...form, price: e.target.value })}
                />
                <textarea
                    placeholder="Description"
                    name='description'
                    className="w-full p-2 border rounded"
                    // onChange={(e) => setForm({ ...form, description: e.target.value })}
                />
               
                <button type='submit' className="px-6 py-2 bg-violet-600 text-white rounded">
                    Add Product
                </button>
            </form>
        </div>
    );
}

