import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import styles from "../destination-page.module.css";

const destinations = [
  {
    name: "Bodh Gaya",
    title: "Where the Buddha Found Enlightenment",
    description:
      "Bodh Gaya is one of Buddhism’s most sacred pilgrimage sites. The Mahabodhi Temple, the Bodhi Tree, and monasteries built by Buddhist communities from around the world give the town a contemplative, international character.",
    image: "/bihar/bodh-gaya.jpg",
    alt: "Votive stupas at the Mahabodhi Temple complex in Bodh Gaya",
  },
  {
    name: "Nalanda",
    title: "The Ancient Seat of Learning",
    description:
      "The UNESCO-listed ruins of Nalanda Mahavihara preserve the remains of a renowned ancient monastic university. Brick monasteries, temples, and archaeological collections offer a glimpse of a place that once drew scholars from across Asia.",
    image: "/bihar/nalanda.jpg",
    alt: "Ruins of a monastery at Nalanda Mahavihara",
  },
  {
    name: "Rajgir",
    title: "Hills, History & Sacred Paths",
    description:
      "Set among a ring of hills, Rajgir is associated with both Buddha and Mahavira. Visit Vishwa Shanti Stupa, explore the old city and nearby heritage sites, or take the ropeway for broad views across the surrounding landscape.",
    image: "/bihar/rajgir.jpg",
    alt: "Vishwa Shanti Stupa overlooking Rajgir",
  },
  {
    name: "Patna",
    title: "The Historic River City",
    description:
      "Bihar’s capital stretches along the Ganga and layers a lively modern city over a long history. Golghar, the Bihar Museum, Takht Sri Patna Sahib, and the riverfront make Patna a rewarding place to explore the region’s many stories.",
    image: "/bihar/patna.jpg",
    alt: "Golghar, a historic granary in Patna",
  },
  {
    name: "Vaishali",
    title: "An Ancient Republic",
    description:
      "Vaishali is an important Buddhist and Jain heritage destination, remembered as an early republic and a place visited by the Buddha. The Ashokan pillar, stupas, and archaeological remains make it a peaceful stop on Bihar’s heritage trail.",
    image: "/bihar/vaishali.jpg",
    alt: "The Ashokan pillar and Ananda Stupa at Vaishali",
  },
  {
    name: "Pawapuri",
    title: "The Marble Temple on the Lake",
    description:
      "Pawapuri is a revered Jain pilgrimage town associated with the final days of Lord Mahavira. Jal Mandir stands at the center of a tranquil lotus pond, connected to the shore by a narrow marble causeway.",
    image: "/bihar/best-time.jpg",
    alt: "Jal Mandir, the marble temple in Pawapuri",
  },
];

const festivals = [
  {
    title: "Chhath Puja (October–November)",
    description:
      "Bihar’s most celebrated festival honors the Sun God with prayers and offerings at rivers, ponds, and other water bodies at sunrise and sunset.",
  },
  {
    title: "Sonepur Mela (November–December)",
    description:
      "A historic fair held near the meeting of the Ganga and Gandak, bringing together regional crafts, food, performances, and local traditions.",
  },
  {
    title: "Buddha Jayanti (April–May)",
    description:
      "Bodh Gaya marks the birth, enlightenment, and passing of the Buddha with prayers, ceremonies, and visitors from around the world.",
  },
  {
    title: "Rajgir Mahotsav (October)",
    description:
      "A cultural celebration featuring classical music, dance, and performances in the historic setting of Rajgir.",
  },
  {
    title: "Sama-Chakeva (November)",
    description:
      "A folk festival of Mithila celebrated with songs, clay figures, and family gatherings during the winter season.",
  },
];

const cuisineCategories = [
  {
    title: "Savory staples",
    dishes: [
      {
        name: "Litti Chokha",
        description:
          "Roasted wheat dough balls filled with spiced sattu, served with mashed vegetables, herbs, and a little ghee.",
      },
      {
        name: "Sattu Paratha",
        description:
          "A hearty flatbread stuffed with roasted gram flour, herbs, and spices, often enjoyed with chutney or yogurt.",
      },
      {
        name: "Dal Pitha",
        description:
          "Steamed rice-flour dumplings filled with seasoned lentils, a comforting specialty in many Bihar homes.",
      },
    ],
  },
  {
    title: "Sweets & festive treats",
    dishes: [
      {
        name: "Thekua",
        description:
          "A crisp, gently sweet wheat-flour treat traditionally prepared for Chhath Puja.",
      },
      {
        name: "Khaja",
        description:
          "A layered, flaky sweet associated with Silao and often enjoyed during festivals and special occasions.",
      },
    ],
  },
  {
    title: "Regional favorites",
    dishes: [
      {
        name: "Makhana",
        description:
          "Fox nuts grown in Bihar are roasted or cooked into savory dishes and festive recipes.",
      },
      {
        name: "Chana Ghugni",
        description:
          "A warmly spiced chickpea curry commonly enjoyed as a snack or a simple meal.",
      },
    ],
  },
];

const seasons = [
  {
    name: "Winter",
    dates: "October–February",
    description:
      "Cooler weather makes this the most comfortable season for exploring heritage sites, temples, and cities.",
  },
  {
    name: "Summer",
    dates: "March–June",
    description:
      "Days can be very hot. Plan outdoor visits for early morning or evening and stay hydrated.",
  },
  {
    name: "Monsoon",
    dates: "July–September",
    description:
      "The countryside turns green, though heavy rain may affect travel and river conditions.",
  },
];

const travelRoutes = [
  {
    title: "By Air",
    description:
      "Jay Prakash Narayan International Airport in Patna and the Gaya airport serve the state, with connections to major Indian cities.",
  },
  {
    title: "By Rail",
    description:
      "Patna Junction, Gaya Junction, Rajgir, and other stations connect Bihar with cities across India. Check routes and schedules when planning regional visits.",
  },
  {
    title: "By Road",
    description:
      "National highways connect Bihar’s main cities and heritage destinations. Buses, taxis, and local transport are available, with journey times varying by route.",
  },
];

const stays = [
  {
    title: "Hotels",
    description:
      "Patna and Bodh Gaya have the widest choice of hotels, from premium stays to practical options near major sights.",
  },
  {
    title: "Guesthouses",
    description:
      "Bodh Gaya, Rajgir, and other pilgrimage centers offer guesthouses and monastery stays; check visitor rules and seasonal availability.",
  },
  {
    title: "Heritage stops",
    description:
      "For Nalanda, Rajgir, Vaishali, and Pawapuri, choose a convenient base and confirm local transport before setting out.",
  },
];

const travelTips = [
  "Allow extra time between destinations; road and rail journeys can take longer than expected.",
  "Dress respectfully at temples, monasteries, and other places of worship.",
  "Carry water and sun protection, particularly during warmer months.",
  "Book ahead around Chhath Puja, Buddha Jayanti, and other major festival dates.",
  "Follow local guidance when visiting religious sites and riverbanks.",
];

const experiences = [
  {
    title: "Buddhist Heritage Trail",
    description:
      "Visit Bodh Gaya, Nalanda, and Rajgir to explore monasteries, stupas, and places connected with the Buddha.",
  },
  {
    title: "Jain Pilgrimage",
    description:
      "Discover Pawapuri and other sacred sites tied to the life and teachings of Mahavira.",
  },
  {
    title: "Hill & Cave Exploration",
    description:
      "Walk the historic landscapes around Rajgir and explore the ancient rock-cut caves of the Barabar Hills.",
  },
  {
    title: "Riverfront Traditions",
    description:
      "Experience the ritual life of the Ganga respectfully, especially during the sunrise and sunset observances of Chhath.",
  },
  {
    title: "Mithila Art & Culture",
    description:
      "Learn about Madhubani painting, local handwork, and the distinctive folk traditions of the Mithila region.",
  },
];

const handicrafts = [
  {
    title: "Madhubani Painting",
    description:
      "Recognizable for its fine lines, vivid patterns, and storytelling motifs, this painting tradition comes from the Mithila region.",
  },
  {
    title: "Sikki Grass Craft",
    description:
      "Artisans weave golden-colored sikki grass into baskets, decorative pieces, and useful household objects.",
  },
  {
    title: "Bhagalpur Silk",
    description:
      "Known for its distinctive texture and natural sheen, Bhagalpur silk is a celebrated textile of Bihar.",
  },
  {
    title: "Lacquer & Woodwork",
    description:
      "Traditional makers create colorful lacquerware, toys, and carved wooden objects across the state.",
  },
  {
    title: "Regional Souvenirs",
    description:
      "Look for locally made textiles, paintings, and crafts at established artisan outlets and regional markets.",
  },
];

const otherPlaces = [
  {
    name: "Uttar Pradesh",
    tagline: "Land of Heritage & Faith",
    image: "/india/heritage.jpg",
    href: "/uttar-pradesh",
  },
  {
    name: "Jharkhand",
    tagline: "Land of Waterfalls & Tribes",
    image: "/india/forest.jpg",
    href: "/states",
  },
  {
    name: "Odisha",
    tagline: "Temple Trails & Scenic Coasts",
    image: "/odisha/hero.jpg",
    href: "/odisha",
  },
];

const imageCredits = [
  {
    image: "Mahabodhi Temple South Wall",
    creator: "Sumitsurai",
    license: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Mahabodhi_Temple_South_Wall_(2).jpg",
  },
  {
    image: "Nalanda Mahavihara, Temple 12",
    creator: "Sumitsurai",
    license: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Temple_12_-_Nalanda_Mahavihara_(21).jpg",
  },
  {
    image: "Votive stupas at Mahabodhi Temple",
    creator: "Sumitsurai",
    license: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Votive_Stupas_-_Mahabodhi_Temple_Complex_-_Bodh_Gaya_(13).jpg",
  },
  {
    image: "Monastery 5, Nalanda Mahavihara",
    creator: "Sumitsurai",
    license: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Monastery_5_-_Nalanda_Mahavihara_(1).jpg",
  },
  {
    image: "Vishwa Shanti Stupa, Rajgir",
    creator: "Rohit Sharma",
    license: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Vishwa_Shanti_Stupa,_Rajgir_3.jpg",
  },
  {
    image: "Golghar, Patna",
    creator: "Sumitsurai",
    license: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Golghar_-_Patna_(2).jpg",
  },
  {
    image: "Ananda Stupa and Ashokan pillar, Vaishali",
    creator: "Rohit Sharma",
    license: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Ananda_Stupa_with_Ashok_lion_pillar,_Vaishali,_Bihar,_India.jpg",
  },
  {
    image: "Madhubani painting by Asha Jha",
    creator: "Alok Kriti",
    license: "CC0",
    href: "https://commons.wikimedia.org/wiki/File:Asha_Jha_Madhubani_Painting_Bihar_Artist.jpg",
  },
  {
    image: "Chhath Puja in Bihar",
    creator: "Kvikash6689",
    license: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Chhath_Puja,_Bihar,_India_(2022).jpg",
  },
  {
    image: "Litti chokha",
    creator: "Rajeeb Dutta",
    license: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Litti_Chokha-MB49.jpg",
  },
  {
    image: "Jal Mandir, Pawapuri",
    creator: "Sumitsurai",
    license: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Jal_Mandir_-_Pawapuri_02.jpg",
  },
  {
    image: "Golghar, Patna",
    creator: "Sumitsurai",
    license: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Golghar_-_Patna_(3).jpg",
  },
  {
    image: "Jal Mandir, Pawapuri",
    creator: "Sumitsurai",
    license: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Jal_Mandir_-_Pawapuri_14.jpg",
  },
  {
    image: "Barabar and Nagarjuni Caves",
    creator: "Sumitsurai",
    license: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Barabar_And_Nagarjuni_Caves_(39).jpg",
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

export default function BiharPage() {
  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <Image
          className={styles.heroImage}
          src="/bihar/hero.jpg"
          alt="Stone carvings at the Mahabodhi Temple in Bodh Gaya, Bihar"
          fill
          priority
          sizes="100vw"
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <h1>Bihar</h1>
          <p className={styles.tagline}>Land of Ancient Wisdom</p>
          <p className={styles.heroDescription}>
            Walk through the birthplace of great ideas, from the sacred sites
            of Bodh Gaya to the ancient universities, river cities, and living
            traditions of the Gangetic plains.
          </p>
        </div>
      </header>

      <section className={styles.section} aria-labelledby="bihar-heading">
        <div className={styles.titleBlock}>
          <h2 id="bihar-heading">Bihar — A Journey Through History &amp; Faith</h2>
          <p>
            Bihar brings together some of India’s most important Buddhist and
            Jain sites, ancient centers of learning, and vibrant regional
            traditions. Explore its heritage towns, savor its distinctive
            cuisine, and discover a landscape shaped by the Ganga and its
            tributaries.
          </p>
        </div>
      </section>

      <section className={styles.section} id="introduction">
        <SectionHeading>Introduction</SectionHeading>
        <div className={styles.introGrid}>
          <div className={styles.featureImage}>
            <Image
              src="/bihar/introduction.jpg"
              alt="Temple ruins at the ancient Nalanda Mahavihara"
              fill
              sizes="(max-width: 900px) 100vw, 40vw"
            />
          </div>
          <div className={styles.introCopy}>
            <h3>Introduction</h3>
            <p>
              Located in eastern India, Bihar has been a crossroads of
              learning, spiritual thought, and regional culture for centuries.
              The Buddha attained enlightenment at Bodh Gaya, Nalanda became a
              renowned center of learning, and sites such as Vaishali and
              Pawapuri remain important places of pilgrimage. Today, those
              histories live alongside busy cities, welcoming communities, and
              a rich food and craft culture.
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
          src="/bihar/culture.jpg"
          alt="Traditional Madhubani painting from Bihar"
        />
        <div className={styles.longCopy}>
          <p>
            Bihar’s heritage is reflected in its Buddhist and Jain pilgrimage
            centers, archaeological sites, folk arts, and everyday customs.
            Madhubani painting, also known as Mithila art, is famous for its
            intricate patterns and vivid scenes drawn from nature, ritual, and
            epic stories. Music, storytelling, handloom, and festivals continue
            to connect communities with the state’s long cultural history.
          </p>
        </div>
      </section>

      <section className={styles.section} id="festivals">
        <SectionHeading>Festivals &amp; Events</SectionHeading>
        <BannerImage
          src="/bihar/festival.jpg"
          alt="Offerings arranged for Chhath Puja in Bihar"
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
          src="/bihar/cuisine.jpg"
          alt="Litti chokha, a popular Bihari dish"
        />
        <p className={styles.sectionLead}>
          Bihar’s food is hearty and full of regional character, with roasted
          sattu, grains, seasonal vegetables, and warming spices at its heart.
          Recipes vary from one region and household to another, with sweets
          and festival dishes adding to the state’s culinary heritage.
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
          src="/bihar/best-time.jpg"
          alt="Jal Mandir at Pawapuri surrounded by water"
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
          src="/bihar/travel.jpg"
          alt="Golghar, a landmark in Patna"
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
          src="/bihar/stays.jpg"
          alt="Jal Mandir, a place of pilgrimage in Pawapuri"
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
          src="/bihar/adventure.jpg"
          alt="Ancient rock-cut Barabar caves in Bihar"
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
          src="/bihar/culture.jpg"
          alt="Madhubani art, one of Bihar’s best-known craft traditions"
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

      <footer className={styles.footer}>
        <div className={styles.footerBrand}>Journey Through Ages</div>
        <p className={styles.footerTagline}>Discover India, One Story at a Time</p>
        <p className={styles.footerText}>
          From Bodh Gaya’s sacred quiet to the ancient classrooms of Nalanda,
          Bihar invites you to explore the ideas, faith, food, and traditions
          that have shaped India for generations.
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
        <p className={styles.copyright}>
          © 2025 Incredible India 360. All Rights Reserved.
        </p>
      </footer>
    </main>
  );
}
