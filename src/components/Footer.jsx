import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About AppStore</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition">About Us</a></li>
              <li><a href="#" className="hover:text-white transition">Careers</a></li>
              <li><a href="#" className="hover:text-white transition">Press Center</a></li>
              <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-white transition">GDPR Compliance</a></li>
            </ul>
          </div>

          {/* Developer Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Developer Resources</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition">Developer Portal</a></li>
              <li><a href="#" className="hover:text-white transition">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition">API Reference</a></li>
              <li><a href="#" className="hover:text-white transition">Submit Your App</a></li>
            </ul>
          </div>

          {/* Social & Payments */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              {['twitter-x-line', 'facebook-fill', 'instagram-line', 'linkedin-fill'].map(icon => (
                <a
                  key={icon}
                  href="#"
                  className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-primary transition"
                >
                  <i className={`ri-${icon}`}></i>
                </a>
              ))}
            </div>
            <h4 className="text-sm font-medium mb-2 text-gray-400">Payment Methods</h4>
            <div className="flex space-x-3 text-gray-400">
              <i className="ri-visa-fill ri-lg"></i>
              <i className="ri-mastercard-fill ri-lg"></i>
              <i className="ri-paypal-fill ri-lg"></i>
              <i className="ri-apple-fill ri-lg"></i>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="w-10 h-10 flex items-center justify-center bg-primary rounded-full text-white">
             <img src="/Untitled design.svg" alt="" />
            </div>
            <span className="ml-2 font-pacifico text-2xl text-white">AppStore</span>
          </div>
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} AppStore. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
