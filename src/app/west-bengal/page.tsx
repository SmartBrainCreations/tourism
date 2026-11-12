import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import styles from "../destination-page.module.css";

const destinations = [
  {
    name: "Kolkata",
    title: "The City of Joy",
    description:
      "The vibrant capital is a city of colonial charm, art, and intellectual brilliance. Explore the Victoria Memorial, Howrah Bridge, Dakshineswar Temple, and the book-laden streets of College Street. Its trams, sweets, and old-world aura make Kolkata unforgettable.",
    image: "/west-bengal/kolkata.jpg",
    alt: "The Victoria Memorial illuminated in Kolkata",
  },
  {
    name: "Sundarbans",
    title: "The Mangrove Marvel",
    description:
      "A UNESCO World Heritage Site, the Sundarbans are home to the Royal Bengal Tiger and an intricate network of tidal rivers. This vast mangrove forest is mysterious, beautiful, and alive with wildlife. Explore only with authorized local guides and operators.",
    image: "/west-bengal/sundarbans.jpg",
    alt: "Dense mangrove forest in the Sundarbans Tiger Reserve",
  },
  {
    name: "Digha",
    title: "The Beach Escape",
    description:
      "Known as Bengal’s seaside retreat, Digha offers long stretches of sand, the Bay of Bengal, and fresh seafood. It is a popular place to slow down by the coast and enjoy a relaxed weekend.",
    image: "/west-bengal/digha.jpg",
    alt: "The beach at Digha on the Bay of Bengal",
  },
  {
    name: "Darjeeling",
    title: "The Queen of the Hills",
    description:
      "Nestled in the Himalayas, Darjeeling is famous for its tea plantations, toy train, and panoramic views of Kanchenjunga. Visit Tiger Hill, Batasia Loop, and colonial-era monasteries for a mountain escape wrapped in mist.",
    image: "/west-bengal/darjeeling.jpg",
    alt: "Tea gardens on the hills of Darjeeling",
  },
  {
    name: "Shantiniketan",
    title: "The Abode of Peace",
    description:
      "Founded by Rabindranath Tagore, Shantiniketan is a hub of art, music, and literature. Its open-air classrooms, cultural festivals, and peaceful atmosphere embody Bengal’s creative spirit.",
    image: "/west-bengal/shantiniketan.jpg",
    alt: "Kala Bhavana art campus in Shantiniketan",
  },
];

const festivals = [
  {
    title: "Durga Puja (September–October)",
    description:
      "Bengal’s grandest festival celebrates Goddess Durga with artistic pandals, music, food, and lights.",
  },
  {
    title: "Poila Boishakh (April)",
    description:
      "Bengali New Year is celebrated with traditional feasts, songs, and new beginnings.",
  },
  {
    title: "Kolkata International Film Festival (November)",
    description:
      "A prestigious event that attracts filmmakers and cinema lovers from around the world.",
  },
  {
    title: "Poush Mela (December)",
    description:
      "A cultural fair in Shantiniketan filled with Baul music, crafts, and folk performances.",
  },
  {
    title: "Rath Yatra (June–July)",
    description:
      "A colorful chariot festival celebrated with devotion and joy across the state.",
  },
];

const signatureDishes = [
  {
    name: "Machher Jhol",
    description: "Classic Bengali fish curry cooked with spices and served with rice.",
  },
  {
    name: "Shorshe Ilish",
    description: "Hilsa steamed in mustard sauce — one of Bengal’s best-loved dishes.",
  },
  {
    name: "Kosha Mangsho",
    description: "A slow-cooked, richly spiced Bengali mutton curry.",
  },
  {
    name: "Luchi & Alur Dom",
    description: "Fluffy fried bread served with a fragrant, spicy potato curry.",
  },
  {
    name: "Bhetki Paturi",
    description: "Bhetki fish marinated with spices, wrapped in banana leaf, and steamed.",
  },
];

const desserts = [
  {
    name: "Rasgulla",
    description: "Soft, syrupy chhena dumplings that have become a Bengali classic.",
  },
  {
    name: "Sandesh",
    description: "A delicate sweet made with fresh chhena and sugar, sometimes scented with rose.",
  },
  {
    name: "Mishti Doi",
    description: "Traditional sweetened yogurt, slowly set and served chilled.",
  },
  {
    name: "Chomchom & Pantua",
    description: "Two much-loved Bengali sweets with rich, syrup-soaked flavors.",
  },
];

const seasons = [
  {
    name: "Winter",
    dates: "October–February",
    description: "Cool, comfortable weather makes this a lovely season for sightseeing and festivals.",
  },
  {
    name: "Monsoon",
    dates: "June–September",
    description:
      "The landscape turns lush, but heavy rain can affect travel and access in some areas. Check local conditions, especially before visiting the Sundarbans.",
  },
  {
    name: "Summer",
    dates: "March–June",
    description:
      "The plains can be warm; hill destinations such as Darjeeling and Kalimpong offer a cooler escape.",
  },
];

const travelRoutes = [
  {
    title: "By Air",
    description:
      "Netaji Subhas Chandra Bose International Airport in Kolkata connects West Bengal with major domestic and international cities.",
  },
  {
    title: "By Rail",
    description:
      "Kolkata, Siliguri, and New Jalpaiguri are major railway hubs linking the state with destinations across India.",
  },
  {
    title: "By Road",
    description:
      "National highways including NH12, NH16, and NH27 connect Bengal with Odisha, Assam, and Jharkhand. Private and government buses run between many towns.",
  },
];

const stays = [
  {
    title: "Luxury",
    description: "The Oberoi Grand in Kolkata, Mayfair in Darjeeling, and ITC Sonar.",
  },
  {
    title: "Mid-Range",
    description: "Peerless Inn, Fortune Park, and Sinclairs properties.",
  },
  {
    title: "Budget",
    description: "Guesthouses and homestays in Darjeeling, Shantiniketan, and Kolkata’s suburbs.",
  },
];

const travelTips = [
  "Try local transport, including Kolkata’s trams and the Darjeeling Himalayan Railway.",
  "Carry light cotton clothing in summer and warm layers for the hill regions.",
  "Book Sundarbans safaris through authorized eco-tour operators.",
  "Make time for local sweets and tea tastings.",
];

const experiences = [
  {
    title: "Wildlife Safaris",
    description: "Explore the Sundarbans Tiger Reserve and Jaldapara National Park with authorized guides.",
  },
  {
    title: "Trekking",
    description: "Follow mountain trails around Darjeeling, Sandakphu, and Neora Valley.",
  },
  {
    title: "Heritage Walks",
    description: "Discover colonial architecture, historic neighborhoods, and old markets in Kolkata.",
  },
  {
    title: "Tea Tourism",
    description: "Visit tea gardens and heritage estates around Darjeeling and Kurseong.",
  },
  {
    title: "River Cruises",
    description: "Take a sunset cruise on the Hooghly River and see Kolkata from the water.",
  },
];

const handicrafts = [
  {
    title: "Baluchari Sarees",
    description: "Handwoven silk sarees known for detailed mythological motifs.",
  },
  {
    title: "Dokra Art",
    description: "Metal figurines made with the traditional lost-wax casting technique.",
  },
  {
    title: "Terracotta Craft",
    description: "Sculptural claywork from Bishnupur, seen in temples and decorative pieces.",
  },
  {
    title: "Kolkata Handicrafts",
    description: "Clay idols, jute bags, and Kantha embroidery make distinctive local keepsakes.",
  },
  {
    title: "Tea & Sweets",
    description: "Packaged Darjeeling tea and traditional Bengali sweets are popular gifts.",
  },
];

const otherPlaces = [
  { name: "Odisha", tagline: "Temple Trails & Serene Beaches", image: "/india/temple.jpg" },
  { name: "Sikkim", tagline: "Abode of Clouds", image: "/india/nature.jpg" },
  { name: "Assam", tagline: "Tea Gardens & Tranquil Rivers", image: "/india/river.jpg" },
];

const imageCredits = [
  {
    image: "Victoria Memorial situated in Kolkata",
    creator: "Subhrajyoti07",
    license: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Victoria_Memorial_situated_in_Kolkata.jpg",
  },
  {
    image: "Howrah Bridge, Foggy",
    creator: "Dey.sandip",
    license: "CC BY-SA 3.0",
    href: "https://commons.wikimedia.org/wiki/File:Howrah_Bridge,_Foggy.jpg",
  },
  {
    image: "Victoria Memorial Kolkata at night",
    creator: "DeepanjanGhosh",
    license: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Victoria_Memorial_Kolkata_at_night.jpg",
  },
  {
    image: "Dense Mangrove Forest of the Sundarban Tiger Reserve",
    creator: "Kingshuk Mondal",
    license: "CC BY 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Dense_Mangrove_Forest_of_the_Sundarban_Tiger_Reserve_during_High_Tide,_West_Bengal,_India_02.jpg",
  },
  {
    image: "Digha Beach, West Bengal",
    creator: "Dassurojitsd",
    license: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Digha_Beach,_West_Bengal.JPG",
  },
  {
    image: "Cloud and Tea Garden at Namring Tea Garden",
    creator: "Sourabh.biswas003",
    license: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:PXL_20240323_065728783_Cloud_and_Tea_Garden_at_Namring_Tea_Garden_Darjeeling_West_Bengal_734226_01.jpg",
  },
  {
    image: "Mastermoshai Studio, Kala Bhavana, Shantiniketan",
    creator: "Wingedtree",
    license: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Mastermoshai_Studio_-_Kala_Bhavana_-_Shantiniketan_-_West_Bengal_-_India.jpg",
  },
  {
    image: "Madana Mohana Temple of Bishnupur",
    creator: "SuvadipSanyal",
    license: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Madana_Mohana_temple_of_Bishnupur_in_Bankura_district_37.jpg",
  },
  {
    image: "Pandal at Durga Puja in Kolkata",
    creator: "Xopolino",
    license: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Pandal_at_Durga_Puja_in_Kolkata_2018_01.jpg",
  },
  {
    image: "Bengali Fish Curry",
    creator: "Miansari66",
    license: "CC0",
    href: "https://commons.wikimedia.org/wiki/File:Bengali_Fish_Curry.JPG",
  },
  {
    image: "Darjeeling Himalayan Railway toy train",
    creator: "Syed Sajidul Islam",
    license: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Darjeeling_Himalayan_Railway,toy_train_(2).jpg",
  },
  {
    image: "Howrah Railway Station",
    creator: "Bernard Gagnon",
    license: "CC BY-SA 3.0",
    href: "https://commons.wikimedia.org/wiki/File:Howrah_Railway_Station_01.jpg",
  },
  {
    image: "Tourist Boat in Sundarbans",
    creator: "Kingshuk Mondal",
    license: "CC BY 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Tourist_Boat_in_Sundarbans,_West_Bengal,_India_03.jpg",
  },
  {
    image: "Leather bags craft of Shantiniketan",
    creator: "Sneha G Gupta",
    license: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Leather_bags_craft_of_Shantiniketan,_West_Bengal.jpg",
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

export default function WestBengalPage() {
  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <Image
          className={styles.heroImage}
          src="/west-bengal/hero.jpg"
          alt="Victoria Memorial in Kolkata, West Bengal"
          fill
          priority
          sizes="100vw"
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <h1>West Bengal</h1>
          <p className={styles.tagline}>Culture, Literature &amp; Legacy</p>
          <p className={styles.heroDescription}>
            From Darjeeling’s tea gardens to the Sundarbans’ tidal forests,
            discover a state shaped by art, history, and the Bay of Bengal.
          </p>
        </div>
      </header>

      <section className={styles.section} aria-labelledby="west-bengal-heading">
        <div className={styles.titleBlock}>
          <h2 id="west-bengal-heading">West Bengal — The Cultural Soul of India</h2>
          <p>
            Stretching from the Himalayas to the Bay of Bengal, West Bengal is a
            land of poetry, art, and contrasts. Home to Kolkata, India’s
            cultural capital, it is a place where heritage meets creativity and
            tradition blends with modernity. From Darjeeling’s tea gardens to
            the mangroves of the Sundarbans, Bengal’s landscapes are as diverse
            as its literature and cuisine. It is a state steeped in rhythm,
            color, and soul.
          </p>
        </div>
      </section>

      <section className={styles.section} id="introduction">
        <SectionHeading>Introduction</SectionHeading>
        <div className={styles.introGrid}>
          <div className={styles.featureImage}>
            <Image
              src="/west-bengal/introduction.jpg"
              alt="Howrah Bridge crossing the Hooghly River in Kolkata"
              fill
              sizes="(max-width: 900px) 100vw, 40vw"
            />
          </div>
          <div className={styles.introCopy}>
            <h3>A land of many landscapes</h3>
            <p>
              West Bengal brings together the energy of Kolkata, Himalayan
              foothills, tea-growing hills, river plains, and the mangrove
              delta. Its literary and artistic heritage lives alongside
              historic temples, colonial-era landmarks, and vibrant local
              traditions. Whether you come for a mountain sunrise, a heritage
              walk, or a quiet riverside journey, Bengal offers many ways to
              explore.
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
          src="/west-bengal/culture.jpg"
          alt="Terracotta temple architecture at Bishnupur"
        />
        <div className={styles.longCopy}>
          <p>
            West Bengal’s culture is the heartbeat of India’s art, music, and
            intellect. From Rabindranath Tagore’s poetry to Satyajit Ray’s
            films, the state has shaped India’s creative legacy. Folk arts like
            Baul music, Chhau dance, and Alpona painting continue to thrive.
            Colonial architecture, temples, and literary festivals showcase a
            place where every street tells a story.
          </p>
        </div>
      </section>

      <section className={styles.section} id="festivals">
        <SectionHeading>Festivals &amp; Events</SectionHeading>
        <BannerImage
          src="/west-bengal/festival.jpg"
          alt="A decorated Durga Puja pandal in Kolkata"
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
          src="/west-bengal/cuisine.jpg"
          alt="A Bengali fish curry served with rice"
        />
        <p className={styles.sectionLead}>
          Bengali cuisine is a harmonious blend of flavors — sweet, spicy, and
          soulful. From street snacks to seafood delicacies, it is a feast for
          all the senses.
        </p>
        <div className={styles.foodCategories}>
          <article>
            <h3>Signature Dishes</h3>
            <ul className={styles.foodList}>
              {signatureDishes.map((dish) => (
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
          src="/west-bengal/darjeeling.jpg"
          alt="Misty tea gardens in Darjeeling"
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
          src="/west-bengal/train.jpg"
          alt="The Darjeeling Himalayan Railway winding through the hills"
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
          src="/west-bengal/transport.jpg"
          alt="Howrah Railway Station, a major transport hub in Kolkata"
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
          src="/west-bengal/adventure.jpg"
          alt="A boat journey through the waterways of the Sundarbans"
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
          src="/west-bengal/handicrafts.jpg"
          alt="Handcrafted leather bags made in Shantiniketan"
        />
        <div className={styles.handicraftGrid}>
          {handicrafts.map((craft) => (
            <article className={styles.infoCard} key={craft.title}>
              <h3>{craft.title}</h3>
              <p>{craft.description}</p>
            </article>
          ))}
        </div>
        <div className={styles.longCopy}>
          <p>
            Browse New Market, Gariahat, and Hogg Market in Kolkata, or explore
            Mall Road in Darjeeling for local crafts, tea, and regional
            specialties.
          </p>
        </div>
      </section>

      <section className={styles.section} id="other-places">
        <SectionHeading>Explore other places also</SectionHeading>
        <div className={styles.otherPlacesGrid}>
          {otherPlaces.map((place) => (
            <Link
              className={styles.otherPlaceCard}
              href="/states"
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

    </main>
  );
}
