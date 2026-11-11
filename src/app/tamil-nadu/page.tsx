import Image from "next/image";
import Link from "next/link";
import styles from "../destination-page.module.css";

const destinations = [
  {
    name: "Chennai",
    title: "The Gateway to South India",
    description:
      "The vibrant capital city blends tradition and modernity beautifully. From the ancient Kapaleeshwarar Temple and Marina Beach to world-class museums and tech parks, Chennai offers the pulse of urban India with a cultural soul.",
    image: "/tamil-nadu/chennai.jpg",
    alt: "Chennai coastline with a temple and city skyline",
  },
  {
    name: "Madurai",
    title: "The Temple City",
    description:
      "One of the oldest cities in India, Madurai is famed for the spectacular Meenakshi Amman Temple — a masterpiece of Dravidian architecture. The aroma of jasmine flowers, bustling streets, and sacred chants make it a truly spiritual experience.",
    image: "/tamil-nadu/hero.jpg",
    alt: "Meenakshi Temple in Madurai",
  },
  {
    name: "Thanjavur",
    title: "The Land of Chola Glory",
    description:
      "Home to the grand Brihadeeswarar Temple, a UNESCO World Heritage Site, Thanjavur showcases the grandeur of Chola art and architecture. It is also the birthplace of Tanjore paintings and classical Carnatic music.",
    image: "/tamil-nadu/thanjavur.jpg",
    alt: "Brihadeeswarar Temple in Thanjavur",
  },
  {
    name: "Rameswaram",
    title: "The Sacred Island",
    description:
      "A major Char Dham pilgrimage site, Rameswaram is where Lord Rama is believed to have built the bridge to Lanka. With its pristine beaches, Ramanathaswamy Temple, and tranquil atmosphere, it is both sacred and scenic.",
    image: "/tamil-nadu/rameswaram.jpg",
    alt: "Rameswaram coast and temple complex",
  },
  {
    name: "Ooty",
    title: "The Queen of Hill Stations",
    description:
      "Nestled in the Nilgiris, Ooty is known for its misty hills, colonial charm, and sprawling tea gardens. Enjoy a ride on the Nilgiri Mountain Railway, a UNESCO site, and stroll through lush botanical gardens.",
    image: "/tamil-nadu/ooty.jpg",
    alt: "Tea gardens and misty hills in Ooty",
  },
];

const festivals = [
  {
    title: "Pongal (January)",
    description:
      "A four-day harvest festival celebrating prosperity with rituals, bull-taming (Jallikattu), and festive meals.",
  },
  {
    title: "Natyanjali Dance Festival (February–March)",
    description:
      "Held in Chidambaram Temple, this festival brings together classical dancers from across the nation.",
  },
  {
    title: "Karthigai Deepam (November–December)",
    description:
      "Temples and homes glow with lamps, symbolizing divine light and purity.",
  },
  {
    title: "Mahamaham Festival (Every 12 Years)",
    description:
      "Held in Kumbakonam, it attracts thousands of devotees to bathe in the sacred Mahamaham tank.",
  },
  {
    title: "Chithirai Festival (April)",
    description:
      "In Madurai, it reenacts the celestial wedding of Meenakshi and Sundareshwarar with grandeur and devotion.",
  },
];

const seasons = [
  {
    name: "Winter",
    dates: "November–February",
    description: "Ideal for temple visits, sightseeing, beaches, and cultural exploration.",
  },
  {
    name: "Summer",
    dates: "March–May",
    description: "Best for hill stations like Ooty and Kodaikanal, with cooler temperatures.",
  },
  {
    name: "Monsoon",
    dates: "June–October",
    description: "Perfect for scenic drives, lush landscapes, and rejuvenating breaks.",
  },
];

const travelRoutes = [
  {
    title: "By Air",
    description:
      "Major airports: Chennai, Madurai, Coimbatore, and Tiruchirappalli. International connectivity is strongest from Chennai and Coimbatore.",
  },
  {
    title: "By Rail",
    description:
      "Tamil Nadu has an extensive rail network connecting all major cities, with iconic routes such as the Nilgiri Mountain Railway.",
  },
  {
    title: "By Road",
    description:
      "Excellent highways like NH44 and NH32 connect Tamil Nadu to Kerala, Karnataka, and Andhra Pradesh. Scenic drives through the Western Ghats and East Coast Road (ECR) are unforgettable.",
  },
];

const stays = [
  {
    title: "Luxury",
    description: "Taj Fisherman’s Cove (Chennai), The Gateway Hotel (Madurai), and Sterling Ooty.",
  },
  {
    title: "Mid-Range",
    description: "GRT Hotels, Sangam Hotels, and Club Mahindra Resorts.",
  },
  {
    title: "Budget",
    description: "Guesthouses and traditional homestays near temples and hill towns.",
  },
];

const travelTips = [
  "Dress modestly in temples; remove footwear before entering.",
  "Learn a few Tamil phrases — locals appreciate it.",
  "Carry light cotton clothing and avoid the harsh afternoon heat in summer.",
  "Respect temple customs and photography rules.",
];

const experiences = [
  {
    title: "Hill Escapes",
    description: "Visit Ooty, Kodaikanal, and Yercaud for cool mountain air and scenic trekking.",
  },
  {
    title: "Temple Trails",
    description: "Explore Madurai, Thanjavur, Kanchipuram, and Rameswaram for sacred architecture and devotion.",
  },
  {
    title: "Wildlife",
    description: "Search for wildlife in Mudumalai, Anamalai, and Vedanthangal sanctuaries.",
  },
  {
    title: "Beaches",
    description: "Relax at Marina, Mahabalipuram, and Kanyakumari for sea breezes and sunset views.",
  },
  {
    title: "Cultural Shows",
    description: "Witness Bharatanatyam, Carnatic concerts, and silk-weaving demonstrations.",
  },
];

const handicrafts = [
  {
    title: "Kanchipuram Silk Sarees",
    description: "Handwoven with pure silk and gold threads — a symbol of elegance.",
  },
  {
    title: "Tanjore Paintings",
    description: "Iconic artwork with gold foil and divine themes.",
  },
  {
    title: "Bronze Idols",
    description: "World-renowned for Chola-style metal casting and devotional craftsmanship.",
  },
  {
    title: "Stone Sculptures",
    description: "From Mahabalipuram’s coastal workshops, these are rich in heritage and artistry.",
  },
  {
    title: "Temple Jewelry",
    description: "Traditional ornaments worn by classical dancers and temple devotees.",
  },
];

const cuisine = [
  {
    name: "Idli & Dosa",
    description: "South India’s iconic breakfast duo, served with chutney and sambar.",
  },
  {
    name: "Chettinad Chicken",
    description: "Spicy and aromatic curry from the Chettinad region.",
  },
  {
    name: "Pongal",
    description: "Comforting rice-lentil dish flavored with ghee and pepper.",
  },
  {
    name: "Fish Curry",
    description: "A tangy coconut-based delicacy from coastal Tamil Nadu.",
  },
  {
    name: "Kothu Parotta",
    description: "Shredded flatbread stir-fried with egg and spices — a street food favorite.",
  },
];

const desserts = [
  {
    name: "Payasam",
    description: "Sweet pudding made with milk, jaggery, and vermicelli.",
  },
  {
    name: "Mysore Pak",
    description: "Ghee-rich sweet with a crumbly texture.",
  },
  {
    name: "Kesari",
    description: "Semolina dessert flavored with saffron and nuts.",
  },
  {
    name: "Filter Coffee",
    description: "And of course, no Tamil meal is complete without a strong cup of filter coffee.",
  },
];

const otherPlaces = [
  {
    name: "Odisha",
    tagline: "Temple Trails & Serene Beaches",
    image: "/india/temple.jpg",
  },
  {
    name: "Madhya Pradesh",
    tagline: "The Heart of Incredible India",
    image: "/india/heritage.jpg",
  },
  {
    name: "Assam",
    tagline: "Land of Tea, Rhinos & Tranquility",
    image: "/india/river.jpg",
  },
  {
    name: "Puducherry",
    tagline: "French Charm of India",
    image: "/india/island.jpg",
  },
  {
    name: "Kerala",
    tagline: "God’s Own Country",
    image: "/kerala/hero.jpg",
  },
  {
    name: "Karnataka",
    tagline: "Sculpted by History",
    image: "/karnataka/hero.jpg",
  },
];

const imageCredits = [
  {
    image: "Meenakshi Temple west tower",
    creator: "Mamichaelraj",
    license: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:MEENAKSHI_TEMPLE-_WEST_TOWER.jpg",
  },
  {
    image: "Brihadeeswarar Temple 02",
    creator: "Bernard Gagnon",
    license: "CC BY-SA 3.0",
    href: "https://commons.wikimedia.org/wiki/File:Brihadeeswarar_Temple_02.jpg",
  },
  {
    image: "Rameswaram montage image",
    creator: "Various authors",
    license: "CC BY-SA 3.0",
    href: "https://commons.wikimedia.org/wiki/File:Rameswaram_montage_image.jpg",
  },
  {
    image: "Tea garden ooty nilgiris",
    creator: "PiolAtif",
    license: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Tea_garden_ooty_nilgiris,_india.jpg",
  },
  {
    image: "Bharata Natyam Performance DS",
    creator: "Augustus Binu",
    license: "CC BY-SA 3.0",
    href: "https://commons.wikimedia.org/wiki/File:Bharata_Natyam_Performance_DS.jpg",
  },
  {
    image: "Pongal Festival, Namakkal",
    creator: "Matthew T Rader",
    license: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:A_man_dancing_with_fire_at_a_Pongal_Festival_in_Namakkal,_Tamil_Nadu,_India.jpg",
  },
  {
    image: "Nilgiri Mountain Train",
    creator: "Various contributors",
    license: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Nilgiri_Mountain_Train.jpg",
  },
];

function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h2 className={styles.bandHeader}>{children}</h2>;
}

function BannerImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className={styles.bannerImage}>
      <Image src={src} alt={alt} fill sizes="(max-width: 900px) 100vw, 90vw" />
    </div>
  );
}

export default function TamilNaduPage() {
  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <Image
          className={styles.heroImage}
          src="/tamil-nadu/hero.jpg"
          alt="Tamil Nadu temple architecture under warm light"
          fill
          priority
          sizes="100vw"
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <h1>Tamil Nadu</h1>
          <p className={styles.tagline}>Where Culture Meets the Coast</p>
          <p className={styles.heroDescription}>
            From temple towns and hill stations to heritage arts and sunlit beaches,
            Tamil Nadu is a place where devotion, creativity, and coastal beauty meet.
          </p>
        </div>
      </header>

      <section className={styles.section} aria-labelledby="tamil-nadu-heading">
        <div className={styles.titleBlock}>
          <h2 id="tamil-nadu-heading">Tamil Nadu — Where Culture Meets the Coast</h2>
          <p>
            Explore India’s 28 states and 8 union territories — each offering its own
            culture, cuisine, and charm. Find the perfect destination for your next
            journey through ages.
          </p>
        </div>
      </section>

      <section className={styles.section} id="introduction">
        <SectionHeading>Introduction</SectionHeading>
        <div className={styles.introGrid}>
          <div className={styles.featureImage}>
            <Image
              src="/tamil-nadu/introduction.jpg"
              alt="Meenakshi Temple in Madurai"
              fill
              sizes="(max-width: 900px) 100vw, 40vw"
            />
          </div>
          <div className={styles.introCopy}>
            <h3>Introduction</h3>
            <p>
              Steeped in history and draped in devotion, Tamil Nadu is the cultural
              soul of South India. From the majestic Dravidian temples of Madurai and
              Thanjavur to the scenic hill stations of Ooty and Kodaikanal, every corner
              tells a story of art, faith, and timeless beauty. Whether it is the
              rhythmic beats of Bharatanatyam, the aroma of filter coffee, or the calm
              of the Coromandel Coast — Tamil Nadu offers a journey through heritage and
              heart.
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
        <BannerImage src="/tamil-nadu/culture.jpg" alt="Bharatanatyam dancer in costume" />
        <div className={styles.longCopy}>
          <p>
            Tamil Nadu is the cradle of Dravidian civilization, where temple
            architecture, classical arts, and spirituality thrive together. The state is
            home to ancient dynasties — Cholas, Pandyas, Pallavas, and Nayaks — who
            left behind architectural marvels. Art forms like Bharatanatyam, Carnatic
            music, and Kolam designs reflect its deep aesthetic roots. Here, faith isn’t
            just practiced — it’s lived through festivals, dance, and daily devotion.
          </p>
        </div>
      </section>

      <section className={styles.section} id="festivals">
        <SectionHeading>Festivals &amp; Events</SectionHeading>
        <BannerImage src="/tamil-nadu/festival.jpg" alt="Festival celebration in Tamil Nadu" />
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
        <BannerImage src="/tamil-nadu/hero.jpg" alt="Traditional Tamil Nadu meal setup" />
        <div className={styles.foodCategories}>
          <article>
            <h3>Signature Dishes</h3>
            <ul className={styles.foodList}>
              {cuisine.map((dish) => (
                <li key={dish.name}>
                  <strong>{dish.name}:</strong> {dish.description}
                </li>
              ))}
            </ul>
          </article>
          <article>
            <h3>Desserts</h3>
            <ul className={styles.foodList}>
              {desserts.map((dessert) => (
                <li key={dessert.name}>
                  <strong>{dessert.name}:</strong> {dessert.description}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className={styles.section} id="best-time">
        <SectionHeading>Best Time to Visit</SectionHeading>
        <BannerImage src="/tamil-nadu/best-time.jpg" alt="Misty hills of Ooty" />
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
        <BannerImage src="/tamil-nadu/travel.jpg" alt="Nilgiri Mountain Railway in Tamil Nadu" />
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
        <BannerImage src="/tamil-nadu/stays.jpg" alt="Tea garden resort landscape in Tamil Nadu" />
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
        <BannerImage src="/tamil-nadu/adventure.jpg" alt="Misty Tamil Nadu landscape" />
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
        <BannerImage src="/tamil-nadu/handicrafts.jpg" alt="Traditional Tamil Nadu handicraft display" />
        <div className={styles.handicraftGrid}>
          {handicrafts.map((item) => (
            <article className={styles.infoCard} key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
        <div className={styles.longCopy}>
          <p>
            Top markets: T Nagar (Chennai), Poompuhar Emporium, Madurai’s Chithirai Bazaar,
            and Thanjavur art streets.
          </p>
        </div>
      </section>

      <section className={styles.section} id="other-places">
        <SectionHeading>Explore other places also</SectionHeading>
        <div className={styles.otherPlacesGrid}>
          {otherPlaces.map((place) => (
            <Link className={styles.otherPlaceCard} href="/states" key={place.name}>
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
          breathtaking landscapes, and vibrant traditions. From ancient temples to
          modern marvels, we bring you stories, destinations, and experiences that
          define the heart of India. Explore, learn, and immerse yourself in the
          timeless beauty of this incredible land.
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
