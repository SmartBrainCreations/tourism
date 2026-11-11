import Image from "next/image";
import Link from "next/link";
import { stateRegions } from "../state-destinations";
import styles from "./page.module.css";

const stories = [
  {
    title: "Aarav’s Himalayan Trek in Uttarakhand",
    author: "Ananya Sharma",
    quote: "“The mountains taught me patience, and the sky taught me wonder.”",
    image: "/india/nature.jpg",
    imageAlt: "A scenic Himalayan landscape",
    paragraphs: [
      "I’ve always been a city person, but something about the Himalayas called me. Trekking through Roopkund and the Valley of Flowers was like walking into another world — valleys blanketed in wildflowers, snow-capped peaks piercing the clouds, and rivers singing songs of time.",
      "The nights were the best part. We camped under the stars, shared stories with fellow trekkers, and watched the moonlight glitter on frozen streams. Local guides told us legends of the area — of Roopkund’s mysterious skeleton lake and the medicinal plants scattered across the valleys.",
      "The trek was challenging, but it transformed my perspective. Adventure isn’t just about adrenaline — it’s about connecting deeply with nature and finding stillness within chaos.",
    ],
  },
  {
    title: "Priya’s Culinary Journey Through Kerala",
    author: "Priya",
    quote: "“I came for the backwaters, but I stayed for the flavors.”",
    image: "/india/food.jpg",
    imageAlt: "A welcoming restaurant filled with warm light",
    paragraphs: [
      "Kerala welcomed me with a warm monsoon drizzle and the aroma of spices. I spent my days on Alleppey houseboats, gliding through serene backwaters, and my evenings in bustling local markets tasting fresh seafood.",
      "One of my favorite experiences was learning to make Kerala Sadya, a traditional vegetarian feast served on a banana leaf. Every dish — from avial to payasam — told a story of harvest, devotion, and family gatherings. I also tried appam with stew at a small local eatery where the chef treated me like family.",
      "Kerala’s cuisine isn’t just food — it’s culture on a plate. By the end of my trip, I wasn’t just full; I felt nourished in a way I hadn’t anticipated.",
    ],
  },
  {
    title: "Rohan’s Festival Adventure in West Bengal",
    author: "Rohan",
    quote: "“I didn’t just witness Durga Puja — I became part of it.”",
    image: "/india/festivals.jpg",
    imageAlt: "Travelers sharing a colorful cultural celebration",
    paragraphs: [
      "Visiting Kolkata during Durga Puja was unlike anything I’ve ever experienced. The city transforms into a wonderland of lights, music, and artistry. Every pandal (temporary festival structure) was a marvel, each telling stories of mythology, society, and hope.",
      "I joined locals for dhunuchi dance rituals, tasting street foods like puchka and mishti doi between performances. It wasn’t just a festival; it was a city-wide celebration of life, resilience, and community.",
      "The energy was contagious. I realized that festivals in India aren’t passive experiences — they demand participation, and in return, they give memories that last a lifetime.",
    ],
  },
  {
    title: "Anika’s Handicraft Hunt in Rajasthan",
    author: "Anika",
    quote: "“Every item I bought felt like a story captured in color and texture.”",
    image: "/india/heritage.jpg",
    imageAlt: "A historic Indian monument and its detailed architecture",
    paragraphs: [
      "I’ve always been fascinated by artisanal crafts, so I planned my trip around India’s handicraft hubs. In Jaipur, I marveled at blue pottery, block-printed fabrics, and gemstone jewelry, bargaining playfully with local artisans who shared stories of family traditions.",
      "Then I traveled to Kashmir, where the softest Pashmina shawls and intricately woven carpets made me feel like I was holding history in my hands. Watching artisans work patiently for hours to create a single masterpiece humbled me.",
      "Shopping here isn’t just a transaction — it’s a dialogue with tradition, creativity, and culture. Every item I brought home tells a story of a place and the hands that made it.",
    ],
  },
  {
    title: "Sameer’s Spiritual Retreat in Rishikesh",
    author: "Sameer",
    quote: "“I came seeking peace, and I found myself.”",
    image: "/india/spiritual.jpg",
    imageAlt: "A serene Indian spiritual landmark",
    paragraphs: [
      "I arrived in Rishikesh, a city where the Ganges flows like a meditation, and yoga is a way of life. Mornings were spent on the riverbank, practicing yoga at sunrise, listening to temple bells and the murmur of devotees. Afternoons were devoted to Ayurveda workshops, learning to balance the body through oils, herbs, and mindful eating.",
      "One evening, I joined a Ganga Aarti ceremony, and the sight of hundreds of floating lamps was magical. It made me reflect on life’s impermanence and beauty.",
      "Rishikesh taught me that travel doesn’t always have to be about seeing new places — sometimes, it’s about seeing yourself in a new light.",
    ],
  },
];

export default function BlogPage() {
  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <Image
          className={styles.heroImage}
          src="/india/hero.jpg"
          alt="A road winding through a dramatic Indian landscape"
          fill
          priority
          sizes="100vw"
        />
        <div className={styles.heroShade} />
        <div className={styles.heroContent}>
          <h1>Stories That Inspire</h1>
          <p>Real journeys, local discoveries, and memories from travelers across India.</p>
          <Link className={styles.heroLink} href="#stories">
            Read the Stories
          </Link>
        </div>
      </header>

      <section className={styles.storiesSection} id="stories" aria-labelledby="stories-title">
        <div className={styles.sectionIntro}>
          <h2 id="stories-title">Stories from the Road</h2>
          <p>
            Every journey leaves a story. Travel with five explorers as they discover India’s
            mountains, flavors, festivals, crafts, and moments of calm.
          </p>
        </div>
        <div className={styles.storyList}>
          {stories.map((story, index) => (
            <article className={styles.story} key={story.title}>
              <div className={styles.storyPhoto}>
                <Image
                  src={story.image}
                  alt={story.imageAlt}
                  fill
                  sizes="(max-width: 700px) 140px, 300px"
                />
              </div>
              <div className={styles.storyContent}>
                <span className={styles.storyNumber}>Story {String(index + 1).padStart(2, "0")}</span>
                <h3>{story.title}</h3>
                <p className={styles.quote}>{story.quote}</p>
                <div className={styles.storyBody}>
                  {story.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <p className={styles.author}>— {story.author}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.destinations}>
        <h2>Explore about the places</h2>
        {stateRegions.map((region) => (
          <div className={styles.destinationRegion} key={region.name}>
            <h3>{region.name}</h3>
            <div className={styles.destinationGrid}>
              {region.states.map((state) => {
                const card = (
                  <>
                    <Image
                      src={state.image}
                      alt={`Scenic landscape representing ${state.name}`}
                      fill
                      sizes="(max-width: 650px) 100vw, (max-width: 1050px) 50vw, 33vw"
                    />
                    <span className={styles.cardShade} />
                    <span className={styles.destinationText}>
                      <strong>{state.name}</strong>
                      <span>{state.subtitle}</span>
                    </span>
                  </>
                );

                return state.href ? (
                  <Link className={styles.destinationCard} href={state.href} key={state.name}>
                    {card}
                  </Link>
                ) : (
                  <article className={styles.destinationCard} key={state.name}>
                    {card}
                  </article>
                );
              })}
            </div>
          </div>
        ))}
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <h2>Journey Through Ages</h2>
          <p className={styles.footerTagline}>Discover India, One Story at a Time</p>
          <p className={styles.footerDescription}>
            Journey Through Ages is your window into India’s rich heritage, breathtaking
            landscapes, and vibrant traditions. From ancient temples to modern marvels, we
            bring you stories, destinations, and experiences that define the heart of India.
            Explore, learn, and immerse yourself in the timeless beauty of this incredible
            land.
          </p>
          <nav className={styles.footerNav} aria-label="Footer navigation">
            <div>
              <h3>Quick Links</h3>
              <Link href="/">Home</Link>
              <Link href="/states">Explore</Link>
              <Link href="/experiences">Experiences</Link>
              <Link href="/travel-guides">Travel Guides</Link>
              <Link href="/blog">Blog</Link>
            </div>
            <div>
              <h3>Resources</h3>
              <Link href="/about-india">About India</Link>
              <a href="mailto:hello@journeythroughages.com">Contact Us</a>
              <Link href="/#privacy">Privacy Policy</Link>
              <Link href="/#terms">Terms of Use</Link>
            </div>
            <div>
              <h3>Connect With Us</h3>
              <a href="https://www.instagram.com/">Instagram</a>
              <a href="https://www.youtube.com/">YouTube</a>
              <a href="https://www.facebook.com/">Facebook</a>
            </div>
          </nav>
          <p className={styles.copyright}>© 2025 Incredible India 360. All Rights Reserved.</p>
        </div>
      </footer>
    </main>
  );
}
