const ContactForm = () => {
  return (
    <>
      <section className="container my-24 px-8 mx-auto">
        <div className="max-w-[1200px] mx-auto lg:px-12">
          <h2 className="text-3xl font-bold mb-8">Contact us</h2>
          <div className="flex gap-12 justify-center">
            <div className="w-[50%] h-96 bg-slate-200 mb-2 rounded-lg">
              Image
            </div>
            <form className="flex-1">
              <div className="form-group mb-6">
                <label className="block text-left mb-2" for="name">
                  Full name
                </label>
                <input
                  type="text"
                  className="form-control block
            w-full
            px-3
            py-3
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-500
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="name"
                  placeholder="Enter your name"
                />
              </div>
              <div className="form-group mb-6">
                <label className="block text-left mb-2" for="email">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control block
            w-full
            px-3
            py-3
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-500
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="form-group mb-6">
                <label className="block text-left mb-2" for="message">
                  Send us a message
                </label>
                <textarea
                  className="
            form-control
            block
            w-full
            px-4
            py-3
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-500
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
          "
                  id="message"
                  rows="5"
                  placeholder="Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="
          w-full
          px-6
          py-4
          bg-red-300
          text-white
          font-medium
          text-md
          text-bold
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-red-300 hover:shadow-lg
          focus:bg-red-400 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-red-500 active:shadow-lg
          transition
          duration-150
          ease-in-out"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
