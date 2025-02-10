
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Inspiring Statement</h3>
          <p>
            Join us in creating a smarter, more independent generation by
            connecting students with real-world opportunities!
          </p>
        </div>

        {/* Middle Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/explore-gigs" className="hover:text-gray-400">
                Explore Gigs
              </a>
            </li>
            <li>
              <a href="/hire-talent" className="hover:text-gray-400">
                Hire Talent
              </a>
            </li>
            <li>
              <a href="/about-us" className="hover:text-gray-400">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact-us" className="hover:text-gray-400">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Connect With Us</h3>
          <div className="flex space-x-4 mb-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              title="Facebook"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook fa-lg"></i>
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              title="instagram"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram fa-lg"></i>
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              title="twitter"
              rel="noopener noreferrer"
            >
              <i className="fab fa-x-twitter fa-lg"></i>
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              title="linkedin"
            >
              <i className="fab fa-linkedin fa-lg"></i>
            </a>
          </div>
          <form className="flex flex-col">
            <label htmlFor="newsletter" className="mb-2">
              Subscribe to our Newsletter
            </label>
            <div className="flex">
              <input
                type="email"
                id="newsletter"
                placeholder="Your email"
                className="p-2 flex-1 rounded-l-md text-black bg-gray-100"
              />
              <button
                type="submit"
                className="bg-blue-500 px-4 py-2 rounded-r-md hover:bg-blue-600"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Call-to-Action */}
      <div className="text-center mt-10">
        <button className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600">
          Get Started
        </button>
      </div>

      {/* Horizontal Line */}
      <div className="mt-10 border-t border-gray-700"></div>

      {/* Copyright Section */}
      <div className="mt-4 text-center text-sm">
        <p>
          &copy; {new Date().getFullYear()} Job Portal. All Rights Reserved.
        </p>
        <p className="pt-2">powered by exmedia</p>
      </div>
    </footer>
  );
};

export default Footer;
