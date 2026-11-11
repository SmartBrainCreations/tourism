import Image from "next/image";
import Link from "next/link";
import styles from "../destination-page.module.css";

const destinations = [
  {
    name: "Kurukshetra",
    title: "The Land of the Bhagavad Gita",
    description:
      "Known as the sacred battlefield of the Mahabharata, Kurukshetra is one of India’s most revered pilgrimage sites. Visit Brahma Sarovar, Jyotisar (where Lord Krishna delivered the Gita), and the Krishna Museum. The town comes alive during Gita Jayanti, celebrating the eternal wisdom of the Bhagavad Gita.",
    image: "/haryana/kurukshetra.jpg",
    alt: "Sacred Indian architecture framed by a historic arch",
  },
  {
    name: "Gurugram",
    title: "The Millennium City",
    description:
      "Once a small village, Gurugram has evolved into a futuristic urban hub with skyscrapers, malls, and nightlife. The Kingdom of Dreams, Cyber Hub, and Aravalli Biodiversity Park offer entertainment, food, and green escapes — making it Haryana’s face of modern India.",
    image: "/haryana/gurugram.jpg",
    alt: "Modern city architecture",
  },
  {
    name: "Panchkula",
    title: "The Gateway to the Hills",
    description:
      "A planned and serene city near Chandigarh, Panchkula is known for its natural charm and historic sites. The Morni Hills, Pinjore Gardens, and Nada Sahib Gurudwara attract visitors seeking both peace and adventure. It’s the perfect blend of greenery, history, and leisure.",
    image: "/haryana/panchkula.jpg",
    alt: "A green landscape in India",
  },
  {
    name: "Faridabad",
    title: "The Industrial and Cultural Hub",
    description:
      "Located on the banks of the Yamuna River, Faridabad is known for its craftsmanship and fairs. The annual Surajkund International Crafts Mela showcases artisans from across India and beyond. Its industrial growth is complemented by parks, temples, and traditional markets.",
    image: "/haryana/faridabad.jpg",
    alt: "A historic Indian monument",
  },
  {
    name: "Karnal",
    title: "The City of Daanveer Karna",
    description:
      "Steeped in mythological significance, Karnal is named after the generous warrior Karna from the Mahabharata. It’s a peaceful town known for Karna Lake, boating, and agricultural innovation. The Cantonment Church Tower and local farms reflect Haryana’s blend of history and hospitality.",
    image: "/haryana/karnal.jpg",
    alt: "A peaceful waterway in India",
  },
];

const festivals = [
  {
    title: "Gita Jayanti (December)",
    description:
      "Celebrated in Kurukshetra, it marks the day Lord Krishna delivered the Bhagavad Gita. The city hosts spiritual discourses, light shows, and a vibrant fair.",
  },
  {
    title: "Surajkund International Crafts Mela (February)",
    description:
      "Held in Faridabad, this world-famous festival showcases handlooms, handicrafts, dance, music, and cuisines from India and abroad.",
  },
  {
    title: "Holi & Teej",
    description:
      "These colorful festivals are celebrated with music, traditional sweets, and folk dances in rural Haryana.",
  },
  {
    title: "Baisakhi (April)",
    description:
      "The harvest festival fills the fields with songs, dance, and community feasts, symbolizing abundance and gratitude.",
  },
  {
    title: "Gangaur & Diwali",
    description:
      "Women dress in bright attire and offer prayers for prosperity, while homes sparkle with lights and joy during Diwali.",
  },
];

const dishes = [
  {
    name: "Bajra Roti & Sarson Saag",
    description: "Traditional flatbread paired with mustard greens — a staple rural meal.",
  },
  {
    name: "Kachri ki Chutney",
    description: "Tangy chutney made from wild melon, a Haryanvi specialty.",
  },
  {
    name: "Singri ki Sabzi",
    description: "Dried beans cooked with local spices, common in arid regions.",
  },
  {
    name: "Mixed Dal",
    description: "Protein-rich lentil curry served with ghee-laden roti.",
  },
  {
    name: "Churma",
    description: "Sweet crushed wheat served with clarified butter — a festive favorite.",
  },
];

const seasons = [
  {
    name: "Winter",
    dates: "October–February",
    description: "Ideal for sightseeing and festivals.",
  },
  {
    name: "Spring",
    dates: "March–April",
    description: "Pleasant weather for fairs, farms, and outdoor trips.",
  },
  {
    name: "Monsoon",
    dates: "July–September",
    description: "Lush countryside and green fields.",
  },
  {
    name: "Summer",
    dates: "May–June",
    description: "Best for urban tourism in Gurugram and Faridabad.",
  },
];

const travelRoutes = [
  {
    title: "By Air",
    description:
      "Delhi International Airport serves most of Haryana’s visitors. Chandigarh and Hisar airports offer regional flights to major Indian cities.",
  },
  {
    title: "By Rail",
    description:
      "Major railway hubs include Ambala, Karnal, Kurukshetra, and Gurugram, connecting Haryana to all metros.",
  },
  {
    title: "By Road",
    description:
      "Enjoy excellent connectivity through NH44, NH48, and NH9, with frequent buses from Delhi, Chandigarh, Jaipur, and Dehradun.",
  },
];

const stays = [
  {
    title: "Luxury",
    description:
      "Vivanta by Taj (Gurugram), Radisson Blu (Faridabad), and Hyatt Regency (Chandigarh).",
  },
  {
    title: "Mid-Range",
    description: "Lemon Tree, Park Plaza, and Haryana Tourism hotels.",
  },
  {
    title: "Budget",
    description: "Guesthouses, farm stays, and eco-lodges.",
  },
];

const travelTips = [
  "Respect rural traditions; locals value simplicity and humility.",
  "Carry light cotton clothes in summer and warm layers in winter.",
  "Try local dhabas for authentic Haryanvi food.",
  "Visit temples and fairs early in the day to avoid crowds.",
];

const experiences = [
  {
    title: "Rural Tourism",
    description:
      "Experience authentic Haryanvi hospitality through farm stays and bullock cart rides.",
  },
  {
    title: "Spiritual Trails",
    description: "Visit Jyotisar, Brahma Sarovar, and Thanesar for a divine experience.",
  },
  {
    title: "Nature Escapes",
    description:
      "Trek or camp in Morni Hills or go birdwatching at Sultanpur Bird Sanctuary.",
  },
  {
    title: "Cultural Tours",
    description: "Attend the Surajkund Mela or local wrestling (Kushti) events.",
  },
  {
    title: "Urban Experiences",
    description: "Enjoy luxury dining, nightlife, and golf in Gurugram.",
  },
];

const handicrafts = [
  {
    title: "Phulkari Embroidery",
    description: "Colorful floral patterns adorning dupattas and textiles.",
  },
  {
    title: "Terracotta Art",
    description: "Clay pots and sculptures from Jhajjar and Rohtak.",
  },
  {
    title: "Wood Carving",
    description: "Handcrafted toys, furniture, and decor.",
  },
  {
    title: "Handlooms",
    description: "Cotton fabrics, khadi wear, and handwoven shawls.",
  },
  {
    title: "Local Products",
    description: "Pickles, jaggery, and handmade bangles.",
  },
];

const otherPlaces = [
  { name: "Odisha", tagline: "Temple Trails & Serene Beaches", image: "/india/coast.jpg" },
  {
    name: "Madhya Pradesh",
    tagline: "The Heart of Incredible India",
    image: "/india/heritage.jpg",
  },
  { name: "Assam", tagline: "Land of Tea, Rhinos & Tranquility", image: "/india/river.jpg" },
  { name: "Puducherry", tagline: "French Charm of India", image: "/india/island.jpg" },
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
  { name: "Punjab", tagline: "Land of Five Rivers", image: "/india/city.jpg" },
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

export default function HaryanaPage() {
  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <Image
          className={styles.heroImage}
          src="/haryana/hero.jpg"
          alt="A scenic landscape in northern India"
          fill
          priority
          sizes="100vw"
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <h1>Haryana</h1>
          <p className={styles.tagline}>The Heartbeat of India’s Heritage &amp; Modernity</p>
          <p className={styles.heroDescription}>
            From the sacred land of Kurukshetra to the modern skyline of Gurugram, discover a
            state where ancient legends meet modern lifestyles.
          </p>
        </div>
      </header>

      <section className={styles.section} aria-labelledby="haryana-heading">
        <div className={styles.titleBlock}>
          <h2 id="haryana-heading">Haryana — The Heartbeat of India’s Heritage &amp; Modernity</h2>
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
              src="/haryana/intro.jpg"
              alt="A historic monument representing Haryana’s rich heritage"
              fill
              sizes="(max-width: 900px) 100vw, 40vw"
            />
          </div>
          <div className={styles.introCopy}>
            <h3>Introduction</h3>
            <p>
              Located in North India and surrounding the national capital, Haryana is a state
              where ancient legends meet modern lifestyles. Often called “The Abode of God” and
              “The Land of Mahabharata,” Haryana blends spirituality, rural beauty, and rapid
              urban development. From the sacred land of Kurukshetra to the bustling business
              hubs of Gurugram and Faridabad, Haryana is a tapestry of tradition and progress.
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
        <BannerImage src="/haryana/culture.jpg" alt="Historic architecture in India" />
        <div className={styles.longCopy}>
          <p>
            Haryana’s culture reflects simplicity, strength, and deep-rooted traditions. Folk
            dances like Ghoomar, Phag, and Raas Leela celebrate life and harvest, while festivals
            bring the community together in color and joy. The people of Haryana, known for
            their warmth and valor, preserve their heritage through fairs, songs, and rural
            sports like wrestling and kabaddi. Temples, forts, and stepwells across the state
            narrate stories of courage, devotion, and history.
          </p>
        </div>
      </section>

      <section className={styles.section} id="festivals">
        <SectionHeading>Festivals &amp; Events</SectionHeading>
        <BannerImage src="/haryana/festival.jpg" alt="A colorful festival scene in India" />
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
        <BannerImage src="/haryana/cuisine.jpg" alt="A welcoming restaurant in India" />
        <div className={styles.longCopy}>
          <p>
            Haryanvi cuisine is hearty, simple, and full of rustic flavors. Meals here are made
            from fresh produce, grains, and dairy — reflecting the state’s rich agricultural
            base.
          </p>
        </div>
        <div className={styles.foodCategories}>
          <article>
            <h3>Signature Dishes</h3>
            <ul className={styles.foodList}>
              {dishes.map((dish) => (
                <li key={dish.name}>
                  <strong>{dish.name}:</strong> {dish.description}
                </li>
              ))}
            </ul>
          </article>
          <article>
            <h3>Beverages</h3>
            <p>
              <strong>Lassi:</strong> Cooling yogurt drink enjoyed year-round.
            </p>
            <p>
              <strong>Chhach:</strong> Spiced buttermilk, perfect for Haryana’s warm climate.
            </p>
          </article>
          <article>
            <h3>Desserts</h3>
            <p>
              <strong>Malpua:</strong> Fried pancakes dipped in sugar syrup.
            </p>
            <p>
              <strong>Ghevar:</strong> A crispy disc-shaped sweet often enjoyed during Teej.
            </p>
          </article>
        </div>
      </section>

      <section className={styles.section} id="best-time">
        <SectionHeading>Best Time to Visit</SectionHeading>
        <BannerImage src="/haryana/best-time.jpg" alt="A green landscape in northern India" />
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
        <BannerImage src="/haryana/travel.jpg" alt="A road through a scenic landscape" />
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
        <BannerImage src="/haryana/stays.jpg" alt="A peaceful landscape at sunset" />
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
        <BannerImage src="/haryana/adventure.jpg" alt="An outdoor adventure in India" />
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
        <p className={styles.copyright}>
          © 2025 Incredible India 360. All Rights Reserved.
        </p>
      </footer>
    </main>
  );
}
