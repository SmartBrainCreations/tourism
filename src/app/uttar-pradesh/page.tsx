import Image from "next/image";
import Link from "next/link";
import styles from "../destination-page.module.css";

const destinations = [
  {
    name: "Agra",
    title: "The City of the Taj Mahal",
    description:
      "Famed for the eternal symbol of love, the Taj Mahal, Agra is a city steeped in Mughal grandeur. Explore Agra Fort, Fatehpur Sikri, and vibrant local bazaars filled with marble inlay work and sweets like petha. Every corner of Agra echoes tales of love, art, and royal splendor.",
    image: "/india/heritage.jpg",
    alt: "The Taj Mahal viewed through a historic gateway",
  },
  {
    name: "Varanasi",
    title: "The Spiritual Capital of India",
    description:
      "One of the world’s oldest living cities, Varanasi (Kashi) sits along the sacred Ganges River. The mesmerizing Ganga Aarti at Dashashwamedh Ghat, narrow alleys, and ancient temples make it a deeply spiritual experience. Life and eternity flow side by side in this mystical city of light.",
    image: "/india/river.jpg",
    alt: "A sacred Indian shrine beside the water at sunset",
  },
  {
    name: "Lucknow",
    title: "The City of Nawabs",
    description:
      "Blending Mughal charm and modern elegance, Lucknow is known for its gracious hospitality, refined manners, and delectable cuisine. Visit the Bara Imambara, Rumi Darwaza, and Hazratganj market. The city’s poetry, chikankari embroidery, and kebabs make it a feast for all senses.",
    image: "/india/city.jpg",
    alt: "A modern city skyline",
  },
  {
    name: "Prayagraj",
    title: "The Holy Confluence",
    description:
      "Formerly known as Allahabad, Prayagraj is home to the sacred Triveni Sangam, where the Ganga, Yamuna, and mythical Saraswati meet. The Kumbh Mela, held here every 12 years, is the world’s largest religious gathering. The city’s historical forts and peaceful ghats draw millions of pilgrims.",
    image: "/india/spiritual.jpg",
    alt: "A quiet landscape at sunrise",
  },
  {
    name: "Mathura & Vrindavan",
    title: "The Land of Lord Krishna",
    description:
      "Believed to be the birthplace of Lord Krishna, Mathura and nearby Vrindavan radiate divine energy. Temples like Banke Bihari and Prem Mandir light up with music, devotion, and colors — especially during Holi and Janmashtami, when the towns turn into joyful celebrations of faith.",
    image: "/india/spiritual.jpg",
    alt: "Sunrise over a distant landscape",
  },
];

const festivals = [
  {
    title: "Kumbh Mela (Every 12 Years)",
    description:
      "Held in Prayagraj, it is the largest human gathering on Earth — where millions take holy dips for spiritual cleansing.",
  },
  {
    title: "Diwali in Ayodhya",
    description:
      "The city of Lord Rama glows with millions of lamps during Deepotsav, creating a magical sight along the Sarayu River.",
  },
  {
    title: "Holi in Mathura-Vrindavan",
    description:
      "Experience India’s most colorful festival with clouds of color, music, and devotion celebrating Lord Krishna’s divine love.",
  },
  {
    title: "Taj Mahotsav (Agra, February)",
    description:
      "A 10-day cultural extravaganza featuring folk art, crafts, dance, and cuisines from across India, set against the backdrop of the Taj Mahal.",
  },
  {
    title: "Lucknow Mahotsav (November–December)",
    description:
      "A grand fair celebrating Awadhi culture with traditional music, drama, handicrafts, and royal feasts.",
  },
];

const signatureDishes = [
  {
    name: "Tunday Kababi",
    description: "Melt-in-mouth kebabs made from minced meat and secret spices.",
  },
  {
    name: "Galouti Kebab & Biryani",
    description: "Lucknow’s royal feast, rich with saffron and fragrance.",
  },
  {
    name: "Bedai & Aloo Sabzi",
    description: "Popular breakfast combo in Agra and Mathura.",
  },
  {
    name: "Kachori & Jalebi",
    description: "Crispy, sweet, and spicy treats found in every UP street corner.",
  },
  {
    name: "Banarasi Paan",
    description: "A symbol of hospitality and tradition, completing every meal.",
  },
];

const desserts = [
  {
    name: "Malaiyo (Varanasi)",
    description: "A winter delight made from milk froth and saffron.",
  },
  {
    name: "Petha (Agra)",
    description: "Translucent candy made from ash gourd, both soft and crunchy.",
  },
  {
    name: "Revri & Gajak",
    description: "Winter sweets made with sesame and jaggery.",
  },
];

const seasons = [
  {
    name: "Winter",
    dates: "October–February",
    description: "Best for sightseeing and festivals.",
  },
  {
    name: "Spring",
    dates: "March–April",
    description: "Ideal for cultural tours and temple visits.",
  },
  {
    name: "Monsoon",
    dates: "July–September",
    description: "Lush countryside, but avoid heavy rains in river areas.",
  },
  {
    name: "Summer",
    dates: "May–June",
    description: "Explore hill regions like Chitrakoot or visit indoor heritage sites.",
  },
];

const travelRoutes = [
  {
    title: "By Air",
    description:
      "Major airports: Lucknow, Varanasi, Agra, and Prayagraj. Frequent flights connect to Delhi, Mumbai, Kolkata, and international hubs.",
  },
  {
    title: "By Rail",
    description:
      "Extensive railway network connects major cities and pilgrim centers across India. Key stations: Lucknow, Varanasi, Agra Cantt, Mathura, and Gorakhpur.",
  },
  {
    title: "By Road",
    description:
      "Well-connected through NH19, NH27, and NH44. State and private buses connect to Delhi, Rajasthan, Madhya Pradesh, and Bihar.",
  },
];

const stays = [
  {
    title: "Luxury",
    description: "Taj Hotel (Lucknow), Radisson Blu (Agra), Brijrama Palace (Varanasi).",
  },
  {
    title: "Mid-Range",
    description: "Clarks Shiraz, Lemon Tree, and heritage hotels.",
  },
  {
    title: "Budget",
    description: "Guesthouses, dharamshalas, and river-view homestays.",
  },
];

const travelTips = [
  "Dress modestly at temples and religious sites.",
  "Avoid night travel during dense fog in winters.",
  "Carry cash for smaller towns and local markets.",
  "Try local street food from clean, busy vendors for the best experience.",
];

const experiences = [
  {
    title: "Spiritual Trails",
    description: "Visit Char Dham of UP — Varanasi, Ayodhya, Mathura, and Prayagraj.",
  },
  {
    title: "Heritage Walks",
    description:
      "Explore Lucknow’s old city, Agra’s Mughal lanes, or Sarnath (the birthplace of Buddhism).",
  },
  {
    title: "River Cruises",
    description: "Enjoy boat rides on the Ganga at sunrise in Varanasi.",
  },
  {
    title: "Wildlife",
    description: "Explore Dudhwa National Park and Chandraprabha Sanctuary.",
  },
  {
    title: "Shopping",
    description: "Banarasi silk sarees, chikankari embroidery, brassware, and wooden toys.",
  },
];

const handicrafts = [
  {
    title: "Banarasi Silk",
    description: "World-famous sarees handwoven with gold and silver threads.",
  },
  {
    title: "Chikankari Embroidery (Lucknow)",
    description: "Elegant needlework on muslin and cotton fabrics.",
  },
  {
    title: "Brassware (Moradabad)",
    description: "Ornate utensils and décor pieces exported globally.",
  },
  {
    title: "Terracotta (Gorakhpur)",
    description: "Clay figurines and idols reflecting folk art.",
  },
  {
    title: "Wood & Leather Craft (Kanpur, Saharanpur)",
    description: "Premium goods combining utility and tradition.",
  },
];

const otherPlaces = [
  { name: "Odisha", tagline: "Temple Trails & Serene Beaches", image: "/india/coast.jpg" },
  {
    name: "Madhya Pradesh",
    tagline: "The Heart of Incredible India",
    image: "/india/heritage.jpg",
  },
  { name: "Assam", tagline: "Land of Tea, Rhinos & Tranquility", image: "/india/nature.jpg" },
  { name: "Puducherry", tagline: "French Charm of India", image: "/india/coast.jpg" },
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
  { name: "Punjab", tagline: "Land of Five Rivers", image: "/india/river.jpg" },
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

export default function UttarPradeshPage() {
  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <Image
          className={styles.heroImage}
          src="/india/heritage.jpg"
          alt="The Taj Mahal in Agra"
          fill
          priority
          sizes="100vw"
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <h1>Uttar Pradesh</h1>
          <p className={styles.tagline}>Heart of Vibrant India</p>
          <p className={styles.heroDescription}>
            From the Taj Mahal and the sacred ghats of Varanasi to Lucknow’s royal heritage,
            Uttar Pradesh is a journey through India’s history, faith, and culture.
          </p>
        </div>
      </header>

      <section className={styles.section} aria-labelledby="uttar-pradesh-heading">
        <div className={styles.titleBlock}>
          <h2 id="uttar-pradesh-heading">
            Uttar Pradesh — The Land of Heritage, Faith, and Timeless Wonders
          </h2>
          <p>
            Explore India’s 28 states and 8 union territories — each offering its own culture,
            cuisine, and charm. Find the perfect destination for your next journey through ages.
          </p>
        </div>
      </section>

      <section className={styles.section} id="introduction">
        <SectionHeading>Introduction</SectionHeading>
        <div className={styles.introGrid}>
          <div className={styles.featureImage}>
            <Image
              src="/india/heritage.jpg"
              alt="The Taj Mahal, one of Uttar Pradesh’s best-known monuments"
              fill
              sizes="(max-width: 900px) 100vw, 40vw"
            />
          </div>
          <div className={styles.introCopy}>
            <h3>Introduction</h3>
            <p>
              Known as the Cultural Soul of India, Uttar Pradesh is a land of timeless history,
              divine faith, and magnificent architecture. It is home to sacred rivers, ancient
              temples, and world-famous monuments like the Taj Mahal. From the spiritual ghats
              of Varanasi to the royal grandeur of Lucknow, and the historical richness of Agra,
              UP represents India’s essence — where heritage, devotion, and tradition meet.
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
        <BannerImage src="/india/heritage.jpg" alt="The Taj Mahal, a monument of Mughal heritage" />
        <div className={styles.longCopy}>
          <p>
            Uttar Pradesh is a cradle of Indian civilization — the birthplace of Hinduism,
            Buddhism, and Jainism, and the seat of Mughal and Awadhi culture. The state’s art,
            dance, music, and crafts reflect centuries of spiritual depth and royal elegance.
            From classical Kathak dance to soulful Awadhi poetry, UP’s heritage is both ancient
            and alive. Temples, mosques, forts, and ghats stand side by side — echoing the
            harmony of faith and culture that defines India’s identity.
          </p>
        </div>
      </section>

      <section className={styles.section} id="festivals">
        <SectionHeading>Festivals &amp; Events</SectionHeading>
        <BannerImage src="/india/festivals.jpg" alt="Travelers exploring a colorful landscape" />
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
        <BannerImage src="/india/food.jpg" alt="A restaurant dining room" />
        <div className={styles.longCopy}>
          <p>
            Uttar Pradesh’s cuisine is rich, aromatic, and deeply traditional — influenced by
            both Mughal and Awadhi styles. From royal kebabs to temple prasad, every bite tells
            a story of flavor and faith.
          </p>
        </div>
        <div className={styles.infoGrid}>
          <article className={styles.infoCard}>
            <h3>Signature Dishes</h3>
            <ul className={styles.foodList}>
              {signatureDishes.map((dish) => (
                <li key={dish.name}>
                  <strong>{dish.name}:</strong> {dish.description}
                </li>
              ))}
            </ul>
          </article>
          <article className={styles.infoCard}>
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
        <BannerImage src="/india/nature.jpg" alt="A peaceful natural landscape" />
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
        <BannerImage src="/india/adventure.jpg" alt="Travelers exploring a dramatic landscape" />
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
        <BannerImage src="/india/heritage.jpg" alt="The Taj Mahal, a monument of Mughal heritage" />
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

      <footer className={styles.footer}>
        <div className={styles.footerBrand}>Journey Through Ages</div>
        <p className={styles.footerTagline}>Discover India, One Story at a Time</p>
        <p className={styles.footerText}>
          Journey Through Ages is your window into India’s rich heritage, breathtaking landscapes,
          and vibrant traditions. From ancient temples to modern marvels, we bring you stories,
          destinations, and experiences that define the heart of India. Explore, learn, and immerse
          yourself in the timeless beauty of this incredible land.
        </p>
        <nav className={styles.footerLinks} aria-label="Footer navigation">
          <div>
            <h3>Quick Links</h3>
            <Link href="/">Home</Link>
            <Link href="/states">Explore</Link>
            <Link href="#adventure">Experiences</Link>
            <Link href="#travel">Travel Guides</Link>
            <Link href="#culture">Blog</Link>
          </div>
          <div>
            <h3>Resources</h3>
            <Link href="/states">About India</Link>
            <a href="mailto:hello@journeythroughages.com">Contact Us</a>
            <Link href="#privacy">Privacy Policy</Link>
            <Link href="#terms">Terms of Use</Link>
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
