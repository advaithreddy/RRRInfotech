import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer'; // Make sure you're importing the Footer
import backgroundImage from '../assets/images/bkcontact.jpg';

function Contact() {
    return (
        <div>
            <Header />
            <div style={{ position: 'relative', zIndex: 1, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
                {/* Image covering 50% of the screen */}
                <div
                    style={{
                        height: '50vh',
                        backgroundImage: `url(${backgroundImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                ></div>

                {/* Contact Form Below Image */}
                <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto', flex: '1' }}>
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-pink-800 dark:text-white">
                        Contact Us
                    </h2>
                    <p className="mb-8 lg:mb-12 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
                    Looking for insights into the current job market? Need information about job openings in various industries? We're here to help with the latest trends and opportunities. Let us know how we can assist you.
                    </p>
                    <form action="#" className="space-y-8">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-yellow-500 dark:text-gray-300">
                                Your email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="shadow-sm bg-gray-50 border border-gray-300 text-yello-500 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                placeholder="name@xyz.com"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-yellow-500 dark:text-gray-300">
                                Your Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                placeholder="Let us know what to call you.."
                                required
                            />
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block mb-2 text-sm font-medium text-yellow-500 dark:text-gray-400">
                                Your message
                            </label>
                            <textarea
                                id="message"
                                rows="6"
                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Enter your Message..."
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                        >
                            Trigger Me!
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
