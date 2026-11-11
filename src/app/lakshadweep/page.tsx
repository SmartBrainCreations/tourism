import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import styles from "../destination-page.module.css";

const destinations = [
  {
    name: "Kavaratti",
    title: "The Island Capital",
    description:
      "Kavaratti is Lakshadweep’s administrative capital, known for its calm lagoon, white-sand beaches, and the ornate Ujra Mosque. The island’s marine aquarium introduces visitors to the extraordinary life found in the surrounding coral waters.",
    image: "/lakshadweep/kavaratti.jpg",
    alt: "Coastal scenery on Kavaratti Island",
  },
  {
    name: "Agatti",
    title: "The Gateway to the Islands",
    description:
      "Agatti is home to Lakshadweep’s airport and a long, narrow island fringed by a brilliant lagoon. Its clear water and reef life make it a popular starting point for carefully managed snorkeling and diving trips.",
    image: "/lakshadweep/agatti.jpg",
    alt: "The turquoise lagoon and shoreline of Agatti Island",
  },
  {
    name: "Bangaram",
    title: "The Lagoon Retreat",
    description:
      "A small, uninhabited island surrounded by a luminous lagoon, Bangaram is prized for its quiet beaches and marine life. Visits and activities are subject to local permits and conservation rules.",
    image: "/lakshadweep/bangaram.jpg",
    alt: "Bangaram Island ringed by its lagoon",
  },
  {
    name: "Minicoy (Maliku)",
    title: "The Southern Island",
    description:
      "Distinctive for its crescent-shaped reef lagoon, traditional villages, and historic lighthouse, Minicoy has a cultural identity of its own. Local music and the energetic Lava dance are among its best-known traditions.",
    image: "/lakshadweep/minicoy.jpg",
    alt: "A beach on Minicoy Island",
  },
  {
    name: "Kalpeni",
    title: "The Coral Atoll",
    description:
      "Kalpeni is known for its broad lagoon, coral scenery, and close-knit island communities. Its shore and reef offer a peaceful setting for guided water activities and learning about local fishing life.",
    image: "/lakshadweep/kalpeni.jpg",
    alt: "Local fishermen on Kalpeni Island",
  },
];

const festivals = [
  {
    title: "Eid al-Fitr",
    description:
      "Families and communities gather for prayers, shared meals, and celebrations marking the end of Ramadan.",
  },
  {
    title: "Eid al-Adha",
    description:
      "A major religious occasion observed with prayers, family visits, and community meals across the islands.",
  },
  {
    title: "Minicoy’s Lava",
    description:
      "The rhythmic Lava dance is a signature cultural tradition of Minicoy, performed at community celebrations and special events.",
  },
  {
    title: "Island community celebrations",
    description:
      "Local observances bring together island residents through music, traditional performances, and shared food. Dates vary by community and lunar calendar.",
  },
];

const cuisine = [
  {
    name: "Tuna",
    description:
      "Fresh tuna is a staple of island cooking, served grilled, curried, or preserved for later use.",
  },
  {
    name: "Mas podichath",
    description:
      "A traditional preparation of shredded tuna mixed with coconut, chilli, and local seasoning.",
  },
  {
    name: "Coconut-rich curries",
    description:
      "Coconut, local spices, and fresh catch shape many of the islands’ savory dishes.",
  },
  {
    name: "Rice and seafood",
    description:
      "Rice served with fish and coastal accompaniments is a familiar everyday meal across the archipelago.",
  },
];

const seasons = [
  {
    name: "Winter",
    dates: "October–February",
    description:
      "Generally the most comfortable season for island visits, lagoon trips, and outdoor activities.",
  },
  {
    name: "Early summer",
    dates: "March–May",
    description:
      "Warm, often sunny days suit beach time and water activities when sea conditions permit.",
  },
  {
    name: "Monsoon",
    dates: "June–September",
    description:
      "Rougher seas and heavy rain can affect boat and flight schedules; confirm conditions before travel.",
  },
];

const travelRoutes = [
  {
    title: "By Air",
    description:
      "Agatti has Lakshadweep’s airport, with limited flights connecting the island to Kochi. Flight availability and onward transfers vary by season.",
  },
  {
    title: "By Ship",
    description:
      "Passenger ships operate between Kochi and the islands on published schedules. Sailing times and island stops vary, so check current services before planning.",
  },
  {
    title: "Island transfers",
    description:
      "Travel between islands is by permitted boats or scheduled services. Transfers depend on weather, local approvals, and the island included in your itinerary.",
  },
];

const stays = [
  {
    title: "Kavaratti",
    description:
      "Book through authorized tourism providers and confirm the current accommodation and visitor permissions available for your dates.",
  },
  {
    title: "Agatti",
    description:
      "A small number of permitted guesthouses and tourism stays serve visitors; reserve in advance.",
  },
  {
    title: "Bangaram and other islands",
    description:
      "Access and overnight stays are restricted to approved tourism arrangements and may change with local rules.",
  },
];

const travelTips = [
  "Obtain the required entry permit and confirm island-specific visitor rules before booking.",
  "Use authorized operators for boat transfers and water activities.",
  "Protect the fragile reef: never stand on, touch, or take coral, shells, or marine life.",
  "Follow local guidance on swimming, snorkeling, and sea conditions.",
  "Pack essentials and any regular medication; services and shops are limited on smaller islands.",
];

const experiences = [
  {
    title: "Snorkeling",
    description:
      "Explore shallow reef life with an authorized guide and suitable safety equipment.",
  },
  {
    title: "Scuba diving",
    description:
      "Discover Lakshadweep’s reef environments through approved dive operators and certified instruction.",
  },
  {
    title: "Lagoon kayaking",
    description:
      "Paddle sheltered waters when conditions allow and follow local conservation guidance.",
  },
  {
    title: "Glass-bottom boat trips",
    description:
      "View reef habitats from the surface on locally operated, permitted excursions.",
  },
  {
    title: "Island culture",
    description:
      "Learn about local fishing communities, island traditions, and Minicoy’s distinctive cultural heritage.",
  },
];

const handicrafts = [
  {
    title: "Coir products",
    description:
      "Coconut fiber has long been used across the islands for rope and practical household goods.",
  },
  {
    title: "Coconut-shell crafts",
    description:
      "Local makers turn coconut shells into small decorative and everyday objects.",
  },
  {
    title: "Tuna products",
    description:
      "Locally prepared and preserved tuna reflects the importance of fishing in island life.",
  },
  {
    title: "Minicoy traditions",
    description:
      "Look for locally made keepsakes and textiles that reflect the islands’ varied cultural traditions.",
  },
];

const otherPlaces = [
  {
    name: "Kerala",
    tagline: "God’s Own Country",
    image: "/kerala/hero.jpg",
    href: "/kerala",
  },
  {
    name: "Puducherry",
    tagline: "The French Riviera of the East",
    image: "/puducherry/hero.jpg",
    href: "/puducherry",
  },
  {
    name: "Tamil Nadu",
    tagline: "Culture, Temples & Timeless Traditions",
    image: "/tamil-nadu/hero.jpg",
    href: "/tamil-nadu",
  },
  {
    name: "Andaman & Nicobar Islands",
    tagline: "Islands of Blue Horizons",
    image: "/india/island.jpg",
    href: "/states",
  },
  {
    name: "Goa",
    tagline: "Beaches & Vibrance",
    image: "/india/coast.jpg",
    href: "/states",
  },
  {
    name: "Karnataka",
    tagline: "Sculpted by History",
    image: "/karnataka/hero.jpg",
    href: "/karnataka",
  },
];

const imageCredits = [
  {
    image: "LakshadweepIsland",
    creator: "Lenish Namath",
    license: "CC BY-SA 3.0",
    href: "https://commons.wikimedia.org/wiki/File:LakshadweepIsland.jpg",
  },
  {
    image: "A beach at Kavaratti, Lakshadweep",
    creator: "Thejas",
    license: "CC BY 2.0",
    href: "https://commons.wikimedia.org/wiki/File:A_beach_at_Kavaratti,_Lakshadweep.jpg",
  },
  {
    image: "Kavaratti Island, Lakshadweep (DSC1618)",
    creator: "The.chhayachitrakar",
    license: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Kavaratti_Island,_Lakshadweep,_India_20160324-_DSC1618.jpg",
  },
  {
    image: "Agatti Island, Lakshadweep (DSC1718)",
    creator: "The.chhayachitrakar",
    license: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Agatti_Island,_Lakshadweep,_India_20160325-_DSC1718.jpg",
  },
  {
    image: "Bangaram Island, Lakshadweep (DSC1780)",
    creator: "The.chhayachitrakar",
    license: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Bangaram_Island,_Lakshadweep_20160325-_DSC1780.jpg",
  },
  {
    image: "Minicoy Island, Lakshadweep",
    creator: "Anand.himani18",
    license: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Minicoy_Island,_Lakshadweep.jpg",
  },
  {
    image: "Local fishermen on Kalpeni Island",
    creator: "Gibin Mathew",
    license: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Kalppeni_Island_lakshadweep_local_fishermen.jpg",
  },
  {
    image: "Lakshadweep Islands MODIS image",
    creator: "Jeff Schmaltz, MODIS Land Rapid Response Team, NASA GSFC",
    license: "Public domain",
    href: "https://commons.wikimedia.org/wiki/File:Lakshadweep_Islands,_India_(MODIS_2015-01-14).jpg",
  },
  {
    image: "Lakshadweep Islands, NASA Earth Observatory",
    creator: "NASA’s Earth Observatory",
    license: "CC BY 2.0",
    href: "https://commons.wikimedia.org/wiki/File:Lakshadweep_Islands_-_NASA_Earth_Observatory.jpg",
  },
  {
    image: "Kavaratti main road",
    creator: "Everywhereguy",
    license: "Public domain",
    href: "https://commons.wikimedia.org/wiki/File:KAVARATTI_MAIN_ROAD.jpg",
  },
  {
    image: "National Minicoy Festival",
    creator: "Indian Navy",
    license: "GODL-India",
    href: "https://commons.wikimedia.org/wiki/File:Indian_Navy_participates_in_the_7th_National_Minicoy_Festival.jpg",
  },
  {
    image: "Sea off Bangaram Island",
    creator: "Binux",
    license: "CC BY-SA 2.0",
    href: "https://commons.wikimedia.org/wiki/File:Sea_off_Bangaram_island,_Lakshadweep.jpg",
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

export default function LakshadweepPage() {
  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <Image
          className={styles.heroImage}
          src="/lakshadweep/hero.jpg"
          alt="A small white-sand island surrounded by the blue waters of Lakshadweep"
          fill
          priority
          sizes="100vw"
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <h1>Lakshadweep</h1>
          <p className={styles.tagline}>Coral Paradise of India</p>
          <p className={styles.heroDescription}>
            A remote archipelago of coral atolls, clear lagoons, and quiet
            islands in the Arabian Sea. Discover Lakshadweep with care for its
            fragile reefs and island communities.
          </p>
        </div>
      </header>

      <section className={styles.section} aria-labelledby="lakshadweep-heading">
        <div className={styles.titleBlock}>
          <h2 id="lakshadweep-heading">Lakshadweep — Coral Paradise of India</h2>
          <p>
            Set in the Arabian Sea off Kerala, Lakshadweep is India’s smallest
            Union Territory by area and a chain of coral islands, atolls, reefs,
            and lagoons. Its communities have a close relationship with the sea,
            and its sensitive reef ecosystems make responsible, permitted
            travel especially important.
          </p>
        </div>
      </section>

      <section className={styles.section} id="introduction">
        <SectionHeading>Introduction</SectionHeading>
        <div className={styles.introGrid}>
          <div className={styles.featureImage}>
            <Image
              src="/lakshadweep/introduction.jpg"
              alt="A sandy beach and turquoise water at Kavaratti"
              fill
              sizes="(max-width: 900px) 100vw, 40vw"
            />
          </div>
          <div className={styles.introCopy}>
            <h3>Introduction</h3>
            <p>
              Lakshadweep lies roughly 200–400 kilometers off India’s
              southwestern coast. Only some of its islands are inhabited, and
              visitor access is regulated to protect local communities and
              delicate marine habitats. Kavaratti is the administrative
              capital; Agatti is the air gateway; and islands such as
              Bangaram, Kalpeni, and Minicoy each have their own character.
              Clear lagoons, coconut palms, fishing traditions, and a rich
              island culture define this far-flung destination.
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
          src="/lakshadweep/kalpeni.jpg"
          alt="Local fishermen at work on Kalpeni Island"
        />
        <div className={styles.longCopy}>
          <p>
            Life in Lakshadweep is closely shaped by the sea, fishing, and
            community traditions. Malayalam is widely spoken, while Mahl is
            spoken in Minicoy, whose history and cultural links give it a
            distinct identity. Local music, dance, boat traditions, and
            community celebrations are an important part of island life.
            Visitors should follow local guidance and approach customs and
            places of worship with respect.
          </p>
        </div>
      </section>

      <section className={styles.section} id="festivals">
        <SectionHeading>Festivals &amp; Events</SectionHeading>
        <BannerImage
          src="/lakshadweep/festival.jpg"
          alt="A community event during the National Minicoy Festival"
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
          src="/lakshadweep/kalpeni.jpg"
          alt="Fishing is an important part of food and daily life in Lakshadweep"
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
            Island cooking reflects the local catch and the abundance of
            coconut. Tuna, rice, coconut, and spices form the base of many
            meals, with recipes and flavors varying between islands and
            households.
          </p>
        </div>
      </section>

      <section className={styles.section} id="best-time">
        <SectionHeading>Best Time to Visit</SectionHeading>
        <BannerImage
          src="/lakshadweep/lagoon.jpg"
          alt="Satellite view of the coral atolls and lagoons of Lakshadweep"
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
          src="/lakshadweep/atolls.jpg"
          alt="Lakshadweep’s chain of coral atolls seen from above"
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
          src="/lakshadweep/kavaratti-road.jpg"
          alt="A quiet road on Kavaratti Island"
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
          src="/lakshadweep/adventure.jpg"
          alt="The sea and shoreline near Bangaram Island"
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
          src="/lakshadweep/kavaratti-road.jpg"
          alt="A village street on Kavaratti Island"
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
            Buy locally made goods from authorized island shops and
            cooperatives. Never purchase coral, shells, or products made from
            protected marine life.
          </p>
        </div>
      </section>

      <section className={styles.section} id="other-places">
        <SectionHeading>Explore other places also</SectionHeading>
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

      <footer className={styles.footer}>
        <div className={styles.footerBrand}>Journey Through Ages</div>
        <p className={styles.footerTagline}>Discover India, One Story at a Time</p>
        <p className={styles.footerText}>
          Journey Through Ages is your window into India’s rich heritage,
          breathtaking landscapes, and vibrant traditions. Discover
          Lakshadweep’s island communities, blue lagoons, and coral ecosystems
          through responsible travel.
        </p>
        <nav className={styles.footerLinks} aria-label="Footer navigation">
          <div>
            <h3>Quick Links</h3>
            <Link href="/">Home</Link>
            <Link href="/states">Explore</Link>
            <Link href="/experiences">Experiences</Link>
            <Link href="/travel-guides">Travel Guides</Link>
            <Link href="/blog">Blog</Link>
          </div>
          <div>
            <h3>Resources</h3>
            <Link href="/about-india">About India</Link>
            <a href="mailto:hello@journeythroughages.com">Contact Us</a>
          </div>
          <div>
            <h3>Connect With Us</h3>
            <a href="https://www.instagram.com/">Instagram</a>
            <a href="https://www.youtube.com/">YouTube</a>
            <a href="https://www.facebook.com/">Facebook</a>
          </div>
        </nav>
        <p className={styles.copyright}>© 2025 Incredible India 360. All Rights Reserved.</p>
      </footer>
    </main>
  );
}
