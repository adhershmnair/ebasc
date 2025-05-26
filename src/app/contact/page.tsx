'use client';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="container py-5">
      <h1 className="display-4 text-center mb-5">Contact Us</h1>
      
      <div className="row g-4">
        {/* Contact Information */}
        <div className="col-lg-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <h2 className="h3 text-primary mb-4">Get in Touch</h2>
              <div className="mb-4">
                <h3 className="h5 mb-2">Address</h3>
                <p className="text-muted mb-0">
                  EBASC Building<br />
                  Edanadu P.O<br />
                  Chathannoor, Kerala<br />
                  India - 691579
                </p>
              </div>
              <div className="mb-4">
                <h3 className="h5 mb-2">Phone</h3>
                <p className="text-muted mb-0">
                  +91 9633 88 9959<br />
                  +91 9946 24 6984<br />
                  +91 7558 87 4085<br />
                  +91 7558 97 4657
                </p>
              </div>
              <div className="mb-4">
                <h3 className="h5 mb-2">Email</h3>
                <p className="text-muted mb-0">
                  edanadubrothers@gmail.com
                </p>
              </div>
              <div>
                <h3 className="h5 mb-2">Follow Us</h3>
                <div className="d-flex gap-3">
                  <a href="#" className="text-primary fs-4"><i className="bi bi-facebook"></i></a>
                  <a href="#" className="text-primary fs-4"><i className="bi bi-instagram"></i></a>
                  <a href="#" className="text-primary fs-4"><i className="bi bi-youtube"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="col-lg-8">
          <div className="card border-0 shadow-sm mb-4">
            <div className="card-body">
              <h2 className="h3 text-primary mb-4">Send us a Message</h2>
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" required />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" required />
                  </div>
                  <div className="col-12">
                    <label htmlFor="subject" className="form-label">Subject</label>
                    <input type="text" className="form-control" id="subject" required />
                  </div>
                  <div className="col-12">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea className="form-control" id="message" rows={5} required></textarea>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-primary">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Google Maps */}
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <h2 className="h3 text-primary mb-4">Location</h2>
              <div className="ratio ratio-16x9">                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1716.8140925787013!2d76.73270730227637!3d8.861297987338492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05e4000dee0259%3A0x5ee0894ecbb2f4cc!2sBrothers%20Arts%20%26%20Sports%20Club%20EBASC!5e0!3m2!1sen!2sin!4v1748187756454!5m2!1sen!2sin"
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
