import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Error from "./Error";
import clothes from "../assets/data";
const ClothDetails = () => {
const allClothes = [...clothes.men, ...clothes.women];
const {id}=useParams()
const cloth=allClothes.find((c)=>c.id===Number(id))
if(!cloth){
  return <Error/>
}
  const {name,category,price,size,color,style,description,image}=cloth
const [selectedSize, setSelectedSize] = useState(size?.[0] || "");
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row gap-10" key={id}>
        <div className="md:w-1/2">
          <img
            src={image}
            alt={name}
            className="w-full h-auto rounded-xl shadow-lg"
          />
        </div>
        <div className="md:w-1/2 flex flex-col justify-start">
          <h1 className="text-4xl font-bold mb-4">{name}</h1>
          <p className="text-gray-600 mb-2">
            <span className="font-semibold">Category:</span> {category}
          </p>
          <p className="text-gray-600 mb-2">
            <span className="font-semibold">Price:</span> ₹{price}
          </p>
          <p className="text-gray-600 mb-2">
            <span className="font-semibold">Color:</span> {color}
          </p>
          <p className="text-gray-600 mb-4">
            <span className="font-semibold">Style:</span> {style}
          </p>

          {/* Size Selector */}
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Select Size:</h3>
            <div className="flex gap-3">
              {size.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border rounded-md ${
                    selectedSize === size
                      ? "bg-indigo-600 text-white border-indigo-600"
                      : "bg-white text-gray-700 border-gray-300 hover:border-indigo-600"
                  } transition`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="font-semibold mb-2">Description:</h3>
            <p className="text-gray-700">{description}</p>
          </div>

          {/* Add to Cart Button */}
          <button className="mt-6 bg-indigo-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-indigo-500 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClothDetails;
