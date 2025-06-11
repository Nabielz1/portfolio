import React, { useState } from "react";
import "../App.css"; // Import Tailwind CSS styles

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission logic (e.g., call API, show a confirmation)
    console.log("Form data submitted:", formData);
    alert("Your message has been sent!");
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gray-100">
      <h2 className="text-3xl font-semibold mb-6 text-center">Contact</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <div className="mb-6">
            <i className="fas fa-envelope text-2xl text-gray-600"></i>
            <h3 className="text-xl font-semibold">Email</h3>
            <p className="text-gray-600">rifqiiakbar12@gmail.com</p>
          </div>
          <div>
            <i className="fas fa-map-marker-alt text-2xl text-gray-600"></i>
            <h3 className="text-xl font-semibold">Location</h3>
            <p className="text-gray-600">Salatiga, Jawa Tengah, Indonesia</p>
          </div>
        </div>

        <div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="text-gray-600">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border rounded-md"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="text-gray-600">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border rounded-md"
                required
              />
            </div>
            <div>
              <label htmlFor="subject" className="text-gray-600">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-3 border rounded-md"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="text-gray-600">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border rounded-md"
                rows="4"
                required
              ></textarea>
            </div>
            <button type="submit" className="w-full py-3 bg-gray-950 text-white rounded-md">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
