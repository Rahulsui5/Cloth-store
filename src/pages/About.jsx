import React from "react";

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="bg-indigo-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">About ChothStore</h1>
          <p className="text-lg text-gray-200">
            Your one-stop online shop for the latest fashion and lifestyle cloths.
          </p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <img
            src="https://images.pexels.com/photos/6969962/pexels-photo-6969962.jpeg"
            alt="Shopping"
            className="rounded-xl shadow-lg w-full"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
          <p className="text-gray-700 mb-4">
            At ShopEase, we are passionate about bringing you the best products at affordable prices.
            We carefully select each item to ensure quality and style, helping you look and feel your best.
          </p>
          <p className="text-gray-700 mb-4">
            Our mission is to provide a seamless shopping experience with easy navigation, fast shipping,
            and top-notch customer support.
          </p>
          <p className="text-gray-700">
            Whether you're looking for fashion trends.
          </p>
        </div>
      </div>
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-8 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-700">
              To make online shopping easy, affordable, and enjoyable for everyone, by providing quality products
              and excellent customer service.
            </p>
          </div>
          <div className="bg-gray-50 p-8 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-gray-700">
              To become the most trusted online shopping destination by delivering exceptional experiences and
              continuously innovating to meet our customers' needs.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-indigo-600 text-white py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Start Shopping Today!</h2>
        <p className="mb-6 text-gray-200">
          Explore our wide range of products and find what you love.
        </p>
        <a
          href="/"
          className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-md hover:bg-gray-200 transition"
        >
          Shop Now
        </a>
      </div>
    </div>
  );
};

export default About;
