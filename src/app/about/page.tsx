export default function AboutPage() {
    return (
        <section className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800 p-8 py-20">
            <div className="max-w-4xl text-center">
                <h1 className="text-4xl font-bold mb-4">About Us</h1>
                <p className="text-lg mb-6">
                    Welcome to <strong>FusionWorks</strong>, where engineering precision meets technological innovation. Founded by two passionate professionals—Miguel, a skilled mechanical engineer with an eye for detail in product renders and technical solutions, and Grace, a talented computer scientist with a flair for crafting seamless websites and apps.
                </p>
                <p className="text-lg mb-6">
                    With roots in collaborative projects during university, we realized that combining our unique skill sets allows us to bridge the gap between technical accuracy and user-focused digital experiences. At FusionWorks, we are dedicated to helping small businesses and individuals bring their visions to life—whether it's through high-quality 3D modeling, technical drawings, or functional and beautiful digital products.
                </p>
                <p className="text-lg mb-6">
                    Our approach blends creativity with meticulous attention to detail. From designing products that meet exact engineering standards to developing user-friendly web applications, we ensure every project is executed with precision and care.
                </p>
                <p className="text-lg mb-6">
                    We believe in building meaningful relationships with our clients, understanding their needs, and delivering results that exceed expectations. At FusionWorks, your ideas are at the center of everything we do.
                </p>
                <h2 className="text-2xl font-semibold mt-8 mb-4">Why Choose Us?</h2>
                <ul className="text-lg list-disc list-inside mb-6">
                    <li>Innovative solutions tailored to your needs.</li>
                    <li>Expertise in both engineering and web development.</li>
                    <li>Commitment to precision and excellence.</li>
                    <li>Transparent communication and collaboration.</li>
                    <li>Passion for turning ideas into reality.</li>
                </ul>
                <p className="text-lg">
                    Let's create something remarkable together. Reach out to us and let's bring your vision to life.
                </p>
            </div>
        </section>
    );
}
