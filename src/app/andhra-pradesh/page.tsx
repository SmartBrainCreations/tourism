import Image from "next/image";
import Link from "next/link";
import styles from "../destination-page.module.css";

const destinations = [
  {
    name: "Tirupati",
    title: "The Pilgrimage Capital",
    description:
      "Tirupati is one of India’s most revered spiritual destinations, drawing millions of devotees to the Sri Venkateswara Temple. Surrounded by the Eastern Ghats, the city offers a serene sacred atmosphere alongside lively temple rituals and panoramic views.",
    image: "/andhra-pradesh/tirupati.jpg",
    alt: "The Tirumala Venkateswara Temple in Tirupati",
  },
  {
    name: "Amaravati",
    title: "The Heritage of the Ancient Capital",
    description:
      "Known for the spectacular Amaravati Stupa and the region’s ancient Buddhist heritage, this city offers a glimpse into Andhra Pradesh’s historic legacy, temple architecture, and cultural depth.",
    image: "/andhra-pradesh/amaravati.jpg",
    alt: "The Amaravati Stupa and historical heritage site",
  },
  {
    name: "Visakhapatnam",
    title: "The City of Destiny",
    description:
      "Also known as Vizag, this coastal metropolis shines with scenic beaches, naval heritage, lush hills, and a warm maritime culture. The shore, harbor, and nearby hill viewpoints make it a memorable stop on the East Coast.",
    image: "/andhra-pradesh/visakhapatnam.jpg",
    alt: "The coastline and cityscape of Visakhapatnam",
  },
  {
    name: "Araku Valley",
    title: "The Misty Hill Retreat",
    description:
      "Araku Valley is an enchanting tribal hill station in the Eastern Ghats, known for its cool climate, coffee plantations, waterfalls, and indigenous heritage. It is a perfect blend of scenic beauty and cultural richness.",
    image: "/andhra-pradesh/araku.jpg",
    alt: "A misty view of Araku Valley in the Eastern Ghats",
  },
  {
    name: "Vijayawada",
    title: "Gateway to the Krishna River",
    description:
      "A city of historic temples, riverfront charm, and lively markets, Vijayawada is famous for the Kanaka Durga Temple and the bustling Kondapalli craftsmanship tradition. It brings together devotion, commerce, and culture.",
    image: "/andhra-pradesh/vijayawada.jpg",
    alt: "The Kanaka Durga Temple in Vijayawada",
  },
];

const festivals = [
  {
    title: "Ugadi",
    description:
      "Andhra Pradesh’s New Year festival is celebrated with festive foods, prayers, family gatherings, and vibrant cultural rituals that mark new beginnings.",
  },
  {
    title: "Kuchipudi Festival",
    description:
      "A celebration of one of India’s finest classical dance traditions, Kuchipudi performances showcase storytelling, rhythm, and spirit in a spectacular way.",
  },
  {
    title: "Maha Shivaratri",
    description:
      "A deeply spiritual observance marked by night-long prayers, temple processions, and devotion across the state.",
  },
  {
    title: "Sankranti",
    description:
      "A harvest festival of color and celebration, known for traditional decorations, family feasts, and community gatherings.",
  },
  {
    title: "Brahmotsavam",
    description:
      "A grand temple celebration marked by processions, sacred music, and lively devotion in Andhra’s temple towns.",
  },
];

const cuisine = [
  {
    name: "Andhra Pulihora",
    description: "A tangy tamarind rice dish that is iconic for its bold flavor and festive charm.",
  },
  {
    name: "Gongura Pickle",
    description: "Sour and spicy, this signature dish brings the true zest of Andhra cuisine to every meal.",
  },
  {
    name: "Royalu Kodi Curry",
    description: "A rich, aromatic chicken curry that reflects the state’s love for spice and depth.",
  },
  {
    name: "Pesarattu",
    description: "A savory green gram dosa that is a beloved breakfast favorite across the region.",
  },
  {
    name: "Pootharekulu",
    description: "A classic sweet treat from Andhra, known for its delicate layers and distinct taste.",
  },
];

const seasons = [
  {
    name: "Winter",
    dates: "November–February",
    description: "Cool and pleasant weather, ideal for temple visits, beach escapes, and city exploration.",
  },
  {
    name: "Summer",
    dates: "March–May",
    description: "Warm days with dry conditions; early mornings and hill stations are best for comfort.",
  },
  {
    name: "Monsoon",
    dates: "June–September",
    description: "Lush landscapes and refreshing rains, especially beautiful in the hill regions.",
  },
];

const travelRoutes = [
  {
    title: "By Air",
    description:
      "The state is served by Rajiv Gandhi International Airport in Hyderabad, Visakhapatnam Airport, and Vijayawada Airport, with strong domestic connectivity.",
  },
  {
    title: "By Rail",
    description:
      "Andhra Pradesh has a comprehensive rail network connecting major pilgrimage, coastal, and urban destinations such as Vijayawada, Guntur, Visakhapatnam, and Tirupati.",
  },
  {
    title: "By Road",
    description:
      "Well-maintained highways link the state to Telangana, Tamil Nadu, Karnataka, and Odisha, making road travel easy for scenic and spiritual journeys.",
  },
];

const stays = [
  {
    title: "Luxury",
    description: "Premium beach resorts in Visakhapatnam and heritage stays near Tirupati and Vijayawada.",
  },
  {
    title: "Mid-Range",
    description: "Comfortable city hotels and family-run guesthouses near temple towns and coastal areas.",
  },
  {
    title: "Budget",
    description: "Simple lodges, local homestays, and pilgrim-friendly accommodations across the state.",
  },
];

const travelTips = [
  "Carry modest clothing when visiting temples and sacred spaces.",
  "Start early for Tirupati or hill-station trips to avoid midday heat.",
  "Try local Andhra meals and pickles for an authentic taste experience.",
  "Keep water and sunscreen handy during coastal sightseeing and long road trips.",
];

const experiences = [
  {
    title: "Temple Trails",
    description: "Visit Tirupati, Amaravati, and Vijayawada for spiritual heritage and architecture.",
  },
  {
    title: "Beach Escapes",
    description: "Unwind at RK Beach and other picturesque coastal stretches in Vizag and nearby towns.",
  },
  {
    title: "Heritage & Archaeology",
    description: "Explore ancient Buddhist sites, rock-cut landscapes, and historical ruins across the state.",
  },
  {
    title: "Tribal & Hill Experiences",
    description: "Discover Araku Valley’s serene valleys, tribal culture, and coffee estate landscapes.",
  },
  {
    title: "Classical Arts",
    description: "Witness Kuchipudi performances and regional dance traditions that define Andhra culture.",
  },
];

const handicrafts = [
  {
    title: "Kondapalli Toys",
    description: "Traditional wooden toys handcrafted in Vijayawada with intricate detailing and heritage value.",
  },
  {
    title: "Lepakshi Paintings",
    description: "Paintings rich in style, storytelling, and temple-inspired motifs.",
  },
  {
    title: "Pearl & Shell Crafts",
    description: "Coastal crafts inspired by Andhra’s maritime heritage and artisanal traditions.",
  },
  {
    title: "Handloom Textiles",
    description: "Colorful woven fabrics and garments rooted in Andhra’s regional traditions.",
  },
  {
    title: "Temple Artwork",
    description: "Stone carvings and devotional art that narrate the spiritual history of the state.",
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
    name: "Karnataka",
    tagline: "Sculpted by History",
    image: "/karnataka/hero.jpg",
  },
];

const imageCredits = [
  {
    image: "Tirumala Venkateswara Temple entrance, Tirupati",
    creator: "Kpratap",
    license: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Tirumala_Venkateswara_temple_entrance_09062015.JPG",
  },
  {
    image: "Amaravati Stupa partial side view",
    creator: "Photo by user",
    license: "Public Domain / Wikimedia",
    href: "https://commons.wikimedia.org/wiki/File:Partial_Side_View_of_Maha_Stupa_at_Amaravati.jpg",
  },
  {
    image: "Araku Valley hill station",
    creator: "Wikimedia Commons",
    license: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:A_view_of_Araku_Valley_hill_station_in_Andhra_Pradesh.jpg",
  },
  {
    image: "Kanaka Durga Gopuram, Vijayawada",
    creator: "S. Venkateswarlu",
    license: "CC BY-SA 3.0",
    href: "https://commons.wikimedia.org/wiki/File:Kanaka_Durga_Gopuram,_Vijayawada.jpg",
  },
  {
    image: "Kuchipudi dancer from Andhra Pradesh",
    creator: "Wikimedia Commons",
    license: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:A_Kuchipudi_Dancer_from_Andhra_Pradesh.JPG",
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

export default function AndhraPradeshPage() {
  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <Image
          className={styles.heroImage}
          src="/andhra-pradesh/hero.jpg"
          alt="Andhra Pradesh landscape with sacred temple architecture and green hills"
          fill
          priority
          sizes="100vw"
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <h1>Andhra Pradesh</h1>
          <p className={styles.tagline}>The Essence of the East Coast</p>
          <p className={styles.heroDescription}>
            Discover a state where ancient temples, rich culture, vibrant food, and
            scenic coastlines weave together into unforgettable journeys.
          </p>
        </div>
      </header>

      <section className={styles.section} aria-labelledby="andhra-heading">
        <div className={styles.titleBlock}>
          <h2 id="andhra-heading">Andhra Pradesh — The Essence of the East Coast</h2>
          <p>
            From sacred pilgrim towns and world heritage sites to misty hills and
            lively coastlines, Andhra Pradesh brings together spiritual energy,
            cultural heritage, and natural beauty in one remarkable journey.
          </p>
        </div>
      </section>

      <section className={styles.section} id="introduction">
        <SectionHeading>Introduction</SectionHeading>
        <div className={styles.introGrid}>
          <div className={styles.featureImage}>
            <Image
              src="/andhra-pradesh/introduction.jpg"
              alt="Andhra Pradesh heritage and landscape scene"
              fill
              sizes="(max-width: 900px) 100vw, 40vw"
            />
          </div>
          <div className={styles.introCopy}>
            <h3>Introduction</h3>
            <p>
              Andhra Pradesh stands as one of India’s most diverse and dynamic states,
              shaped by the sacred rivers, temple heritage, ancient Buddhist sites,
              coastal beauty, and the warmth of its people. The state is renowned for
              its pilgrimage circuits, classical dance traditions, and bold culinary
              flavors. From the towering hills of Araku to the spiritual pull of
              Tirupati and the scenic coast of Visakhapatnam, Andhra Pradesh offers a
              rich combination of devotion, heritage, and beauty.
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
          src="/andhra-pradesh/culture.jpg"
          alt="A performer of Kuchipudi dance, one of Andhra Pradesh’s classical arts"
        />
        <div className={styles.longCopy}>
          <p>
            Andhra Pradesh is deeply rooted in classical traditions, devotional music,
            and temple architecture. The state is home to Kuchipudi, one of India’s
            most celebrated classical dance forms, and it continues to preserve age-old
            rituals through music, sculpture, and storytelling. Buddhist and Hindu
            heritage sites, towering temple gopurams, and regional festivals all speak
            to a rich cultural continuum that remains vibrant even today.
          </p>
        </div>
      </section>

      <section className={styles.section} id="festivals">
        <SectionHeading>Festivals &amp; Events</SectionHeading>
        <BannerImage
          src="/andhra-pradesh/festival.jpg"
          alt="Traditional Andhra festival foods and celebration"
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
        <SectionHeading>Cuisine</SectionHeading>
        <BannerImage
          src="/andhra-pradesh/cuisine.jpg"
          alt="A traditional Andhra meal served with spice and flavor"
        />
        <div className={styles.infoGrid}>
          {cuisine.map((dish) => (
            <article className={styles.infoCard} key={dish.name}>
              <h3>{dish.name}</h3>
              <p>{dish.description}</p>
            </article>
          ))}
        </div>
        <div className={styles.longCopy}>
          <p>
            Andhra cuisine is famously bold and flavorful — known for generous use of
            chili, tamarind, and local spices. Every meal is a celebration of heat,
            aroma, and freshness, with iconic dishes such as pulihora, gongura pickle,
            and pappu brought alive by local ingredients and cooking traditions.
          </p>
        </div>
      </section>

      <section className={styles.section} id="best-time">
        <SectionHeading>Best Time to Visit</SectionHeading>
        <BannerImage
          src="/andhra-pradesh/best-time.jpg"
          alt="A scenic natural landscape in Andhra Pradesh"
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
          src="/andhra-pradesh/travel.jpg"
          alt="Transport and travel routes across Andhra Pradesh"
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
          src="/andhra-pradesh/stays.jpg"
          alt="A scenic stay and experience in Andhra Pradesh"
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
          src="/andhra-pradesh/adventure.jpg"
          alt="Adventure and hill-country scenery in Andhra Pradesh"
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
          src="/andhra-pradesh/handicrafts.jpg"
          alt="Traditional Andhra handicrafts and craftsmanship"
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
            Local favorites include Kondapalli toys, handcrafted temple motifs, coastal
            artifacts, and regionally made garments. These treasures carry the state’s
            artistic heritage into modern homes and gifts.
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

    </main>
  );
}
