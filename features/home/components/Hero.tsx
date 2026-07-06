import HeroCarousel from "./HeroCarousel";

const Hero = () => {
    return (
         <section className="w-full flex flex-col items-center justify-center text-center py-24 px-6">
      <HeroCarousel />

      <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
        TWST Team Builder
      </h1>
      <p className="text-text-secondary text-lg max-w-xl mb-8">
        Monte, organize e teste seus times de cartas do Twisted Wonderland em um só lugar.
      </p>

       
    </section>
  );
}

export default Hero;