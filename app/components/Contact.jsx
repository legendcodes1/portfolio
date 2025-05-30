import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "637ce034-73ef-4a35-a815-3ccf0fc28a22");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div
      id="contact"
      className="w-full px-4 md:px-[12%] py-16 scroll-mt-20 bg-black text-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="inline-block px-4 py-1 mb-4 text-sm font-medium text-cyan-300 bg-cyan-900/30 rounded-full">
            Connect with me
          </span>

          <h2
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-6"
            style={{ fontFamily: "var(--font-secondary)" }}
          >
            Get in touch
          </h2>

          <p
            className="text-gray-300 max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-secondary)" }}
          >
            I'd love to hear from you! If you have any questions, inquiries, or
            even want to work on projects together, feel free to contact me down
            below.
          </p>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <div className="p-6 md:p-8 rounded-xl bg-gray-900/50 border border-gray-800 backdrop-blur-sm">
            <form onSubmit={onSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Name Input */}
                <div className="w-full">
                  <label
                    className="block text-sm font-medium text-gray-300 mb-2"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors outline-none"
                    placeholder="Your name"
                  />
                </div>

                {/* Email Input */}
                <div className="w-full">
                  <label
                    className="block text-sm font-medium text-gray-300 mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors outline-none"
                    placeholder="Your email"
                  />
                </div>
              </div>

              {/* Subject Input */}
              <div className="mb-6">
                <label
                  className="block text-sm font-medium text-gray-300 mb-2"
                  htmlFor="subject"
                >
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors outline-none"
                  placeholder="What is this regarding?"
                />
              </div>

              {/* Message Input */}
              <div className="mb-6">
                <label
                  className="block text-sm font-medium text-gray-300 mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  required
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors outline-none resize-none"
                  placeholder="Your message"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-medium hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 transform hover:scale-105"
                >
                  <span className="flex items-center justify-center gap-2">
                    Submit Now
                    <Image
                      src={assets.send_icon}
                      alt="Submit"
                      className="w-4 h-4 filter brightness-0 invert"
                      width={16}
                      height={16}
                    />
                  </span>
                </button>

                {/* Form Result Message */}
                {result && (
                  <span
                    className={`text-sm ${
                      result.includes("Success")
                        ? "text-green-400"
                        : "text-cyan-300"
                    } ml-4`}
                  >
                    {result}
                  </span>
                )}
              </div>
            </form>
          </div>
        </div>

        {/* Contact Info Cards */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"> */}
        {/* Email Card */}
        {/* <div className="flex items-start gap-4 p-6 rounded-xl bg-gray-900/30 border border-gray-800 backdrop-blur-sm">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30">
              <Image
                src={assets.mail_icon}
                alt="Email"
                className="w-5 h-5 filter brightness-0 invert"
                width={20}
                height={20}
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
              <p className="text-gray-300">olafaruq1@gmail.com</p>
              <a
                href="mailto:olafaruq1@gmail.com"
                className="mt-2 inline-block text-sm text-cyan-400 hover:text-cyan-300"
              >
                Send an email
              </a>
            </div>
          </div> */}

        {/* Location Card */}
        {/* <div className="flex items-start gap-4 p-6 rounded-xl bg-gray-900/30 border border-gray-800 backdrop-blur-sm">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30">
              <Image
                src={
                  assets.location_icon || assets.pin_icon || assets.mail_icon
                } // Fallback to mail_icon if location_icon doesn't exist
                alt="Location"
                className="w-5 h-5 filter brightness-0 invert"
                width={20}
                height={20}
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-1">
                Location
              </h3>
              <p className="text-gray-300">Remote / Global</p>
            </div>
          </div> */}

        {/* Social Card */}
        {/* <div className="flex items-start gap-4 p-6 rounded-xl bg-gray-900/30 border border-gray-800 backdrop-blur-sm">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30">
              <Image
                src={assets.social_icon || assets.link_icon || assets.mail_icon} // Fallback to mail_icon if social_icon doesn't exist
                alt="Social"
                className="w-5 h-5 filter brightness-0 invert"
                width={20}
                height={20}
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-1">Social</h3>
              <div className="flex gap-3 mt-2">
                <a
                  href="#"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  <span className="sr-only">GitHub</span>
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
          </div> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Contact;
