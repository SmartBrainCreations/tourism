import Image from "next/image";
import Link from "next/link";
import styles from "../destination-page.module.css";

const destinations = [
  {
    name: "Alleppey (Alappuzha)",
    title: "The Venice of the East",
    description:
      "Famous for its tranquil backwaters, Alleppey is a dreamscape of canals, lagoons, and paddy fields. Glide along in a houseboat, watch village life on the banks, and witness the breathtaking Nehru Trophy Boat Race. It’s the perfect destination for peace, romance, and slow living.",
    image: "/kerala/alleppey.jpg",
    alt: "A Kerala houseboat cruising through the backwaters",
  },
  {
    name: "Munnar",
    title: "The Hill Station of Tea Gardens",
    description:
      "Nestled in the Western Ghats, Munnar is a refreshing escape of rolling tea plantations, misty hills, and waterfalls. Visit the Eravikulam National Park, Mattupetty Dam, and the tea museum for a serene mountain retreat. Every sunrise here feels like poetry.",
    image: "/kerala/munnar.jpg",
    alt: "Green tea gardens across the hills of Munnar",
  },
  {
    name: "Kochi (Cochin)",
    title: "The Queen of the Arabian Sea",
    description:
      "A vibrant port city where tradition meets modernity, Kochi is Kerala’s cultural capital. Explore Fort Kochi’s colonial streets, Chinese fishing nets, Jew Town, and lively art cafés. With its historic charm and contemporary vibe, Kochi is where India’s past and present converge.",
    image: "/kerala/kochi.jpg",
    alt: "Historic Chinese fishing nets along the Kochi waterfront",
  },
  {
    name: "Wayanad",
    title: "The Green Paradise",
    description:
      "A land of forests, waterfalls, and wildlife, Wayanad is a nature lover’s haven. Trek through Chembra Peak, explore Edakkal Caves, or unwind near Pookode Lake. Its spice plantations and tribal villages offer a deep connection with Kerala’s earthy soul.",
    image: "/kerala/wayanad.jpg",
    alt: "A green mountain pass in Wayanad",
  },
  {
    name: "Kovalam",
    title: "The Coastal Jewel",
    description:
      "Renowned for its crescent-shaped beaches and golden sands, Kovalam is Kerala’s premier seaside retreat. Enjoy Ayurvedic massages, surfing, and stunning sunsets at the Lighthouse Beach. Its relaxed atmosphere and palm-lined coast make it the perfect tropical escape.",
    image: "/kerala/kovalam.jpg",
    alt: "A palm-fringed beach in Kovalam",
  },
];

const festivals = [
  {
    title: "Onam",
    description:
      "Kerala’s harvest festival welcomes the legendary King Mahabali with pookkalam flower carpets, traditional feasts, music, and boat races.",
  },
  {
    title: "Vishu",
    description:
      "The Malayalam new year is marked by Vishukkani displays, family gatherings, and the exchange of Vishukkaineettam.",
  },
  {
    title: "Thrissur Pooram",
    description:
      "A celebrated temple festival known for its decorated elephants, percussion ensembles, and spectacular fireworks.",
  },
  {
    title: "Nehru Trophy Boat Race",
    description:
      "Alleppey’s annual snake boat race fills the backwaters with spirited competition, music, and crowds along the shore.",
  },
];

const seasons = [
  {
    name: "Winter",
    dates: "October–February",
    description: "Cool and pleasant — ideal for beaches, backwaters, and sightseeing.",
  },
  {
    name: "Monsoon",
    dates: "June–September",
    description: "Lush landscapes and perfect for Ayurveda rejuvenation therapy.",
  },
  {
    name: "Summer",
    dates: "March–May",
    description: "A great time to visit hill stations like Munnar and Wayanad.",
  },
];

const travelRoutes = [
  {
    title: "By Air",
    description:
      "Major airports: Cochin International, Trivandrum, and Calicut (Kozhikode) — well connected domestically and internationally.",
  },
  {
    title: "By Rail",
    description:
      "Kerala’s railway network connects all major towns like Kochi, Kottayam, Trivandrum, and Kannur.",
  },
];

const stays = [
  {
    title: "Luxury",
    description:
      "Kumarakom Lake Resort, The Leela Kovalam, and Brunton Boatyard (Kochi).",
  },
  {
    title: "Mid-Range",
    description:
      "Spice Village (Thekkady), Poovar Island Resort, and Marari Beach Resort.",
  },
  {
    title: "Budget",
    description: "Homestays, eco-lodges, and houseboats.",
  },
];

const travelTips = [
  "Carry light cotton clothes and an umbrella — Kerala’s weather changes quickly.",
  "Respect temple customs: remove footwear and dress modestly.",
  "Try an Ayurvedic spa — it’s one of Kerala’s signature experiences.",
  "Avoid plastic; Kerala promotes eco-friendly tourism.",
];

const experiences = [
  {
    title: "Backwater Cruises",
    description:
      "Drift through Alleppey, Kumarakom, and Kollam on traditional houseboats.",
  },
  {
    title: "Wildlife",
    description: "Spot elephants and tigers at Periyar and Wayanad sanctuaries.",
  },
  {
    title: "Trekking",
    description: "Explore trails in Munnar, Vagamon, and Chembra Peak.",
  },
  {
    title: "Ayurveda & Wellness",
    description: "Experience rejuvenating therapies in Kovalam and Thekkady.",
  },
  {
    title: "Cultural Shows",
    description:
      "Watch Kathakali, Kalaripayattu (martial art), and Mohiniyattam performances.",
  },
];

const handicrafts = [
  {
    title: "Coir Products",
    description: "Eco-friendly mats, bags, and rugs made from coconut fiber.",
  },
  {
    title: "Spices",
    description: "Pepper, cardamom, clove, and nutmeg — Kerala’s aromatic pride.",
  },
  {
    title: "Kasavu Sarees",
    description: "Traditional cream sarees with golden borders.",
  },
  {
    title: "Handicrafts",
    description:
      "Rosewood carvings, brass lamps, and murals from Thrissur and Wayanad.",
  },
  {
    title: "Aroma Oils & Ayurveda Products",
    description: "Herbal beauty and wellness items made locally.",
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
    name: "Tamil Nadu",
    tagline: "Culture, Temples & Timeless Traditions",
    image: "/india/temple.jpg",
  },
  {
    name: "Jharkhand",
    tagline: "Forests, Waterfalls & Tribal Culture",
    image: "/india/forest.jpg",
  },
  {
    name: "Punjab",
    tagline: "Land of Five Rivers",
    image: "/india/city.jpg",
  },
];

const imageCredits = [
  {
    image: "Kerala backwater scene",
    creator: "ThursdayNext",
    license: "CC BY 2.0",
    href: "https://commons.wikimedia.org/wiki/File:Kerala_backwater_scene.jpg",
  },
  {
    image: "Kerala backwaters, Houseboats, India",
    creator: "Vyacheslav Argenberg",
    license: "CC BY 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Kerala_backwaters,_Houseboats,_India.jpg",
  },
  {
    image: "Kerala backwaters, Houseboat, India",
    creator: "Vyacheslav Argenberg",
    license: "CC BY 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Kerala_backwaters,_Houseboat,_India.jpg",
  },
  {
    image: "Munnar tea gardens",
    creator: "Public domain",
    license: "Public domain",
    href: "https://commons.wikimedia.org/wiki/File:Munnar_tea_gardens.jpg",
  },
  {
    image: "Chinese fishingnet kochi",
    creator: "Challiyil Eswaramangalath Vipin",
    license: "CC BY-SA 2.0",
    href: "https://commons.wikimedia.org/wiki/File:Chinese_fishingnet_kochi.jpg",
  },
  {
    image: "Mountain Pass Wayanad",
    creator: "Challiyan",
    license: "CC0",
    href: "https://commons.wikimedia.org/wiki/File:Mountain_Pass_Wayanad.jpg",
  },
  {
    image: "Kovalam beach trivandrum kerala",
    creator: "Georgeumartin",
    license: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Kovalam_beach_trivandrum_kerala.jpg",
  },
  {
    image: "Kathakali at Nishagandhi dance festival 2024 (135)",
    creator: "Shagil Kannur",
    license: "CC BY-SA 3.0",
    href: "https://commons.wikimedia.org/wiki/File:Kathakali_of_Kerala_at_Nishagandhi_dance_festival_2024_(135).jpg",
  },
  {
    image: "Kathakali at Nishagandhi dance festival 2024 (148)",
    creator: "Shagil Kannur",
    license: "CC BY-SA 3.0",
    href: "https://commons.wikimedia.org/wiki/File:Kathakali_of_Kerala_at_Nishagandhi_dance_festival_2024_(148).jpg",
  },
  {
    image: "Onam Sadhya",
    creator: "Gangulybiswarup",
    license: "CC BY 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Onam_Sadhya_-_Grand_Traditional_Vegetarian_Feast_Served_On_A_Banana_Leaf_-_WikiConference_India_2026_-_Kochi_2026-09-04_03420.jpg",
  },
  {
    image: "Mattupetty Lake View",
    creator: "Ingo Mehling",
    license: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Mattupetty_Lake_View.jpg",
  },
  {
    image: "Kozhikode railway station, Kerala",
    creator: "Ravi Dwivedi",
    license: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Kozhikode_railway_station,_Kerala.jpg",
  },
  {
    image: "Astamudi Lake Kerala",
    creator: "Sanunsanu",
    license: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Astamudi_Lake_Kerala.jpg",
  },
  {
    image: "Wayanad tea plantations and forests Kerala India",
    creator: "Ms Sarah Welch",
    license: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Wayanad_tea_plantations_and_forests_Kerala_India.jpg",
  },
  {
    image: "Coir doormats",
    creator: "Vis M",
    license: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Coir_doormats.jpg",
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

export default function KeralaPage() {
  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <Image
          className={styles.heroImage}
          src="/kerala/hero.jpg"
          alt="Kerala backwaters lined with coconut palms"
          fill
          priority
          sizes="100vw"
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <h1>Kerala</h1>
          <p className={styles.tagline}>God’s Own Country</p>
          <p className={styles.heroDescription}>
            Backwaters, palm-fringed beaches, misty mountains, and living traditions
            make Kerala a place to slow down and explore.
          </p>
        </div>
      </header>

      <section className={styles.section} aria-labelledby="kerala-heading">
        <div className={styles.titleBlock}>
          <h2 id="kerala-heading">Kerala — God’s Own Country</h2>
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
              src="/kerala/introduction.jpg"
              alt="A traditional houseboat on Kerala’s backwaters"
              fill
              sizes="(max-width: 900px) 100vw, 40vw"
            />
          </div>
          <div className={styles.introCopy}>
            <h3>Introduction</h3>
            <p>
              Embraced by the Arabian Sea and the Western Ghats, Kerala is a tropical
              paradise known for its serene backwaters, lush greenery, and rich
              culture. Often called “God’s Own Country,” it’s a destination that
              soothes the soul — where palm-fringed beaches meet misty mountains and
              ancient traditions meet modern comfort. From tranquil houseboats to
              vibrant festivals and spice-scented air, Kerala offers a blend of
              nature, wellness, and heritage like no other.
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
          src="/kerala/culture.jpg"
          alt="A Kathakali performer in traditional costume"
        />
        <div className={styles.longCopy}>
          <p>
            Kerala’s culture is a colorful tapestry woven with ancient traditions,
            music, and dance. Classical art forms like Kathakali, Mohiniyattam, and
            Theyyam bring legends to life through rhythm and expression. Temples,
            churches, and mosques coexist harmoniously, reflecting Kerala’s spirit
            of inclusivity. From Onam celebrations to centuries-old Ayurveda
            practices, Kerala’s heritage is as soulful as its landscapes.
          </p>
        </div>
      </section>

      <section className={styles.section} id="festivals">
        <SectionHeading>Festivals &amp; Events</SectionHeading>
        <BannerImage
          src="/kerala/festival.jpg"
          alt="A Kathakali performance at a Kerala dance festival"
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
          src="/kerala/cuisine.jpg"
          alt="A traditional Onam Sadya served on a banana leaf"
        />
        <div className={styles.longCopy}>
          <p>
            Kerala’s cuisine is a delicious harmony of spices, coconut, and
            tradition — served on banana leaves with love. It’s a celebration of
            coastal flavors, from seafood delicacies to vegetarian feasts.
          </p>
        </div>
      </section>

      <section className={styles.section} id="best-time">
        <SectionHeading>Best Time to Visit</SectionHeading>
        <BannerImage
          src="/kerala/best-time.jpg"
          alt="The hills and waters around Mattupetty in Kerala"
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
          src="/kerala/travel.jpg"
          alt="A railway station in Kerala"
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
          src="/kerala/stays.jpg"
          alt="A calm Kerala lake surrounded by greenery"
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
          src="/kerala/adventure.jpg"
          alt="Green tea plantations and hills in Wayanad"
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
          src="/kerala/handicrafts.jpg"
          alt="Handwoven coir mats made in Kerala"
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
