import React from "react";

const Contact: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      {/* Page Title */}
      <h1 className="text-3xl font-bold mb-4 text-center text-yellow-800">
        Contact Me
      </h1>

      {/* Intro text */}
      <p className="text-yellow-900 text-center mb-10 max-w-xl mx-auto">
        Have a question or want to schedule a session? Feel free to reach out
        and I’ll get back to you as soon as possible.
      </p>

      {/* Contact Form */}
      <form className="bg-orange-50 border border-yellow-200 shadow-sm rounded-lg p-8 space-y-6">
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium mb-1 text-yellow-900"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Your full name"
            className="w-full rounded-md px-3 py-2 bg-white border border-yellow-300
                       focus:outline-none focus:ring-2 focus:ring-teal-700"
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium mb-1 text-yellow-900"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            className="w-full rounded-md px-3 py-2 bg-white border border-yellow-300
                       focus:outline-none focus:ring-2 focus:ring-teal-700"
          />
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium mb-1 text-yellow-900"
          >
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            placeholder="Write your message here..."
            className="w-full rounded-md px-3 py-2 bg-white border border-yellow-300
                       focus:outline-none focus:ring-2 focus:ring-teal-700"
          />
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="w-full bg-teal-800 text-orange-50 py-2 rounded-md
                     hover:bg-teal-700 transition font-medium"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
