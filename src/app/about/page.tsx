import TeamSlider from '@/components/TeamSlider';

export default function About() {
  return (
    <div className="py-5">
      <div className="container">
        {/* Hero Section */}
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold mb-4">About EBASC</h1>
          <p className="lead text-secondary mx-auto" style={{ maxWidth: '800px' }}>
            Edanadu Brothers Arts and Sports Club is a community-driven organization dedicated to promoting cultural and athletic excellence.
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="row g-4 mb-5">
          <div className="col-md-6">
            <div className="bg-light p-4 rounded h-100">
              <h2 className="h3 fw-bold mb-3 text-primary">Our Vision</h2>
              <p className="text-secondary">
                To create a vibrant community where arts and sports thrive together, fostering personal growth and cultural enrichment for all members.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="bg-light p-4 rounded h-100">
              <h2 className="h3 fw-bold mb-3 text-primary">Our Mission</h2>
              <p className="text-secondary">
                To provide high-quality facilities, training, and opportunities for artistic and athletic development while building strong community bonds.
              </p>
            </div>
          </div>
        </div>

        {/* History Section */}
        <div className="mb-5">
          <h2 className="h2 fw-bold text-center mb-4">Our History</h2>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="card border-0 shadow-sm">
                <div className="card-body p-4">
                  <p className="text-secondary mb-4">
                    Founded in 1982, EBASC began as a small group of enthusiastic individuals who shared a common passion for arts and sports.
                    Over the years, we have grown into a prominent community organization, touching the lives of thousands through our various programs and initiatives.
                  </p>
                  <div className="row g-4">
                    <div className="col-sm-6">
                      <div className="d-flex align-items-center">
                        <i className="bi bi-people-fill fs-1 text-primary me-3"></i>
                        <div>
                          <h3 className="h5 mb-1">100+</h3>
                          <p className="mb-0">Active Members</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="d-flex align-items-center">
                        <i className="bi bi-trophy-fill fs-1 text-primary me-3"></i>
                        <div>
                          <h3 className="h5 mb-1">100+</h3>
                          <p className="mb-0">Awards Won</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>        {/* Team Section */}
        <div className="mb-5">
          <h2 className="h2 fw-bold text-center mb-4">Our Team</h2>
          <TeamSlider />
        </div>
      </div>
    </div>
  );
}
