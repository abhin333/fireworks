export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-[#020307] pt-16 pb-8 relative z-20">
      <div className="w-[min(1120px,calc(100%-3rem))] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand & About */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-[#ffd27a] to-[#ffa32c] bg-clip-text text-transparent mb-4">
              KK Fireworks
            </h3>
            <p className="text-[#fff1db]/80 leading-relaxed">
              Premium fireworks for your brightest celebrations. We provide
              high-quality, safe, and vibrant crackers to make every festival
              memorable.
            </p>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Contact Us
            </h4>
            <ul className="space-y-4 text-[#fff1db]/80">
              <li className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-[#ffa32c]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>+91 2345678901</span>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-[#ffa32c]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>info@kkfireworks.com</span>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-[#ffa32c]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Mon - Sun: 9:00 AM - 10:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Location Address */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Our Location
            </h4>
            <ul className="space-y-4 text-[#fff1db]/80">
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-[#ffa32c] mt-1 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>
                  123 Festival Street, Celebration Square
                  <br />
                  Fireworks Market Area
                  <br />
                  Sivakasi, Tamil Nadu 626123
                  <br />
                  India
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} KK Fireworks. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
