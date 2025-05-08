import React, { useRef, useEffect, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectCreative } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-creative";

import ProjectCardSkeleton from "../Skeleton-Loaders/ProjectsSkeleton";
import {
  NextArrowSkeleton,
  PrevArrowSkeleton,
} from "../Skeleton-Loaders/SwiperArrowSkeleton";
import { NextArrow, PrevArrow } from "./SwiperArrows";

const SwiperTrack = ({ isLoading, projectsData }) => {
  const items = isLoading ? Array.from({ length: 3 }) : projectsData;
  const swiperRef = useRef(null);
  const nextBtnRef = useRef(null);
  const prevBtnRef = useRef(null);
  const navigationInitialized = useRef(false);

  // Handle manual navigation as a fallback
  const handleNextClick = useCallback(() => {
    const swiper = swiperRef.current?.swiper;
    if (swiper) {
      swiper.slideNext();
    }
  }, []);

  const handlePrevClick = useCallback(() => {
    const swiper = swiperRef.current?.swiper;
    if (swiper) {
      swiper.slidePrev();
    }
  }, []);

  useEffect(() => {
    // Add a small delay to ensure DOM is fully rendered
    const timeout = setTimeout(() => {
      const swiper = swiperRef.current?.swiper;

      if (swiper && nextBtnRef.current && prevBtnRef.current) {
        // Set navigation elements directly using refs
        swiper.params.navigation.nextEl = nextBtnRef.current;
        swiper.params.navigation.prevEl = prevBtnRef.current;

        // Update navigation
        swiper.navigation.destroy();
        swiper.navigation.init();
        swiper.navigation.update();

        // Add manual click handlers as fallback
        if (!navigationInitialized.current) {
          nextBtnRef.current.addEventListener("click", handleNextClick);
          prevBtnRef.current.addEventListener("click", handlePrevClick);
          navigationInitialized.current = true;
        }
      }
    }, 100); // Small delay to ensure everything is rendered

    return () => {
      clearTimeout(timeout);
      // Clean up event listeners when component unmounts
      if (navigationInitialized.current) {
        nextBtnRef.current?.removeEventListener("click", handleNextClick);
        prevBtnRef.current?.removeEventListener("click", handlePrevClick);
      }
    };
  }, [handleNextClick, handlePrevClick, isLoading]);

  return (
    <div className="slider--container">
      {isLoading ? <PrevArrowSkeleton /> : <PrevArrow ref={prevBtnRef} />}
      {isLoading ? <NextArrowSkeleton /> : <NextArrow ref={nextBtnRef} />}
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Autoplay, EffectCreative]}
        loop={true}
        centeredSlides={true}
        slidesPerView={1}
        spaceBetween={0}
        speed={1200}
        autoplay={{
          delay: 2800,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        effect="creative"
        creativeEffect={{
          prev: {
            translate: ["-120%", 0, -500],
            opacity: 0,
            scale: 0.9,
          },
          next: {
            translate: ["120%", 0, -500],
            opacity: 0,
            scale: 0.9,
          },
        }}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
      >
        {items.map((project, index) => (
          <SwiperSlide key={project?.id || index}>
            {isLoading ? (
              <ProjectCardSkeleton />
            ) : (
              <div className="project-card">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-card__image"
                />
                <div className="project-card__content">
                  <div className="project-card__overlay">
                    <p className="project-card__description">
                      {project.description}
                    </p>
                    <div className="project-card__tags">
                      {project.tags.map((tag, idx) => (
                        <span key={idx} className="project-card__tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="project-card__links">
                      <a
                        href={project.liveLink}
                        className="project-card__link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="project-card__link-icon">
                          <i className="fa-solid fa-desktop"></i>
                        </span>
                        Live Demo
                      </a>
                      <a
                        href={project.codeLink}
                        className="project-card__link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="project-card__link-icon">
                          <i className="fa-brands fa-github"></i>
                        </span>
                        View Code
                      </a>
                    </div>
                  </div>
                  <h3 className="project-card__title">{project.title}</h3>
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperTrack;
