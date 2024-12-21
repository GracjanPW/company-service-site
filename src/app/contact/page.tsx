export default function ContactPage() {
    return (
        <div>
            <section className="text-center ">
                <h1 className="text-4xl font-bold">Contact Us</h1>
                <p className="text-lg">Get in touch with us</p>
                <form className="space-y-4">
                    <input
                        type="text"
                        placeholder="Name"
                        className="w-full p-2 border border-gray-300"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full p-2 border border-gray-300"
                    />
                    <textarea
                        placeholder="Message"
                        className="w-full p-2 border border-gray-300"
                    ></textarea>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white p-2 rounded"
                    >
                        Submit
                    </button>
                </form>
            </section>
        </div>
    );
}
