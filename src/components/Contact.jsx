import React, { useState } from "react";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Handle form submission logic here...
  };

  return (
    <section id="contact" className="py-16 bg-white text-gray-900">
      <h2 className="text-2xl font-bold mb-4 text-center">CONTACT</h2>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
        <input type="text" placeholder="Your Name" required className="w-full p-3 mb-4 border rounded-md" />
        <input type="email" placeholder="Your Email" required className="w-full p-3 mb-4 border rounded-md" />
        <textarea placeholder="Your Message" required className="w-full p-3 mb-4 border rounded-md"></textarea>
        <button type="submit" className={`w-full p-3 text-white rounded-md ${isSubmitting ? "bg-gray-500" : "bg-blue-500"}`}>
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
};

export default Contact;
