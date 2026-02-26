import { Link } from 'react-router';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-white mb-4">EduBridge Africa</h3>
            <p className="text-sm">
              Empowering African learners with accessible, quality digital education.
              Learn at your own pace, anywhere, anytime.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/dashboard" className="hover:text-green-400">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-green-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-green-400">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-green-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-white mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-green-400">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-green-400">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-green-400">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-green-400">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-bold text-white mb-4">Connect With Us</h4>
            <div className="flex gap-4">
              <a href="#" className="hover:text-green-400">
                <Facebook className="size-5" />
              </a>
              <a href="#" className="hover:text-green-400">
                <Twitter className="size-5" />
              </a>
              <a href="#" className="hover:text-green-400">
                <Instagram className="size-5" />
              </a>
              <a href="#" className="hover:text-green-400">
                <Linkedin className="size-5" />
              </a>
            </div>
            <p className="text-sm mt-4">
              Email: support@edubridgeafrica.com
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; 2026 EduBridge Africa. All rights reserved.</p>
          <p className="mt-2 text-gray-500">
            Built with ❤️ for African learners
          </p>
        </div>
      </div>
    </footer>
  );
}
