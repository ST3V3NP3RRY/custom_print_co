const ContactForm = () => {
  return (
    <form>
      <h2>Contact Us</h2>
      <label for="name">Enter your name</label>
      <input type="text" id="name" name="name" placeholder="Your Name" />

      <label for="email">Enter your email</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="yourname@email.com"
      />

      <label for="message">Send us a message</label>
      <textarea id="message" name="message" placeholder="Your message..." />
      <button
        type="submit"
        class="md:w-32 bg-red-400 hover:bg-red-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-red-500 transition ease-in-out duration-300"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
