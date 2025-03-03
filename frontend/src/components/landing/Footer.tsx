import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Github, Twitter, Linkedin, Instagram, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-dark-950 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center mb-6">
              <BookOpen className="h-6 w-6 text-primary-500" />
              <span className="ml-2 text-lg font-bold text-white">Zenith Notes</span>
            </Link>
            <p className="text-gray-400 mb-6 text-sm">
              Empowering students with innovative study tools and resources to achieve academic excellence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-primary-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary-400 transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-base mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">Home</a></li>
              <li><a href="#features" className="text-gray-400 hover:text-primary-400 transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="text-gray-400 hover:text-primary-400 transition-colors">How It Works</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-primary-400 transition-colors">Testimonials</a></li>
              <li><Link to="/auth" className="text-gray-400 hover:text-primary-400 transition-colors">Sign Up</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">Blog</a></li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h3 className="text-white font-bold text-base mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">GDPR Compliance</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-base mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-primary-400 mr-3 mt-0.5" />
                <span className="text-gray-400">support@zenithnotes.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary-400 mr-3 mt-0.5" />
                <span className="text-gray-400">123 Education Street, Suite 456<br />San Francisco, CA 94105</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-400 mr-3">📞</span>
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-dark-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-xs mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Zenith Notes. All rights reserved.
            </p>
            <div className="flex space-x-4 text-xs">
              <a href="#" className="text-gray-500 hover:text-gray-400">Help Center</a>
              <span className="text-gray-700">|</span>
              <a href="#" className="text-gray-500 hover:text-gray-400">FAQ</a>
              <span className="text-gray-700">|</span>
              <a href="#" className="text-gray-500 hover:text-gray-400">Support</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;