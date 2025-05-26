export default function Services() {
  return (
    <div className="container py-5">
      <h1 className="display-4 text-center mb-5">Our Services</h1>
      
      {/* Sports Services */}
      <div className="row g-4 mb-5">
        <div className="col-md-6">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body">
              <h2 className="h3 text-primary mb-3">Sports Training</h2>
              <ul className="list-unstyled">
                <li className="mb-3">
                  <i className="bi bi-check2-circle text-success me-2"></i>
                  Professional coaching for various sports
                </li>
                <li className="mb-3">
                  <i className="bi bi-check2-circle text-success me-2"></i>
                  Well-equipped training facilities
                </li>
                <li className="mb-3">
                  <i className="bi bi-check2-circle text-success me-2"></i>
                  Regular tournaments and competitions
                </li>
                <li className="mb-3">
                  <i className="bi bi-check2-circle text-success me-2"></i>
                  Youth development programs
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body">
              <h2 className="h3 text-primary mb-3">Arts Programs</h2>
              <ul className="list-unstyled">
                <li className="mb-3">
                  <i className="bi bi-check2-circle text-success me-2"></i>
                  Music classes (Vocal and Instrumental)
                </li>
                <li className="mb-3">
                  <i className="bi bi-check2-circle text-success me-2"></i>
                  Dance training (Classical and Contemporary)
                </li>
                <li className="mb-3">
                  <i className="bi bi-check2-circle text-success me-2"></i>
                  Visual arts workshops
                </li>
                <li className="mb-3">
                  <i className="bi bi-check2-circle text-success me-2"></i>
                  Cultural performance opportunities
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Blood Donors Army Section */}
      <div className="my-5">
        <div className="bg-danger bg-opacity-10 rounded-4 p-4 p-md-5">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h2 className="h1 text-danger mb-4">Brothers Blood Donors Army</h2>
              <p className="lead mb-4">Join our life-saving initiative and become part of Kerala's largest voluntary blood donors network.</p>
              <div className="mb-4">
                <h3 className="h5 text-danger mb-3">Why Donate Blood?</h3>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <i className="bi bi-droplet-fill text-danger me-2"></i>
                    One donation can save up to three lives
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-droplet-fill text-danger me-2"></i>
                    Regular donation helps maintain blood supply
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-droplet-fill text-danger me-2"></i>
                    Essential for emergency medical procedures
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-droplet-fill text-danger me-2"></i>
                    Supports cancer patients during treatment
                  </li>
                </ul>
              </div>
              <div className="d-flex gap-3">
                <a href="https://forms.gle/RTGz19wiyR4SFJpf6" className="btn btn-danger" target="_blank">Register as Donor</a>
                <button className="btn btn-outline-danger">Request Blood</button>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card border-0 shadow-sm">
                <div className="card-body">
                  <h3 className="h4 text-danger mb-4">Our Impact</h3>
                  <div className="row g-4">
                    <div className="col-6">
                      <div className="text-center p-3 bg-white rounded-3">
                        <div className="h2 text-danger mb-2">100+</div>
                        <div className="text-muted">Active Donors</div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="text-center p-3 bg-white rounded-3">
                        <div className="h2 text-danger mb-2">500+</div>
                        <div className="text-muted">Lives Saved</div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="alert alert-danger mb-0">
                        <h4 className="alert-heading h5 mb-2">24/7 Emergency Support</h4>
                        <p className="mb-0">Our network of donors is ready to respond to emergency blood requirements at any time. Contact our helpline for immediate assistance.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-12">
              <h3 className="h4 text-danger mb-4">Importance of Blood Donation</h3>
              <div className="row g-4">
                <div className="col-md-6 col-lg-3">
                  <div className="bg-white p-4 rounded-3 h-100">
                    <h4 className="h5 text-danger mb-3">Emergency Care</h4>
                    <p className="mb-0">Critical for accident victims, emergency surgeries, and trauma cases where immediate blood transfusion can be life-saving.</p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="bg-white p-4 rounded-3 h-100">
                    <h4 className="h5 text-danger mb-3">Medical Treatments</h4>
                    <p className="mb-0">Essential for patients undergoing major surgeries, cancer treatment, and those with blood disorders like thalassemia.</p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="bg-white p-4 rounded-3 h-100">
                    <h4 className="h5 text-danger mb-3">Maternal Health</h4>
                    <p className="mb-0">Crucial for managing complications during pregnancy and childbirth, potentially saving both mother and child.</p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="bg-white p-4 rounded-3 h-100">
                    <h4 className="h5 text-danger mb-3">Community Support</h4>
                    <p className="mb-0">Strengthens community bonds and creates a reliable support system for medical emergencies in our region.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Membership Benefits */}
      <h2 className="h2 text-center mb-4">Membership Benefits</h2>
      <div className="row g-4">
        <div className="col-md-4">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body text-center">
              <div className="mb-3">
                <i className="bi bi-trophy fs-1 text-primary"></i>
              </div>
              <h3 className="h4 mb-3">Access to Facilities</h3>
              <p className="text-muted text-justify">Full access to our sports grounds, training equipment, and practice rooms.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body text-center">
              <div className="mb-3">
                <i className="bi bi-people fs-1 text-primary"></i>
              </div>
              <h3 className="h4 mb-3">Expert Guidance</h3>
              <p className="text-muted text-justify">Learn from experienced coaches and instructors in your chosen field.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body text-center">
              <div className="mb-3">
                <i className="bi bi-calendar-event fs-1 text-primary"></i>
              </div>
              <h3 className="h4 mb-3">Special Events</h3>
              <p className="text-muted text-justify">Priority access and discounts for workshops, competitions, and performances.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
