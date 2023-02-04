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
    </form>
  );
};

export default ContactForm;
