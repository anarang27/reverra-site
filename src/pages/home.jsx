import Header from '../components/Header';
import BlurText from '../components/BlurText/BlurText';
import { Link } from 'react-router-dom'; // needed for nav links

const Home = () => (
    <div>
        <section className="relative w-full h-screen">
            <img
                src="/website_background_image.jpg"
                alt="Reverra Hero"
                className="object-cover w-full h-full"
            />

            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-start pt-[10%] px-4 text-[#F8F6D0]">

                {/* Logo top-left (larger and spaced more) */}
                <div className="absolute top-6 left-6 z-50">
                    <img
                        src="/transparent_logo.png"
                        alt="Reverra Logo"
                        className="h-28 sm:h-32"
                    />
                </div>

                {/* Nav links (slightly lower and more spread out) */}
                <div
                    className="absolute top-10 right-10 z-50 flex space-x-10 text-[#F8F6D0] font-medium text-lg sm:text-xl"
                    style={{ fontFamily: 'Newsreader, serif' }}
                >
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/contact">Contact</Link>
                </div>

                {/* Main Headline */}
                <BlurText
                    text="Revolutionizing the world’s waste disposal streams toward the goal of a cleaner planet."
                    delay={150}
                    animateBy="words"
                    direction="top"
                    onAnimationComplete={() => console.log('Animation completed!')}
                    className="text-3xl md:text-5xl text-center font-semibold max-w-4xl leading-tight mb-10 mt-16"
                    style={{ fontFamily: 'Instrument Serif, serif' }}
                />
            </div>
        </section>
    </div>
);

export default Home;