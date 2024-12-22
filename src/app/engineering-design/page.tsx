export default function Webappdevelopment() {
    return (
        <>
            <section className="h-screen w-full flex flex-col justify-center space-y-8 items-center bg-gray-300">
                <div className="flex flex-col lg:flex-row justify-center items-center">
                    <h1 className="text-3xl lg:text-6xl font-bold text-gray-800">
                        Engineering & Design
                    </h1>
                </div>
                <div className="flex flex-col lg:flex-row justify-center items-center space-x-8">
                    <div className="p-4 bg-gray-100 rounded-md flex flex-col items-center space-y-4 text-center lg:text-left">
                        <p className="text-2xl p-4 font-bold text-gray-800 bg-slate-300 rounded-md">
                            Product Rendering
                        </p>
                        <p className="text-gray-500 font-semibold p-2">
                            Package includes:
                        </p>
                        <ul className="list-disc text-gray-500 font-semibold p-2">
                            <li>4K image quality</li>
                            <li>Realistic material simulation</li>
                            <li>Appropriate background</li>
                            <li>10 different images</li>
                        </ul>
                        <button className="bg-gray-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 w-full">
                            Starting at £35
                        </button>
                    </div>
                    <div className="p-4 bg-gray-100 rounded-md flex flex-col items-center space-y-4 text-center lg:text-left">
                        <p className="text-2xl p-4 font-bold text-gray-800 bg-slate-300 rounded-md">
                            Product Animation
                        </p>
                        <p className="text-gray-500 font-semibold p-2">
                            Package includes:
                        </p>
                        <ul className="list-disc text-gray-500 font-semibold p-2">
                            <li>Fluid camera/component motions</li>
                            <li>Perfect for ads</li>
                            <li>SoundTrack and legends can be used</li>
                            <li>4K</li>
                        </ul>
                        <button className="bg-gray-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 w-full">
                            Starting at £65
                        </button>
                    </div>
                    <div className="p-4 bg-gray-100 rounded-md flex flex-col items-center space-y-4 text-center lg:text-left">
                        <p className="text-2xl p-4 font-bold text-gray-800 bg-slate-300 rounded-md">
                            Product Design
                        </p>
                        <p className="text-gray-500 font-semibold p-2">
                            Package includes:
                        </p>
                        <ul className="list-disc text-gray-500 font-semibold p-2">
                            <li>3D file for client</li>
                            <li>Engineering drawings</li>
                            <li>Ready for manufacturing</li>
                            <li>Can include manufacturing: additional cost</li>
                        </ul>
                        <button className="bg-gray-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 w-full">
                            Starting at £60
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}

