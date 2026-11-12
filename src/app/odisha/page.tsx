import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import styles from "../destination-page.module.css";

const destinations = [
  {
    name: "Puri",
    title: "The Sacred Coast",
    description:
      "Puri is one of India’s most revered seaside pilgrimage destinations, best known for the Jagannath Temple and its long golden beach. A sunrise walk by the shore, the temple rituals, and the famous Rath Yatra make it a deeply spiritual and memorable stop.",
    image: "/odisha/puri.jpg",
    alt: "The Jagannath Temple and surrounding coastline in Puri",
  },
  {
    name: "Konark",
    title: "The Sun Temple Marvel",
    description:
      "Konark’s Sun Temple is one of Odisha’s most remarkable monuments, shaped like a colossal chariot drawn by surging horses. The temple’s carved stone sculptures and architecture celebrate devotion, craft, and astronomy in a striking form.",
    image: "/odisha/konark.jpg",
    alt: "Stone carvings and architecture at the Konark Sun Temple",
  },
  {
    name: "Bhubaneswar",
    title: "The Temple City",
    description:
      "Bhubaneswar, often called the Temple City of India, is dotted with elegant shrines, historic monasteries, and serene kunds. It is a place where heritage, urban life, and spiritual energy meet in a unique way.",
    image: "/odisha/bhubaneswar.jpg",
    alt: "Temple architecture in Bhubaneswar",
  },
  {
    name: "Chilika Lake",
    title: "The Birdwatcher’s Paradise",
    description:
      "Asia’s largest brackish water lagoon, Chilika Lake is a haven for migratory birds, water activities, and serene boat rides. It is a peaceful place to watch dolphins, fish, and the changing light across the wetlands.",
    image: "/odisha/chilika.jpg",
    alt: "Boats crossing the waters of Chilika Lake",
  },
  {
    name: "Simlipal",
    title: "The Wild Forest Reserve",
    description:
      "Simlipal is one of Odisha’s most important forest regions, with dense greenery, waterfalls, and a landscape rich in biodiversity. It is a favorite for nature lovers and wildlife enthusiasts seeking an immersive forest experience.",
    image: "/odisha/simlipal.jpg",
    alt: "Forest landscape in Simlipal National Park",
  },
];

const festivals = [
  {
    title: "Rath Yatra (June–July)",
    description:
      "The world-famous Jagannath Rath Yatra in Puri draws millions of devotees who gather for the grand procession of the deities.",
  },
  {
    title: "Durga Puja (September–October)",
    description:
      "In Odisha, the festival is marked with beautifully decorated pandals, cultural performances, and joyful community gatherings.",
  },
  {
    title: "Raja (June)",
    description:
      "A joyous agrarian festival celebrated with music, swings, and festive food, showcasing Odisha’s cultural warmth.",
  },
  {
    title: "Makar Mela (January)",
    description:
      "Observed with devotion at riverbanks and sacred sites, this festival is a vibrant expression of Odisha’s spiritual traditions.",
  },
  {
    title: "Danda Nacha",
    description:
      "A traditional tribal dance performed in celebration of local communities, culture, and seasonal rituals.",
  },
];

const cuisines = [
  {
    name: "Pakhala Bhata",
    description: "A comforting rice dish soaked in water and served with curries, vegetables, and fried items.",
  },
  {
    name: "Dalma",
    description: "A wholesome lentil and vegetable dish, often cooked with seasonal produce and a hint of mustard.",
  },
  {
    name: "Chhena Poda",
    description: "A caramelized cheese dessert with a distinctive smoky and sweet richness.",
  },
  {
    name: "Rasagola",
    description: "A beloved Odisha sweet known for its spongy texture and delicate syrup.",
  },
  {
    name: "Macha Ghanta",
    description: "A traditional fish curry prepared with mustard, aroma, and local spices.",
  },
];

const seasons = [
  {
    name: "Winter",
    dates: "October–February",
    description: "This is the most comfortable season for temple visits, beach escapes, and sightseeing throughout Odisha.",
  },
  {
    name: "Summer",
    dates: "March–June",
    description: "Warm days are common, with the hill and forest regions providing cooler retreats.",
  },
  {
    name: "Monsoon",
    dates: "July–September",
    description: "The landscape turns lush and vibrant, though heavy rain can affect road access in some areas.",
  },
];

const travelRoutes = [
  {
    title: "By Air",
    description:
      "Bhubaneswar and Jharsuguda airports connect Odisha with key domestic destinations. The state also has proximity to major eastern Indian transport routes.",
  },
  {
    title: "By Rail",
    description:
      "Khurda Road, Bhubaneswar, and Puri are important rail nodes offering regular services to major cities across India.",
  },
  {
    title: "By Road",
    description:
      "Well-connected highways link Odisha with Andhra Pradesh, West Bengal, Chhattisgarh, and Jharkhand, making self-drive and bus travel convenient.",
  },
];

const stays = [
  {
    title: "Luxury",
    description: "Choice stays around Puri and Bhubaneswar include premium heritage and beach resorts.",
  },
  {
    title: "Mid-Range",
    description: "Hotels and guesthouses in Puri, Konark, and Bhubaneswar offer comfortable options for most travelers.",
  },
  {
    title: "Budget",
    description: "Homestays, simple lodges, and local guesthouses are widely available near key pilgrimage and beach destinations.",
  },
];

const travelTips = [
  "Dress modestly while visiting temples, especially at major pilgrimage sites such as Puri and Konark.",
  "Carry light cotton clothing for the coast and warm layers if visiting forest zones or hill areas.",
  "Book accommodation early during festival periods and major holiday seasons.",
  "Respect local customs and avoid littering near beaches, lakes, and temples.",
];

const experiences = [
  {
    title: "Temple Trails",
    description: "Explore ancient temple towns, sacred architecture, and pilgrimage routes across Odisha.",
  },
  {
    title: "Beach Relaxation",
    description: "Enjoy the clean coastline of Puri and nearby shores for quiet walks and sunlit afternoons.",
  },
  {
    title: "Boat Rides",
    description: "Take a boat Safari or lagoon ride at Chilika to watch marine life and migratory birds.",
  },
  {
    title: "Wildlife Escapes",
    description: "Head to Simlipal and protected forest areas for scenic nature trails and animal sightings.",
  },
  {
    title: "Cultural Tours",
    description: "Discover Odissi traditions, local crafts, temple music, and heritage walks across the state.",
  },
];

const handicrafts = [
  {
    title: "Applique Work",
    description: "Patchwork textiles and colorful appliqué designs are a celebrated form of Odisha’s artistic tradition.",
  },
  {
    title: "Pattachitra",
    description: "Painted scrolls and sacred art depicting deities and mythological stories.",
  },
  {
    title: "Silver Filigree",
    description: "Intricate silver jewelry and metal craftsmanship from Cuttack and neighbouring artisan clusters.",
  },
  {
    title: "Terracotta & Stone Craft",
    description: "Temple-inspired figurines and carved décor pieces rooted in Odisha’s heritage traditions.",
  },
  {
    title: "Local Souvenirs",
    description: "Pick up handloom textiles, traditional patterns, and handcrafted decorative items in local markets.",
  },
];

const otherPlaces = [
  { name: "West Bengal", tagline: "Culture, Literature & Legacy", image: "/west-bengal/hero.jpg", href: "/west-bengal" },
  { name: "Andhra Pradesh", tagline: "The Essence of the East Coast", image: "/andhra-pradesh/hero.jpg", href: "/andhra-pradesh" },
  { name: "Jharkhand", tagline: "Forests, Waterfalls & Tribal Culture", image: "/india/forest.jpg", href: "/states" },
];

const imageCredits = [
  {
    image: "Jagannath Temple, Puri",
    creator: "Wikimedia Commons contributors",
    license: "CC BY-SA 3.0",
    href: "https://commons.wikimedia.org/wiki/File:Jagannath_Temple,_Puri_03.jpg",
  },
  {
    image: "Konark Sun Temple sculptures",
    creator: "Wikimedia Commons contributors",
    license: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:13th_Century_sculptures_at_Konark_Sun_Temple_Puri_district,_Odisha,_India.jpg",
  },
  {
    image: "Mukteshvara Temple, Bhubaneswar",
    creator: "Wikimedia Commons contributors",
    license: "CC BY-SA 3.0",
    href: "https://commons.wikimedia.org/wiki/File:Mukteshvara_Temple,_Bhubaneswar.jpg",
  },
  {
    image: "Chilika Lake, Odisha",
    creator: "Wikimedia Commons contributors",
    license: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Chilika_Lake_or_Chilka_in_Odisha_02.jpg",
  },
  {
    image: "Simlipal forest landscape",
    creator: "Wikimedia Commons contributors",
    license: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:PXL_20250607_054940653_Bisoi_Tribal_Village_and_Forest_Outskirts_of_Simlipal_National_Park,_Odisha_03.jpg",
  },
  {
    image: "Jagannath Rath Yatra, Puri",
    creator: "Wikimedia Commons contributors",
    license: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Jagannath_Rath_Yatra_Puri_Odisha.jpg",
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

export default function OdishaPage() {
  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <Image
          className={styles.heroImage}
          src="/odisha/hero.jpg"
          alt="Jagannath Temple in Puri, Odisha"
          fill
          priority
          sizes="100vw"
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <h1>Odisha</h1>
          <p className={styles.tagline}>Temple Trails &amp; Serene Beaches</p>
          <p className={styles.heroDescription}>
            From sacred temples and heritage cities to forested hills and the
            calm of Chilika Lake, Odisha is a state of devotion, nature, and
            cultural richness.
          </p>
        </div>
      </header>

      <section className={styles.section} aria-labelledby="odisha-heading">
        <div className={styles.titleBlock}>
          <h2 id="odisha-heading">Odisha — Temple Trails &amp; Scenic Coasts</h2>
          <p>
            Odisha brings together sacred architecture, coastal serenity, tribal
            traditions, and artistic heritage. Known for its temples, beaches,
            and rich crafts, the state carries a deeply rooted spiritual identity
            while embracing the beauty of its forests and lagoons.
          </p>
        </div>
      </section>

      <section className={styles.section} id="introduction">
        <SectionHeading>Introduction</SectionHeading>
        <div className={styles.introGrid}>
          <div className={styles.featureImage}>
            <Image
              src="/odisha/introduction.jpg"
              alt="Stone carvings at Konark Sun Temple"
              fill
              sizes="(max-width: 900px) 100vw, 40vw"
            />
          </div>
          <div className={styles.introCopy}>
            <h3>Introduction</h3>
            <p>
              Odisha lies on India’s eastern seaboard and is renowned for its
              classical temple heritage, artisan traditions, and natural beauty.
              From the spiritual energy of Puri to the dramatic geometry of
              Konark and the tranquil lagoons of Chilika, the state offers both
              revelatory heritage experiences and quiet escapes into nature.
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
        <BannerImage src="/odisha/culture.jpg" alt="Temple architecture in Bhubaneswar" />
        <div className={styles.longCopy}>
          <p>
            Odisha’s culture is deeply shaped by temple worship, classical dance,
            tribal traditions, and craftsmanship. Odissi, one of India’s major
            classical dance forms, speaks through graceful movement and the
            spiritual story of the divine. Historical monuments, stone carvings,
            and ritual festivals together bring alive a cultural identity that is
            both timeless and alive.
          </p>
        </div>
      </section>

      <section className={styles.section} id="festivals">
        <SectionHeading>Festivals &amp; Events</SectionHeading>
        <BannerImage src="/odisha/festival.jpg" alt="Jagannath Rath Yatra procession in Puri" />
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
        <BannerImage src="/odisha/cuisine.jpg" alt="A lake and wetlands scene in Odisha" />
        <p className={styles.sectionLead}>
          Odia food is simple, earthy, and deeply connected to local produce,
          rice, vegetables, and seasonal ingredients. It balances comfort with
          flavor and often centers around ritual, family, and shared meals.
        </p>
        <div className={styles.foodCategories}>
          <article>
            <h3>Signature dishes</h3>
            <ul className={styles.foodList}>
              {cuisines.map((dish) => (
                <li key={dish.name}>
                  <strong>{dish.name}:</strong> {dish.description}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className={styles.section} id="best-time">
        <SectionHeading>Best Time to Visit</SectionHeading>
        <BannerImage src="/odisha/best-time.jpg" alt="Forest landscape in Simlipal" />
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
        <BannerImage src="/odisha/travel.jpg" alt="Temple architecture in Odisha" />
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
        <BannerImage src="/odisha/stays.jpg" alt="Jagannath Temple in Puri by day" />
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
        <BannerImage src="/odisha/adventure.jpg" alt="Forest landscape at Simlipal" />
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
        <BannerImage src="/odisha/handicrafts.jpg" alt="Temple-inspired handicrafts and craft details" />
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
        <SectionHeading>Explore other places also</SectionHeading>
        <div className={styles.otherPlacesGrid}>
          {otherPlaces.map((place) => (
            <Link className={styles.otherPlaceCard} href={place.href} key={place.name}>
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
