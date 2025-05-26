"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { initNavbarHandlers } from "@/app/utils/navbar";

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    initNavbarHandlers();
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.toggle('menu-open');
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <Link href="/" className="navbar-brand d-flex align-items-center">
            <div className="logo-wrapper me-2" style={{ width: '40px', height: '40px' }}>
              <Image 
                src="/images/brothersedanadu.jpg" 
                alt="EBASC Logo" 
                width={40} 
                height={40} 
                className="logo-blend"
              />
            </div>
            <span>EBASC</span>
          </Link>
          <button
            className={`navbar-toggler custom-toggler ${isMenuOpen ? 'is-active' : ''}`}
            type="button"
            aria-label="Toggle navigation"
            onClick={toggleMenu}
          >
            <span className="toggler-icon"></span>
          </button>
          <div 
            className={`navbar-collapse ${isMenuOpen ? 'show' : ''}`} 
            id="navbarNav"
          >
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link
                  href="/"
                  className={`nav-link ${pathname === "/" ? "active" : ""}`}
                  onClick={() => toggleMenu()}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="/about"
                  className={`nav-link ${pathname === "/about" ? "active" : ""}`}
                  onClick={() => toggleMenu()}
                >
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="/services"
                  className={`nav-link ${pathname === "/services" ? "active" : ""}`}
                  onClick={() => toggleMenu()}
                >
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="/contact"
                  className={`nav-link ${pathname === "/contact" ? "active" : ""}`}
                  onClick={() => toggleMenu()}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div 
        className={`menu-overlay ${isMenuOpen ? 'show' : ''}`}
        onClick={toggleMenu}
      />
    </>
  );
};

export default Navbar;
