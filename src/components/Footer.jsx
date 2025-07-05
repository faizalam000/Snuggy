import List from "../Common/List";

const Footer = () => {
  return (
    
      <footer className="bg-gray-900 text-gray-300 py-12 px-6 flex text-center" >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">Snuggy</h3>
              <p className="text-gray-400 leading-relaxed">
                We bring your favorite meals right to your door. Fast, fresh,
                and always delicious.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Quick Links</h4>
              <div className="space-y-2">
                <a
                  href="#"
                  className="block hover:text-orange-400 transition-colors"
                >
                  About Us
                </a>
                <a
                  href="#"
                  className="block hover:text-orange-400 transition-colors"
                >
                  Help Center
                </a>
                <a
                  href="#"
                  className="block hover:text-orange-400 transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="block hover:text-orange-400 transition-colors"
                >
                  Terms of Service
                </a>
              </div>
            </div>

            {/* Contact & Social */}
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Stay Connected</h4>
              <div className="space-y-2">
                <a
                  href="#"
                  className="block hover:text-orange-400 transition-colors"
                >
                  Instagram
                </a>
                <a
                  href="#"
                  className="block hover:text-orange-400 transition-colors"
                >
                  Twitter
                </a>
                <a
                  href="#"
                  className="block hover:text-orange-400 transition-colors"
                >
                  Facebook
                </a>
              </div>
              <p className="text-sm text-gray-400 mt-4">
                Questions? We're here to help!
              </p>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-700 mt-8 pt-6 text-center">
            <p className="text-gray-400 text-sm">
              © 2025 Snuggy. 
            </p>
          </div>
        </div>
      </footer>
    
  );
};
export default Footer;
