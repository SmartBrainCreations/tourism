import Image from "next/image";
import Link from "next/link";
import styles from "../destination-page.module.css";

const destinations = [
  {
    name: "Red Fort",
    title: "The Symbol of India’s Sovereignty",
    description:
      "A UNESCO World Heritage Site, the Red Fort is a majestic reminder of Mughal grandeur. Its red sandstone walls, Diwan-i-Aam, and Diwan-i-Khas speak of royal elegance. The Independence Day address from its ramparts makes it a symbol of national pride.",
    image: "/india/heritage.jpg",
    alt: "Historic Indian architecture",
  },
  {
    name: "India Gate & Rajpath",
    title: "The National Landmark",
    description:
      "Built in memory of Indian soldiers, India Gate stands as a glowing tribute at the heart of Delhi. The surrounding Rajpath (now Kartavya Path) is where Republic Day parades showcase India’s cultural and military strength — an experience of unity and honor.",
    image: "/india/river.jpg",
    alt: "A monument reflected in water at sunset",
  },
  {
    name: "Qutub Minar",
    title: "The Tower of Triumph",
    description:
      "One of India’s tallest stone towers, the Qutub Minar is a marvel of Indo-Islamic architecture. Surrounded by ancient ruins of Mehrauli, it reflects the early Delhi Sultanate’s artistic brilliance and historical depth.",
    image: "/india/temple.jpg",
    alt: "A historic site in India",
  },
  {
    name: "Lotus Temple",
    title: "The House of Peace",
    description:
      "A symbol of harmony and inclusivity, the Lotus Temple welcomes people of all faiths. Its lotus-shaped structure and tranquil ambiance make it a modern architectural wonder and a serene escape from the city’s chaos.",
    image: "/india/nature.jpg",
    alt: "A peaceful landscape",
  },
  {
    name: "Akshardham Temple",
    title: "The Modern Marvel of Faith",
    description:
      "This grand temple complex on the banks of the Yamuna River showcases Indian art, spirituality, and technology in breathtaking form. With its light shows, sculptures, and exhibitions, Akshardham is both spiritual and spectacular.",
    image: "/india/spiritual.jpg",
    alt: "An Indian spiritual site at sunset",
  },
];

const festivals = [
  {
    title: "Republic Day Parade (January 26)",
    description:
      "Held at Rajpath, it showcases India’s military might and cultural heritage — a must-see national spectacle.",
  },
  {
    title: "Diwali & Dussehra",
    description:
      "The capital glows with lights, firecrackers, and fairs celebrating the victory of good over evil.",
  },
  {
    title: "Holi (March)",
    description:
      "Delhi bursts into color as locals and travelers alike join in joyful celebrations of spring and friendship.",
  },
  {
    title: "Qutub Festival (November)",
    description:
      "An evening of classical music and dance held in the Qutub Minar complex, blending history with art.",
  },
  {
    title: "International Trade Fair (November)",
    description:
      "Hosted at Pragati Maidan, this event attracts global exhibitors and showcases India’s innovation and craftsmanship.",
  },
];

const dishes = [
  {
    name: "Butter Chicken",
    description: "Delhi’s most iconic dish, rich, creamy, and flavorful.",
  },
  {
    name: "Chole Bhature",
    description: "A hearty Punjabi breakfast favorite.",
  },
  {
    name: "Kebabs",
    description: "From seekh to boti, Delhi’s Mughlai kebabs are a treat for meat lovers.",
  },
  {
    name: "Paranthas",
    description: "Try the stuffed paranthas at the famous Paranthe Wali Gali in Chandni Chowk.",
  },
  {
    name: "Street Snacks",
    description:
      "Gol Gappe, Aloo Tikki, Dahi Bhalla — the true taste of Delhi’s vibrancy.",
  },
];

const desserts = [
  {
    name: "Jalebi",
    description: "Deep-fried sweetness swirled in syrup.",
  },
  {
    name: "Rabri Falooda",
    description: "A chilled delight popular in Old Delhi.",
  },
  {
    name: "Kulfi Falooda",
    description: "The city’s summer favorite dessert.",
  },
];

const seasons = [
  {
    name: "Winter",
    dates: "October–February",
    description: "Pleasant weather and festival season — the best time for sightseeing.",
  },
  {
    name: "Spring",
    dates: "March–April",
    description: "Ideal for garden visits and outdoor exploration.",
  },
  {
    name: "Monsoon",
    dates: "July–September",
    description: "Refreshing but humid — great for nature photography.",
  },
  {
    name: "Summer",
    dates: "May–June",
    description: "Hot but perfect for museum and indoor tours.",
  },
];

const travelRoutes = [
  {
    title: "By Air",
    description:
      "Indira Gandhi International Airport (IGI): India’s busiest airport with connections worldwide.",
  },
  {
    title: "By Rail",
    description:
      "New Delhi Railway Station (NDLS) and Hazrat Nizamuddin are major junctions connecting all parts of India.",
  },
  {
    title: "By Road",
    description:
      "Connected via national highways NH44, NH48, and NH9 to all neighboring states. Delhi Metro and bus systems offer convenient intra-city travel.",
  },
];

const stays = [
  {
    title: "Luxury",
    description: "The Imperial, Taj Palace, ITC Maurya.",
  },
  {
    title: "Mid-Range",
    description: "The Park, Radisson Blu, Lemon Tree.",
  },
  {
    title: "Budget",
    description: "Backpacker hostels in Paharganj, Karol Bagh, and South Delhi.",
  },
];

const travelTips = [
  "Use Delhi Metro for affordable, fast travel.",
  "Dress modestly when visiting religious sites.",
  "Bargain in street markets — it’s part of the fun!",
  "Try guided heritage walks for deeper insights into Delhi’s past.",
];

const experiences = [
  {
    title: "Heritage Walks",
    description: "Explore Old Delhi, Mehrauli, and Lutyens’ Delhi with guided tours.",
  },
  {
    title: "Shopping",
    description:
      "Stroll through Connaught Place, Sarojini Nagar, and Dilli Haat for crafts, fabrics, and souvenirs.",
  },
  {
    title: "Nightlife",
    description:
      "Enjoy Delhi’s vibrant café and lounge culture in Hauz Khas Village and Connaught Place.",
  },
  {
    title: "Art & Museums",
    description:
      "Visit the National Museum, Crafts Museum, and NGMA for India’s creative legacy.",
  },
  {
    title: "Gardens & Green Escapes",
    description:
      "Lodhi Gardens, Sunder Nursery, and Garden of Five Senses offer calm amid chaos.",
  },
];

const handicrafts = [
  {
    title: "Dilli Haat",
    description: "Crafts village with handlooms, jewelry, and food stalls from every state.",
  },
  {
    title: "Chandni Chowk",
    description: "A sensory explosion of spices, textiles, and silver jewelry.",
  },
  {
    title: "Connaught Place",
    description: "Modern brands and elegant cafes.",
  },
  {
    title: "Janpath Market",
    description: "Trendy clothes and handmade artifacts.",
  },
  {
    title: "Khan Market",
    description: "High-end boutiques and fine dining.",
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

export default function DelhiPage() {
  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <Image
          className={styles.heroImage}
          src="/india/heritage.jpg"
          alt="A historic Indian monument"
          fill
          priority
          sizes="100vw"
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <h1>Delhi</h1>
          <p className={styles.tagline}>The Capital of Stories</p>
          <p className={styles.heroDescription}>
            From Mughal forts and spiritual centers to vibrant markets and modern metro lines,
            Delhi is a living chronicle of India’s history, culture, and resilience.
          </p>
        </div>
      </header>

      <section className={styles.section} aria-labelledby="delhi-heading">
        <div className={styles.titleBlock}>
          <h2 id="delhi-heading">Delhi — The Heart of India</h2>
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
              alt="Historic architecture representing Delhi’s heritage"
              fill
              sizes="(max-width: 900px) 100vw, 40vw"
            />
          </div>
          <div className={styles.introCopy}>
            <h3>Introduction</h3>
            <p>
              Where ancient empires meet modern marvels, Delhi stands as a living, breathing
              chronicle of India’s story. From Mughal forts to futuristic metro lines, from
              spiritual centers to vibrant markets — the capital city embodies contrasts that
              define India itself. A walk through Delhi is a journey through centuries: every
              monument, lane, and aroma narrates a tale of heritage, power, and resilience.
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
          src="/india/heritage.jpg"
          alt="A historic monument representing Delhi’s heritage"
        />
        <div className={styles.longCopy}>
          <p>
            Delhi’s culture is a blend of ancient traditions, Mughal artistry, and contemporary
            cosmopolitanism. The city has been the seat of power for empires from the Mauryas
            to the Mughals and now the Indian government. It’s a cultural melting pot — where
            Old Delhi’s spice-laden lanes coexist with modern art galleries, and Sufi qawwalis
            echo beside jazz bars. From its street food to its monuments, Delhi celebrates
            diversity, resilience, and rhythm in everyday life.
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
            Delhi’s food scene is legendary — a fusion of Mughal flavors, Punjabi warmth, and
            cosmopolitan flair. Every street corner, from Chandni Chowk to Connaught Place,
            offers a culinary adventure.
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
        <BannerImage src="/india/hero.jpg" alt="A road through a scenic landscape" />
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
        <BannerImage src="/india/city.jpg" alt="A historic city at sunset" />
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
        <BannerImage src="/india/heritage.jpg" alt="A historic Indian monument" />
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

    </main>
  );
}
