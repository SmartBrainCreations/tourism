import styles from "./page.module.css";

const heroImage = "/jammu-kashmir/hero.jpg";

const destinations = [
  {
    name: "Srinagar",
    tag: "Dal Lake & Gardens",
    image: "/jammu-kashmir/srinagar.jpg",
  },
  {
    name: "Gulmarg",
    tag: "Snowy Meadows",
    image: "/jammu-kashmir/gulmarg.jpg",
  },
  {
    name: "Pahalgam",
    tag: "Valley Escapes",
    image: "/jammu-kashmir/pahalgam.jpg",
  },
  {
    name: "Sonamarg",
    tag: "Glacial Beauty",
    image: "/jammu-kashmir/sonamarg.jpg",
  },
  {
    name: "Jammu",
    tag: "Pilgrimage & Forts",
    image: "/jammu-kashmir/jammu.jpg",
  },
  {
    name: "Patnitop",
    tag: "Pine Forests & Meadows",
    image: "/jammu-kashmir/patnitop.jpg",
  },
];

const heritageHighlights = [
  {
    title: "Craft & Weaving",
    description:
      "Kashmir is famous for handwoven pashmina, carpets, papier-mâché, walnut woodwork, and silver craft traditions passed down through generations.",
  },
  {
    title: "Spiritual Heritage",
    description:
      "Sacred shrines, Sufi traditions, and centuries-old temples create a deeply spiritual identity that shapes the lives of locals.",
  },
  {
    title: "Architecture",
    description:
      "From Mughal gardens to carved wooden houses and serene mosques, the valley’s architecture blends Persian, Central Asian, and local influences.",
  },
];

const festivals = [
  "Baisakhi",
  "Navreh",
  "Tulip Festival",
  "Kashmir Winter Carnival",
  "Eid-ul-Fitr",
  "Amarnath Yatra",
];

const cuisine = [
  "Wazwan",
  "Kashmiri Pulao",
  "Rogan Josh",
  "Kahwa",
  "Yakhni",
  "Sheer Chai",
];

const bestTime = [
  {
    label: "Spring",
    info: "March to May for tulips, mild weather, and blooming gardens.",
  },
  {
    label: "Summer",
    info: "June to August for hill escapes and lake experiences.",
  },
  {
    label: "Autumn",
    info: "September to November for vibrant colors and clear valley views.",
  },
  {
    label: "Winter",
    info: "December to February for snowfall, snow activities, and cozy retreats.",
  },
];

const travelTips = [
  "Carry warm layers even in shoulder seasons, as mountain evenings can be chilly.",
  "Book flights and accommodations early during festivals and holiday peaks.",
  "Respect local customs, especially while visiting shrines, mosques, and heritage homes.",
  "Use licensed transport and check weather conditions before venturing into remote valleys.",
];

export default function JammuKashmirPage() {
  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <img className={styles.heroImage} src={heroImage} alt="Snowy Himalayan valley in Jammu & Kashmir" />
        <div className={styles.heroOverlay} />

        <div className={styles.heroContent}>
          <p className={styles.kicker}>Jammu &amp; Kashmir</p>
          <h1>Jammu &amp; Kashmir</h1>
          <p className={styles.tagline}>Heaven on Earth</p>
          <p className={styles.subtitle}>
            Snow-clad peaks, shimmering lakes, and tulip gardens — J&amp;K is where nature paints
            its finest masterpiece.
          </p>
        </div>
      </header>

      <section className={styles.section}>
        <div className={styles.titleBlock}>
          <h2>Jammu &amp; Kashmir — “Heaven on Earth”</h2>
          <p>
            From Kashmir’s alpine valleys to Jammu’s sacred shrines, Jammu &amp; Kashmir brings
            together dramatic Himalayan scenery, living traditions, and memorable hospitality.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.bandHeader}>Introduction</div>
        <div className={styles.introGrid}>
          <div className={styles.featureImageWrap}>
            <img
              src="/jammu-kashmir/srinagar.jpg"
              alt="Srinagar valley landscape"
            />
          </div>
          <div className={styles.introCopy}>
            <h3>Introduction</h3>
            <p>
              Jammu &amp; Kashmir is a region of lyrical beauty, spiritual sanctity, and rich cultural
              continuity. From the Mughal gardens of Srinagar to the alpine roads of Gulmarg and
              the sacred temples of Jammu, every landscape here feels like a story waiting to be
              discovered.
            </p>
            <p>
              Whether you seek snow adventures, tranquil lakes, heritage walks, or deeply rooted
              traditions, the valley offers a balance of serenity and wonder that leaves a lasting
              impression on every traveler.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.bandHeader}>Top Tourist Destinations</div>
        <div className={styles.destinationGrid}>
          {destinations.map((destination) => (
            <article className={styles.destinationCard} key={destination.name}>
              <img src={destination.image} alt={destination.name} />
              <div className={styles.cardOverlay} />
              <div className={styles.cardText}>
                <h3>{destination.name}</h3>
                <span>{destination.tag}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.bandHeader}>Culture &amp; Heritage</div>
        <div className={styles.infoGrid}>
          {heritageHighlights.map((highlight) => (
            <article className={styles.infoCard} key={highlight.title}>
              <h3>{highlight.title}</h3>
              <p>{highlight.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.bandHeader}>Festivals &amp; Events</div>
        <div className={styles.pillGrid}>
          {festivals.map((festival) => (
            <div className={styles.pill} key={festival}>
              {festival}
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.bandHeader}>Local Cuisine</div>
        <div className={styles.pillGrid}>
          {cuisine.map((item) => (
            <div className={styles.pill} key={item}>
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.bandHeader}>Best Time to Visit</div>
        <div className={styles.timelineGrid}>
          {bestTime.map((slot) => (
            <div className={styles.timelineCard} key={slot.label}>
              <h3>{slot.label}</h3>
              <p>{slot.info}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.bandHeader}>How to Reach</div>
        <div className={styles.detailBlock}>
          <p>
            The region is well connected by air via Sheikh ul-Alam International Airport in Srinagar,
            rail through Jammu Tawi, and road networks linking the valley to the rest of India. The
            journey itself, especially through mountain roads, is often part of the experience.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.bandHeader}>Accommodation &amp; Travel Tips</div>
        <div className={styles.detailBlock}>
          <ul>
            {travelTips.map((tip) => (
              <li key={tip}>{tip}</li>
            ))}
          </ul>
        </div>
      </section>

    </main>
  );
}
