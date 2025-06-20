import React, { useState } from "react";
import "../App.css"; // Import Tailwind CSS styles

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  // State baru untuk menampilkan pesan konfirmasi
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    
    // Tampilkan pesan konfirmasi dan reset form
    setIsSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });

    // Sembunyikan pesan setelah beberapa detik
    setTimeout(() => {
      setIsSubmitted(false);
    }, 4000);
  };

  return (
    // --- PERBAIKAN 1: Padding responsif ---
    <section 
      id="contact" 
      className="bg-white px-6 py-16 sm:px-12 md:px-24 lg:py-20"
    >
      <div className="container mx-auto">
        {/* Judul Section yang Responsif */}
        <h2 className="mb-8 text-center text-3xl font-semibold lg:text-left">
          Contact
          <span className="mx-auto mt-2 block h-1 w-20 bg-black lg:mx-0"></span>
        </h2>
        
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          
          {/* Kolom Informasi Kontak */}
          <div className="flex flex-col gap-8">
            {/* Email Section */}
            <div className="flex items-start gap-4">
              <i className="fas fa-envelope mt-1 w-6 text-center text-2xl text-gray-600"></i>
              <div>
                <h3 className="text-xl font-semibold">Email</h3>
                {/* --- PERBAIKAN 2: Email anti-overflow --- */}
                <p className="break-all text-gray-600">
                  rifqiiakbar12@gmail.com
                </p>
              </div>
            </div>
            {/* Location Section */}
            <div className="flex items-start gap-4">
              <i className="fas fa-map-marker-alt mt-1 w-6 text-center text-2xl text-gray-600"></i>
              <div>
                <h3 className="text-xl font-semibold">Location</h3>
                <p className="text-gray-600">
                  Salatiga, Jawa Tengah, Indonesia
                </p>
              </div>
            </div>
          </div>

          {/* Kolom Form */}
          <div>
            {/* --- PERBAIKAN 3: Pesan konfirmasi menggantikan alert() --- */}
            {isSubmitted && (
              <div className="mb-4 rounded-md bg-green-100 p-3 text-center text-green-800">
                Your message has been sent successfully!
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="text-gray-600">Name</label>
                <input
                  type="text" id="name" name="name"
                  value={formData.name} onChange={handleChange}
                  className="w-full rounded-md border p-3" required
                />
              </div>
              <div>
                <label htmlFor="email" className="text-gray-600">Email</label>
                <input
                  type="email" id="email" name="email"
                  value={formData.email} onChange={handleChange}
                  className="w-full rounded-md border p-3" required
                />
              </div>
              <div>
                <label htmlFor="subject" className="text-gray-600">Subject</label>
                <input
                  type="text" id="subject" name="subject"
                  value={formData.subject} onChange={handleChange}
                  className="w-full rounded-md border p-3" required
                />
              </div>
              <div>
                <label htmlFor="message" className="text-gray-600">Message</label>
                <textarea
                  id="message" name="message"
                  value={formData.message} onChange={handleChange}
                  className="w-full rounded-md border p-3" rows="4" required
                ></textarea>
              </div>
              <button type="submit" className="w-full rounded-md bg-gray-950 py-3 text-white transition hover:bg-gray-800">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;