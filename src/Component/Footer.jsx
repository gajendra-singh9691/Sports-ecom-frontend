import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const ContactForm = () => {
  return (
    <div className="bg-black  flex flex-col">

      <div className="flex-1 flex flex-col justify-start items-center">
        <div className="w-full md:w-3/4  mt-12 px-4 flex items-center flex-col">
          <h2 className="text-center text-2xl md:text-7xl font-medium text-white mb-8 max-w-2xl">
            Have A Query? Let Us Know Here!
          </h2>
          <form className="flex flex-col gap-4 w-full md:w-3/4">
            <div>
              <label htmlFor="name" className="block text-sm text-gray-400 mb-1">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Add Your Full Name"
                className="w-full border-1 border-gray-300 text-white rounded px-3 py-2 outline-none"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-gray-400 mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Add Your Mail ID"
                className="w-full border-1 border-gray-300  text-white rounded px-3 py-2 outline-none"
                required
              />
            </div>
    
            <div>
              <label htmlFor="query" className="block text-sm text-gray-400 mb-1">
                What's Your Query?
              </label>
              <textarea
                id="query" 
                placeholder="Your Query"
                className="w-full border-1 border-gray-300  text-white rounded px-3 py-2 h-20 resize-y outline-none"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full cursor-pointer text-white rounded py-3 mt-2 font-medium border-1 border-gray-300 transition relative hover:top-[-2px] duration-200"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-7 text-center">
        {/* Connect Us Section */}
        <div className="flex justify-center gap-10 mb-2">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-3xl text-white hover:text-pink-500 transition-colors"
            />
          </a>
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <FontAwesomeIcon
              icon={faWhatsapp}
              className="text-3xl text-white hover:text-green-400 transition-colors"
            />
          </a>
        </div>
        <div className="text-gray-500 text-xs mt-2">
          &copy; 2025 yoursretrohubz. All rights reserved.
        </div>
        <Link to="/admin" className="sticky bottom-0 left-0 bg-white" >Admin</Link>
      </footer>
    </div>
  );
};

export default ContactForm;
