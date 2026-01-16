import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-gray-400 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Corporate Office */}
          <div>
            <h2 className="text-white font-semibold mb-4">Corporate Office</h2>
            <p>450 Century Parkway suite 260, Allen Texas, 75002</p>
            <p>Phone: +1 (234) 567-9486</p>
            <p>Email: Hello@rrrinfotech.com</p>
          </div>

          {/* Services */}
          <div>
            <h2 className="text-white font-semibold mb-4">Services</h2>
            <ul>
              <li><Link to="/services" className="hover:underline">Technology Consulting</Link></li>
              <li><Link to="/services" className="hover:underline">IT Services</Link></li>
              <li><Link to="/services" className="hover:underline">Management Consulting</Link></li>
              <li><Link to="/services" className="hover:underline">Support</Link></li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h2 className="text-white font-semibold mb-4">Company</h2>
            <ul>
            <li><Link to="/home" className="hover:underline">Home</Link></li>
              <li><Link to="/about" className="hover:underline">About Us</Link></li>
              <li><Link 
                    to="/team"
                    className="hover:underline"> Our Team
                  </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap justify-between items-center mt-8">
          {/* Social Media Links */}
        <div className="flex space-x-6">
            <a href="https://www.instagram.com/arctechnolgies/?hl=en" className="hover:text-gray-400" target='_blank' rel='noopener noreferrer'>
            <FontAwesomeIcon icon={faInstagram} className="text-pink-600 w-6 h-6" />
            </a>
            <a href="#" className="hover:text-gray-400" target='_blank' rel='noopener noreferrer'>
            <FontAwesomeIcon icon={faTwitter} className="text-blue-400 w-6 h-6" />
            </a>
            <a href="#" className="hover:text-gray-400" target='_blank' rel='noopener noreferrer'>
            <FontAwesomeIcon icon={faFacebook} className="text-blue-700 w-6 h-6" />
            </a>
            <a href="#" className="hover:text-gray-400" target='_blank' rel='noopener noreferrer'>
            <FontAwesomeIcon icon={faLinkedin} className="text-blue-600 w-6 h-6" />
            </a>
        </div>

          {/* Privacy & Policies */}
          <div>
            <Link to="privacyandpolicy" className="hover:underline">Privacy & Policies</Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-gray-400">
          <p>&copy; {currentYear} RRR Infotech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}