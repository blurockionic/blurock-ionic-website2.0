import Image from 'next/image'
import Logo from '../../assets/BlurockLogo.png'
// import your actual social icons like `react-icons` or SVGs

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6 md:px-20">
      <div className="flex flex-col md:flex-row justify-between gap-10">

        {/* Left: Logo and Tagline */}
        <div className="flex flex-col gap-3 max-w-md">
          <div className="flex items-center gap-3">
            <Image src={Logo} alt="Blurock Logo" width={40} height={40} />
            <h2 className="text-xl font-bold">Blurock Ionic</h2>
          </div>
          <p className="text-sm text-gray-400">
            Building future-ready digital solutions: websites, mobile apps, graphics, and marketing that grow your brand.
          </p>
        </div>

        {/* Center: Navigation */}
        <div className="grid grid-cols-2 gap-6 text-sm">
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold text-white">Company</h4>
            <a href="/aboutus" className="hover:text-blue-400">About Us</a>
            <a href="/services" className="hover:text-blue-400">Services</a>
            <a href="/solutions" className="hover:text-blue-400">Solutions</a>
            <a href="/contactus" className="hover:text-blue-400">Contact Us</a>
          </div>

          <div className="flex flex-col gap-2">
            <h4 className="font-semibold text-white">Quick Links</h4>
            <a href="/signup" className="hover:text-blue-400">Sign Up</a>
            <a href="/signin" className="hover:text-blue-400">Sign In</a>
            <a href="/privacy" className="hover:text-blue-400">Privacy Policy</a>
            <a href="/terms" className="hover:text-blue-400">Terms & Conditions</a>
          </div>
        </div>

        {/* Right: Contact & Social */}
        <div className="flex flex-col gap-4">
          <div>
            <h4 className="font-semibold text-white">Contact</h4>
            <p className="text-sm text-gray-400">Email: support@blurockionic.com</p>
            <p className="text-sm text-gray-400">Phone: +91 6200932331</p>
            <p className="text-sm text-gray-400">Joshi nagar, Ludhiana, Punjab, India</p>
          </div>

          <div className="flex gap-4 mt-2">
            {/* Replace these with icons from react-icons or your own SVGs */}
            <a href="#" className="text-gray-400 hover:text-white">FB</a>
            <a href="#" className="text-gray-400 hover:text-white">IG</a>
            <a href="#" className="text-gray-400 hover:text-white">LN</a>
            <a href="#" className="text-gray-400 hover:text-white">TW</a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 text-center text-xs text-gray-500 border-t border-gray-800 pt-4">
        © {new Date().getFullYear()} Blurock Ionic. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer;
