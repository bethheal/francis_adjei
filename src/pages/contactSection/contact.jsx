import { Instagram, MapPin, Phone, Mail, Globe, Download, MailCheck } from "lucide-react";
import { f1, f2, f3, f4, f5, f6 } from "../../assets";

const Contact = () => {
  const socialLinks = [
    "https://www.instagram.com/company1",
    "https://www.instagram.com/company2",
    "https://www.instagram.com/company3",
    "https://www.instagram.com/company4",
    "https://www.instagram.com/company5",
    "https://www.instagram.com/company6",
  ];
  const footerImages = [f1, f2, f3, f4, f5, f6];

  return (
    <section id="contact">
      <div>
        <footer className="bg-white dark:bg-gray-900">
          <div className="mx-auto w-full max-w-screen-xl">
            <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
              <div>
                <h4 className="mb-6 text-sm font-bold text-gray-900 uppercase dark:text-orange-500">
                  Company
                </h4>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a
                      href="#"
                      className="hover:underline hover:text-orange-500"
                    >
                      Home
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="#about"
                      className="hover:underline hover:text-orange-500"
                    >
                      About
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="#services"
                      className="hover:underline hover:text-orange-500"
                    >
                      Services
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="mb-6 text-sm font-bold text-gray-900 uppercase dark:text-orange-500">
                  Contact Info
                </h4>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4 flex items-center">
                    <MapPin className="mr-2" />
                    <a href="#">
                    Green Synergy Company Limited, <br /> Citrus Street, Akrokerri Adansi{" "}
                      <br />Ashanti Region, Ghana
                    </a>
                  </li>
                  <li className="mb-4 flex items-center">
                    <Phone className="mr-2" />
                    <a
                      href="#"
                      className="hover:underline hover:text-orange-500"
                    >
                      +233 543275281 / +233 540769414{" "}
                    </a>
                  </li>
                  <li className="mb-4 flex items-center">
                    <MailCheck className="mr-2" />
                    <a
                      href="#"
                      className="hover:underline text-xs hover:text-orange-500"
                    >
                      greensynergyco.ltd@gmail.com{" "}
                    </a>
                  </li>
                  {/* <li className="mb-4 flex items-center">
                    <Globe className="mr-2" />
                    <a
                      href="#"
                      className="hover:underline hover:text-orange-500"
                    >
                      company@.com
                    </a>
                  </li> */}
                </ul>
              </div>
              <div>
                <h4 className="mb-6 text-sm font-bold text-gray-900 uppercase dark:text-orange-500">
                  Instagram
                </h4>
                <div className="grid grid-cols-3  gap-4">
                  {socialLinks.map((link, index) => (
                    <div key={index} className="relative group">
                      <img
                        src={footerImages[index % footerImages.length]}
                        alt={`Company ${index + 1}`}
                        className="w-20 h-auto"
                      />
                      <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50"
                      >
                        <Instagram className="text-4xl text-white" />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="mb-6 text-sm font-bold text-gray-900 uppercase dark:text-orange-500">
                  Subscribe to our Newsletter
                </h4>
                <p className="mb-4 text-gray-500 dark:text-gray-400 font-medium">
                  Get the latest updates and news delivered to your inbox.
                </p>
                <form>
                  <div className="mb-4">
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className="w-full px-4 py-2 text-gray-900 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white dark:bg-gray-700 dark:border-gray-600"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-4 py-2 text-white bg-orange-500 rounded-lg hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
            <div className="px-4 py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between">
              <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
                © 2024 <a href="https://github.com/bethheal/">LiT</a>. All
                Rights Reserved.
              </span>
              <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
                <a
                  href="#"
                  className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
                >
                  <Instagram />
                  <span className="sr-only">IG page</span>
                </a>

                <a
                  href="#"
                  className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
                >
                  <Globe />
                  <span className="sr-only">Download</span>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
