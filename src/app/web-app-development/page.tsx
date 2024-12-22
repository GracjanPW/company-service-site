import {Noto_Sans} from "next/font/google"

const notoSans = Noto_Sans({
    display: 'swap',
    subsets: ['latin'],
});


export default function Webappdevelopment() {
  return (
    <>
      <section className="h-screen w-full flex flex-col justify-center space-y-12 items-center bg-gray-300">
        <div className="flex flex-col justify-center items-center space-y-2">
          <h1 className={`text-3xl lg:text-6xl font-bold text-gray-800 ${notoSans.className}`}>
            Web Development
          </h1>
          <h2 className="text-xl text-gray-800">
            Bridging innovation and expertise to bring your ideas to life.
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-8 text-center lg:text-left"> 
          <div className="p-4 bg-gray-100 rounded-md flex flex-col justify-between items-left space-y-4 text-center lg:text-left shadow-md">
            <p className="text-2xl p-4 font-bold text-gray-800 bg-slate-300 rounded-md w-full text-center">
              1 Page website
            </p>
            <div className="grow p-1">
              <p className="text-gray-700 font-semibold text-left">
                Package includes:
              </p>
              <ul className="list-disc list-inside text-gray-600 font-semibold p-2 space-y-1">
                <li>Responsive Design</li>
                <li>Mobile Friendly</li>
                <li>SEO Optimized</li>
                <li>Custom Domain</li>
              </ul>
            </div>
            <button className="bg-gray-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 w-full">
              Starting at £50
            </button>
          </div>
          <div className="p-4 bg-gray-100 rounded-md flex flex-col justify-between items-center space-y-4 text-center lg:text-left">
            <p className="text-2xl p-4 font-bold text-gray-800 bg-slate-300 rounded-md w-full text-center">
              5 Page website
            </p>
            <div className="grow">
              <p className="text-gray-700 font-semibold p-2">
                Package includes:
              </p>
              <ul className="list-disc text-gray-500 font-semibold p-2">
                <li>Responsive Design</li>
                <li>Mobile Friendly</li>
                <li>SEO Optimized</li>
                <li>Custom Domain</li>
              </ul>
            </div>
            <button className="bg-gray-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 w-full">
              Starting at £100
            </button>
          </div>
          <div className="p-4 bg-gray-100 rounded-md flex flex-col justify-between items-center space-y-4 text-center lg:text-left">
            <p className="text-2xl p-4 font-bold text-gray-800 bg-slate-300 rounded-md w-full text-center">
              Blog Website
            </p>
            <div className="grow">
              <p className="text-gray-700 font-semibold p-2">
                Package includes:
              </p>
              <ul className="list-disc text-gray-500 font-semibold p-2">
                <li>Responsive Design</li>
                <li>Mobile Friendly</li>
                <li>SEO Optimized</li>
                <li>Custom Domain</li>
              </ul>
            </div>
            <button className="bg-gray-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 w-full">
              Starting at £200
            </button>
          </div>
          <div className="p-4 bg-gray-100 rounded-md flex flex-col justify-between items-center space-y-4 text-center lg:text-left">
            <p className="text-2xl p-4 font-bold text-gray-800 bg-slate-300 rounded-md w-full text-center">
              Web Application
            </p>
            <div className="grow">
              <p className="text-gray-700 font-semibold p-2 text-left">
                Package includes:
              </p>
              <ul className="list-disc text-gray-500 font-semibold p-2">
                <li>Responsive Design</li>
                <li>Mobile Friendly</li>
                <li>SEO Optimized</li>
                <li>Custom Domain</li>
                <li>Custom Admin Panel</li>
                <li>User Authentication</li>
                <li>Database Integration</li>
              </ul>
            </div>
            <button className="bg-gray-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 w-full">
              Starting at £500
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
