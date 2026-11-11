import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import styles from "../destination-page.module.css";

const destinations = [
  {
    name: "Hyderabad",
    title: "The City of Pearls",
    description:
      "A bustling metropolis that balances the old and the new, Hyderabad is the cultural and economic heart of Telangana. Explore the iconic Charminar, Golconda Fort, Hussain Sagar Lake, and Ramoji Film City. Its charm lies in its contrasts — centuries-old bazaars beside tech hubs, royal cuisine beside cosmopolitan cafes.",
    image: "/telangana/hyderabad.jpg",
    alt: "Charminar, one of Hyderabad’s best-known landmarks",
  },
  {
    name: "Warangal",
    title: "The Land of Kakatiya Heritage",
    description:
      "Once the capital of the mighty Kakatiya dynasty, Warangal is known for its Thousand Pillar Temple, Warangal Fort, and exquisite rock-cut sculptures. This ancient city reflects Telangana’s glorious past and architectural mastery.",
    image: "/telangana/warangal.jpg",
    alt: "Historic ruins at Warangal Fort in Telangana",
  },
  {
    name: "Nizamabad",
    title: "The Land of Temples and Forts",
    description:
      "Surrounded by lush greenery and dotted with lakes, Nizamabad is a mix of culture and nature. Visit the Nizamabad Fort, Pocharam Wildlife Sanctuary, and ancient Dichpally Temple, known as the ‘Khajuraho of Telangana’.",
    image: "/telangana/nizamabad.jpg",
    alt: "Nizamabad Fort, a historic landmark in Telangana",
  },
  {
    name: "Karimnagar",
    title: "The City of Sculptures",
    description:
      "Rich in archaeology and history, Karimnagar is home to Elgandal Fort, Vemulawada Rajarajeshwara Temple, and numerous ancient carvings. The town’s peaceful ambience and riverbanks make it a hidden gem for heritage lovers.",
    image: "/telangana/karimnagar.jpg",
    alt: "Elgandal Fort near Karimnagar",
  },
  {
    name: "Adilabad",
    title: "Nature’s Hidden Paradise",
    description:
      "A district of waterfalls, forests, and tribal culture, Adilabad showcases Telangana’s natural beauty. Visit Kuntala Falls, Pochera Falls, and Basar Saraswathi Temple for a perfect mix of adventure and spirituality.",
    image: "/telangana/adilabad.jpg",
    alt: "Kuntala Falls surrounded by greenery in Adilabad",
  },
];

const festivals = [
  {
    title: "Bathukamma (September–October)",
    description:
      "The state’s most celebrated festival — women create colorful flower arrangements and sing devotional songs in honor of Goddess Gauri.",
  },
  {
    title: "Bonalu (July–August)",
    description:
      "A traditional thanksgiving festival dedicated to Goddess Mahakali, marked by vibrant processions, music, and rituals.",
  },
  {
    title: "Ramzan (May–June)",
    description:
      "Hyderabad comes alive with illuminated mosques, festive markets at Charminar, and the irresistible aroma of Haleem.",
  },
  {
    title: "Deccan Festival (February)",
    description:
      "A five-day celebration of Hyderabad’s culture — pearls, qawwalis, handicrafts, and Hyderabadi cuisine.",
  },
  {
    title: "Kakatiya Festival (December)",
    description:
      "Held in Warangal to celebrate the state’s rich history with art, dance, and historical exhibitions.",
  },
];

const signatureDishes = [
  {
    name: "Hyderabadi Biryani",
    description:
      "The world-famous aromatic rice dish, layered with saffron and slow-cooked meat.",
  },
  {
    name: "Sarva Pindi",
    description:
      "A savory rice flour pancake, crispy and spiced with sesame and herbs.",
  },
  {
    name: "Kodi Kura",
    description: "Spicy chicken curry flavored with regional spices.",
  },
  {
    name: "Pachi Pulusu",
    description: "Tangy tamarind soup served with rice.",
  },
  {
    name: "Mirchi Ka Salan",
    description: "Spicy green chili curry — the perfect companion to biryani.",
  },
];

const desserts = [
  {
    name: "Qubani Ka Meetha",
    description: "Apricot dessert topped with cream — a Hyderabadi royal treat.",
  },
  {
    name: "Double Ka Meetha",
    description: "Bread pudding made with ghee, milk, and dry fruits.",
  },
  {
    name: "Pootharekulu",
    description: "Paper-thin sweet rolls from the Telangana–Andhra region.",
  },
];

const seasons = [
  {
    name: "Winter",
    dates: "October–February",
    description:
      "Ideal for exploring forts, temples, and city attractions.",
  },
  {
    name: "Monsoon",
    dates: "June–September",
    description: "Perfect for witnessing lush greenery and waterfalls.",
  },
  {
    name: "Summer",
    dates: "March–May",
    description:
      "Hot, but ideal for evening sightseeing and cultural tours.",
  },
];

const travelRoutes = [
  {
    title: "By Air",
    description:
      "Rajiv Gandhi International Airport in Hyderabad is Telangana’s main air gateway, with domestic and international flights and onward connections to destinations across the state.",
  },
  {
    title: "By Rail",
    description:
      "Hyderabad’s Secunderabad and Kacheguda stations are key railway junctions, with extensive rail connectivity to major Indian cities.",
  },
  {
    title: "By Road",
    description:
      "Well-connected highways include NH44, NH65, and NH563. State-run and private buses connect Telangana to Karnataka, Maharashtra, and Andhra Pradesh.",
  },
];

const stays = [
  {
    title: "Luxury",
    description:
      "Taj Falaknuma Palace, ITC Kakatiya, and Park Hyatt (Hyderabad).",
  },
  {
    title: "Mid-Range",
    description:
      "Lemon Tree, The Golkonda, and Haritha Resorts (Warangal, Karimnagar).",
  },
  {
    title: "Budget",
    description: "Guesthouses, dorms, and homestays in city centers.",
  },
];

const travelTips = [
  "Try local street food in Hyderabad — especially during Ramzan.",
  "Respect local traditions during festivals like Bonalu and Bathukamma.",
  "Stay hydrated and carry sunscreen during summer visits.",
  "Book heritage and temple tours in advance.",
];

const experiences = [
  {
    title: "Heritage Walks",
    description: "Explore Charminar, Golconda, and Qutb Shahi Tombs.",
  },
  {
    title: "Waterfalls",
    description: "Trek to Kuntala, Bogatha, and Pochera Falls.",
  },
  {
    title: "Wildlife",
    description: "Visit Kawal Tiger Reserve and Pocharam Sanctuary.",
  },
  {
    title: "Spiritual Journeys",
    description: "Seek blessings at Basar Temple and Yadagirigutta.",
  },
  {
    title: "Urban Escapes",
    description: "Experience Ramoji Film City, Necklace Road, and Snow World.",
  },
];

const handicrafts = [
  {
    title: "Bidriware",
    description:
      "Metal inlay craft combining silver with blackened alloy — a royal Hyderabadi specialty.",
  },
  {
    title: "Pochampally Ikat",
    description: "World-famous handwoven sarees with geometric designs.",
  },
  {
    title: "Nirmal Paintings",
    description: "Intricate murals with gold detailing from Nirmal town.",
  },
  {
    title: "Pearls & Lac Bangles",
    description: "Hyderabad’s signature jewelry from Laad Bazaar.",
  },
  {
    title: "Cheriyal Scroll Paintings",
    description: "Traditional storytelling art from rural Telangana.",
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
    image: "/tamil-nadu/hero.jpg",
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
    image: "Golconda Fort and Hyderabad city",
    creator: "iMahesh",
    license: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Golconda_Fort_and_Hyderabad_city.jpg",
  },
  {
    image: "Charminar Hyderabad 1",
    creator: "DidierTais",
    license: "CC BY-SA 3.0",
    href: "https://commons.wikimedia.org/wiki/File:Charminar_Hyderabad_1.jpg",
  },
  {
    image: "Charminar Hyderabad 111",
    creator: "Joydeep",
    license: "CC BY-SA 3.0",
    href: "https://commons.wikimedia.org/wiki/File:Charminar_Hyderabad_111.jpg",
  },
  {
    image: "Warangal Fort Park and Museum, Telangana, India",
    creator: "Tarunsamanta",
    license: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Warangal_Fort_Park_and_Museum,_Telangana,_India_31.jpg",
  },
  {
    image: "Nizamabad Fort",
    creator: "2130938kailasmani",
    license: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Nizamabad_fort.jpg",
  },
  {
    image: "Elgandal Fort, Karimnagar",
    creator: "Vincentphinny",
    license: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Elgandal_Fort_karimnagar.jpg",
  },
  {
    image: "Kuntala Waterfalls",
    creator: "Ppavan1",
    license: "CC BY-SA 3.0",
    href: "https://commons.wikimedia.org/wiki/File:Kuntala-waterfalls1.jpg",
  },
  {
    image: "Perini Sivatandavam dance of Telangana",
    creator: "Biswarup Ganguly",
    license: "CC BY 3.0",
    href: "https://commons.wikimedia.org/wiki/File:Perini_Sivatandavam_Dance_Of_Telangana_-_Wikiconference_India_2023_-_Hyderabad_2023-04-28_8024.jpg",
  },
  {
    image: "Bathukamma",
    creator: "Randhirreddy",
    license: "CC BY-SA 3.0",
    href: "https://commons.wikimedia.org/wiki/File:Bathukamma.jpg",
  },
  {
    image: "Chicken Hyderabadi Biryani",
    creator: "Dheerajk88",
    license: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Chicken_Hyderabadi_Biryani.JPG",
  },
  {
    image: "Stream at Kuntala Waterfalls",
    creator: "Rajib Ghosh",
    license: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Stream_No._1_at_Kuntala_Waterfalls.JPG",
  },
  {
    image: "Charminar 12032013",
    creator: "Joydeep",
    license: "CC BY-SA 3.0",
    href: "https://commons.wikimedia.org/wiki/File:Charminar_12032013.jpg",
  },
  {
    image: "Golconda Fort, Hyderabad",
    creator: "Kuldeepburjbhalaike",
    license: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Golconda_Fort,_Hyderabad_(Oct_2025)_-_3.jpg",
  },
  {
    image: "Sculpture of Yali at Warangal",
    creator: "Harshil Mehta",
    license: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Sculpture_of_Yali_at_Warangal,_Telangana.jpg",
  },
  {
    image: "Thirsty tree at Kuntala Falls",
    creator: "Siennapraisi",
    license: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Thirsty_tree_at_Kuntala_falls.jpg",
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

export default function TelanganaPage() {
  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <Image
          className={styles.heroImage}
          src="/telangana/hero.jpg"
          alt="Golconda Fort overlooking Hyderabad"
          fill
          priority
          sizes="100vw"
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <h1>Telangana</h1>
          <p className={styles.tagline}>Where Heritage Meets Modern Harmony</p>
          <p className={styles.heroDescription}>
            From ancient dynasties and royal landmarks to vibrant festivals and
            futuristic skylines, Telangana brings history and modern life together.
          </p>
        </div>
      </header>

      <section className={styles.section} aria-labelledby="telangana-heading">
        <div className={styles.titleBlock}>
          <h2 id="telangana-heading">
            Telangana — Where Heritage Meets Modern Harmony
          </h2>
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
              src="/telangana/introduction.jpg"
              alt="Charminar and the historic streets of Hyderabad"
              fill
              sizes="(max-width: 900px) 100vw, 40vw"
            />
          </div>
          <div className={styles.introCopy}>
            <h3>Introduction</h3>
            <p>
              Born from the heart of the Deccan Plateau, Telangana is a land where
              ancient dynasties meet futuristic skylines. From the royal grandeur of
              Hyderabad’s Charminar and Golconda Fort to the serene beauty of
              Warangal’s temples and Kuntala Falls, Telangana offers a unique blend of
              history, spirituality, and innovation. A state of pearls, palaces, and
              progress — it welcomes travelers with open arms, rich flavors, and
              timeless stories.
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
          src="/telangana/culture.jpg"
          alt="Perini Sivatandavam dancers performing in Telangana"
        />
        <div className={styles.longCopy}>
          <p>
            Telangana’s culture is a vibrant fusion of Dravidian, Persian, and Telugu
            influences. Once ruled by the Satavahanas, Kakatiyas, and Nizams, the
            state’s art and architecture reflect centuries of diversity. Music, dance,
            and crafts play a vital role — from folk traditions like Perini
            Sivatandavam and Oggu Katha to the poetic beauty of Urdu shayari. Its
            culture is both regal and rooted, bridging India’s royal past and
            cosmopolitan present.
          </p>
        </div>
      </section>

      <section className={styles.section} id="festivals">
        <SectionHeading>Festivals &amp; Events</SectionHeading>
        <BannerImage
          src="/telangana/festival.jpg"
          alt="A Bathukamma flower arrangement for Telangana’s floral festival"
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
          src="/telangana/cuisine.jpg"
          alt="A serving of Hyderabadi chicken biryani"
        />
        <div className={styles.longCopy}>
          <p>
            Telangana’s cuisine is a delightful blend of spicy, tangy, and aromatic
            flavors — influenced by Deccan, Mughlai, and South Indian traditions. Each
            meal reflects warmth and richness, often served on banana leaves.
          </p>
        </div>
        <div className={styles.infoGrid}>
          <article className={styles.detailCard}>
            <h3>Signature Dishes</h3>
            {signatureDishes.map((dish) => (
              <p key={dish.name}>
                <strong>{dish.name}:</strong> {dish.description}
              </p>
            ))}
          </article>
          <article className={styles.detailCard}>
            <h3>Desserts</h3>
            {desserts.map((dessert) => (
              <p key={dessert.name}>
                <strong>{dessert.name}:</strong> {dessert.description}
              </p>
            ))}
          </article>
        </div>
      </section>

      <section className={styles.section} id="best-time">
        <SectionHeading>Best Time to Visit</SectionHeading>
        <BannerImage
          src="/telangana/best-time.jpg"
          alt="A flowing stream at Kuntala Falls during the green season"
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
          src="/telangana/travel.jpg"
          alt="Charminar in Hyderabad, a major travel destination in Telangana"
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
          src="/telangana/stays.jpg"
          alt="A view of the historic Golconda Fort near Hyderabad"
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
          src="/telangana/adventure.jpg"
          alt="A tree and natural landscape beside Kuntala Falls"
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
          src="/telangana/handicrafts.jpg"
          alt="Intricate stone carving from Warangal, Telangana"
        />
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
            Top markets: Laad Bazaar, Sultan Bazaar, Begum Bazaar (Hyderabad), and
            Pochampally village for handlooms.
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
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms-of-use">Terms of Use</a>
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
