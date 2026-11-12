import Image from "next/image";
import Link from "next/link";
import styles from "../destination-page.module.css";

const destinations = [
  {
    name: "Bengaluru",
    title: "The Garden City of India",
    description:
      "India’s IT capital, Bengaluru (Bangalore), is a vibrant metropolis known for its green parks, nightlife, and tech culture. Stroll through Cubbon Park, explore Bangalore Palace, and unwind at chic cafés and breweries. A city that’s young at heart but rooted in heritage.",
    image: "/karnataka/bengaluru.jpg",
    alt: "Bangalore Palace in Bengaluru",
  },
  {
    name: "Mysuru",
    title: "The City of Palaces",
    description:
      "Elegant and royal, Mysuru is famed for the Mysore Palace, Chamundi Hills, and the grand Dussehra Festival. Its streets are filled with sandalwood, silk, and sweets, making it one of India’s most graceful cities — a living showcase of Karnataka’s regal charm.",
    image: "/karnataka/mysuru.jpg",
    alt: "Ornate windows at Mysore Palace",
  },
  {
    name: "Hampi",
    title: "The Lost Empire",
    description:
      "A UNESCO World Heritage Site, Hampi takes you back to the Vijayanagara Empire with its boulder-strewn landscapes and majestic ruins. Visit Virupaksha Temple, Vittala Temple, and the Stone Chariot — each a masterpiece of ancient architecture and storytelling.",
    image: "/karnataka/hampi.jpg",
    alt: "The stone chariot at Hampi",
  },
  {
    name: "Coorg (Kodagu)",
    title: "The Scotland of India",
    description:
      "Nestled in the Western Ghats, Coorg is famous for its rolling coffee estates, misty hills, and warm Kodava hospitality. Enjoy nature walks, waterfalls, and homestays amidst spice-scented air. Don’t miss a cup of freshly brewed Coorg coffee!",
    image: "/karnataka/coorg.jpg",
    alt: "Coffee and pepper growing at an estate in Coorg",
  },
  {
    name: "Gokarna",
    title: "The Serene Beach Escape",
    description:
      "Peaceful and spiritual, Gokarna is an alternative to Goa’s crowded shores. With its pristine beaches, yoga retreats, and the Mahabaleshwar Temple, Gokarna offers both relaxation and introspection.",
    image: "/karnataka/gokarna.jpg",
    alt: "A secluded beach along the Gokarna coast",
  },
];

const festivals = [
  {
    title: "Mysuru Dasara (September–October)",
    description:
      "Karnataka’s grandest festival, celebrating Goddess Chamundeshwari with processions, music, and illuminated palaces.",
  },
  {
    title: "Hampi Utsav (November)",
    description:
      "A cultural festival that revives the glory of Vijayanagara through dance, art, and light shows among the ruins.",
  },
  {
    title: "Kambala (December–March)",
    description:
      "An exciting buffalo race held in the coastal districts — a symbol of strength and tradition.",
  },
  {
    title: "Ugadi (March–April)",
    description:
      "Karnataka’s New Year, celebrated with rituals, mango leaves, and the traditional dish Bevu-Bella.",
  },
  {
    title: "Pattadakal Dance Festival (January)",
    description:
      "Classical dance performances set against the backdrop of ancient temples — a stunning sight for culture lovers.",
  },
];

const dishes = [
  {
    name: "Bisi Bele Bath",
    description: "Spicy rice and lentils seasoned with ghee and tamarind.",
  },
  {
    name: "Mysore Masala Dosa",
    description: "Crispy dosa stuffed with spicy potato filling — a breakfast favorite.",
  },
  {
    name: "Ragi Mudde",
    description: "Finger millet balls served with curry, a staple of rural Karnataka.",
  },
  {
    name: "Neer Dosa & Fish Curry",
    description: "A coastal delicacy from Mangalore.",
  },
  {
    name: "Coorg Pork Curry",
    description: "Rich and flavorful, cooked with local spices.",
  },
];

const desserts = [
  {
    name: "Mysore Pak",
    description: "Ghee-laden sweet made from gram flour and sugar — melt-in-mouth perfection.",
  },
  {
    name: "Holige (Obbattu)",
    description: "Sweet stuffed flatbread made during festivals.",
  },
  {
    name: "Kesari Bath",
    description: "Semolina dessert flavored with saffron and ghee.",
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
];

const travelRoutes = [
  {
    title: "By Air",
    description:
      "Major airports: Kempegowda International (Bengaluru), Mangalore, and Hubballi. Well connected domestically and internationally.",
  },
  {
    title: "By Rail",
    description:
      "Karnataka has a robust rail network linking Bengaluru, Mysuru, Hubballi, and Mangalore.",
  },
  {
    title: "By Road",
    description:
      "Excellent highways connect Karnataka to Goa, Kerala, Tamil Nadu, and Maharashtra. Scenic drives through the Western Ghats are a highlight themselves.",
  },
];

const stays = [
  {
    title: "Luxury",
    description: "Orange County (Coorg), The Leela Palace (Bengaluru), and Evolve Back (Hampi).",
  },
  {
    title: "Mid-Range",
    description: "Royal Orchid, Taj Gateway, and The Serai Resorts.",
  },
  {
    title: "Budget",
    description: "Homestays in Coorg and backpacker lodges in Gokarna.",
  },
];

const travelTips = [
  "Carry light cottons for the plains and warm clothes for the hills.",
  "Book accommodations early during Dasara or Hampi Utsav.",
  "Respect temple dress codes.",
  "Try local transport like autos and trains for authentic experiences.",
];

const experiences = [
  {
    title: "Trekking",
    description: "Follow trails at Kudremukh, Kodachadri, and Brahmagiri Hills.",
  },
  {
    title: "Wildlife",
    description: "Go on safaris in Bandipur, Nagarhole, and Bhadra Tiger Reserves.",
  },
  {
    title: "Beaches",
    description: "Enjoy surfing and yoga in Gokarna and Murudeshwar.",
  },
  {
    title: "Coffee Trails",
    description: "Take plantation walks and tastings in Coorg and Chikmagalur.",
  },
  {
    title: "Waterfalls",
    description: "Visit Jog Falls and Abbey Falls at their monsoon best.",
  },
];

const handicrafts = [
  {
    title: "Sandalwood & Silk",
    description: "Mysuru is famed for its sandalwood carvings and silk sarees.",
  },
  {
    title: "Bidriware",
    description: "Intricate metal inlay craft from Bidar.",
  },
  {
    title: "Channapatna Toys",
    description: "Eco-friendly wooden toys made with natural dyes.",
  },
  {
    title: "Coorg Coffee",
    description: "Locally grown coffee beans and freshly roasted coffee.",
  },
  {
    title: "Rosewood Carvings & Stone Sculptures",
    description: "Traditional wood and stone crafts made in Bengaluru and Belur.",
  },
];

const markets = [
  "Commercial Street (Bengaluru)",
  "Devaraja Market (Mysuru)",
  "Mangalore Central Market",
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
    image: "/india/temple.jpg",
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
    image: "Landscape Nature River Forests Western Ghats Karnataka India",
    creator: "Ashwin Kumar",
    license: "CC BY-SA 2.0",
    href: "https://commons.wikimedia.org/wiki/File:Landscape_Nature_River_Forests_Western_Ghats_Karnataka_India.jpg",
  },
  {
    image: "Bangalore Palace facade on a cloudy day",
    creator: "Anupam Chatterjee",
    license: "CC BY 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Bangalore_Palace_facade_on_a_cloudy_day.jpg",
  },
  {
    image: "Bangalore Palace, Bengaluru, Karnataka, India (2016)",
    creator: "Anish1321",
    license: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Bangalore_Palace,_Bengaluru,_Karnataka,_India_(2016).jpg",
  },
  {
    image: "Mysore Palace Windows",
    creator: "Sumit Surai",
    license: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Mysore_Palace_Windows.jpg",
  },
  {
    image: "Stone Chariot at Hampi",
    creator: "Sarathshenoy",
    license: "CC BY-SA 3.0",
    href: "https://commons.wikimedia.org/wiki/File:Stone_Chariot_at_Hampi.JPG",
  },
  {
    image: "Coffee Coconuts Pepper Estate Coorg",
    creator: "Timothy A. Gonsalves",
    license: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Coffee_Coconuts_Pepper_Estate_Coorg_Feb24_A7C_09365.jpg",
  },
  {
    image: "Paradise Beach, Gokarna",
    creator: "Sourabh Biswas",
    license: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:PXL_20260103_054657562.MP_Paradise_beach_gokarna_Paradise_Beach_Trail,_Gokarna,_Karnataka_581326_01.jpg",
  },
  {
    image: "Carvings, Chennakesava Temple 2, Belur",
    creator: "A. Murali",
    license: "CC0",
    href: "https://commons.wikimedia.org/wiki/File:Carvings,_Chennakesava_Temple_2,_Belur,_Karnataka_10.jpg",
  },
  {
    image: "Dasara Navaratri Festival Lights Mysore Palace India",
    creator: "Ananth BS",
    license: "CC BY 2.0",
    href: "https://commons.wikimedia.org/wiki/File:Dasara_Navaratri_Festival_Lights_Mysore_Palace_India.jpg",
  },
  {
    image: "Bisibele bath",
    creator: "Vidya pmysore",
    license: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Bisibele_bath.jpg",
  },
  {
    image: "Landscape at Budangiri",
    creator: "S. N. Barid",
    license: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Landscape_at_Budangiri.jpg",
  },
  {
    image: "Mysuru Railway Station 2020",
    creator: "A. K. Raj",
    license: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Mysuru_Railway_Station_2020.jpg",
  },
  {
    image: "Road Coffee Estate Inakanahalli Coorg",
    creator: "Timothy A. Gonsalves",
    license: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Road_Coffee_Estate_Inakanahalli_Coorg_Jun24_A7CR_01542.jpg",
  },
  {
    image: "Jog Falls, September 2016",
    creator: "Nikhilb239",
    license: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Jog_Falls,_Sep,_2016.jpg",
  },
  {
    image: "Channapatna toys13",
    creator: "MaximusPrasad",
    license: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Channapatna_toys13.jpg",
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

export default function KarnatakaPage() {
  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <Image
          className={styles.heroImage}
          src="/karnataka/hero.jpg"
          alt="A green river valley in Karnataka’s Western Ghats"
          fill
          priority
          sizes="100vw"
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <h1>Karnataka</h1>
          <p className={styles.tagline}>Land of Royal Heritage and Natural Wonders</p>
          <p className={styles.heroDescription}>
            From ancient temples and royal cities to coffee hills and quiet beaches,
            Karnataka brings together history, nature, and modern life.
          </p>
        </div>
      </header>

      <section className={styles.section} aria-labelledby="karnataka-heading">
        <div className={styles.titleBlock}>
          <h2 id="karnataka-heading">Karnataka — Land of Royal Heritage and Natural Wonders</h2>
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
              src="/karnataka/introduction.jpg"
              alt="Bangalore Palace beneath a cloudy sky"
              fill
              sizes="(max-width: 900px) 100vw, 40vw"
            />
          </div>
          <div className={styles.introCopy}>
            <h3>Introduction</h3>
            <p>
              Stretching from the majestic Western Ghats to the sun-kissed beaches of
              Gokarna, Karnataka is a state where history, nature, and technology
              blend beautifully. Known for its royal cities, ancient temples, coffee
              plantations, and waterfalls, Karnataka offers every traveler a story —
              from Hampi’s ruins to Bengaluru’s modern skyline. It’s a destination
              where timeless traditions meet futuristic innovation — truly the “One
              State, Many Worlds.”
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
          src="/karnataka/culture.jpg"
          alt="Stone carvings at the Chennakesava Temple in Belur"
        />
        <div className={styles.longCopy}>
          <p>
            Karnataka’s culture is a reflection of its royal dynasties — from the
            Chalukyas and Hoysalas to the Vijayanagar kings. Temples like Belur,
            Halebidu, and Hampi showcase exquisite Dravidian architecture. Classical
            art forms like Yakshagana, Bharatanatyam, and Veeragase bring myths to
            life through dance and drama. The state’s heritage is a harmonious blend
            of spirituality, artistry, and modern progress.
          </p>
        </div>
      </section>

      <section className={styles.section} id="festivals">
        <SectionHeading>Festivals &amp; Events</SectionHeading>
        <BannerImage
          src="/karnataka/festival.jpg"
          alt="Mysore Palace illuminated for the Dasara festival"
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
          src="/karnataka/cuisine.jpg"
          alt="A traditional Karnataka serving of Bisi Bele Bath"
        />
        <div className={styles.longCopy}>
          <p>
            Karnataka’s cuisine is as diverse as its geography — blending coastal,
            Malnad, and northern flavors. Every region offers something unique, from
            spicy curries to sweet delicacies.
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
        <BannerImage
          src="/karnataka/best-time.jpg"
          alt="A mountain landscape near Budangiri"
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
          src="/karnataka/travel.jpg"
          alt="The historic railway station in Mysuru"
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
          src="/karnataka/stays.jpg"
          alt="A scenic road through a coffee estate in Coorg"
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
          src="/karnataka/adventure.jpg"
          alt="Jog Falls cascading down Karnataka’s Western Ghats"
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
          src="/karnataka/handicrafts.jpg"
          alt="Colorful wooden Channapatna toys"
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
            Top markets:{" "}
            {markets.map((market, index) => (
              <span key={market}>
                {index > 0 ? ", " : ""}
                {market}
              </span>
            ))}
            .
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
