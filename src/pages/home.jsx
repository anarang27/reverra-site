import { useEffect, useState } from 'react';
import Header from '../components/Header';
import BlurText from '../components/BlurText/BlurText';

const Home = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowText(true), 1500); // Delay before showing text
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <section className="relative w-full h-screen">
        {/* Background Image */}
        <img
          src="/website_background_image.jpg"
          alt="Reverra Hero"
          className="object-cover w-full h-full"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center px-4 text-[#F8F6D0]">
          <Header />

          {/* Main Headline */}
          <div className="flex-1 flex items-center justify-center text-center">
            {showText && (
              <BlurText
                text="Revolutionizing the world’s waste disposal streams towards the goal of a cleaner planet."
                delay={100}
                startDelay={0} // internal animation delay; actual reveal is handled by `showText`
                animateBy="words"
                direction="top"
                className="text-3xl md:text-5xl font-semibold max-w-4xl leading-tight mb-10 justify-center"
                style={{ fontFamily: 'Instrument Serif, serif' }}
              />
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;