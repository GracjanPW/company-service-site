export const About = () => {
  return (
    <section className="h-screen w-full flex justify-center items-center bg-gray-100">
      <div className="flex flex-col lg:flex-row justify-center items-center lg:items-stretch lg:space-x-12 max-w-screen-lg">
        <div className="aspect-square rounded-md overflow-hidden w-auto grow hidden lg:block fade-in">
            <img 
                src="https://picsum.photos/200"
                alt="About Us"
                style={{
                    objectFit: 'fill',
                    objectPosition: 'center',
                    position: 'relative',
                }}
                className="aspect-square w-auto h-full"
            /> 
        </div>
        <div className="w-1/2 flex flex-col lg:items-start items-center justify-between space-y-4 text-center lg:text-left py-2">
            <h1 className="text-4xl font-bold fade-in text-gray-800">About Us</h1>
            <div className="m-2">
              <ul className="lg:list-disc space-y-4 text-md text-gray-500 font-semibold">
                <li className="text-wrap fade-in">
                  Welcome to our consultancy! Miguel, a mechanical engineer with a knack for product renders
                  and technical solutions, and Grace, a computer scientist passionate about websites and apps.
                </li>
                <li className="text-wrap fade-in">
                  Having met at university and recently graduated,we blend engineering precision with innovative technology.
                </li>
                <li className="text-wrap fade-in">
                From 3D renders to user-friendly digital experiences, our commitment to excellence shines through in every project.
                </li>
              </ul>

            </div>
            <p className="mt-2 fade-in text-gray-700 font-bold">
                Let us help you transform ideas into reality. Together, we can create something extraordinary.
            </p>
            <a href="/about" className="bg-gray-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 fade-in">
                Read more
            </a>
        </div>
      </div>
    </section>
  );
};
