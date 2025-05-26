import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-vh-100">
      {/* Banner Slider Section */}
      <div className="position-relative">
        <div id="homeCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="0" className="active"></button>
            <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="1"></button>
            <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="2"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="ratio ratio-21x9" style={{ maxHeight: '600px' }}>
                <Image src="/images/banner1.png" alt="Sports activities" fill style={{ objectFit: 'cover' }} priority />
              </div>
              <div className="carousel-caption d-none d-md-block">
                <h2 className="fw-bold">Excellence in Sports</h2>
                <p>Nurturing athletic talent since 1982</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="ratio ratio-21x9" style={{ maxHeight: '600px' }}>
                <Image src="/images/banner2.png" alt="Arts and culture" fill style={{ objectFit: 'cover' }} />
              </div>
              <div className="carousel-caption d-none d-md-block">
                <h2 className="fw-bold">Promoting Arts & Culture</h2>
                <p>Fostering creativity in our community</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="ratio ratio-21x9" style={{ maxHeight: '600px' }}>
                <Image src="/images/banner3.png" alt="Community events" fill style={{ objectFit: 'cover' }} />
              </div>
              <div className="carousel-caption d-none d-md-block">
                <h2 className="fw-bold">Building Community</h2>
                <p>Together we grow stronger</p>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#homeCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#homeCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        
        {/* Mobile Captions */}
        <div className="d-md-none">
          <div className="carousel-caption-wrapper text-center">
            <div className="carousel-mobile-caption" data-slide="0">
              <h2 className="h3 text-primary fw-bold mb-2">Excellence in Sports</h2>
              <p className="text-center mb-0">Nurturing athletic talent since 1982</p>
            </div>
            <div className="carousel-mobile-caption d-none" data-slide="1">
              <h2 className="h3 text-primary fw-bold mb-2">Promoting Arts & Culture</h2>
              <p className="text-center mb-0">Fostering creativity in our community</p>
            </div>
            <div className="carousel-mobile-caption d-none" data-slide="2">
              <h2 className="h3 text-primary fw-bold mb-2">Building Community</h2>
              <p className="text-center mb-0">Together we grow stronger</p>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-primary text-white py-5">
        <div className="container">
          <div className="row py-5">
            <div className="col-md-8 mx-auto text-center">
              <h1 className="display-4 fw-bold mb-4">
                Welcome to EBASC
              </h1>
              <p className="lead mb-4">
                Edanadu Brothers Arts and Sports Club - Nurturing Talent, Building Community
              </p>
              <button className="btn btn-light btn-lg">
                Join Us Today
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-5">
        <div className="container">
          <h2 className="display-5 text-center mb-5">
            What We Offer
          </h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="card-title h4 mb-3">Arts Programs</h3>
                  <p className="card-text">Explore your creativity through various art forms including music, dance, and visual arts.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="card-title h4 mb-3">Sports Activities</h3>
                  <p className="card-text">Stay active and competitive with our diverse range of sports programs and training sessions.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="card-title h4 mb-3">Community Events</h3>
                  <p className="card-text">Participate in community-building events that bring people together and create lasting bonds.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Events Section */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="display-5 text-center mb-5">
            Latest Events
          </h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="card-title h4 mb-3">Annual Sports Meet</h3>
                  <p className="card-text text-muted mb-3">Join us for our annual sports competition featuring various athletic events.</p>
                  <a href="#" className="btn btn-outline-primary">Coming Soon</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="card-title h4 mb-3">Art Exhibition</h3>
                  <p className="card-text text-muted mb-3">Showcasing local talent and artistic expressions from our community.</p>
                  <a href="#" className="btn btn-outline-primary">Register Now</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="card-title h4 mb-3">Blood Donation Camp</h3>
                  <p className="card-text text-muted mb-3">Be a part of our Brothers Blood Donors Army initiative.</p>
                  <a href="#" className="btn btn-outline-primary">Learn More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
