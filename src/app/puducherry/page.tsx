import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import styles from "../destination-page.module.css";

const destinations = [
  {
    name: "White Town",
    title: "The French Quarter",
    description:
      "The heart of Puducherry’s charm lies in White Town, a district lined with colonial villas, bougainvillea-covered walls, and chic cafes. Walk through Rue Dumas, visit the Notre Dame des Anges Church, and experience the perfect blend of French architecture and Tamil warmth.",
    image: "/puducherry/white-town.jpg",
    alt: "French colonial architecture in Puducherry’s White Town",
  },
  {
    name: "Auroville",
    title: "The Universal City",
    description:
      "Founded by The Mother of the Sri Aurobindo Ashram, Auroville is an experimental township dedicated to human unity. Its centerpiece, the golden Matrimandir, symbolizes peace and spiritual consciousness — a must-visit for those seeking inner balance.",
    image: "/puducherry/auroville.jpg",
    alt: "The golden Matrimandir at Auroville",
  },
  {
    name: "Promenade Beach",
    title: "The Coastal Stroll",
    description:
      "Stretching along the Bay of Bengal, Promenade Beach is perfect for morning walks and sunset views. Lined with historic landmarks like Gandhi Statue, French War Memorial, and Old Lighthouse, it’s the most photographed spot in Puducherry.",
    image: "/puducherry/promenade.jpg",
    alt: "The rocky shoreline along Puducherry’s Promenade",
  },
  {
    name: "Paradise Beach",
    title: "The Island Escape",
    description:
      "Accessible by boat from Chunnambar backwaters, Paradise Beach offers soft sands, blue waters, and solitude away from the city buzz. It’s ideal for swimming, picnics, and simply soaking in coastal tranquility.",
    image: "/puducherry/paradise-beach.jpg",
    alt: "Soft sand and blue water at Paradise Beach, Puducherry",
  },
  {
    name: "Sri Aurobindo Ashram",
    title: "The Spiritual Heart of Puducherry",
    description:
      "Founded in 1926, this ashram is a sanctuary of peace and meditation. The teachings of Sri Aurobindo and The Mother continue to inspire seekers from across the world, making it a center for spiritual enlightenment.",
    image: "/puducherry/ashram.jpg",
    alt: "The Sri Aurobindo Ashram in Puducherry",
  },
];

const festivals = [
  {
    title: "Pongal",
    description:
      "A four-day harvest celebration shared across Tamil-speaking communities, with decorated homes, family gatherings, and offerings of freshly harvested rice.",
  },
  {
    title: "Masi Magam",
    description:
      "A major coastal festival when temple deities are taken in procession to the sea for sacred bathing rituals.",
  },
  {
    title: "Bastille Day",
    description:
      "Puducherry’s French heritage is remembered with a civic celebration, including a parade and tributes to former soldiers.",
  },
  {
    title: "Villiyanur Temple Car Festival",
    description:
      "A longstanding temple festival in which a decorated ceremonial chariot is drawn through the streets by devotees.",
  },
];

const seasons = [
  {
    name: "Winter",
    dates: "October–February",
    description:
      "Pleasant weather makes this the best season for sightseeing, beach walks, and outdoor dining.",
  },
  {
    name: "Monsoon",
    dates: "June–September",
    description:
      "The rains bring greenery and dramatic coastal skies; check local sea conditions before swimming.",
  },
  {
    name: "Summer",
    dates: "March–May",
    description:
      "Hot and humid days are best planned around early-morning outings, quiet stays, and indoor visits.",
  },
];

const travelRoutes = [
  {
    title: "By Air",
    description:
      "Puducherry Airport handles limited domestic flights. Chennai International Airport, about 150 km away, offers a wider choice of connections.",
  },
  {
    title: "By Rail",
    description:
      "Puducherry railway station connects the town with selected cities. Villupuram Junction is a major nearby rail hub for onward travel.",
  },
  {
    title: "By Road",
    description:
      "The East Coast Road connects Chennai and Puducherry along the coast. Buses and taxis also link Puducherry with Tamil Nadu towns.",
  },
];

const stays = [
  {
    title: "Heritage stays",
    description:
      "Restored colonial homes and boutique hotels in and around White Town.",
  },
  {
    title: "Beach resorts",
    description:
      "Seaside resorts and guesthouses near Serenity Beach and the southern coast.",
  },
  {
    title: "Ashram and Auroville stays",
    description:
      "Simple guesthouses and community stays; check each place’s booking and visitor requirements in advance.",
  },
];

const travelTips = [
  "Explore White Town on foot or by bicycle, and keep an eye out for traffic on narrow streets.",
  "Check Auroville’s visitor information before travelling; access to some areas requires advance planning.",
  "Use authorized boats to reach Paradise Beach and follow local safety advice.",
  "Carry water and sun protection, especially during warm, humid months.",
  "Dress respectfully at religious sites and follow posted photography guidance.",
];

const experiences = [
  {
    title: "Heritage walks",
    description:
      "Wander White Town’s pastel streets, colonial-era buildings, churches, and Tamil neighborhoods.",
  },
  {
    title: "Auroville visit",
    description:
      "Learn about Auroville’s community and see the Matrimandir from the designated visitor areas.",
  },
  {
    title: "Beach days",
    description:
      "Take a sunrise walk along the Promenade or spend a relaxed day by the coast.",
  },
  {
    title: "Boating and water activities",
    description:
      "Take a local boat trip through the Chunnambar backwaters to Paradise Beach.",
  },
  {
    title: "Wellness and reflection",
    description:
      "Find quiet time at the Sri Aurobindo Ashram or join a locally offered yoga or wellness session.",
  },
];

const handicrafts = [
  {
    title: "Auroville handmade paper",
    description:
      "Handmade paper and paper goods produced by local workshops and community enterprises.",
  },
  {
    title: "Pottery and ceramics",
    description:
      "Hand-shaped clay pieces and small-batch ceramics from local studios.",
  },
  {
    title: "Textiles",
    description:
      "Cotton garments, handloom fabrics, and locally made home textiles.",
  },
  {
    title: "Incense and natural products",
    description:
      "Handmade incense, soaps, and other small-batch products sold by local makers.",
  },
];

const otherPlaces = [
  {
    name: "Tamil Nadu",
    tagline: "Culture, Temples & Timeless Traditions",
    image: "/tamil-nadu/hero.jpg",
    href: "/tamil-nadu",
  },
  {
    name: "Kerala",
    tagline: "God’s Own Country",
    image: "/kerala/hero.jpg",
    href: "/kerala",
  },
  {
    name: "Andhra Pradesh",
    tagline: "The Essence of the East Coast",
    image: "/andhra-pradesh/hero.jpg",
    href: "/andhra-pradesh",
  },
  {
    name: "Karnataka",
    tagline: "Sculpted by History",
    image: "/karnataka/hero.jpg",
    href: "/karnataka",
  },
  {
    name: "Lakshadweep",
    tagline: "Coral Paradise of India",
    image: "/lakshadweep/hero.jpg",
    href: "/lakshadweep",
  },
  {
    name: "Goa",
    tagline: "Beaches & Vibrance",
    image: "/india/island.jpg",
    href: "/states",
  },
];

const imageCredits = [
  {
    image: "Pondicherry Panorama 1",
    creator: "Karthik Easvur",
    license: "CC BY-SA 3.0",
    href: "https://commons.wikimedia.org/wiki/File:Pondicherry_Panorama_1.jpg",
  },
  {
    image: "Puducherry White Town",
    creator: "Rainer Halama",
    license: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Puducherry-White_Town-WUS02344.jpg",
  },
  {
    image: "Puducherry French Quarter",
    creator: "Rainer Halama",
    license: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Puducherry-French_Quarter-WUS02272.jpg",
  },
  {
    image: "The Matrimandir in Auroville",
    creator: "Matthew T Rader",
    license: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:The_Matrimandir_in_Auroville,_Tamil_Nadu,_India.jpg",
  },
  {
    image: "Pondicherry Rock Beach aerial view",
    creator: "Karthik Easvur",
    license: "CC BY-SA 3.0",
    href: "https://commons.wikimedia.org/wiki/File:Pondicherry-Rock_beach_aerial_view.jpg",
  },
  {
    image: "Paradise Beach, Puducherry",
    creator: "P Jeganathan",
    license: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Beaches_of_Puducherry_Paradise_Beach_IMG_20180609_174504082_HDR.jpg",
  },
  {
    image: "Sri Aurobindo Ashram",
    creator: "Pinakpani",
    license: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Sri_Aurobindo_Ashram,_a_spiritual_ashram_of_Sri_Aurobindo_in_Pondicherry_01.jpg",
  },
  {
    image: "Masi Magam ritual, Pondicherry",
    creator: "Minolaf",
    license: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Theerthavari_or_deity_bath_ritual,_at_Masi_Magam,_Pondicherry,_2024.jpg",
  },
  {
    image: "The Spot Cafe on Puducherry beach road",
    creator: "iMahesh",
    license: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:The_Spot_Cafe_on_Puducherry_beach_road.jpg",
  },
  {
    image: "Puducherry Beach Road",
    creator: "Pinakpani",
    license: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Puducherry_Beach_Road_in_Pondicherry_04.jpg",
  },
  {
    image: "Town Hall of Auroville",
    creator: "Kaspar Konrad",
    license: "Public domain",
    href: "https://commons.wikimedia.org/wiki/File:Town_Hall_of_Auroville.jpg",
  },
  {
    image: "Earthen jugs at Auroville",
    creator: "Keshuseeker",
    license: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Earthen_Jugs_getting_baked_in_sun_at_Auroville.jpg",
  },
];

function SectionHeading({ children }: { children: ReactNode }) {
  return <h2 className={styles.bandHeader}>{children}</h2>;
}

function BannerImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className={styles.bannerImage}>
      <Image src={src} alt={alt} fill sizes="(max-width: 900px) 100vw, 90vw" />
    </div>
  );
}

export default function PuducherryPage() {
  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <Image
          className={styles.heroImage}
          src="/puducherry/hero.jpg"
          alt="Puducherry’s shoreline and coastal promenade"
          fill
          priority
          sizes="100vw"
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <h1>Puducherry</h1>
          <p className={styles.tagline}>The French Riviera of the East</p>
          <p className={styles.heroDescription}>
            A tranquil coastal haven where French elegance meets Indian soul.
            Pastel-colored villas, yoga retreats, and serene beaches make
            Puducherry a place to slow down and explore.
          </p>
        </div>
      </header>

      <section className={styles.section} aria-labelledby="puducherry-heading">
        <div className={styles.titleBlock}>
          <h2 id="puducherry-heading">
            Puducherry — The French Riviera of the East
          </h2>
          <p>
            A tranquil coastal haven on the southeastern shore of India,
            Puducherry (Pondicherry) is where French elegance meets Indian soul.
            With its pastel-colored villas, cobblestone streets, yoga retreats,
            and serene beaches, this Union Territory offers peace, spirituality,
            and timeless charm. Whether you’re seeking reflection in Auroville,
            serenity by the sea, or a stroll through colonial lanes — Puducherry
            welcomes you with calmness and color.
          </p>
        </div>
      </section>

      <section className={styles.section} id="introduction">
        <SectionHeading>Introduction</SectionHeading>
        <div className={styles.introGrid}>
          <div className={styles.featureImage}>
            <Image
              src="/puducherry/introduction.jpg"
              alt="A street in Puducherry’s French Quarter"
              fill
              sizes="(max-width: 900px) 100vw, 40vw"
            />
          </div>
          <div className={styles.introCopy}>
            <h3>Introduction</h3>
            <p>
              Puducherry’s distinct character comes from the meeting of French
              colonial heritage and Tamil culture. Its compact neighborhoods
              bring together colorful architecture, places of worship, cafes,
              quiet ashrams, and a long Bay of Bengal shoreline. From the
              historic lanes of White Town to the international community of
              Auroville and the calm of its beaches, the Union Territory offers
              a relaxed coastal escape.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section} id="destinations">
        <SectionHeading>Top Tourist Destinations</SectionHeading>
        <div className={styles.destinationList}>
          {destinations.map((destination, index) => (
            <article
              className={`${styles.destination} ${index % 2 ? styles.destinationReverse : ""}`}
              key={destination.name}
            >
              <div className={styles.destinationImage}>
                <Image
                  src={destination.image}
                  alt={destination.alt}
                  fill
                  sizes="(max-width: 900px) 100vw, 40vw"
                />
              </div>
              <div className={styles.destinationCopy}>
                <h3>
                  {index + 1}. {destination.name} – {destination.title}
                </h3>
                <p>{destination.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section} id="culture">
        <SectionHeading>Culture &amp; Heritage</SectionHeading>
        <BannerImage
          src="/puducherry/white-town.jpg"
          alt="Colonial-era architecture in Puducherry’s French Quarter"
        />
        <div className={styles.longCopy}>
          <p>
            Puducherry’s identity is a beautiful fusion of French colonial
            legacy and South Indian tradition. Its architecture, language, and
            cuisine reflect this dual heritage — Tamil temples stand alongside
            French cafés, and church bells blend with temple chants. Festivals,
            art, and daily life here move at a relaxed rhythm, echoing its
            motto: “Give Time a Break.” It’s a place where history lingers in
            every corner and peace defines every day.
          </p>
        </div>
      </section>

      <section className={styles.section} id="festivals">
        <SectionHeading>Festivals &amp; Events</SectionHeading>
        <BannerImage
          src="/puducherry/festival.jpg"
          alt="A Masi Magam ceremonial procession by the coast"
        />
        <div className={styles.infoGrid}>
          {festivals.map((festival) => (
            <article className={styles.infoCard} key={festival.title}>
              <h3>{festival.title}</h3>
              <p>{festival.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section} id="cuisine">
        <SectionHeading>Local Cuisine</SectionHeading>
        <BannerImage
          src="/puducherry/cuisine.jpg"
          alt="A cafe along Puducherry’s beach road"
        />
        <div className={styles.longCopy}>
          <p>
            Puducherry’s food is a delectable blend of French finesse and South
            Indian flavors. From buttery croissants to spicy curries, the
            town’s culinary scene offers an international yet homely
            experience. Try Tamil-style meals, fresh seafood, crisp dosas, and
            French-inspired breads and pastries.
          </p>
        </div>
      </section>

      <section className={styles.section} id="best-time">
        <SectionHeading>Best Time to Visit</SectionHeading>
        <BannerImage
          src="/puducherry/best-time.jpg"
          alt="The coastal road and shoreline in Puducherry"
        />
        <div className={styles.seasonGrid}>
          {seasons.map((season) => (
            <article className={styles.infoCard} key={season.name}>
              <h3>{season.name}</h3>
              <p className={styles.seasonDates}>({season.dates})</p>
              <p>{season.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section} id="travel">
        <SectionHeading>How to Reach</SectionHeading>
        <BannerImage
          src="/puducherry/hero.jpg"
          alt="The Puducherry coast, a landmark for visitors arriving in the city"
        />
        <div className={styles.routeGrid}>
          {travelRoutes.map((route) => (
            <article className={styles.infoCard} key={route.title}>
              <h3>{route.title}</h3>
              <p>{route.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section} id="stay">
        <SectionHeading>Accommodation &amp; Travel Tips</SectionHeading>
        <BannerImage
          src="/puducherry/stays.jpg"
          alt="A community building in Auroville"
        />
        <div className={styles.twoColumn}>
          <article className={styles.detailCard}>
            <h3>Stay Options</h3>
            {stays.map((stay) => (
              <p key={stay.title}>
                <strong>{stay.title}:</strong> {stay.description}
              </p>
            ))}
          </article>
          <article className={styles.detailCard}>
            <h3>Travel Tips</h3>
            <ul>
              {travelTips.map((tip) => (
                <li key={tip}>{tip}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className={styles.section} id="adventure">
        <SectionHeading>Adventure &amp; Experiences</SectionHeading>
        <BannerImage
          src="/puducherry/paradise-beach.jpg"
          alt="The sandy shoreline at Puducherry’s Paradise Beach"
        />
        <div className={styles.experienceGrid}>
          {experiences.map((experience) => (
            <article className={styles.infoCard} key={experience.title}>
              <h3>{experience.title}</h3>
              <p>{experience.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section} id="shopping">
        <SectionHeading>Handicrafts &amp; Shopping</SectionHeading>
        <BannerImage
          src="/puducherry/handicrafts.jpg"
          alt="Earthenware being made in Auroville"
        />
        <div className={styles.handicraftGrid}>
          {handicrafts.map((item) => (
            <article className={styles.infoCard} key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section} id="other-places">
        <SectionHeading>Explore other places also</SectionHeading>
        <div className={styles.otherPlacesGrid}>
          {otherPlaces.map((place) => (
            <Link
              className={styles.otherPlaceCard}
              href={place.href}
              key={place.name}
            >
              <Image
                src={place.image}
                alt=""
                fill
                sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 33vw"
              />
              <span className={styles.otherPlaceOverlay} />
              <span className={styles.otherPlaceText}>
                <strong>{place.name}</strong>
                <span>{place.tagline}</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.section} aria-label="Image credits">
        <details className={styles.detailCard}>
          <summary>Image credits and licenses</summary>
          <ul className={styles.imageCredits}>
            {imageCredits.map((credit) => (
              <li key={credit.image}>
                <a href={credit.href} target="_blank" rel="noreferrer">
                  {credit.image}
                </a>{" "}
                by {credit.creator} ({credit.license})
              </li>
            ))}
          </ul>
        </details>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerBrand}>Journey Through Ages</div>
        <p className={styles.footerTagline}>Discover India, One Story at a Time</p>
        <p className={styles.footerText}>
          Journey Through Ages is your window into India’s rich heritage,
          breathtaking landscapes, and vibrant traditions. Discover
          Puducherry’s French-Tamil heritage, welcoming communities, and
          peaceful coastline as part of the wider story of India.
        </p>
        <nav className={styles.footerLinks} aria-label="Footer navigation">
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
          </div>
          <div>
            <h3>Connect With Us</h3>
            <a href="https://www.instagram.com/">Instagram</a>
            <a href="https://www.youtube.com/">YouTube</a>
            <a href="https://www.facebook.com/">Facebook</a>
          </div>
        </nav>
        <p className={styles.copyright}>© 2025 Incredible India 360. All Rights Reserved.</p>
      </footer>
    </main>
  );
}
