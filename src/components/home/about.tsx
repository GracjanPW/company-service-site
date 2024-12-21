export const About = () => {
  return (
    <section className="h-screen w-full flex justify-center items-center bg-gray-100">
      <div className="flex flex-col lg:flex-row justify-center items-center">
        <div className="aspect-square rounded-md overflow-hidden">
            <img 
                src="https://picsum.photos/200"
                alt="About Us"
                style={{
                    objectFit: 'fill',
                    objectPosition: 'center',
                    position: 'relative',
                }}
            /> 
        </div>
        <div>
            <h1 className="text-4xl font-bold fade-in text-gray-800">About Us</h1>
            <div className="grow">
                <p className="mt-4 fade-in text-gray-700 text-sm">
                Welcome to our consultancy! Miguel, a mechanical engineer with a knack for product renders<br/>
                and technical solutions, and Grace, a computer scientist passionate about websites and apps.<br/>
                Having met at university and recently graduated,<br/>
                we blend engineering precision with innovative technology. From 3D renders to user-friendly digital experiences,<br/> 
                our commitment to excellence shines through in every project.<br/>
                </p>
                <p className="mt-2 fade-in text-gray-700">
                    Let us help you transform ideas into reality. Together, we can create something extraordinary.
                </p>
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 fade-in">
                Read more
            </button>
        </div>

      </div>
    </section>
  );
};
