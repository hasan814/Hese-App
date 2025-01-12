import { FooterLinks } from "@/utils/FooterLinks";
import { HeaderLinks } from "@/utils/HeaderLink";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border text-white py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">About Positivus</h2>
            <p className="text-gray-400 text-sm">
              Positivus is dedicated to helping businesses grow and succeed
              online. We provide top-notch digital marketing solutions tailored
              to your needs.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              {HeaderLinks.map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(/ /g, "-")}`}
                    className="text-gray-400 hover:text-yellow transition"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              {FooterLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-yellow transition text-xl"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">Stay Updated</h2>
            <form className="flex flex-col space-y-4">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow"
              />
              <button
                type="submit"
                className="bg-yellow text-black px-4 py-2 rounded font-semibold hover:bg-white hover:text-black transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Positivus. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
