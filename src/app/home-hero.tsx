"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./page.module.css";

const experiences = [
  { name: "Heritage", image: "/india/heritage.jpg", alt: "The Taj Mahal at sunrise" },
  { name: "Nature", image: "/india/nature.jpg", alt: "Sunrise over a mountain range" },
  { name: "Spiritual", image: "/india/spiritual.jpg", alt: "The Taj Mahal through a historic arch" },
  { name: "Food", image: "/india/food.jpg", alt: "A warmly lit restaurant" },
  { name: "Adventure", image: "/india/adventure.jpg", alt: "A traveler exploring a scenic landscape" },
  { name: "Festivals", image: "/india/festivals.jpg", alt: "A colorful travel scene" },
];

const heroSlides = [
  { image: "/slideshow/image-1794476301704.png", alt: "Snow-covered Himalayan mountain peak beneath a deep blue sky" },
  { image: "/slideshow/image-1794476468169.png", alt: "Camel caravan crossing the desert at sunset" },
  { image: "/slideshow/image-1794476486461.png", alt: "Colorful village nestled in the green hills of Northeast India" },
  { image: "/slideshow/image-1794476498421.png", alt: "Palm-lined tropical beach in India" },
  { image: "/slideshow/image-1794476590304.png", alt: "Ancient stone temples beside the sea" },
];

const slideDuration = 6000;

export default function HomeHero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const timer = window.setInterval(() => {
      if (!document.hidden) {
        setActiveSlide((current) => (current + 1) % heroSlides.length);
      }
    }, slideDuration);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className={styles.hero} aria-label="Discover India">
      <Image
        key={heroSlides[activeSlide].image}
        className={styles.heroBg}
        src={heroSlides[activeSlide].image}
        alt={heroSlides[activeSlide].alt}
        fill
        priority={activeSlide === 0}
        sizes="100vw"
      />

      <div className={styles.heroContent}>
        <div className={styles.heroTextGroup}>
          <h1>Discover India</h1>
          <p className={styles.subtitle}>A Journey Through Culture, Nature &amp; Heritage</p>
          <Link className={styles.heroExplore} href="/states">
            Start Exploring
          </Link>
        </div>

        <div className={styles.experienceRail} aria-label="Explore India by experience">
          {experiences.map((experience) => (
            <article className={styles.experienceCard} key={experience.name}>
              <Image
                src={experience.image}
                alt={experience.alt}
                fill
                sizes="(max-width: 700px) 72vw, 300px"
              />
              <div className={styles.experienceOverlay} />
              <div className={styles.experienceLabel}>{experience.name}</div>
            </article>
          ))}
        </div>
      </div>

    </section>
  );
}
