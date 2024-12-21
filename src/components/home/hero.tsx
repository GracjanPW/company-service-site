
export const Hero = () => {

  return (
    <section className="hero-section h-screen w-full flex flex-col justify-center items-center text-center text-white">
      <div className="bg-black bg-opacity-50 h-full w-full flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-6xl font-bold mb-4 fade-in">
          Welcome to Our Company
        </h1>
        <p className="text-2xl mb-8 fade-in">We provide the best services</p>
        <a
          href="#services"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded fade-in"
        >
          Learn More
        </a>
      </div>
    </section>
  );
};
