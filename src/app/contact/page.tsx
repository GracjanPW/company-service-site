import { sendEmail } from "@/actions/sendEmail";

export default function ContactPage() {
  return (
    <section className="h-screen w-full flex flex-col justify-center items-center text-center">
      <h1 className="text-4xl font-bold">Contact Us</h1>
      <p className="text-lg">Get in touch with us</p>
      <form className="space-y-4" action={sendEmail}>
        <input
          name="name"
          type="text"
          placeholder="Name"
          className="w-full p-2 border rounded-md border-gray-300"
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded-md border-gray-300"
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          className="w-full p-2 border rounded-md border-gray-300 min-h-10 max-h-40 h-min"
          required
        ></textarea>
        <button type="submit" className="bg-gray-700 font-bold px-4 text-white p-2 rounded">
          Submit
        </button>
      </form>
    </section>
  );
}
