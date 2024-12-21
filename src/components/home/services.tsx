import Link from "next/link";

export const Services = () => {
    return (
        <section className="h-screen w-full flex flex-col justify-center items-center bg-gray-700 text-white">
            <h1 className="text-4xl font-bold fade-in">Our Services</h1>
            <p className="text-lg fade-in">Bridging innovation and expertise to bring your ideas to life.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <div className="bg-gray-600 p-4 fade-in rounded">
                    <Link href="/engineering-design" className="block">
                        <button className="w-full bg-black-600 text-white p-1 rounded text-xl font-bold hover:bg-white-700 transition">
                            Engineering & Design
                        </button>
                    </Link>
                    <p className="fade-in">High-quality product renders, technical drawings, and engineering simulations tailored to your needs.</p>
                </div>
                <div className="bg-gray-600 p-4 fade-in rounded">
                    <Link href="/web-app-development" className="block">
                        <button className="w-full bg-black-600 text-white p-1 rounded text-xl font-bold hover:bg-white-700 transition">
                            Web & App Development
                        </button>
                    </Link>
                    <p className="fade-in">Custom websites and mobile apps designed for functionality, aesthetics, and seamless user experiences.</p>
                </div>
                <div className="bg-gray-600 p-4 fade-in rounded">
                    <Link href="/consultancy-solutions" className="block">
                        <button className="w-full bg-black-600 text-white p-1 rounded text-xl font-bold hover:bg-white-700 transition">
                            Consultancy & Custom Solutions
                        </button>
                    </Link>
                    <p className="fade-in">Expert guidance for technical challenges, feasibility assessments, and bespoke project solutions.</p>
                </div>
            </div>
        </section>
    );
};
