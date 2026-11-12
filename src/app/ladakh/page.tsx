import Link from "next/link";
import styles from "./page.module.css";

const heroImage = "/ladakh/hero.jpg";

const destinations = [
  {
    name: "Leh",
    title: "The Heart of Ladakh",
    description:
      "Leh, the capital of Ladakh, is a blend of ancient charm and high-altitude adventure. Nestled among snow-capped peaks, it boasts landmarks like Leh Palace, Shanti Stupa, and centuries-old monasteries overlooking the town. Its bustling bazaar is filled with Tibetan handicrafts, prayer wheels, and warm smiles. With its mix of culture, history, and scenic beauty, Leh serves as the perfect gateway to exploring the rest of Ladakh.",
    image: "/ladakh/leh.jpg",
  },
  {
    name: "Pangong Tso",
    title: "The Shimmering Blue Lake",
    description:
      "Stretching between India and Tibet, Pangong Tso is famous for its surreal shades of blue that change with the sunlight. Surrounded by towering brown mountains and clear skies, it’s one of the most photogenic places in Ladakh. Camping on its banks under a blanket of stars is an unforgettable experience. The lake’s calm beauty and silence make it a spiritual retreat as much as a natural wonder.",
    image: "/ladakh/pangong.jpg",
  },
  {
    name: "Nubra Valley",
    title: "The Desert in the Sky",
    description:
      "Tucked away beyond the Khardung La Pass, Nubra Valley is a world of contrasts — where cold deserts meet green villages. The valley is famous for its silver sand dunes, double-humped Bactrian camels, and the serene Diskit Monastery with its giant Buddha statue. The Shyok and Siachen rivers weave through its rugged terrain, creating stunning views at every turn. Nubra’s peaceful ambiance and unique landscape make it a must-visit in any Ladakh itinerary.",
    image: "/ladakh/nubra.jpg",
  },
  {
    name: "Kargil",
    title: "The Land of Courage and Beauty",
    description:
      "Situated along the Suru River, Kargil is a town known for its bravery, history, and breathtaking landscapes. Once a key stop on ancient trade routes, it now stands as a symbol of resilience, marked by the Kargil War Memorial honoring India’s heroes. Beyond its history, visitors can explore the Drass Valley, alpine meadows, and ancient Buddhist rock carvings nearby. Kargil offers both reflection and adventure amidst the serenity of the Himalayas.",
    image: "/ladakh/kargil.jpg",
  },
  {
    name: "Tso Moriri",
    title: "The Tranquil Lake of the Himalayas",
    description:
      "Hidden deep in the Changthang Plateau, Tso Moriri is a high-altitude lake surrounded by snow-tipped peaks and barren hills. Its sapphire waters mirror the vast sky, creating a scene of absolute stillness and purity. The region is home to rare birds like the black-necked crane and Tibetan gazelles, making it a haven for wildlife enthusiasts. Remote, pristine, and peaceful — Tso Moriri is Ladakh’s quietest and most mesmerizing escape.",
    image: "/ladakh/tso-moriri.jpg",
  },
];

const culturePoints = [
  "Ladakh’s culture reflects the rich tapestry of Tibetan Buddhism blended with Himalayan traditions.",
  "Monks chant prayers in centuries-old monasteries like Hemis, Thiksey, and Lamayuru, where colorful murals and golden stupas echo peace.",
  "Festivals are celebrated with vibrant masks, music, and dance, symbolizing the triumph of good over evil.",
  "The warmth of Ladakhi people, their traditional attire, and sustainable lifestyle define the essence of this mountain kingdom.",
];

const foodNotes = [
  "Ladakh’s food reflects its climate — simple, warm, and comforting.",
  "Influenced by Tibetan and Central Asian flavors, every meal feels homely and nourishing.",
  "Popular dishes include thukpa, momos, butter tea, and barley-based staples.",
];

const visitSeasons = [
  { label: "Spring", text: "March to May brings flower-filled valleys and milder temperatures." },
  { label: "Summer", text: "June to August is ideal for sightseeing, trekking, and lake excursions." },
  { label: "Autumn", text: "September to November offers clear skies and crisp mountain air." },
  { label: "Winter", text: "December to February transforms the region into a snowy, tranquil wonderland." },
];

const travelTips = [
  "Acclimatize gradually and stay hydrated to adjust to high-altitude conditions.",
  "Carry warm clothing, even during summer evenings, as temperatures can drop quickly.",
  "Plan road trips carefully because weather and road conditions can change rapidly.",
  "Respect local customs, monasteries, and village traditions while exploring the region.",
];

const shoppingHighlights = [
  "Prayer flags and Buddhist artifacts",
  "Handwoven shawls and woolens",
  "Pashmina and shawl work",
  "Traditional silver jewelry",
  "Tibetan carpets and souvenirs",
];

export default function LadakhPage() {
  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <img className={styles.heroImage} src={heroImage} alt="Ladakh landscape" />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Ladakh</h1>
          <div className={styles.subtitleWrap}>
            <div className={styles.tagline}>The Land of High Passes</div>
            <div className={styles.subText}>
              A high-altitude desert of turquoise lakes, stark mountains, ancient monasteries, and
              welcoming Himalayan communities.
            </div>
          </div>
        </div>
      </header>

      <section className={styles.section}>
        <div className={styles.titleBlock}>
          <h1>Ladakh — “The Land of High Passes”</h1>
          <p>
            Discover a Himalayan land of dramatic mountain passes, high-altitude lakes, ancient
            monasteries, and a distinct culture shaped by the Trans-Himalayan landscape.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.bandHeader}>Introduction</div>
        <div className={styles.introGrid}>
          <div className={styles.featureImageWrap}>
            <img src="/ladakh/intro.jpg" alt="High Himalayan mountain landscape in Ladakh" />
          </div>
          <div className={styles.introCopy}>
            <h2>Introduction</h2>
            <p>
              Rising high in the Trans-Himalayan region, Ladakh is a breathtaking blend of raw
              wilderness and spiritual calm. Known as “The Land of High Passes,” this cold desert
              region offers a surreal world of snow-clad peaks, turquoise lakes, ancient
              monasteries, and endless skies.
            </p>
            <p>
              From the prayer flags of Leh fluttering in the wind to the mirror-like waters of
              Pangong Tso, Ladakh is where silence speaks the loudest. Its warm-hearted people,
              traditional Buddhist culture, and celestial landscapes make it a once-in-a-lifetime
              destination for travelers, trekkers, and dreamers.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.bandHeader}>Top Tourist Destinations</div>
        <div className={styles.destinationGrid}>
          {destinations.map((item, index) => (
            <article className={styles.destinationCard} key={item.name}>
              <div className={index % 2 === 0 ? styles.imageWrapLeft : styles.imageWrapRight}>
                <img src={item.image} alt={item.name} />
              </div>
              <div className={styles.destinationText}>
                <h3>{index + 1}. {item.name} – {item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.bandHeader}>Culture &amp; Heritage</div>
        <div className={styles.fullWidthImageWrap}>
          <img src="/ladakh/heritage.jpg" alt="Traditional Himalayan architecture" />
        </div>
        <div className={styles.cultureText}>
          {culturePoints.map((point) => (
            <p key={point}>{point}</p>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.bandHeader}>Festivals &amp; Events</div>
        <div className={styles.pillGrid}>
          <span className={styles.pill}>Hemis Festival</span>
          <span className={styles.pill}>Losar</span>
          <span className={styles.pill}>Karsha Gustor</span>
          <span className={styles.pill}>Thiksay Gustor</span>
          <span className={styles.pill}>Yuru Kabgyat</span>
          <span className={styles.pill}>Monastery Festivals</span>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.bandHeader}>Local Cuisine</div>
        <div className={styles.foodText}>
          {foodNotes.map((note) => (
            <p key={note}>{note}</p>
          ))}
        </div>
        <div className={styles.pillGrid}>
          <span className={styles.pill}>Thukpa</span>
          <span className={styles.pill}>Momos</span>
          <span className={styles.pill}>Butter Tea</span>
          <span className={styles.pill}>Skyu</span>
          <span className={styles.pill}>Chhurpi</span>
          <span className={styles.pill}>Apricot Jam</span>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.bandHeader}>Best Time to Visit</div>
        <div className={styles.visitText}>Ladakh experiences extreme seasons, each offering a unique charm.</div>
        <div className={styles.timelineGrid}>
          {visitSeasons.map((slot) => (
            <div className={styles.timelineCard} key={slot.label}>
              <h3>{slot.label}</h3>
              <p>{slot.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.bandHeader}>How to Reach</div>
        <div className={styles.detailBlock}>
          <p>
            Ladakh is accessible by air through Kushok Bakula Rimpochee Airport in Leh, by road via
            the Srinagar-Leh and Manali-Leh highways, and by bus or taxi services connecting major
            regions. The road journey is scenic and adventurous, while air travel offers the fastest
            way to reach this remote Himalayan destination.
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

      <section className={styles.section}>
        <div className={styles.bandHeader}>Handicrafts &amp; Shopping</div>
        <div className={styles.pillGrid}>
          {shoppingHighlights.map((item) => (
            <span className={styles.pill} key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.bandHeader}>Explore other places also</div>
        <div className={styles.pillGrid}>
          <Link className={styles.pill} href="/jammu-kashmir">
            Jammu &amp; Kashmir
          </Link>
          <Link className={styles.pill} href="/himachal-pradesh">
            Himachal Pradesh
          </Link>
          <Link className={styles.pill} href="/states">
            Explore all states
          </Link>
        </div>
      </section>

    </main>
  );
}
