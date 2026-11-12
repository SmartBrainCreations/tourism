import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import styles from "../destination-page.module.css";

const destinations = [
  {
    name: "Ranchi",
    title: "The Waterfall Capital",
    description:
      "Jharkhand’s capital is a lively starting point for exploring the Chota Nagpur Plateau. Dassam, Hundru, and Jonha waterfalls lie within reach, while the city itself offers markets, gardens, and a growing food scene.",
    image: "/jharkhand/hero.jpg",
    alt: "Dassam Falls cascading over rocky ledges near Ranchi",
  },
  {
    name: "Hundru Falls",
    title: "A Dramatic Plateau Cascade",
    description:
      "The Subarnarekha River plunges over a high rocky edge at Hundru Falls, creating one of the region’s most striking natural sights. The surrounding valley is especially lush during and after the monsoon; follow local safety advice around the rocks and water.",
    image: "/jharkhand/hundru-falls.jpg",
    alt: "Water cascading down the rocky face of Hundru Falls",
  },
  {
    name: "Betla National Park",
    title: "Forest & Wildlife Country",
    description:
      "Betla is a forested landscape of the Palamau region, known for its sal and bamboo forests, wildlife, and historic forts. Safaris and entry are managed locally, so check current park rules and availability before travelling.",
    image: "/jharkhand/betla.jpg",
    alt: "Dense forest inside Betla National Park",
  },
  {
    name: "Deoghar",
    title: "The Sacred Baidyanath Dham",
    description:
      "Deoghar is an important pilgrimage city, best known for Baba Baidyanath Dham, one of the revered Jyotirlinga shrines. The temple draws especially large crowds during the month of Shravan and the annual Kanwar Yatra.",
    image: "/jharkhand/deoghar.jpg",
    alt: "Baba Baidyanath Temple in Deoghar",
  },
  {
    name: "Dalma Hills",
    title: "A Quiet Escape Above Jamshedpur",
    description:
      "The Dalma range rises above the plains near Jamshedpur, with forested slopes, viewpoints, and opportunities to explore the outdoors. Visit with local guidance and observe wildlife from a respectful distance.",
    image: "/jharkhand/dalma.jpg",
    alt: "Wooded hills and rocky terrain in the Dalma range",
  },
];

const festivals = [
  {
    title: "Sarhul (March–April)",
    description:
      "A major spring festival among several Adivasi communities, Sarhul welcomes the new season and honors nature, village traditions, and the sal tree.",
  },
  {
    title: "Karma (August–September)",
    description:
      "Communities gather around the karam tree for songs, dances, and rituals that celebrate harvest, kinship, and well-being.",
  },
  {
    title: "Sohrai (October–November)",
    description:
      "A harvest and cattle festival associated with the post-monsoon season, celebrated in many places with feasting and distinctive wall paintings.",
  },
  {
    title: "Tusu (December–January)",
    description:
      "A winter harvest festival especially associated with the plateau region, marked by folk songs, decorated figures, and community gatherings.",
  },
  {
    title: "Shravani Mela (July–August)",
    description:
      "Pilgrims travel to Deoghar during the holy month of Shravan, with the Kanwar Yatra forming one of the region’s largest annual gatherings.",
  },
];

const cuisineCategories = [
  {
    title: "Everyday favorites",
    dishes: [
      {
        name: "Dhuska",
        description:
          "A golden, fried rice-and-lentil snack, commonly served with a spicy chickpea curry.",
      },
      {
        name: "Chilka Roti",
        description:
          "A soft pancake-style bread made from a fermented rice and lentil batter.",
      },
    ],
  },
  {
    title: "Seasonal & local",
    dishes: [
      {
        name: "Rugra",
        description:
          "A seasonal forest mushroom enjoyed in local curries when it is available.",
      },
      {
        name: "Bamboo Shoot",
        description:
          "A regional ingredient cooked with local spices and vegetables in a range of home-style dishes.",
      },
    ],
  },
  {
    title: "Festival dishes",
    dishes: [
      {
        name: "Thekua",
        description:
          "A crisp, lightly sweet wheat-flour treat prepared for festivals and shared with family.",
      },
      {
        name: "Arsa Roti",
        description:
          "A traditional rice-based sweet prepared for special occasions in several communities.",
      },
    ],
  },
];

const seasons = [
  {
    name: "Winter",
    dates: "October–February",
    description:
      "Cooler, drier days are comfortable for sightseeing, forest excursions, and visiting cultural sites.",
  },
  {
    name: "Summer",
    dates: "March–June",
    description:
      "The plateau can be warm during the day. Plan outdoor activities early and carry water and sun protection.",
  },
  {
    name: "Monsoon",
    dates: "July–September",
    description:
      "Waterfalls and forests become especially vivid, but heavy rain can make roads, trails, and waterfall edges hazardous.",
  },
];

const travelRoutes = [
  {
    title: "By Air",
    description:
      "Birsa Munda Airport in Ranchi is the state’s main air gateway, with connections to major Indian cities. Check current routes and schedules before travel.",
  },
  {
    title: "By Rail",
    description:
      "Ranchi, Tatanagar, Dhanbad, Bokaro, and Deoghar are among the key rail hubs serving different parts of Jharkhand.",
  },
  {
    title: "By Road",
    description:
      "National highways connect Jharkhand with neighboring states and link its larger towns. For waterfalls, forests, and rural areas, plan local transport ahead.",
  },
];

const stays = [
  {
    title: "City Hotels",
    description:
      "Ranchi, Jamshedpur, and Dhanbad offer the widest range of hotels and transport connections.",
  },
  {
    title: "Pilgrim Guesthouses",
    description:
      "Deoghar has a variety of guesthouses and hotels, with availability tightening during Shravan and other busy pilgrimage dates.",
  },
  {
    title: "Nature Stays",
    description:
      "Lodges and forest-area accommodation can be found near some outdoor destinations. Confirm access, park rules, and bookings directly before setting out.",
  },
];

const travelTips = [
  "Check weather and road conditions before visiting waterfalls, especially during the monsoon.",
  "Follow park rules, use authorized guides where required, and do not approach or feed wildlife.",
  "Book Deoghar accommodation early during Shravan and the Kanwar Yatra.",
  "Ask permission before photographing people, ceremonies, or community events.",
  "Carry cash and allow extra travel time when visiting destinations outside the main cities.",
];

const experiences = [
  {
    title: "Waterfall Trails",
    description:
      "Explore Dassam, Hundru, and Jonha falls, taking care around slippery rocks and changing water levels.",
  },
  {
    title: "Forest & Wildlife",
    description:
      "Discover Betla and other protected landscapes through authorized, responsible nature experiences.",
  },
  {
    title: "Plateau Viewpoints",
    description:
      "Take in the open horizons, wooded slopes, and seasonal scenery of the Chota Nagpur Plateau.",
  },
  {
    title: "Pilgrimage Journeys",
    description:
      "Visit Baidyanath Dham in Deoghar and learn about its place in regional religious traditions.",
  },
  {
    title: "Living Craft Traditions",
    description:
      "Discover Sohrai and Khovar art, local handwork, and Adivasi cultural traditions through respectful community-led experiences.",
  },
];

const handicrafts = [
  {
    title: "Sohrai & Khovar Art",
    description:
      "Wall-painting traditions use expressive lines, natural motifs, and locally rooted techniques, particularly in Hazaribagh and nearby areas.",
  },
  {
    title: "Dokra Metal Craft",
    description:
      "Artisans create distinctive metal figures and objects using traditional lost-wax casting techniques.",
  },
  {
    title: "Bamboo & Cane Work",
    description:
      "Locally made baskets, household pieces, and decorative objects reflect skilled work with natural materials.",
  },
  {
    title: "Lac Bangles",
    description:
      "Colorful lacquer bangles and ornaments are made by artisans across parts of the state.",
  },
  {
    title: "Handloom & Textiles",
    description:
      "Look for regional weaves and textiles at local craft outlets and artisan markets.",
  },
];

const otherPlaces = [
  {
    name: "Bihar",
    tagline: "Land of Ancient Wisdom",
    image: "/bihar/hero.jpg",
    href: "/bihar",
  },
  {
    name: "Odisha",
    tagline: "Temple Trails & Scenic Coasts",
    image: "/odisha/hero.jpg",
    href: "/odisha",
  },
  {
    name: "West Bengal",
    tagline: "Culture, Literature & Legacy",
    image: "/west-bengal/hero.jpg",
    href: "/west-bengal",
  },
];

const imageCredits = [
  {
    image: "Dassam Falls, Jharkhand",
    creator: "Kingshuk Mondal",
    license: "CC BY 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Dassam_Falls,_Jharkhand,_India_01.jpg",
  },
  {
    image: "Jonha Falls, Jharkhand",
    creator: "Kingshuk Mondal",
    license: "CC BY 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Jonha_Falls,_Jharkhand,_India_01.jpg",
  },
  {
    image: "Hundru Falls, Jharkhand",
    creator: "Kingshuk Mondal",
    license: "CC BY 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Hundru_Falls,_Jharkhand,_India.jpg",
  },
  {
    image: "Betla National Park forest",
    creator: "Dev0745",
    license: "CC BY 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Betla_National_Park_forest_2025.jpg",
  },
  {
    image: "Baidyanath Jyotirling Temple, Deoghar",
    creator: "Kakarrote",
    license: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Baidyanath_Jyotirling_Temple,_Deoghar,_Jharkhand.jpg",
  },
  {
    image: "Dalma Hill",
    creator: "Abhishek 786",
    license: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Dalma_Hill.jpg",
  },
  {
    image: "Sohrai painting, Jharkhand",
    creator: "Shreyashprashu",
    license: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Sohrai_painting,_Jharkhand.jpg",
  },
  {
    image: "Sarhul festival at Central University of Jharkhand",
    creator: "Rohitmahali01",
    license: "CC0",
    href: "https://commons.wikimedia.org/wiki/File:Sarhul_Festival_Celebration_In_Central_University_Of_Jharkhand_,Brambe_Campus,_Ranchi_,_sample_1.jpg",
  },
  {
    image: "Dhuska, Jharkhand",
    creator: "Rhitik1998",
    license: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:DUSKA_in_Jharkhand.jpg",
  },
  {
    image: "Jonha Falls, Jharkhand",
    creator: "Kingshuk Mondal",
    license: "CC BY 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Jonha_Falls,_Jharkhand,_India_02.jpg",
  },
  {
    image: "Dassam Falls, Jharkhand",
    creator: "Kingshuk Mondal",
    license: "CC BY 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Dassam_Falls,_Jharkhand,_India_04.jpg",
  },
  {
    image: "Betla National Park forest",
    creator: "Dev0745",
    license: "CC BY 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Betla_National_Park_forest_61125.jpg",
  },
  {
    image: "Hundru Falls, Jharkhand",
    creator: "Kingshuk Mondal",
    license: "CC BY 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Hundru_Falls,_Jharkhand,_India_3.jpg",
  },
  {
    image: "Sohrai floral design",
    creator: "Veera.sj",
    license: "CC0",
    href: "https://commons.wikimedia.org/wiki/File:Sohrai_Flowery_Design_1.jpg",
  },
];

function SectionHeading({ children }: { children: ReactNode }) {
  return <h2 className={styles.bandHeader}>{children}</h2>;
}

function BannerImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className={styles.bannerImage}>
      <Image src={src} alt={alt} fill sizes="(max-width: 900px) 100vw, 90vw" />
    </div>
  );
}

export default function JharkhandPage() {
  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <Image
          className={styles.heroImage}
          src="/jharkhand/hero.jpg"
          alt="Dassam Falls in Jharkhand"
          fill
          priority
          sizes="100vw"
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <h1>Jharkhand</h1>
          <p className={styles.tagline}>Forests, Waterfalls &amp; Tribal Culture</p>
          <p className={styles.heroDescription}>
            Discover the highlands of eastern India, where forested plateaus,
            dramatic waterfalls, sacred places, and vibrant living traditions
            shape every journey.
          </p>
        </div>
      </header>

      <section className={styles.section} aria-labelledby="jharkhand-heading">
        <div className={styles.titleBlock}>
          <h2 id="jharkhand-heading">
            Jharkhand — Nature, Heritage &amp; Living Traditions
          </h2>
          <p>
            Set across the Chota Nagpur Plateau, Jharkhand is a land of rocky
            hills, forest reserves, river valleys, and seasonal waterfalls.
            Explore its pilgrimage destinations and historic sites while
            learning about the many Adivasi communities and craft traditions
            that make the state unique.
          </p>
        </div>
      </section>

      <section className={styles.section} id="introduction">
        <SectionHeading>Introduction</SectionHeading>
        <div className={styles.introGrid}>
          <div className={styles.featureImage}>
            <Image
              src="/jharkhand/introduction.jpg"
              alt="Jonha Falls surrounded by the green landscape of Jharkhand"
              fill
              sizes="(max-width: 900px) 100vw, 40vw"
            />
          </div>
          <div className={styles.introCopy}>
            <h3>Introduction</h3>
            <p>
              Jharkhand became a separate state in 2000 and takes its name from
              the forests that have long shaped its landscape and communities.
              Ranchi, the state capital, is a gateway to waterfalls and the
              plateau. Across the state, forests, mineral-rich hills,
              pilgrimage centers, and Adivasi languages, festivals, music, and
              art form a rich and varied cultural landscape.
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
          src="/jharkhand/culture.jpg"
          alt="Traditional Sohrai painting from Jharkhand"
        />
        <div className={styles.longCopy}>
          <p>
            Jharkhand is home to many Adivasi communities, each with its own
            languages, customs, and artistic traditions. Sohrai and Khovar
            paintings are known for their expressive lines and natural motifs;
            music, dance, and seasonal rituals remain central to community
            life. Visitors can learn more through local museums, cultural
            centers, and respectful, community-led experiences.
          </p>
        </div>
      </section>

      <section className={styles.section} id="festivals">
        <SectionHeading>Festivals &amp; Events</SectionHeading>
        <BannerImage
          src="/jharkhand/festival.jpg"
          alt="Sarhul festival celebration at Central University of Jharkhand"
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
          src="/jharkhand/cuisine.jpg"
          alt="Dhuska, a traditional rice and lentil snack from Jharkhand"
        />
        <p className={styles.sectionLead}>
          Jharkhand’s food draws on rice, lentils, seasonal greens, forest
          produce, and locally grown ingredients. Recipes vary across
          communities and districts, from crisp snacks such as dhuska to
          seasonal mushrooms and traditional festival foods.
        </p>
        <div className={styles.foodCategories}>
          {cuisineCategories.map((category) => (
            <article key={category.title}>
              <h3>{category.title}</h3>
              <ul className={styles.foodList}>
                {category.dishes.map((dish) => (
                  <li key={dish.name}>
                    <strong>{dish.name}:</strong> {dish.description}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section} id="best-time">
        <SectionHeading>Best Time to Visit</SectionHeading>
        <BannerImage
          src="/jharkhand/best-time.jpg"
          alt="Jonha Falls flowing during the monsoon season"
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
          src="/jharkhand/travel.jpg"
          alt="Dassam Falls and rocky plateau landscape"
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
          src="/jharkhand/stays.jpg"
          alt="Forest stream in Betla National Park"
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

      <section className={styles.section} id="experiences">
        <SectionHeading>Adventure &amp; Experiences</SectionHeading>
        <BannerImage
          src="/jharkhand/adventure.jpg"
          alt="Rocky waterfall trail at Hundru Falls"
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
          src="/jharkhand/handicrafts.jpg"
          alt="Sohrai floral design from Jharkhand"
        />
        <div className={styles.handicraftGrid}>
          {handicrafts.map((craft) => (
            <article className={styles.infoCard} key={craft.title}>
              <h3>{craft.title}</h3>
              <p>{craft.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section} id="other-places">
        <SectionHeading>Explore Other Places Also</SectionHeading>
        <div className={styles.otherPlacesGrid}>
          {otherPlaces.map((place) => (
            <Link
              className={styles.otherPlaceCard}
              href={place.href}
              key={place.name}
            >
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
            {imageCredits.map((credit, index) => (
              <li key={`${credit.image}-${index}`}>
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
