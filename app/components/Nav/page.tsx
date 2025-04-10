'use client';

import React, { useEffect, useRef, useState } from 'react';
import Logo from '../../assets/BlurockLogo.png';
import Arrow from '../../assets/arrow.png';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react'; // Hamburger and Close icons

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);


  const handleOutsideClick = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setMenuOpen(false);
    }
  };
  

  useEffect(() => {
    if (menuOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [menuOpen]);

  return (
    <>
      {/* Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-10 bg-black/40 backdrop-blur-sm transition-all duration-300" />
      )}

      <nav className="z-40 sticky flex justify-between px-6 py-3 w-full items-center rounded-xl shadow backdrop-blur-[10px]  top-0">
        {/* Logo */}
        <div className="flex items-center gap-2 z-50">
          <Image src={Logo} alt="Logo" className="w-8 h-8" />
          <h1 className="text-black text-lg font-bold font-Lato">Blurock Ionic</h1>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-4 font-bold text-black">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/aboutus">About Us</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/solutions">Solutions</Link></li>
          <li><Link href="/contactus">Contact Us</Link></li>
        </ul>

        {/* Auth Buttons */}
        <div className="hidden lg:flex gap-2 z-50">
          <div className="h-[39px] px-4 py-2 rounded-xl border border-black/10 text-black text-base font-semibold hover:bg-slate-400 cursor-pointer">
            Sign Up
          </div>
          <div className="h-[39px] px-4 py-2 rounded-xl text-white text-base font-semibold bg-black flex items-center gap-1 hover:bg-slate-700 cursor-pointer transition">
            <p>Sign In</p>
            <Image src={Arrow} alt="arrow" />
          </div>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden z-50">
          {menuOpen ? (
            <X size={28} className="text-black" onClick={() => setMenuOpen(false)} />
          ) : (
            <Menu size={28} className="text-black" onClick={() => setMenuOpen(true)} />
          )}
        </div>

        
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
          <div
            ref={menuRef}
            className="fixed top-0 right-0 w-3/4 h-full bg-white z-40 shadow-lg p-8 flex flex-col gap-6"
          >
            <ul className="flex flex-col gap-4 text-lg font-semibold">
              <li><Link href="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
              <li><Link href="/aboutus" onClick={() => setMenuOpen(false)}>About Us</Link></li>
              <li><Link href="/services" onClick={() => setMenuOpen(false)}>Services</Link></li>
              <li><Link href="/solutions" onClick={() => setMenuOpen(false)}>Solutions</Link></li>
              <li><Link href="/contactus" onClick={() => setMenuOpen(false)}>Contact Us</Link></li>
            </ul>

            <div className="flex flex-col gap-4 mt-6">
              <div className="px-4 py-2 rounded-xl border border-black/10 text-black text-base font-semibold text-center hover:bg-slate-400 cursor-pointer">
                Sign Up
              </div>
              <div className="px-4 py-2 rounded-xl text-white text-base font-semibold bg-black flex items-center justify-center gap-1 hover:bg-slate-700 cursor-pointer">
                <p>Sign In</p>
                <Image src={Arrow} alt="arrow" />
              </div>
            </div>
          </div>
        )}
    </>
  );
};

export default Navbar;
