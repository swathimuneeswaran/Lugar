import logo from "../../assets/Lugar-Prime.png";
import country1 from "../../assets/usa-map.webp";
import country2 from "../../assets/India-Map-Flag.png";
import ukFlag from "../../assets/uk-map.webp";
import canadaFlag from "../../assets/canada-map.webp";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const officeLocations = [
    {
      country: "INDIA (HQ)",
      flag: country2,
      address: "C-106/B, Ganesh Meridian, Opp. Gujarat High Court, S. G. Highway, Ahmedabad, Gujarat, 380061",
      phone: "+91 8000-161161"
    },
    {
      country: "USA OFFICE",
      flag: country1,
      address: "One World Trade Center, 285 Fulton Street suite 8500, New York, NY 10007, United States.",
      phone: "+1 (309)791-4105"
    },
    {
      country: "UK OFFICE",
      flag: ukFlag,
      address: "Level 30, The Leadenhall Building, 122 Leadenhall Street, London EC3V 4AB",
      phone: "+44 20 3287 9060"
    },
    {
      country: "CANADA OFFICE",
      flag: canadaFlag,
      address: "151 Yonge Street, 11th Floor, Toronto, Ontario, M5C 2W7, Canada",
      phone: "+1 (309)791-4105"
    }
  ];
  return (
    <footer className="bg-transparent text-black py-12 px-[90px] border-solid border-2 border-black-100 rounded-lg">
       


      <div className="container mx-auto px-4">
        {/* Top section */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-8">
          {/* Logo and description */}
          <div className="mb-8 lg:mb-0 lg:w-1/3">
            <img src={logo} alt="Hyperlink InfoSystem" className="h-12 mb-4" />
            <p className="text-black font-semibold mb-4">
              Top IT Consulting Company Delivering Custom Innovative Solutions
            </p>
          </div>

          {/* Social media */}
          <div className="lg:w-1/3">
            <h3 className="text-xl font-bold mb-4">Social Media</h3>
            <p className="text-black mb-7">
              Don't Miss To Follow Us On Our Social Networks Accounts.
            </p>
            <div className="flex space-x-[50px]">
              <a href="" className="hover:text-gray-400 transition-colors">
                <FaFacebook className="text-blue-600 hover:text-blue-800" size={24} />
              </a>
              <a href="" className="text-blue-500 hover:text-blue-700 transition-colors">
                <FaTwitter size={24} />
              </a>
              <a href="" className="text-blue-600 hover:text-blue-800 transition-colors">
                <FaLinkedin size={24} />
              </a>
              <a href="" className="text-pink-500 hover:text-pink-700 transition-colors">
                <FaInstagram size={24} />
              </a>
              <a href="" className="text-red-600 hover:text-red-800 transition-colors">
                <FaYoutube size={24} />
              </a>

            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-8 border-t border-gray-800 pb-5">
          <div>
            <h3 className="text-xl font-bold mb-4">About</h3>
            <ul className="space-y-2">
              <li><a  className="text-black hover:text-white transition-colors">Who We Are</a></li>
              <li><a  className="text-black hover:text-white transition-colors">Career</a></li>
              <li><a  className="text-black hover:text-white transition-colors">Events</a></li>
              <li><a  className="text-black hover:text-white transition-colors">Services</a></li>
              <li><a  className="text-black hover:text-white transition-colors">Industries</a></li>
              <li><a  className="text-black hover:text-white transition-colors">Case Study</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Mobile App</h3>
            <ul className="space-y-2">
              <li><a  className="text-black hover:text-white transition-colors">Android Apps</a></li>
              <li><a  className="text-black hover:text-white transition-colors">iPhone Apps</a></li>
              <li><a  className="text-black hover:text-white transition-colors">Hybrid Apps</a></li>
              <li><a  className="text-black hover:text-white transition-colors">Flutter</a></li>
              <li><a  className="text-black hover:text-white transition-colors">React Native</a></li>
              <li><a  className="text-black hover:text-white transition-colors">Kotlin</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Web</h3>
            <ul className="space-y-2">
              <li><a  className="text-black hover:text-white transition-colors">PHP</a></li>
              <li><a  className="text-black hover:text-white transition-colors">Java</a></li>
              <li><a  className="text-black hover:text-white transition-colors">Python</a></li>
              <li><a  className="text-black hover:text-white transition-colors">WordPress</a></li>
              <li><a  className="text-black hover:text-white transition-colors">Drupal</a></li>
              <li><a  className="text-black hover:text-white transition-colors">Laravel</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Ecommerce</h3>
            <ul className="space-y-2">
              <li><a  className="text-black hover:text-white transition-colors">Magento</a></li>
              <li><a  className="text-black hover:text-white transition-colors">Shopify</a></li>
              <li><a  className="text-black hover:text-white transition-colors">Ubercart</a></li>
              <li><a  className="text-black hover:text-white transition-colors">Prestashop</a></li>
              <li><a  className="text-black hover:text-white transition-colors">CS Cart</a></li>
              <li><a  className="text-black hover:text-white transition-colors">VirtueMart</a></li>
            </ul>
          </div>
        </div>

       

        {/* Quick Links and Newsletter Subscription */}
        {/* <div className="flex flex-col md:flex-row justify-between items-start mt-8 border-t border-gray-800 pt-8">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a  className="text-black hover:text-gray-600 transition-colors">Contact Us</a></li>
              <li><a  className="text-black hover:text-gray-600 transition-colors">Privacy Policy</a></li>
              <li><a  className="text-black hover:text-gray-600 transition-colors">Cyber Security Policy</a></li>
              <li><a  className="text-black hover:text-gray-600 transition-colors">Sitemap</a></li>
              <li><a  className="text-black hover:text-gray-600 transition-colors">Global</a></li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <h3 className="text-xl font-bold mb-4">Subscribe To Our Newsletter</h3>
            <p className="text-gray-600 mb-4">Stay updated with latest technology trends.</p>
            <form className="flex flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="flex-grow px-4 py-2 mb-2 sm:mb-0 sm:mr-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                Submit
              </button>
            </form>
          </div>
        </div> */}
        {/* Country Offices Section */}
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 border-t border-gray-800 pt-12 pb-5">
          {officeLocations.map((office, index) => (
            <div key={index} className="text-center flex flex-col items-center">
              <img src={office.flag} alt={`${office.country} flag`} className="w-60px h-auto mb-4 rounded" />
              <h3 className="text-xl font-bold flex flex-grow items-center mb-2 text-red-500">{office.country}</h3>
              <p className="text-sm mb-2">{office.address}</p>
              <p className="text-sm">{office.phone}</p>
            </div>
          ))}
        </div>
        {/* <div className="flex flex-col md:flex-row justify-between items-start mt-8 border-t border-gray-800 pt-8"> </div> */}

        {/* Copyright Section */}
        <div className="pt-9 border-t border-t-black font-bold pt-3">
          <div className="text-center">
            <span className="text-sm font-bold text-black/60">
              @copyright 2024 LugarPrime ❤️
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

