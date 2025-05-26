const Footer = () => {
  return (
    <footer className="bg-primary text-white py-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-md-4">
            <h3 className="h5 mb-3">EBASC</h3>
            <p className="small">
              Edanadu Brothers Arts and Sports Club - Promoting cultural and athletic
              excellence in our community since 1982.
            </p>
          </div>
          <div className="col-md-4">
            <h3 className="h5 mb-3">Quick Links</h3>
            <ul className="nav flex-column">
              <li className="nav-item">
                <a href="/about" className="nav-link text-white p-0 mb-2">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a href="/services" className="nav-link text-white p-0 mb-2">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a href="/contact" className="nav-link text-white p-0 mb-2">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h3 className="h5 mb-3">Contact Info</h3>
            <ul className="list-unstyled small">
              <li className="mb-2">Email: edanadubrothers@gmail.com</li>
              <li className="mb-2">Phone: +91 9633 88 9959</li>
              <li className="mb-2">Address: Edanadu, Kerala, India</li>
            </ul>
          </div>
        </div>
        <div className="border-top border-light mt-4 pt-4 text-center">
          <p className="small mb-0">
            © {new Date().getFullYear()} EBASC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
