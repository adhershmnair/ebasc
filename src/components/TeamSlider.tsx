'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay, EffectFade } from 'swiper/modules';
import teamData from '../data/team.json';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

export default function TeamSlider() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <Swiper
      modules={[Pagination, Navigation, Autoplay, EffectFade]}
      spaceBetween={30}
      slidesPerView={1}
      breakpoints={{
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
      }}
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      navigation
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      speed={800}
      loop={true}
      className="team-swiper py-4"
    >
      {teamData.members.map((member, index) => (
        <SwiperSlide key={member.id}>
          <div
            className="card border-0 shadow-hover h-100 team-card"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="card-body p-4 text-center">
              <div
                className={`rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center team-avatar ${
                  hoveredIndex === index ? 'bg-primary' : 'bg-primary bg-opacity-10'
                }`}
                style={{ width: '120px', height: '120px', transition: 'all 0.3s ease' }}
              >
                <i
                  className={`bi bi-person-fill ${
                    hoveredIndex === index ? 'text-white' : 'text-primary'
                  }`}
                  style={{ fontSize: '3rem', transition: 'all 0.3s ease' }}
                ></i>
              </div>
              <h3 className="h5 mb-2">{member.name}</h3>
              <p className="text-primary mb-2">{member.position}</p>
              {member.description && (
                <p className="small text-muted text-justify mb-3">
                  {member.description}
                </p>
              )}
              {member.phone && (
                <a
                  href={`tel:${member.phone}`}
                  className="btn btn-outline-primary btn-sm"
                  style={{
                    opacity: hoveredIndex === index ? 1 : 0.8,
                    transform: hoveredIndex === index ? 'translateY(0)' : 'translateY(5px)',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <i className="bi bi-telephone-fill me-2"></i>
                  Contact
                </a>
              )}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
