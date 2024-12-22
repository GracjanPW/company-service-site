export const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white p-8">
            {/* Top Section: Contact Information */}
            <div className="container mx-auto text-center md:text-left mb-8 border-b border-gray-700 pb-4">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-4">
                    <div>
                        <h3 className="font-bold text-lg">Contact Us</h3>
                        <p>Email: <a href="mailto:fusionworkss2024@gmail.com" className="hover:underline">fusionworkss2024@gmail.com</a></p>
                        <p>Phone: <a href="tel:+1234567890" className="hover:underline">+1 (234) 567-890</a></p>
                    </div>
                    <div className="space-x-4">
                        <a href="https://www.facebook.com/ourcompany" target="_blank" rel="noopener noreferrer" className="hover:underline">Facebook</a>
                        <a href="https://www.twitter.com/ourcompany" target="_blank" rel="noopener noreferrer" className="hover:underline">Twitter</a>
                        <a href="https://www.linkedin.com/company/fusionworkss/" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
                    </div>
                </div>
            </div>

            {/* Middle Section: Column Layout */}
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
                {/* Column 1: Our Products */}
                <div>
                    <h3 className="font-bold text-lg mb-2">Our Products</h3>
                    <ul className="space-y-1">
                        <li><a href="/products/product1" className="hover:underline">Product Rendering</a></li>
                        <li><a href="/products/product2" className="hover:underline">Technical drawings</a></li>
                        <li><a href="/products/product3" className="hover:underline">Web development</a></li>
                        <li><a href="/products/product4" className="hover:underline">App development</a></li>
                    </ul>
                </div>

                {/* Column 2: For Our Clients */}
                <div>
                    <h3 className="font-bold text-lg mb-2">Our Clients</h3>
                    <ul className="space-y-1">
                        <li><a href="/clients/solutions" className="hover:underline">Local stores</a></li>
                        <li><a href="/clients/support" className="hover:underline">Start ups</a></li>
                    </ul>
                </div>

                {/* Column 3: Past Projects */}
                <div>
                    <h3 className="font-bold text-lg mb-2">Past Projects</h3>
                    <ul className="space-y-1">
                        <li><a href="/projects/project1" className="hover:underline">Project 1</a></li>
                        <li><a href="/projects/project2" className="hover:underline">Project 2</a></li>
                        <li><a href="/projects/project3" className="hover:underline">Project 3</a></li>
                        <li><a href="/projects/project4" className="hover:underline">Project 4</a></li>
                    </ul>
                </div>

                {/* Column 4: Community & Blog */}
                <div>
                    <h3 className="font-bold text-lg mb-2">Community & Blog</h3>
                    <ul className="space-y-1">
                        <li><a href="/community/events" className="hover:underline">Events</a></li>
                        <li><a href="/blog/latest" className="hover:underline">Latest Blog Posts</a></li>
                        <li><a href="/blog/news" className="hover:underline">Company News</a></li>
                    </ul>
                </div>
            </div>

            {/* Bottom Section: Copyright */}
            <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
                &copy; {new Date().getFullYear()} Our Company. All Rights Reserved.
            </div>
        </footer>
    );
};
