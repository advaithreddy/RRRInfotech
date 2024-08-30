import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [headerVisible, setHeaderVisible] = useState(true);
  const location = useLocation();

  const handleMouseEnter = (menu) => {
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
        // Scroll down
        setHeaderVisible(false);
      } else {
        // Scroll up
        setHeaderVisible(true);
      }

      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 10,
          opacity: headerVisible ? 1 : 0,
          transition: 'opacity 0.2s ease-in-out',
        }}
      >
        <nav className="px-4 lg:px-6 py-2.5">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <Link to="/home" className="flex items-center">
              <img
                src="/src/assets/images/logo.svg"
                className="mr-3 h-6 sm:h-9"
                alt="Arc Technologies Logo"
              />
              <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
                Arc Technolgies
              </span>
            </Link>
            <div className="flex items-center lg:order-2">
              <Link
                to="/contact"
                className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
              >
                Contact Us
              </Link>
              <button
                data-collapse-toggle="mobile-menu-2"
                type="button"
                className="inline-flex items-center p-2 ml-1 text-sm text-white rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="mobile-menu-2"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <svg
                  className="hidden w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div
              className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2"
            >
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li
                  className="relative"
                  onMouseEnter={() => handleMouseEnter('home')}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    to="/home"
                    className={`block py-2 pr-4 pl-3 ${
                      isActive('/home') ? 'text-teal-300' : 'text-white'
                    } rounded lg:bg-transparent lg:p-0 lg:hover:text-teal-300`}
                  >
                    Home
                  </Link>
                </li>
                <li
                  className="relative"
                  onMouseEnter={() => handleMouseEnter('services')}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    to="/services"
                    className={`block py-2 pr-4 pl-3 ${
                      isActive('/services') ? 'text-teal-300' : 'text-white'
                    } lg:hover:text-teal-300 lg:p-0`}
                  >
                    Services
                  </Link>
                </li>
                <li
                  className="relative"
                  onMouseEnter={() => handleMouseEnter('industries')}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    to="/industries"
                    className={`block py-2 pr-4 pl-3 ${
                      isActive('/industries') ? 'text-teal-300' : 'text-white'
                    } lg:hover:text-teal-300 lg:p-0`}
                  >
                    Industries
                  </Link>
                </li>
                <li>
                  <Link
                    to="/team"
                    className={`block py-2 pr-4 pl-3 ${
                      isActive('/team') ? 'text-teal-300' : 'text-white'
                    } lg:hover:text-teal-300 lg:p-0`}
                  >
                    Team
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
