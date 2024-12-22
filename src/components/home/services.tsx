import Link from "next/link";

export const Services = () => {
  return (
    <section className="h-screen w-full flex flex-col justify-center items-center bg-gray-700 text-white p-20">
      <h1 className="text-4xl font-bold fade-in">Our Services</h1>
      <p className="text-lg fade-in text-center">
        Bridging innovation and expertise to bring your ideas to life.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-8 text-center lg:text-left">
        <div
          className="fade-in rounded"
          style={{
            backgroundImage: "url('/service-2.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="bg-black/70 p-4 rounded h-full">
            <Link href="/engineering-design" className="block">
              <button className="w-full bg-black-600 text-white p-1 pb-4 rounded text-xl font-bold hover:bg-white-700 transition">
                Engineering & Design
              </button>
            </Link>
            <p className="fade-in">
              High-quality product renders, technical drawings, and engineering
              simulations tailored to your needs.
            </p>
          </div>
        </div>
        <div
          className="fade-in rounded"
          style={{
            backgroundImage: "url('/service-1.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="bg-black/70 p-4 rounded h-full">
            <Link href="/web-app-development" className="block">
              <button className="w-full bg-black-600 text-white p-1 pb-4 rounded text-xl font-bold hover:bg-white-700 transition">
                Web & App Development
              </button>
            </Link>
            <p className="fade-in">
              Custom websites and mobile apps designed for functionality,
              aesthetics, and seamless user experiences.
            </p>
          </div>
        </div>
        <div
          className="fade-in rounded"
          style={{
            backgroundImage: "url('/service-3.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="bg-black/70 p-4 rounded h-full">
            <Link href="/contact" className="block">
              <button className="w-full bg-black-600 text-white p-1 pb-4 rounded text-xl font-bold hover:bg-white-700 transition">
                Consultancy & Custom Solutions
              </button>
            </Link>
            <p className="fade-in">
              Expert guidance for technical challenges, feasibility assessments,
              and bespoke project solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
