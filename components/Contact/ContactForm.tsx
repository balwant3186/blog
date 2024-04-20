const ContactForm = () => {
  return (
    <section className="mx-auto my-8 rounded-md bg-gray-100 w-[90%] max-w-3xl p-4 shadow-md text-2xl">
      <h1 className="text-3xl my-4 text-left md:text-6xl md:text-center">
        How can I help you?
      </h1>

      <form>
        <div className="flex gap-4 flex-wrap">
          <div className="flex-1 min-w-40">
            <label className="block font-bold mt-2 mb-1" htmlFor="email">
              Email
            </label>
            <input
              className="p-1 rounded-md w-full border border-gray-400 bg-gray-50"
              type="email"
              id="email"
              required
            />
          </div>

          <div className="flex-1 min-w-40">
            <label className="block font-bold mt-2 mb-1" htmlFor="name">
              Name
            </label>
            <input
              className="p-1 rounded-md w-full border border-gray-400 bg-gray-50"
              type="text"
              id="name"
              required
            />
          </div>
        </div>

        <div>
          <label className="block font-bold mt-2 mb-1" htmlFor="message">
            Message
          </label>
          <textarea
            className="p-1 rounded-md w-full border border-gray-400 bg-gray-50 resize-none"
            id="message"
            rows={5}
            required
          ></textarea>
        </div>

        <div className="mt-4 text-right">
          <button
            type="submit"
            className="cursor-pointer bg-fuchsia-700 border px-4 py-2 rounded-md text-fuchsia-50 shadow-md hover:bg-fuchsia-500 hover:border-fuchsia-500"
          >
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
};
export default ContactForm;
