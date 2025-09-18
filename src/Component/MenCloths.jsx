import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import clothes from "../assets/data";
const MenCloths = () => {
        const cloths=clothes.men
  return (
    <div className='flex justify-center'>
        <div className="p-6 w-full max-w-7xl">
          <h1 className="text-2xl font-bold mb-6 text-center">Men's Collection</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {cloths.map((cloth) => (
              <Link to={cloth.id.toString()} key={cloth.id}>
                <div
                  className="max-w-sm rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-md transition"
                  key={cloth.id}
                >
                  <img
                    src={cloth.image}
                    alt={cloth.name || "Casual Shirt"}
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-4">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="text-lg font-semibold leading-tight">
                          {cloth.name}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {cloth.category} {cloth.fitType} {cloth.color}
                        </p>
                      </div>
                      <span className="shrink-0 text-base font-bold">
                        ₹{cloth.price}
                      </span>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2 text-xs">
                      <span className="rounded-full bg-gray-100 px-2.5 py-1">
                        Category: {cloth.category}
                      </span>
                      <span className="rounded-full bg-gray-100 px-2.5 py-1">
                        Fit: {cloth.fitType}
                      </span>
                      <span className="rounded-full bg-gray-100 px-2.5 py-1">
                        Color: {cloth.color}
                      </span>
                    </div>

                    <button
                      className="mt-4 w-full rounded-xl border border-gray-200 py-2 text-sm font-medium hover:bg-gray-50 active:scale-[.99]"
                      type="button"
                    >
                      Read more
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
  )
}

export default MenCloths
