export default function Footer() {
  return (
    <footer className="bg-black text-stone-100 py-16">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-stone-50 mb-4">ByteThreads</h3>
            <p className="text-stone-300 leading-relaxed">
              Crafting digital solutions one moment at a time.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-stone-50 mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-stone-300 hover:text-stone-50 transition-colors">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="text-stone-300 hover:text-stone-50 transition-colors">
                  Mobile Apps
                </a>
              </li>
              <li>
                <a href="#" className="text-stone-300 hover:text-stone-50 transition-colors">
                  UI/UX Design
                </a>
              </li>
              <li>
                <a href="#" className="text-stone-300 hover:text-stone-50 transition-colors">
                  Consulting
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold text-stone-50 mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-stone-300 hover:text-stone-50 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-stone-300 hover:text-stone-50 transition-colors">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#" className="text-stone-300 hover:text-stone-50 transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-stone-300 hover:text-stone-50 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-lg font-semibold text-stone-50 mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-stone-300 hover:text-stone-50 transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-stone-300 hover:text-stone-50 transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="text-stone-300 hover:text-stone-50 transition-colors">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="text-stone-300 hover:text-stone-50 transition-colors">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-stone-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-stone-400 text-sm">
              © {new Date().getFullYear()} ByteThreads. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-stone-400 hover:text-stone-50 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-stone-400 hover:text-stone-50 text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
