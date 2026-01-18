import React from 'react';
import Header from '../components/Header';
import backgroundImage from '../assets/images/bkcontact.jpg';

function Contact() {
  return (
    <div>
      <Header />

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Hero Image */}
        <div
          style={{
            height: '50vh',
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        {/* Contact Form */}
        <div
          style={{
            padding: '20px',
            maxWidth: '600px',
            margin: '0 auto',
            flex: '1',
          }}
        >
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-pink-800">
            Contact Us
          </h2>

          <p className="mb-8 font-light text-center text-gray-500 sm:text-xl">
            Looking for insights into the current job market? Need information
            about job openings in various industries? We're here to help.
          </p>

          {/* NETLIFY FORM */}
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            className="space-y-8"
          >
            {/* REQUIRED hidden field */}
            <input type="hidden" name="form-name" value="contact" />

            <div>
              <label className="block mb-2 text-sm font-medium text-yellow-500">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="name@xyz.com"
                className="block w-full p-2.5 border rounded-lg"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-yellow-500">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Let us know what to call you.."
                className="block w-full p-2.5 border rounded-lg"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-yellow-500">
                Your Message
              </label>
              <textarea
                name="message"
                rows="6"
                required
                placeholder="Enter your message..."
                className="block w-full p-2.5 border rounded-lg"
              />
            </div>

            <button
              type="submit"
              className="py-3 px-6 text-white bg-primary-700 rounded-lg hover:bg-primary-800"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
