
export const Hero = () => {

  return (
    <section className="hero-section h-screen w-full flex flex-col justify-center items-center text-center text-white"
      style={{
        backgroundImage: "url('/back.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-black/70 h-full w-full flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-6xl font-bold mb-4 fade-in">
          Welcome to FusionWorkss
        </h1>
        <p className="text-2xl mb-8 fade-in">At FusionWorks we aim to provide the best services while giving the best customer service possible</p>
        <a
          href="#services"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded fade-in"
        >
          Find out more
        </a>
      </div>
    </section>
  );
};
