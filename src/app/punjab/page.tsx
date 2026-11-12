import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

const destinations = [
  {
    name: "Amritsar",
    title: "The Soul of Punjab",
    description:
      "Home to the world-famous Golden Temple, Amritsar is the spiritual and cultural heart of the state. Visit Jallianwala Bagh, the Partition Museum, and experience the patriotic fervor of the Wagah Border ceremony. The aroma of langar (community kitchen) and the glow of the temple at night leave an everlasting impression.",
    image: "/india/city.jpg",
    alt: "The Golden Temple in Amritsar at sunset",
  },
  {
    name: "Ludhiana",
    title: "The Industrial and Cultural Hub",
    description:
      "Known as the “Manchester of India”, Ludhiana is both industrially strong and culturally rich. Visit the Punjab Agricultural University Museum, Lodhi Fort, and experience local fairs and traditional cuisines. It’s also a fashion and shopping paradise for textile lovers.",
    image: "/india/food.jpg",
    alt: "A welcoming restaurant interior",
  },
  {
    name: "Anandpur Sahib",
    title: "The Sacred City of Bliss",
    description:
      "One of Sikhism’s holiest towns, Anandpur Sahib is where Guru Gobind Singh founded the Khalsa Panth. The magnificent Takht Sri Kesgarh Sahib and the annual Hola Mohalla Festival make it a center of devotion and martial traditions.",
    image: "/india/spiritual.jpg",
    alt: "Historic Indian architecture framed by a Mughal arch",
  },
  {
    name: "Chandigarh",
    title: "The City Beautiful",
    description:
      "Designed by Le Corbusier, Chandigarh blends modern architecture with natural beauty. Stroll through the Rock Garden, relax at Sukhna Lake, and explore its organized sectors and museums. Known for its cleanliness and greenery, Chandigarh represents Punjab’s progressive and cosmopolitan side.",
    image: "/india/heritage.jpg",
    alt: "A landmark monument surrounded by formal gardens",
  },
  {
    name: "Patiala",
    title: "The Royal Heritage City",
    description:
      "With grand palaces, gardens, and forts, Patiala showcases royal elegance and Sikh heritage. Explore the Qila Mubarak Complex, Sheesh Mahal, and the old bazaars filled with phulkari embroidery and Patiala juttis. The city still preserves its regal charm blended with vibrant Punjabi spirit.",
    image: "/india/festivals.jpg",
    alt: "Travelers enjoying an outdoor cultural experience",
  },
];

const festivals = [
  {
    title: "Baisakhi (April)",
    description:
      "Punjab’s most celebrated festival marks the harvest season and the formation of the Khalsa. Fields glow with ripe wheat, and villages come alive with music, fairs, and dances.",
  },
  {
    title: "Lohri (January)",
    description:
      "Celebrated around bonfires, Lohri is a festival of warmth, songs, and sweets. It marks the end of winter and the arrival of longer days.",
  },
  {
    title: "Hola Mohalla (March)",
    description:
      "Held in Anandpur Sahib, this Sikh martial festival showcases mock battles, horseback riding, and spiritual gatherings.",
  },
  {
    title: "Gurpurab (November)",
    description:
      "Commemorating the birth anniversaries of Sikh Gurus, Gurpurabs are celebrated with processions, hymns, and free community feasts (Langar).",
  },
  {
    title: "Teej & Basant Panchami",
    description:
      "Colorful festivals celebrating women, love, and spring — where people wear bright yellow attire and fly kites under clear skies.",
  },
];

const dishes = [
  {
    name: "Sarson da Saag & Makki di Roti",
    description:
      "The iconic winter dish — mustard greens served with corn flatbread and white butter.",
  },
  {
    name: "Butter Chicken",
    description: "Creamy, spiced, and smoky — a Punjabi classic loved worldwide.",
  },
  {
    name: "Amritsari Kulcha",
    description: "Stuffed bread crisped in tandoor, served with spicy chickpeas.",
  },
  {
    name: "Lassi",
    description: "Thick, sweet or salty yogurt drink served chilled in tall glasses.",
  },
  {
    name: "Chole Bhature",
    description: "Fluffy deep-fried bread with spicy chickpeas, a street food favorite.",
  },
];

const desserts = [
  {
    name: "Kheer",
    description: "Sweet rice pudding with milk and nuts.",
  },
  {
    name: "Pinni",
    description: "Winter sweet made with wheat flour, ghee, and jaggery.",
  },
  {
    name: "Jalebi & Gulab Jamun",
    description: "Golden, syrupy treats found in every Punjabi sweet shop.",
  },
];

const seasons = [
  {
    name: "Winter",
    dates: "October–February",
    description: "Ideal for sightseeing and festivals like Lohri and Basant.",
  },
  {
    name: "Spring",
    dates: "March–April",
    description: "Best for Baisakhi celebrations and golden mustard fields.",
  },
  {
    name: "Monsoon",
    dates: "July–September",
    description: "The countryside turns lush green, perfect for photography.",
  },
  {
    name: "Summer",
    dates: "May–June",
    description: "Hot but great for city tours and evening bazaars.",
  },
];

const travelRoutes = [
  {
    title: "By Air",
    description:
      "Amritsar (Sri Guru Ram Dass Jee Airport): Well-connected to Delhi, Mumbai, Dubai, and other cities. Chandigarh Airport: Major domestic and international hub for North India.",
  },
  {
    title: "By Rail",
    description:
      "Extensive network connecting Amritsar, Jalandhar, Ludhiana, Patiala, and Chandigarh to all major Indian cities.",
  },
  {
    title: "By Road",
    description:
      "National highways and state roads offer smooth access from Delhi, Haryana, Himachal Pradesh, and Jammu. GT Road (NH44) is a scenic and convenient route for travelers.",
  },
];

const stays = [
  {
    title: "Luxury",
    description:
      "Taj Swarna (Amritsar), JW Marriott (Chandigarh), Neemrana Baradari Palace (Patiala).",
  },
  {
    title: "Mid-Range",
    description: "Ramada, Hyatt Regency, boutique hotels, and heritage stays.",
  },
  {
    title: "Budget",
    description: "Guesthouses, homestays, and dharamshalas near major gurudwaras.",
  },
];

const travelTips = [
  "Dress modestly when visiting religious places; cover your head in Gurudwaras.",
  "Try local street food but ensure cleanliness.",
  "Avoid loud behavior inside shrines — maintain decorum.",
  "Early mornings and evenings are the best time for sightseeing.",
];

const experiences = [
  {
    title: "Trekking",
    description: "Explore old Amritsar’s alleys, havelis, and spice markets.",
  },
  {
    title: "Spiritual Trails",
    description: "Visit Golden Temple, Durgiana Temple, and Anandpur Sahib.",
  },
  {
    title: "Rural Tourism",
    description: "Experience farm stays, tractor rides, and local village life.",
  },
  {
    title: "Cultural Shows",
    description: "Watch traditional Bhangra and Giddha performances.",
  },
  {
    title: "Shopping",
    description:
      "Explore Hall Bazaar (Amritsar) and Patiala markets for juttis, phulkari, and handicrafts.",
  },
];

const handicrafts = [
  {
    title: "Phulkari Embroidery",
    description: "Traditional floral embroidery on shawls, dupattas, and sarees.",
  },
  {
    title: "Punjabi Juttis",
    description: "Handcrafted leather footwear with intricate patterns.",
  },
  {
    title: "Woodwork & Metal Art",
    description: "From utensils to home décor, reflecting rural artistry.",
  },
  {
    title: "Textiles & Handlooms",
    description: "Cotton and khadi fabrics in bright, festive hues.",
  },
  {
    title: "Food Souvenirs",
    description:
      "Pickles, papads, jaggery, and Amritsari masalas — perfect take-home treats.",
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
];

export default function PunjabPage() {
  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <Image
          className={styles.heroImage}
          src="/india/city.jpg"
          alt="The Golden Temple in Amritsar"
          fill
          priority
          sizes="100vw"
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <h1>Punjab</h1>
          <p className={styles.tagline}>Land of Vibrant Culture and Golden Fields</p>
          <p className={styles.heroDescription}>
            Known as the “Granary of India” and the “Land of Five Rivers,” Punjab is where
            hospitality, color, and culture come alive.
          </p>
        </div>
      </header>

      <section className={styles.section} aria-labelledby="punjab-heading">
        <div className={styles.titleBlock}>
          <h2 id="punjab-heading">Punjab — The Land of Vibrant Culture and Golden Fields</h2>
          <p>
            Explore India’s 28 states and 8 union territories — each offering its own culture,
            cuisine, and charm. Find the perfect destination for your next journey through ages.
          </p>
        </div>
      </section>

      <section className={styles.section} id="introduction">
        <div className={styles.bandHeader}>Introduction</div>
        <div className={styles.introGrid}>
          <div className={styles.featureImage}>
            <Image
              src="/india/city.jpg"
              alt="The Golden Temple reflected in the Amritsar pool"
              fill
              sizes="(max-width: 900px) 100vw, 40vw"
            />
          </div>
          <div className={styles.introCopy}>
            <h3>Introduction</h3>
            <p>
              Known as the “Granary of India” and the “Land of Five Rivers,” Punjab is where
              hospitality, color, and culture come alive. A state steeped in history and joy,
              Punjab offers a unique blend of spirituality, tradition, and festivity. From the
              sacred Golden Temple in Amritsar to the energetic beats of Bhangra and the flavors
              of Punjabi cuisine, every corner radiates warmth and celebration.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section} id="destinations">
        <div className={styles.bandHeader}>Top Tourist Destinations</div>
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
        <div className={styles.bandHeader}>Culture &amp; Heritage</div>
        <div className={styles.bannerImage}>
          <Image
            src="/india/heritage.jpg"
            alt="A historic Indian monument framed by gardens"
            fill
            sizes="(max-width: 900px) 100vw, 90vw"
          />
        </div>
        <div className={styles.longCopy}>
          <p>
            Punjab’s culture is an explosion of music, dance, color, and joy. The rhythmic beats
            of dhol, the energy of Bhangra, and the grace of Giddha express the state’s boundless
            spirit. Gurudwaras stand as symbols of faith and equality, while fairs and weddings
            burst with life and laughter. From its royal architecture to its traditional attire
            and folk songs, Punjab’s heritage reflects a deep sense of pride and togetherness.
          </p>
        </div>
      </section>

      <section className={styles.section} id="festivals">
        <div className={styles.bandHeader}>Festivals &amp; Events</div>
        <div className={styles.bannerImage}>
          <Image
            src="/india/festivals.jpg"
            alt="A colorful outdoor festival scene"
            fill
            sizes="(max-width: 900px) 100vw, 90vw"
          />
        </div>
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
        <div className={styles.bandHeader}>Local Cuisine</div>
        <div className={styles.splitFeature}>
          <div className={styles.featureImage}>
            <Image
              src="/india/food.jpg"
              alt="A restaurant dining room ready to welcome guests"
              fill
              sizes="(max-width: 900px) 100vw, 40vw"
            />
          </div>
          <div className={styles.featureCopy}>
            <h3>Signature Dishes</h3>
            <p>
              Punjabi cuisine is bold, flavorful, and deeply satisfying — known for its generous
              use of butter, cream, and spices.
            </p>
            <ul className={styles.foodList}>
              {dishes.map((dish) => (
                <li key={dish.name}>
                  <strong>{dish.name}:</strong> {dish.description}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.foodCategories}>
          <article>
            <h3>Beverages</h3>
            <p>
              <strong>Lassi:</strong> Thick, sweet or salty yogurt drink served chilled in tall
              glasses.
            </p>
          </article>
          <article>
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
        <div className={styles.bandHeader}>Best Time to Visit</div>
        <div className={styles.bannerImage}>
          <Image
            src="/india/river.jpg"
            alt="Warm sunset over the countryside"
            fill
            sizes="(max-width: 900px) 100vw, 90vw"
          />
        </div>
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
        <div className={styles.bandHeader}>How to Reach</div>
        <div className={styles.bannerImage}>
          <Image
            src="/india/hero.jpg"
            alt="A road stretching through a wide open landscape"
            fill
            sizes="(max-width: 900px) 100vw, 90vw"
          />
        </div>
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
        <div className={styles.bandHeader}>Accommodation &amp; Travel Tips</div>
        <div className={styles.bannerImage}>
          <Image
            src="/india/nature.jpg"
            alt="Sunrise across a green landscape"
            fill
            sizes="(max-width: 900px) 100vw, 90vw"
          />
        </div>
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
        <div className={styles.bandHeader}>Adventure &amp; Experiences</div>
        <div className={styles.bannerImage}>
          <Image
            src="/india/adventure.jpg"
            alt="An outdoor adventure in the Indian countryside"
            fill
            sizes="(max-width: 900px) 100vw, 90vw"
          />
        </div>
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
        <div className={styles.bandHeader}>Handicrafts &amp; Shopping</div>
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
        <div className={styles.bandHeader}>Explore other places also</div>
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
