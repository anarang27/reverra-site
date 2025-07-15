import React from 'react';
import Header from '../components/Header';

const Home = () => (
  <div>
    <section className="relative w-full h-screen">
      <img
        src="/website_background_image.jpg"
        alt="Reverra Hero"
        className="object-cover w-full h-full"
      />

      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-start pt-[10%] px-4 text-[#F8F6D0]">
        {/* Logo top-left */}
        <div className="absolute top-0 left-0 p-6 z-50">
          <img
            src="/transparent_logo.png"
            alt="Reverra Logo"
            className="h-20 sm:h-24"
          />
        </div>

        {/* Header nav */}
        <Header />

        {/* Headline */}
        <h2
          className="text-3xl md:text-5xl text-center font-semibold max-w-4xl leading-tight mb-10"
          style={{ fontFamily: 'Instrument Serif, serif' }}
        >
          Revolutionizing the world’s waste disposal streams toward the goal of a cleaner planet.
        </h2>
      </div>
    </section>
  </div>
);

export default Home;