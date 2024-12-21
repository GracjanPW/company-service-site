export const Services = () => {
    return (
        <section className="h-screen w-full flex flex-col justify-center items-center bg-gray-700 text-white">
            <h1 className="text-4xl font-bold fade-in">Our Services</h1>
            <p className="text-lg fade-in">We provide the best services</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <div className="bg-gray-600 p-4 fade-in rounded">
                    <h2 className="text-xl font-bold fade-in">Service 1</h2>
                    <p className="fade-in">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="bg-gray-600 p-4 fade-in rounded">
                    <h2 className="text-xl font-bold fade-in">Service 2</h2>
                    <p className="fade-in">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="bg-gray-600 p-4 fade-in rounded">
                    <h2 className="text-xl font-bold fade-in">Service 3</h2>
                    <p className="fade-in">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
        </section>
    );
}