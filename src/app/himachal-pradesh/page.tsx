import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

const destinations = [
  {
    name: "Shimla",
    title: "The Queen of Hills",
    description:
      "The capital city and once the British summer retreat, Shimla enchants visitors with its colonial architecture, Mall Road charm, and surrounding cedar forests. The Ridge, Jakhoo Temple, and Christ Church are must-see landmarks. With cool weather, cozy cafes, and mountain views, Shimla perfectly captures Himachal’s timeless allure.",
    image: "/himachal-pradesh/shimla.jpg",
    alt: "Hillside city of Shimla, Himachal Pradesh",
  },
  {
    name: "Manali",
    title: "The Valley of Adventure",
    description:
      "Set in the Beas River valley, Manali is a hub for adventure lovers. From paragliding and rafting to skiing in Solang Valley and trekking to Rohtang Pass, it’s a playground for thrill-seekers. Surrounded by apple orchards and snow peaks, Manali also offers cozy stays, ancient temples, and a laid-back, bohemian vibe.",
    image: "/himachal-pradesh/manali.jpg",
    alt: "Mountain village and forested slopes in Manali",
  },
  {
    name: "Dharamshala & McLeod Ganj",
    title: "The Little Lhasa",
    description:
      "Home to His Holiness the Dalai Lama, McLeod Ganj offers a peaceful escape with Tibetan monasteries, prayer flags, and scenic views. Wander through Namgyal Monastery, Bhagsu Waterfall, and local cafes serving momos and butter tea. Dharamshala below hosts cricket stadiums, tea gardens, and calm countryside charm.",
    image: "/himachal-pradesh/dharamshala.jpg",
    alt: "McLeod Ganj in the Dharamshala region",
  },
  {
    name: "Kullu",
    title: "The Valley of Gods",
    description:
      "Surrounded by towering deodar trees and apple orchards, Kullu is known for its breathtaking beauty and spiritual aura. The Raghunath Temple, Great Himalayan National Park, and vibrant Dussehra Festival draw travelers year-round. The valley also serves as a gateway to Manali and paragliding sites like Bijli Mahadev.",
    image: "/himachal-pradesh/kullu.jpg",
    alt: "Apple orchard in Kullu Valley",
  },
  {
    name: "Spiti Valley",
    title: "The Cold Desert of Himachal",
    description:
      "Remote, rugged, and otherworldly, Spiti lies between Tibet and India. It’s home to ancient monasteries like Key and Tabo, turquoise rivers, and star-filled skies. From the Chicham Bridge to Langza Village (with its giant Buddha statue), Spiti is a living museum of Buddhist culture and Himalayan wilderness.",
    image: "/himachal-pradesh/spiti.jpg",
    alt: "Key Monastery in the high-altitude Spiti Valley",
  },
];

const festivals = [
  {
    title: "Kullu Dussehra (October)",
    description:
      "Unlike other parts of India, Kullu celebrates Dussehra with the gathering of hundreds of local deities in a grand procession. It’s a visual spectacle of faith and festivity.",
  },
  {
    title: "Minjar Fair (July–August)",
    description:
      "Chamba’s week-long harvest fair brings processions, folk performances, and local traditions together in a lively celebration.",
  },
  {
    title: "Losar Festival (February)",
    description:
      "Celebrated in Lahaul-Spiti and Kinnaur, Losar marks the Tibetan New Year with prayers, dances, and colorful flags.",
  },
  {
    title: "Winter Carnival (January)",
    description:
      "In Manali, this festival features skiing competitions, cultural performances, and traditional Himachali cuisine — a snowy celebration of mountain life.",
  },
];

const dishes = [
  {
    name: "Dham",
    description:
      "A festive thali with rice, lentils, yogurt curry, and sweets — a true Himachali experience.",
  },
  {
    name: "Siddu",
    description: "A steamed wheat bun stuffed with nuts and served with ghee.",
  },
  {
    name: "Madra",
    description: "Chickpeas cooked in yogurt and aromatic spices, a delicacy of Chamba.",
  },
  {
    name: "Babru",
    description: "Himachali version of kachori, filled with black gram paste.",
  },
  {
    name: "Tudkiya Bhath",
    description: "A spiced rice dish cooked with lentils, potatoes, and yogurt.",
  },
];

const beverages = [
  {
    name: "Chhaang",
    description: "A local barley drink popular in Lahaul-Spiti.",
  },
  {
    name: "Tea",
    description: "Freshly brewed from local Kangra plantations.",
  },
];

const desserts = [
  {
    name: "Mittha",
    description: "Sweetened rice with dry fruits and saffron.",
  },
  {
    name: "Patande",
    description: "Himachali pancakes, often served with honey or jaggery.",
  },
];

const seasons = [
  {
    name: "Summer",
    dates: "April–June",
    description: "Ideal for sightseeing, trekking, and exploring hill stations.",
  },
  {
    name: "Monsoon",
    dates: "July–September",
    description: "Lush green landscapes — great for photography, but landslides are possible.",
  },
  {
    name: "Winter",
    dates: "November–February",
    description: "Best for snow sports in Manali, Kufri, and Narkanda.",
  },
  {
    name: "Autumn",
    dates: "October",
    description: "Perfect for festivals and clear mountain views.",
  },
];

const travelRoutes = [
  {
    title: "By Air",
    description:
      "Airports: Shimla, Kullu-Manali (Bhuntar), Dharamshala (Gaggal). Regular flights connect to Delhi and Chandigarh.",
  },
  {
    title: "By Rail",
    description:
      "Kalka–Shimla Toy Train: A UNESCO Heritage route offering scenic rides. Broad-gauge stations: Pathankot (for Kangra) and Una (for Hamirpur).",
  },
  {
    title: "By Road",
    description:
      "Excellent network of HRTC and private buses from Delhi, Chandigarh, and Dehradun. Popular road trip routes: Manali–Leh Highway, Shimla–Spiti Circuit.",
  },
];

const stayOptions = [
  {
    name: "Luxury",
    description: "Wildflower Hall (Shimla), Span Resort (Manali), Norwood Green (Palampur).",
  },
  {
    name: "Mid-Range",
    description: "HPTDC hotels and boutique homestays.",
  },
  {
    name: "Budget",
    description: "Eco-lodges, village stays, and hostels.",
  },
];

const travelTips = [
  "Carry layers — temperature drops quickly after sunset.",
  "Respect local customs, especially near temples and monasteries.",
  "Keep cash handy — card payments may not work in remote areas.",
  "Drive cautiously on mountain roads and check for weather updates.",
];

const adventures = [
  {
    name: "Trekking",
    description:
      "Popular trails include Triund, Hampta Pass, Bhrigu Lake, and Pin Parvati Pass, offering diverse terrain from pine forests to glaciers.",
  },
  {
    name: "Paragliding",
    description:
      "Bir Billing is one of the world’s best sites for tandem paragliding, offering stunning aerial views of the Kangra Valley.",
  },
  {
    name: "Skiing & Snowboarding",
    description:
      "Solang Valley and Narkanda are ideal winter sports hubs with equipment rentals and instructors.",
  },
  {
    name: "River Rafting",
    description: "The Beas and Sutlej Rivers offer exhilarating white-water experiences.",
  },
  {
    name: "Camping",
    description: "Camp by riversides in Kasol, Tirthan Valley, or meadows near Chail.",
  },
];

const handicrafts = [
  {
    name: "Kullu & Kinnauri Shawls",
    description: "Handwoven woolen shawls known for their intricate patterns.",
  },
  {
    name: "Pashmina & Angora Wool",
    description: "Luxurious and warm, perfect souvenirs.",
  },
  {
    name: "Wood Carvings",
    description: "Traditional temple-style motifs used in furniture and decor.",
  },
  {
    name: "Metalware",
    description: "Handcrafted utensils and decorative items from Chamba and Kangra.",
  },
  {
    name: "Himachali Caps",
    description: "Colorful, embroidered headwear symbolizing local pride.",
  },
];

const otherPlaces = [
  {
    name: "Jammu & Kashmir",
    subtitle: "Heaven on Earth",
    href: "/jammu-kashmir",
    image: "/himachal-pradesh/hero.jpg",
    alt: "Snowy Himalayan mountains",
  },
  {
    name: "Ladakh",
    subtitle: "The Land of High Passes",
    href: "/ladakh",
    image: "/himachal-pradesh/spiti.jpg",
    alt: "High-altitude monastery and mountains",
  },
  {
    name: "Explore all states",
    subtitle: "Find your next Indian destination",
    href: "/states",
    image: "/himachal-pradesh/kullu.jpg",
    alt: "Mountain valley in Himachal Pradesh",
  },
];

const imageCredits = [
  {
    name: "Snowy village in Baspa Valley",
    creator: "UnpetitproleX",
    license: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Baspa_Valley_at_Sangla,_Himachal_Pradesh,_India.jpg",
  },
  {
    name: "Shimla city landscape",
    creator: "Navneet Sharma",
    license: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Landscape_of_Shimla_,_Himachal_Pradesh.jpg",
  },
  {
    name: "Manali landscape",
    creator: "Timothy A. Gonsalves",
    license: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Simsa_Manali_East_Himachal_Oct22_A7C_03328.jpg",
  },
  {
    name: "McLeod Ganj",
    creator: "Gerd Eichmann",
    license: "CC BY 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Dharamsala-McLeod_Ganj-34-Sandtraegerin-2016-gje.jpg",
  },
  {
    name: "Kullu Valley apple orchard",
    creator: "Vyacheslav Argenberg",
    license: "CC BY 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Kullu_Valley,_Vashisht,_Manali,_Apples,_India.jpg",
  },
  {
    name: "Key Monastery, Spiti",
    creator: "Kulbhushan Singh Suryawanshi and Aristeas",
    license: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Kee_monastery_Spiti_Valley_(edited).jpg",
  },
  {
    name: "Masroor rock-cut temple carvings",
    creator: "Timothy Gonsalves",
    license: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Masroor-Kangra-Himachal-R16_02697.jpg",
  },
  {
    name: "Kullu Dussehra procession",
    creator: "Kondephy",
    license: "CC BY-SA 3.0",
    href: "https://commons.wikimedia.org/wiki/File:Kullu_Dussehra_-_main_procession.jpg",
  },
  {
    name: "Kullvi Siddu",
    creator: "Rajani Gairshail",
    license: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Kullvi_Siddu_(Himachal_Pradesh).jpg",
  },
  {
    name: "Paragliding at Bir",
    creator: "PanWoyteczek and UnpetitproleX",
    license: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Paragliding_at_Bir,_HP.jpg",
  },
];

export default function HimachalPradeshPage() {
  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <Image
          className={styles.heroImage}
          src="/himachal-pradesh/hero.jpg"
          alt="Snowy village and mountain peaks in Baspa Valley, Himachal Pradesh"
          fill
          priority
          sizes="100vw"
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <h1>Himachal Pradesh</h1>
          <p className={styles.tagline}>Dev Bhoomi — Land of the Gods</p>
          <p className={styles.heroDescription}>
            Snow-wrapped peaks, cedar forests, apple orchards, and ancient temples — discover the
            many sides of Himachal Pradesh.
          </p>
        </div>
      </header>

      <section className={styles.section}>
        <div className={styles.titleBlock}>
          <h2>Himachal Pradesh — The Land of Gods and Mountains</h2>
          <p>
            Explore India’s 28 states and 8 union territories — each offering its own culture,
            cuisine, and charm. Find the perfect destination for your next journey through ages.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.bandHeader}>Introduction</div>
        <div className={styles.introGrid}>
          <div className={styles.featureImageWrap}>
            <Image
              src="/himachal-pradesh/shimla.jpg"
              alt="Shimla city spread across green Himalayan hills"
              fill
              sizes="(max-width: 800px) 100vw, 40vw"
            />
          </div>
          <div className={styles.introCopy}>
            <p>
              Cradled in the lap of the Himalayas, Himachal Pradesh is a paradise of snow-clad
              peaks, lush valleys, and ancient temples. Often called “Dev Bhoomi” or “Land of the
              Gods,” this state combines spirituality with adventure in perfect harmony.
            </p>
            <p>
              From the apple orchards of Shimla to the monasteries of Spiti and the pine forests of
              Manali, Himachal’s landscapes promise serenity, culture, and endless exploration.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.bandHeader}>Top Tourist Destinations</div>
        <div className={styles.destinationList}>
          {destinations.map((destination, index) => (
            <article
              className={`${styles.destination} ${index % 2 === 1 ? styles.destinationReverse : ""}`}
              key={destination.name}
            >
              <div className={styles.destinationImage}>
                <Image
                  src={destination.image}
                  alt={destination.alt}
                  fill
                  sizes="(max-width: 800px) 100vw, 40vw"
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

      <section className={styles.section}>
        <div className={styles.bandHeader}>Culture &amp; Heritage</div>
        <div className={styles.bannerImage}>
          <Image
            src="/himachal-pradesh/heritage.jpg"
            alt="Intricate stone carvings at Masroor rock-cut temple in Kangra"
            fill
            sizes="(max-width: 800px) 100vw, 90vw"
          />
        </div>
        <div className={styles.longCopy}>
          <p>
            Himachal Pradesh’s culture is a vibrant blend of Hindu and Buddhist influences,
            reflected in its festivals, architecture, and folklore.
          </p>
          <p>Villages still celebrate ancient traditions through music, dance, and craftsmanship.</p>
          <p>
            Colorful fairs like Kullu Dussehra, Minjar Mela, and Halda Festival showcase the
            state’s artistic and spiritual side.
          </p>
          <p>
            Wood-carved temples, stone shrines, and hilltop monasteries make Himachal a living
            canvas of devotion and diversity.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.bandHeader}>Festivals &amp; Events</div>
        <div className={styles.bannerImage}>
          <Image
            src="/himachal-pradesh/festival.jpg"
            alt="Kullu Dussehra procession with local deities and traditional music"
            fill
            sizes="(max-width: 800px) 100vw, 90vw"
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

      <section className={styles.section}>
        <div className={styles.bandHeader}>Local Cuisine</div>
        <div className={styles.splitFeature}>
          <div className={styles.featureImageWrap}>
            <Image
              src="/himachal-pradesh/siddu.jpg"
              alt="Traditional steamed Kullvi Siddu from Himachal Pradesh"
              fill
              sizes="(max-width: 800px) 100vw, 40vw"
            />
          </div>
          <div className={styles.featureCopy}>
            <p>
              Himachal’s food is simple, wholesome, and full of mountain warmth. Each region offers
              unique flavors made with local ingredients and time-honored techniques.
            </p>
            <h3>Signature Dishes</h3>
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
            {beverages.map((item) => (
              <p key={item.name}>
                <strong>{item.name}:</strong> {item.description}
              </p>
            ))}
          </article>
          <article>
            <h3>Desserts</h3>
            {desserts.map((item) => (
              <p key={item.name}>
                <strong>{item.name}:</strong> {item.description}
              </p>
            ))}
          </article>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.bandHeader}>Best Time to Visit</div>
        <p className={styles.sectionLead}>
          Himachal Pradesh offers a different experience in every season.
        </p>
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

      <section className={styles.section}>
        <div className={styles.bandHeader}>How to Reach</div>
        <div className={styles.bannerImage}>
          <Image
            src="/himachal-pradesh/kullu.jpg"
            alt="Mountain valley scenery along Himachal Pradesh's road routes"
            fill
            sizes="(max-width: 800px) 100vw, 90vw"
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

      <section className={styles.section}>
        <div className={styles.bandHeader}>Accommodation &amp; Travel Tips</div>
        <div className={styles.bannerImage}>
          <Image
            src="/himachal-pradesh/manali.jpg"
            alt="Mountain village in Manali surrounded by the Himalayas"
            fill
            sizes="(max-width: 800px) 100vw, 90vw"
          />
        </div>
        <div className={styles.twoColumn}>
          <article className={styles.detailCard}>
            <h3>Stay Options</h3>
            {stayOptions.map((option) => (
              <p key={option.name}>
                <strong>{option.name}:</strong> {option.description}
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

      <section className={styles.section}>
        <div className={styles.bandHeader}>Adventure &amp; Experiences</div>
        <div className={styles.bannerImage}>
          <Image
            src="/himachal-pradesh/paragliding.jpg"
            alt="Paragliders flying above the mountains near Bir Billing"
            fill
            sizes="(max-width: 800px) 100vw, 90vw"
          />
        </div>
        <div className={styles.experienceGrid}>
          {adventures.map((adventure) => (
            <article className={styles.infoCard} key={adventure.name}>
              <h3>{adventure.name}</h3>
              <p>{adventure.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.bandHeader}>Handicrafts &amp; Shopping</div>
        <div className={styles.handicraftGrid}>
          {handicrafts.map((item) => (
            <article className={styles.infoCard} key={item.name}>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.bandHeader}>Explore other places also</div>
        <div className={styles.otherPlacesGrid}>
          {otherPlaces.map((place) => (
            <Link className={styles.otherPlaceCard} href={place.href} key={place.name}>
              <Image src={place.image} alt={place.alt} fill sizes="(max-width: 700px) 100vw, 33vw" />
              <span className={styles.otherPlaceOverlay} />
              <span className={styles.otherPlaceText}>
                <strong>{place.name}</strong>
                <span>{place.subtitle}</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <details className={styles.imageCredits}>
          <summary>Image credits</summary>
          <ul>
            {imageCredits.map((credit) => (
              <li key={credit.href}>
                <a href={credit.href} target="_blank" rel="noreferrer">
                  {credit.name} — {credit.creator} ({credit.license})
                </a>
              </li>
            ))}
          </ul>
        </details>
      </section>
    </main>
  );
}
