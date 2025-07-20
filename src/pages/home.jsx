import { useEffect, useState } from 'react';
import Header from '../components/Header';
import BlurText from '../components/BlurText/BlurText';
import InfiniteScroll from '../components/InfiniteScroll/InfiniteScroll';
import { useInView } from 'react-intersection-observer';

const facts = [
  { content: "Recycling is a $200 billion industry in the U.S." },
  { content: "The global average carbon footprint is 4 tons/year. The average in the U.S is 16 tons." },
  { content: "Americans throw away 2.5 million plastic bottles every hour" },
  { content: "Glass can be recycled and re-manufactured an infinite amount of times and never wear out." },
  { content: "Recycling 1 ton of cardboard saves 46 gallons of oil." },
  { content: "33 billion pounds of plastic enters the marine environment every single year." },
];

const Home = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowText(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const { ref: factsRef, inView: showFacts } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <div className="relative w-full min-h-screen max-w-[100vw] overflow-x-hidden bg-cover bg-center bg-no-repeat bg-fixed" style={{ backgroundImage: "url('/website_background_image.jpg')" }}>
      
      {/* 🔧 Semi-transparent dark overlay across whole page */}
      <div className="absolute inset-0 bg-black bg-opacity-40 -z-10" />

      {/* Hero Section */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center text-[#F8F6D0] px-4">
        <Header showLogo={true} logoType="transparent" />

        <div className={`flex-1 flex items-center justify-center text-center transition-all duration-1000 ease-in-out ${showFacts ? 'opacity-0 -translate-y-10' : 'opacity-100 translate-y-0'}`}>
          {showText && (
            <BlurText
              text="Revolutionizing the world’s waste disposal streams towards the goal of a cleaner planet."
              delay={100}
              startDelay={0}
              animateBy="words"
              direction="top"
              className="text-3xl md:text-5xl font-semibold max-w-4xl leading-tight mb-10 justify-center"
              style={{ fontFamily: 'Instrument Serif, serif' }}
            />
          )}
        </div>
      </section>

      {/* Infinite Scroll Facts Section */}
      <section
        ref={factsRef}
        className="min-h-[100vh] flex items-center justify-center text-center px-4 text-[#F8F6D0]"
      >
        <div className={`transition-all duration-1000 ease-in-out ${showFacts ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <InfiniteScroll
            items={facts}
            isTilted={true}
            tiltDirection="left"
            autoplay={true}
            autoplaySpeed={0.5}
            autoplayDirection="down"
            pauseOnHover={true}
          />
        </div>
      </section>
    </div>
  );
};

export default Home;