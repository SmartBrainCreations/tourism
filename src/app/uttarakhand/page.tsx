import Image from "next/image";
import Link from "next/link";
import styles from "../destination-page.module.css";

const destinations = [
  {
    name: "Rishikesh",
    title: "The Yoga Capital of the World",
    description:
      "Set along the banks of the sacred Ganga River, Rishikesh is famous for yoga, meditation, and adventure. From serene ashrams to thrilling white-water rafting and the iconic Laxman Jhula, this town blends peace and adrenaline seamlessly. Evening Ganga Aarti on the ghats is a divine experience not to be missed.",
    image: "/uttarakhand/rishikesh.jpg",
    alt: "A Himalayan town surrounded by mountain scenery",
  },
  {
    name: "Haridwar",
    title: "The Gateway to Heaven",
    description:
      "A city of devotion and rituals, Haridwar is where the Ganga enters the plains. Pilgrims gather at Har Ki Pauri to witness the mesmerizing evening aarti. During the Kumbh Mela, millions of devotees bathe in its holy waters — a spectacle of faith and unity.",
    image: "/uttarakhand/haridwar.jpg",
    alt: "A sacred Indian site framed by historic architecture",
  },
  {
    name: "Nainital",
    title: "The City of Lakes",
    description:
      "Surrounded by emerald hills, Nainital is one of India’s most picturesque hill stations. Boating on the Naini Lake, exploring Tiffin Top and Snow View Point, or strolling through the lively Mall Road — each moment feels like a postcard come to life.",
    image: "/uttarakhand/nainital.jpg",
    alt: "A mountain landscape in northern India",
  },
  {
    name: "Mussoorie",
    title: "The Queen of Hills",
    description:
      "Known for its colonial charm and panoramic Himalayan views, Mussoorie is a romantic getaway. Visit Kempty Falls, Gun Hill, and the old churches dotting the town. Its misty weather, cozy cafes, and winding roads make it a timeless favorite for travelers.",
    image: "/uttarakhand/mussoorie.jpg",
    alt: "A hill town nestled in the Himalayas",
  },
  {
    name: "Jim Corbett National Park",
    title: "The Wild Heart of Uttarakhand",
    description:
      "India’s first national park, Jim Corbett is a paradise for wildlife lovers and photographers. Spread across dense forests and grasslands, it’s home to Bengal tigers, elephants, and hundreds of bird species. Jeep safaris, river crossings, and eco-resorts make it an unforgettable experience.",
    image: "/uttarakhand/corbett.jpg",
    alt: "A dense green forest",
  },
];

const festivals = [
  {
    title: "Kumbh Mela (Every 12 Years)",
    description:
      "Held in Haridwar, it’s one of the world’s largest spiritual gatherings, drawing millions of pilgrims from across the globe.",
  },
  {
    title: "Ganga Dussehra (May–June)",
    description: "Celebrates the descent of the Ganga from heaven to earth with sacred dips and prayers.",
  },
  {
    title: "Nanda Devi Raj Jat Yatra (Every 12 Years)",
    description:
      "A 280-km pilgrimage through the Himalayas, honoring Goddess Nanda Devi — a grand symbol of faith and endurance.",
  },
  {
    title: "Makar Sankranti & Basant Panchami",
    description:
      "Marking harvest and the arrival of spring, celebrated with fairs, folk music, and traditional feasts.",
  },
  {
    title: "Kanwar Yatra (July–August)",
    description:
      "Devotees walk barefoot carrying holy Ganga water to Shiva temples — an expression of devotion and strength.",
  },
];

const dishes = [
  {
    name: "Aloo Ke Gutke",
    description: "Spiced potatoes cooked in mustard oil and herbs — a local favorite.",
  },
  {
    name: "Kafuli",
    description: "A green curry made with spinach and fenugreek leaves, rich in flavor and nutrition.",
  },
  {
    name: "Phaanu",
    description: "A lentil-based dish cooked on slow flame, a Garhwali delicacy.",
  },
  {
    name: "Chainsoo",
    description: "Black gram curry, hearty and protein-rich.",
  },
  {
    name: "Bhatt Ki Churkani",
    description: "A Kumaoni specialty made from roasted black soybeans.",
  },
];

const seasons = [
  {
    name: "Summer",
    dates: "March–June",
    description: "Ideal for hill stations, trekking, and adventure.",
  },
  {
    name: "Monsoon",
    dates: "July–September",
    description: "Lush landscapes and waterfalls, but landslides are possible.",
  },
  {
    name: "Autumn",
    dates: "October–November",
    description: "Clear skies and perfect weather for Char Dham and Corbett.",
  },
  {
    name: "Winter",
    dates: "December–February",
    description: "Snowfall in Mussoorie, Auli, and Chopta — perfect for snow sports.",
  },
];

const travelRoutes = [
  {
    title: "By Air",
    description:
      "Jolly Grant Airport (Dehradun) connects to Delhi, Mumbai, Lucknow, and other cities. Pantnagar Airport serves the Kumaon region, near Nainital.",
  },
  {
    title: "By Rail",
    description:
      "Major stations include Haridwar, Dehradun, Kathgodam, and Rishikesh, with connections to Delhi, Kolkata, and other metros.",
  },
  {
    title: "By Road",
    description:
      "An excellent road network via NH7, NH109, and NH34, with regular buses from Delhi, Chandigarh, and Lucknow.",
  },
];

const stays = [
  {
    title: "Luxury",
    description:
      "Ananda in the Himalayas (Rishikesh), JW Marriott (Mussoorie), and Naini Retreat (Nainital).",
  },
  {
    title: "Mid-Range",
    description: "HPTDC hotels, forest lodges, and boutique stays.",
  },
  {
    title: "Budget",
    description: "Guesthouses, homestays, and campsites.",
  },
];

const travelTips = [
  "Carry woolens year-round — mountain weather changes quickly.",
  "Respect local traditions and avoid littering in natural areas.",
  "Stay hydrated and avoid overexertion at high altitudes.",
  "Book Char Dham routes and wildlife safaris in advance.",
];

const experiences = [
  {
    title: "Trekking",
    description: "Popular trails include Valley of Flowers, Roopkund, Har Ki Dun, and Nag Tibba.",
  },
  {
    title: "River Rafting",
    description: "Rishikesh offers thrilling rapids on the Ganga.",
  },
  {
    title: "Skiing",
    description: "Head to Auli for India’s best snow adventures.",
  },
  {
    title: "Camping",
    description: "Enjoy starlit nights in Chopta, Binsar, or Kanatal.",
  },
  {
    title: "Wildlife Safari",
    description: "Explore Jim Corbett and Rajaji National Park for close encounters with nature.",
  },
];

const handicrafts = [
  {
    title: "Wool Products",
    description: "Handwoven pashmina, shawls, and mufflers from Almora and Bageshwar.",
  },
  {
    title: "Wood Carving",
    description: "Intricate temple-style furniture and artifacts.",
  },
  {
    title: "Copperware",
    description: "Handmade utensils and décor items from Kumaon.",
  },
  {
    title: "Handloom Fabrics",
    description: "Natural cotton and wool blends in earthy tones.",
  },
  {
    title: "Local Souvenirs",
    description: "Organic honey, herbal oils, and rhododendron juice.",
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

export default function UttarakhandPage() {
  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <Image
          className={styles.heroImage}
          src="/uttarakhand/hero.jpg"
          alt="Snow-covered Himalayan peaks"
          fill
          priority
          sizes="100vw"
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <h1>Uttarakhand</h1>
          <p className={styles.tagline}>Dev Bhoomi — The Land of the Gods</p>
          <p className={styles.heroDescription}>
            Snow-capped peaks, sacred rivers, ancient temples, and lush forests make Uttarakhand
            a haven for pilgrims and adventurers alike.
          </p>
        </div>
      </header>

      <section className={styles.section} aria-labelledby="uttarakhand-heading">
        <div className={styles.titleBlock}>
          <h2 id="uttarakhand-heading">
            Uttarakhand — The Land of Gods and Natural Wonders
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
              src="/uttarakhand/introduction.jpg"
              alt="A mountain landscape in the Himalayas"
              fill
              sizes="(max-width: 900px) 100vw, 40vw"
            />
          </div>
          <div className={styles.introCopy}>
            <h3>Introduction</h3>
            <p>
              Nestled in the Himalayas, Uttarakhand — often called “Dev Bhoomi” or “Land of the
              Gods” — is where nature and spirituality coexist in perfect harmony. With
              snow-capped peaks, sacred rivers, ancient temples, and lush forests, this state is
              both a pilgrim’s haven and an adventurer’s paradise. From the Char Dham Yatra to
              Jim Corbett’s wilderness and the calm of Nainital’s lakes, Uttarakhand offers
              serenity, beauty, and soulful experiences in every direction.
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
          src="/uttarakhand/culture.jpg"
          alt="Historic architecture in the Himalayan region"
        />
        <div className={styles.longCopy}>
          <p>
            Uttarakhand’s culture reflects its deep connection with nature, faith, and simplicity.
            Folk music and dances like Chholiya and Langvir Nritya celebrate harvests and
            legends, while local art showcases devotion and craftsmanship. Temples like
            Kedarnath, Badrinath, and Jageshwar tell ancient stories through stone and chants.
            Villages nestled in the hills preserve age-old traditions, handlooms, and cuisines
            that embody the mountain spirit.
          </p>
        </div>
      </section>

      <section className={styles.section} id="festivals">
        <SectionHeading>Festivals &amp; Events</SectionHeading>
        <BannerImage
          src="/uttarakhand/festival.jpg"
          alt="A colorful Himalayan festival"
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
        <BannerImage src="/uttarakhand/cuisine.jpg" alt="Traditional Himalayan cuisine" />
        <div className={styles.longCopy}>
          <p>
            Uttarakhand’s cuisine is earthy, nutritious, and full of Himalayan flavors. Most
            dishes are made with locally grown grains, lentils, and herbs — simple yet deeply
            satisfying.
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
              <strong>Buransh Juice:</strong> Made from rhododendron flowers, refreshing and
              antioxidant-rich.
            </p>
            <p>
              <strong>Chhach:</strong> Spiced buttermilk — ideal for hot days.
            </p>
          </article>
          <article>
            <h3>Desserts</h3>
            <p>
              <strong>Jhangora Ki Kheer:</strong> Sweet pudding made from millet and milk.
            </p>
            <p>
              <strong>Bal Mithai:</strong> The signature fudge of Almora coated in sugar balls.
            </p>
          </article>
        </div>
      </section>

      <section className={styles.section} id="best-time">
        <SectionHeading>Best Time to Visit</SectionHeading>
        <BannerImage
          src="/uttarakhand/best-time.jpg"
          alt="Snow-capped peaks in the Himalayas"
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
          src="/uttarakhand/travel.jpg"
          alt="A mountain route through northern India"
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
          src="/uttarakhand/stays.jpg"
          alt="A quiet Himalayan hillside"
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
          src="/uttarakhand/corbett.jpg"
          alt="An adventure activity in the Himalayas"
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
