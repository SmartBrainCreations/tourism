import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

const experiences = [
  { name: "Heritage", image: "/india/heritage.jpg", alt: "The Taj Mahal at sunrise" },
  { name: "Nature", image: "/india/nature.jpg", alt: "Sunrise over a mountain range" },
  { name: "Spiritual", image: "/india/spiritual.jpg", alt: "The Taj Mahal through a historic arch" },
  { name: "Food", image: "/india/food.jpg", alt: "A warmly lit restaurant" },
  { name: "Adventure", image: "/india/adventure.jpg", alt: "A traveler exploring a scenic landscape" },
  { name: "Festivals", image: "/india/festivals.jpg", alt: "A colorful travel scene" },
];

const destinations = [
  {
    name: "Rajasthan",
    tagline: "Land of Palaces & Deserts",
    image: "/india/desert.jpg",
  },
  { name: "Kerala", tagline: "God’s Own Country", image: "/india/river.jpg" },
  { name: "Goa", tagline: "Beaches & Vibrance", image: "/india/coast.jpg" },
  { name: "Karnataka", tagline: "Land of Ancient Temples & Tech", image: "/india/heritage.jpg" },
  {
    name: "Odisha",
    tagline: "Temple Trails & Serene Beaches",
    image: "/odisha/hero.jpg",
    href: "/odisha",
  },
  { name: "Madhya Pradesh", tagline: "The Heart of Incredible India", image: "/india/heritage.jpg" },
  { name: "Assam", tagline: "Land of Tea, Rhinos & Tranquility", image: "/india/river.jpg" },
  {
    name: "Puducherry",
    tagline: "The French Riviera of the East",
    image: "/puducherry/hero.jpg",
    href: "/puducherry",
  },
  {
    name: "Tamil Nadu",
    tagline: "Culture, Temples & Timeless Traditions",
    image: "/india/temple.jpg",
  },
  {
    name: "Jharkhand",
    tagline: "Forests, Waterfalls & Tribal Culture",
    image: "/jharkhand/hero.jpg",
    href: "/jharkhand",
  },
  { name: "Punjab", tagline: "Land of Five Rivers", image: "/india/city.jpg", href: "/punjab" },
  {
    name: "Lakshadweep",
    tagline: "Coral Paradise of India",
    image: "/lakshadweep/hero.jpg",
    href: "/lakshadweep",
  },
  {
    name: "West Bengal",
    tagline: "Culture, Literature & Legacy",
    image: "/west-bengal/hero.jpg",
    href: "/west-bengal",
  },
  {
    name: "Bihar",
    tagline: "Land of Ancient Wisdom",
    image: "/bihar/hero.jpg",
    href: "/bihar",
  },
];

const themes = [
  {
    name: "Heritage",
    description:
      "Step into India’s royal past through its majestic forts, palaces & ancient temples. Every monument tells a story of kings, empires & timeless artistry.",
  },
  {
    name: "Nature",
    description:
      "From the misty Himalayas to the serene backwaters and golden deserts, India’s landscapes are pure magic. Explore nature in every form — tranquil & breathtakingly beautiful.",
  },
  {
    name: "Spiritual",
    description:
      "Journey through sacred temples, mosques, churches, and monasteries across India. Experience peace, devotion, and the spiritual energy that unites a diverse nation.",
  },
  {
    name: "Adventure",
    description:
      "Feel the thrill with trekking, rafting, paragliding, and more across India’s stunning terrains. For every adventurer, there’s a challenge — from mountain peaks to roaring rivers.",
  },
  {
    name: "Food",
    description:
      "Taste the soul of India through its regional cuisines and vibrant street food. Each bite carries centuries of tradition, spice, and flavor.",
  },
  {
    name: "Festivals",
    description:
      "Celebrate life with India’s grand festivals — Diwali, Holi, Durga Puja, Onam, and countless others. A land where every season, color, and sound turns into a joyful celebration.",
  },
];

const stories = [
  {
    name: "Ananya Sharma",
    location: "New Delhi",
    title: "My First Trip to Varanasi – A Spiritual Awakening",
    description:
      "Varanasi wasn’t just a destination — it was an experience that touched my soul. Watching the Ganga Aarti under the twilight sky made me feel the divine rhythm of life. The city breathes spirituality at every corner.",
    image: "/india/ananya.jpg",
  },
  {
    name: "Rohit Verma",
    location: "Bengaluru",
    title: "Trekking: My First Step into the Clouds",
    description:
      "As a first-time trekker, the Triund trail in Himachal Pradesh challenged me but rewarded me with views I’ll never forget. Camping under a million stars changed how I see adventure forever.",
    image: "/india/rohit.jpg",
  },
  {
    name: "Ayesha Khan",
    location: "Lucknow",
    title: "Street Food Safari in Old Delhi",
    description:
      "From spicy chaat to creamy kulfi, every bite in Old Delhi was a celebration of flavors. Walking through Chandni Chowk’s lanes, I realized that food here is not just a meal — it’s a story of culture.",
    image: "/india/ayesha.jpg",
  },
];

export default function Home() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <Image
          className={styles.heroBg}
          src="/himachal-pradesh/hero.jpg"
          alt="Snowy Himalayan mountains in India"
          fill
          priority
          sizes="100vw"
        />

        <div className={styles.heroContent}>
          <div className={styles.heroTextGroup}>
            <h1>Discover India</h1>
            <p className={styles.subtitle}>
              A Journey Through Culture, Nature &amp; Heritage
            </p>
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

      <section className={styles.introSection}>
        <h2>Join the Journey Through Ages</h2>
        <p className={styles.introLead}>A Land Where Every Mile Tells a Story</p>
        <p>
          From the snow-capped peaks of the Himalayas to the golden sands of Rajasthan, from the
          backwaters of Kerala to the vibrant festivals of Gujarat — India is a kaleidoscope of
          cultures, colors, and traditions. This website is your complete guide to exploring every
          corner of this incredible country.
        </p>
        <p>
          Find detailed information about each state, uncover hidden gems, explore heritage sites,
          nature trails, spiritual journeys, local cuisines, and real traveler stories — all in one
          place. Whether you’re a first-time visitor or a passionate wanderer, let your next
          adventure begin here.
        </p>
        <Link className={styles.exploreLink} href="/states">
          Explore India
        </Link>
      </section>

      <section className={styles.destinationSection} id="destinations">
        <h2>Discover India’s most visited destinations</h2>
        <div className={styles.destinationGrid}>
          {destinations.map((destination) => (
            <Link
              className={styles.destinationCard}
              href={destination.href ?? "/states"}
              key={destination.name}
            >
              <Image
                src={destination.image}
                alt=""
                fill
                sizes="(max-width: 700px) 80vw, 462px"
              />
              <span className={styles.destinationOverlay} />
              <span className={styles.destinationInfo}>
                <strong>{destination.name}</strong>
                <span>{destination.tagline}</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.themeSection} id="themes">
        <h2>Explore by Theme</h2>
        <div className={styles.themeGrid}>
          {themes.map((theme) => (
            <article className={styles.themeCard} key={theme.name}>
              <h3>{theme.name}</h3>
              <p>{theme.description}</p>
              <Link className={styles.themeButton} href="/states">
                Start Exploring
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.seasonalSection} id="seasonal">
        <h2>Seasonal Suggestions</h2>
        <div className={styles.seasonalFeature}>
          <div className={styles.seasonalTextBlock}>
            <div className={styles.seasonalTitle}>Winter Wonders</div>
            <div className={styles.seasonalSubtitle}>(November – February)</div>
            <div className={styles.seasonalHeadline}>Best Places to Visit in Winter 2025</div>
            <p>
              Experience the charm of snow-covered mountains, desert festivals, and cozy hill
              stations. Explore Shimla, Manali, Kashmir, Udaipur, or the magical Rann of Kutch under
              the stars.
            </p>
            <Link className={styles.seasonalLink} href="/states">
              Explore winter destinations
            </Link>
          </div>
          <Image
            className={styles.seasonalImage}
            src="/india/winter.jpg"
            alt="Snow-covered Himalayan mountains beneath a starry sky"
            width={900}
            height={600}
            sizes="(max-width: 700px) 100vw, 50vw"
          />
        </div>
      </section>

      <section className={styles.storiesSection} id="stories">
        <h2>Traveler Stories</h2>
        <div className={styles.storyGrid}>
          {stories.map((story) => (
            <article className={styles.storyCard} key={story.name}>
              <div className={styles.storyAuthorBlock}>
                <Image
                  className={styles.storyAvatar}
                  src={story.image}
                  alt=""
                  width={300}
                  height={300}
                />
                <span className={styles.authorName}>{story.name},</span>
                <span className={styles.authorLocation}>{story.location}</span>
              </div>
              <h3>{story.title}</h3>
              <p>{story.description}</p>
              <Link className={styles.readMore} href="/states">
                Read More......
              </Link>
            </article>
          ))}
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.footerBrand}>Journey Through Ages</div>
          <div className={styles.footerTagline}>Discover India, One Story at a Time</div>
          <div className={styles.footerText}>
            Journey Through Ages is your window into India’s rich heritage, breathtaking
            landscapes, and vibrant traditions. From ancient temples to modern marvels, we bring you
            stories, destinations, and experiences that define the heart of India. Explore, learn,
            and immerse yourself in the timeless beauty of this incredible land.
          </div>

          <div className={styles.footerColumns}>
            <div>
              <h4>Quick Links</h4>
              <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/states">Explore</Link></li>
                <li><Link href="#themes">Experiences</Link></li>
                <li><Link href="#destinations">Travel Guides</Link></li>
                <li><Link href="/blog">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h4>Resources</h4>
              <ul>
                <li><Link href="/about-india">About India</Link></li>
                <li><a href="mailto:hello@journeythroughages.com">Contact Us</a></li>
                <li><Link href="#privacy">Privacy Policy</Link></li>
                <li><Link href="#terms">Terms of Use</Link></li>
              </ul>
            </div>
            <div>
              <h4>Connect With Us</h4>
              <ul>
                <li><a href="https://www.instagram.com/">Instagram</a></li>
                <li><a href="https://www.youtube.com/">YouTube</a></li>
                <li><a href="https://www.facebook.com/">Facebook</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.copyright}>© 2025 Incredible India 360. All Rights Reserved.</div>
      </footer>
    </main>
  );
}
