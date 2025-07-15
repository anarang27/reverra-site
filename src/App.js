import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Header from './components/Header';


const facts = [
  "U.S. recycling levels are currently at a mere 32%.",
  "The global average carbon footprint is 4 tons. The U.S. average is 16 tons...",
  "Every hour, 2.5 million plastic bottles are thrown away in the U.S.",
  "Plastic bottles take upwards of 450 years to degrade.",

];


const Home = () => (
  <div>
    <section className="relative w-full h-screen">
      {/* Background Image */}
      <img
        src="/website_background_image.jpg"
        alt="Reverra Hero"
        className="object-cover w-full h-full"
      />

      {/* Overlay with Logo, Nav, Headline, and Swiper */}
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-start pt-[10%] px-4 text-[#F8F6D0]">

        {/* Logo */}
        <div className="w-full flex flex-col items-center p-4 sm:p-8 z-10">
          <img
            src="/transparent_logo.png"
            alt="Reverra Logo"
            className="h-16 mb-4"
          />
          <div style={{ height: '80px', position: 'relative' }}>

          </div>
        </div>

        {/* Main Headline */}
        <h2
          className="text-3xl md:text-5xl text-center font-semibold max-w-4xl leading-tight mb-10"
          style={{ fontFamily: 'Instrument Serif, serif' }}
        >
          <BlurText
            text="Revolutionizing the world’s waste disposal streams toward the goal of a cleaner planet."
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
          />
        </h2>

        {/* Swiper Carousel */}
        <div className="relative w-full max-w-xl mt-16">
          <h3
            className="text-xl md:text-2xl font-semibold text-[#F8F6D0] text-center -mb-0"
            style={{ fontFamily: 'Instrument Serif, serif' }}
          >
            Did you know?
          </h3>

          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            loop={true}
            className="rounded-lg bg-[#27532F] text-[#F8F6D0] px-10 py-8 h-48"
          >
            {facts.map((fact, index) => (
              <SwiperSlide
                key={index}
                className="flex items-center justify-center h-full"
              >
                <div className="max-w-2xl w-full text-center px-10">
                  <p
                    className="text-lg md:text-xl leading-relaxed py-14"
                    style={{ fontFamily: 'Newsreader, serif' }}
                  >
                    {fact}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Swiper overrides */}
          <style>{`
            .swiper-button-prev, .swiper-button-next {
              color: #F8F6D0;
              top: 50%;
              transform: translateY(-1%);
              background: transparent;
            }

            .swiper-pagination-bullet {
              background-color: #F8F6D0;
              opacity: 0.4;
            }

            .swiper-pagination-bullet-active {
              opacity: 1;
            }
          `}</style>
        </div>
      </div>
    </section>
  </div>
);



const About = () => (
  
  <div className="bg-[#E1DFD9] w-full">
    <Header />
    {/* Who We Are Section */}
    <div className="flex flex-col md:flex-row items-center justify-center px-6 py-12 max-w-6xl mx-auto space-y-8 md:space-y-0 md:space-x-12 h-auto md:h-screen">
      {/* Text Left */}
      <div className="w-full md:w-1/2 text-left">
        <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Instrument Serif, serif' }}>
          Who we are
        </h1>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed" style={{ fontFamily: 'Newsreader, serif' }}>
          Powered by cutting-edge computer vision technology, our products aim to efficiently categorize waste into distinct categories with a 0% chance of human error.
          <br /><br />
          In the United States, we discard 79% of recyclable items each year. This statistic highlights not only the volume of waste we produce but also the extent of our reduced recycling efforts.
          <br /><br />
          The US Environmental Protection Agency’s (EPA) goal is to achieve a 50% recycling rate by 2050, and at Reverra, we strive to exceed that target significantly.
          <br /><br />
          From campuses to cities, our vision is simple: eliminate confusion, reduce contamination, and transform every disposal into a step towards a cleaner planet.
        </p>
      </div>

      {/* Image Right */}
      <div className="w-full md:w-1/2">
        <img src="/bottle_caps.jpg" alt="About Reverra" className="rounded-lg shadow-md w-full h-auto" />
      </div>
    </div>

    {/* Founder Section */}
    <div className="flex flex-col md:flex-row items-center justify-center px-6 py-12 max-w-6xl mx-auto space-y-8 md:space-y-0 md:space-x-12 h-auto">
      {/* Text Left */}
      <div className="w-full md:w-1/2 text-left">
        <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Instrument Serif, serif' }}>
          Meet the Founder
        </h2>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed" style={{ fontFamily: 'Newsreader, serif' }}>
          Hi! I’m Aayush Narang — a computer science and finance student at Virginia Tech and the founder of Reverra.
          <br /><br /> 
          I started this project after noticing how often people (me included!) were unsure about which bin to use — and how much recyclable material was ending up in the wrong place, and that simple observation evolved into a mission.
        <br /><br />
          Reverra was founded on the belief that waste should never be a guessing game. Whether it’s a student in a university dining hall or a visitor in a public space, our technology eliminates confusion at the bin — replacing hesitation with certainty.
        <br /><br />
          I believe sustainability should be simple, intuitive, and supported by smart technology. At Reverra, I aim to combine computer vision and environmental impact to help universities and cities reduce contamination and build cleaner habits — one bin at a time.
        <br /><br />
          Our goal is to equip every public space — campuses, airports, cities — with smart systems that turn everyday actions into environmental wins.
        </p>
      </div>

      {/* Image Right */}
      {/* Image Right with LinkedIn */}
<div className="w-full md:w-1/2 flex flex-col items-center">
  {/* Profile Image */}
  <img
    src="/founder.jpeg"
    alt="Aayush Narang"
    className="rounded-full shadow-md w-48 h-48 object-cover mb-4"
  />

  {/* LinkedIn Icon with Link */}
  <a
    href="https://www.linkedin.com/in/aayush-narang10"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:opacity-80 transition-opacity duration-200"
  >
    <img
      src="/linkedin_logo.png"
      alt="LinkedIn Icon"
      className="h-6 w-6"
    />
  </a>
</div>

    </div>
  </div>
);

const Services = () => (
  <div className="relative bg-[#E1DFD9] min-h-screen w-full flex flex-col justify-start items-center pt-[12%] px-4 text-center">
    <Header />
    <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Instrument Serif, serif' }}>
      Our Services
    </h1>
    <p className="text-lg text-gray-600" style={{ fontFamily: 'Newsreader, serif' }}>Coming soon...</p>
  </div>
);

const Contact = () => (
  <div className="relative bg-[#E1DFD9] min-h-screen w-full flex flex-col justify-start items-center pt-[12%] px-4 text-center">
    <Header />
    <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Instrument Serif, serif' }}>
      Contact Us
    </h1>
    <p className="text-lg text-gray-600" style={{ fontFamily: 'Newsreader, serif' }}>
      We're happy to connect. Reach out at our linkedin in the footer!
    </p>
  </div>
);

function App() {
  return (
    <Router>
        {/* Header */}
        {/* <header className="p-3 shadow-md flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0 sm:space-x-6" style={{ backgroundColor: '#27532F' }}>
          <img src="/transparent_logo.png" alt="Reverra Logo" className="h-16" />
            <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-10 text-sm sm:text-base" style={{ fontFamily: 'Newsreader, serif' }}>
              <Link to="/" className="font-medium" style={{ color: '#F8F6D0' }}>Home</Link>
              <Link to="/about" className="font-medium" style={{ color: '#F8F6D0' }}>About</Link>
              <Link to="/services" className="font-medium" style={{ color: '#F8F6D0' }}>Services</Link>
              <Link to="/contact" className="font-medium" style={{ color: '#F8F6D0' }}>Contact</Link>
            </nav>
        </header> */}
      <div className="min-h-screen font-sans text-gray-800">

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* Footer */}
        <footer className="bg-gray-100 p-10 text-center">
          <a
            href="https://www.linkedin.com/company/reverra/about/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center space-x-2">
            <img src="/linkedin_logo.png" alt="LinkedIn" className="mx-auto h-6 w-6" />
          </a>
        </footer>

      </div>
    </Router>
  );
}

export default App;
