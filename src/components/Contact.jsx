import { useEffect, useRef } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Swal from 'sweetalert2'; 
import "../App.css"; 

function Contact() {
  const [state, handleSubmit] = useForm("xeokbgeb");
  const formRef = useRef(); 

  useEffect(() => {
    if (state.succeeded) {
      Swal.fire({
        title: "Message Sent!",
        text: "Thanks for your message! I'll get back to you soon.",
        icon: "success",
        confirmButtonColor: '#0f172a', 
        confirmButtonText: 'OK'
      });
      formRef.current.reset(); 
    }
  }, [state.succeeded]);

  return (
    <section 
      id="contact" 
      className="bg-white px-6 py-16 sm:px-12 md:px-24 lg:py-20"
    >
      <div className="container mx-auto">
        <h2 className="mb-12 text-center text-3xl font-semibold lg:text-left">
          <span className="inline-block border-b-4 border-black pb-1">
            Contact
          </span>
        </h2>
        
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <div className="flex flex-col gap-8">
            <div className="flex items-start gap-4">
              <i className="fas fa-envelope mt-1 w-6 text-center text-2xl text-gray-600"></i>
              <div>
                <h3 className="text-xl font-semibold">Email</h3>
                <p className="break-all text-gray-600">
                  rifqiiakbar12@gmail.com
                </p>
              </div>
            </div>
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

          {/* Form Column */}
          <div>
            {/* 4. Attach the ref to the form */}
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="text-gray-600">Name</label>
                <input
                  type="text" id="name" name="name"
                  className="w-full rounded-md border p-3" required
                />
                <ValidationError 
                  prefix="Name" 
                  field="name"
                  errors={state.errors}
                  className="text-red-500 text-sm"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-gray-600">Email</label>
                <input
                  type="email" id="email" name="email"
                  className="w-full rounded-md border p-3" required
                />
                <ValidationError 
                  prefix="Email" 
                  field="email"
                  errors={state.errors}
                  className="text-red-500 text-sm"
                />
              </div>
              <div>
                <label htmlFor="subject" className="text-gray-600">Subject</label>
                <input
                  type="text" id="subject" name="subject"
                  className="w-full rounded-md border p-3" required
                />
                <ValidationError 
                  prefix="Subject" 
                  field="subject"
                  errors={state.errors}
                  className="text-red-500 text-sm"
                />
              </div>
              <div>
                <label htmlFor="message" className="text-gray-600">Message</label>
                <textarea
                  id="message" name="message"
                  className="w-full rounded-md border p-3" rows="4" required
                ></textarea>
                <ValidationError 
                  prefix="Message" 
                  field="message"
                  errors={state.errors}
                  className="text-red-500 text-sm"
                />
              </div>
              <button type="submit" disabled={state.submitting} className="w-full rounded-md bg-gray-950 py-3 text-white transition hover:bg-gray-800 disabled:bg-gray-400">
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