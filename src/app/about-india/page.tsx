import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { stateRegions } from "../state-destinations";

const historyPeriods = [
  {
    title: "Ancient India",
    paragraphs: [
      "The Indus Valley Civilization (c. 3300–1300 BCE) was one of the world’s earliest urban cultures, known for its advanced city planning, drainage systems, and trade networks. Cities like Harappa and Mohenjo-Daro highlight early human ingenuity.",
      "The Vedic period (c. 1500–500 BCE) saw the composition of the Vedas, the oldest sacred texts of Hinduism, laying the foundations of Indian religion, philosophy, and social organization.",
      "Ancient India was home to the Mahajanapadas (16 major kingdoms) and saw the rise of great empires like the Maurya Empire (321–185 BCE) under Emperor Ashoka, known for spreading Buddhism across Asia.",
    ],
  },
  {
    title: "Classical and Medieval India",
    paragraphs: [
      "The Gupta Empire (c. 320–550 CE) is often called India’s Golden Age, marked by remarkable advances in science, mathematics, literature, and art.",
      "Over the centuries, powerful regional kingdoms and dynasties shaped the subcontinent. The Delhi Sultanate and Mughal Empire left a lasting influence on India’s architecture, language, music, and traditions.",
    ],
  },
  {
    title: "Colonial India",
    paragraphs: [
      "From the 17th century onward, European powers, mainly the British, established trading posts and gradually colonized India.",
      "The British Raj (1858–1947) brought infrastructure like railways and modern education but also exploited India’s resources.",
      "Resistance movements, including those led by Mahatma Gandhi, Jawaharlal Nehru, and countless regional leaders, eventually led to India’s independence in 1947.",
    ],
  },
  {
    title: "Modern India",
    paragraphs: [
      "Post-independence, India adopted a democratic constitution in 1950, becoming a sovereign republic.",
      "Over the last seven decades, India has developed into a diverse, multicultural, and multi-lingual nation, balancing modernity with rich traditions.",
      "India’s history is reflected in its festivals, languages, religions, and art forms, making it one of the most culturally vibrant nations in the world.",
    ],
  },
];

const economySections = [
  {
    title: "Overview",
    paragraphs: [
      "India is classified as a developing country but is a major player in the global market.",
      "As of 2025, India is the fifth-largest economy by nominal GDP and the third-largest by purchasing power parity (PPP).",
      "The economy is diversified, with contributions from agriculture, industry, and services sectors.",
    ],
  },
  {
    title: "Agriculture",
    paragraphs: [
      "Agriculture employs about 40–45% of the population, making it a backbone of the rural economy.",
      "India is a leading producer of rice, wheat, sugarcane, cotton, and spices.",
      "Traditional farming coexists with modern techniques like drip irrigation, genetically improved seeds, and organic farming.",
    ],
  },
  {
    title: "Industry",
    paragraphs: [
      "Key industrial sectors include steel, textiles, cement, automobiles, chemicals, and IT hardware.",
      "Cities like Mumbai, Bengaluru, Pune, and Chennai are industrial and tech hubs, driving manufacturing and innovation.",
      "India is increasingly focusing on Make in India initiatives, promoting domestic production and export growth.",
    ],
  },
  {
    title: "Services",
    paragraphs: [
      "The service sector contributes the largest share of GDP (~55–60%).",
      "India is a global IT and software powerhouse, with cities like Bengaluru, Hyderabad, and Gurugram leading in software development, tech services, and startups.",
      "Tourism, banking, finance, and healthcare are also key service industries.",
    ],
  },
  {
    title: "Trade and Global Integration",
    paragraphs: [
      "India maintains strong trade relations with countries like the US, China, UAE, and European nations.",
      "Major exports include textiles, gems and jewelry, pharmaceuticals, IT services, and agricultural products.",
      "India is a member of WTO, BRICS, G20, and other international organizations, shaping its role in the global economy.",
    ],
  },
  {
    title: "Challenges and Opportunities",
    paragraphs: [
      "While growth is strong, India faces challenges like income inequality, unemployment, rural poverty, and infrastructure gaps.",
      "Opportunities lie in renewable energy, technology, education, and manufacturing, with government programs aimed at boosting entrepreneurship and innovation.",
    ],
  },
];

const tourismSections = [
  {
    title: "1. Heritage and Historical Tourism",
    paragraphs: [
      "India’s long history has left a treasure trove of monuments and heritage sites.",
      "Iconic landmarks include the Taj Mahal (Agra), Qutub Minar and Red Fort (Delhi), Amer Fort (Jaipur), Charminar (Hyderabad), and Mysore Palace (Karnataka).",
      "UNESCO has recognized over 40 sites in India as World Heritage Sites, including temples, forts, monuments, and natural reserves.",
      "Heritage tourism lets travelers explore ancient architecture, royal traditions, and the stories of India’s past.",
    ],
  },
  {
    title: "2. Religious and Spiritual Tourism",
    paragraphs: [
      "India is the birthplace of Hinduism, Buddhism, Jainism, and Sikhism, making it a spiritual hub. Important sites include Varanasi (Hindu spiritual capital), Bodh Gaya (Buddhist pilgrimage), Amritsar (Golden Temple, Sikhism), and Ajmer Sharif Dargah (Islamic pilgrimage).",
      "Visitors can attend festivals, rituals, and meditation retreats, experiencing both faith and culture firsthand.",
    ],
  },
  {
    title: "3. Nature and Eco-Tourism",
    paragraphs: [
      "India offers diverse landscapes: mountains, deserts, rivers, beaches, and forests.",
      "Himalayas: trekking, mountaineering, skiing (Himachal Pradesh, Uttarakhand, Sikkim). Deserts: camel safaris and sand dunes (Rajasthan, Gujarat). Beaches: sunbathing, water sports (Goa, Kerala, Andaman & Nicobar).",
      "Wildlife sanctuaries and national parks include Ranthambore, Kaziranga, Sundarbans, and Jim Corbett. Eco-tourism initiatives promote sustainable travel and conservation, attracting nature lovers and photographers.",
    ],
  },
  {
    title: "4. Adventure Tourism",
    paragraphs: [
      "Adventure tourism has grown rapidly, with trekking and mountaineering in the Himalayas, river rafting in Rishikesh, paragliding in Bir Billing, scuba diving and snorkeling in Andaman & Nicobar and Goa, and desert safaris in Rajasthan.",
      "India combines adventure with cultural immersion, making experiences both thrilling and meaningful.",
    ],
  },
  {
    title: "5. Culinary Tourism",
    paragraphs: [
      "Indian cuisine is diverse and region-specific, making food a central part of tourism. Travelers can enjoy street food in Delhi, Mumbai, and Kolkata; regional specialties like Butter Chicken (Punjab), Dhokla (Gujarat), Masala Dosa (Tamil Nadu), and Rosogolla (West Bengal); and cooking classes and food tours offering hands-on culinary experiences.",
      "Culinary tourism allows visitors to taste the culture literally, creating memorable and sensory travel experiences.",
    ],
  },
  {
    title: "6. Festivals and Cultural Tourism",
    paragraphs: [
      "Experiencing India’s festivals is a form of tourism itself: Holi, the festival of colors; Diwali, the festival of lights; Durga Puja, West Bengal’s grand celebration; and Onam, Kerala’s harvest festival.",
      "Cultural tourism includes classical music and dance performances, local arts and crafts workshops, and heritage walks, allowing travelers to interact with local traditions.",
    ],
  },
  {
    title: "7. Medical and Wellness Tourism",
    paragraphs: [
      "India is a leading destination for wellness tourism, attracting travelers for Ayurvedic treatments and spa therapies (Kerala, Karnataka), yoga retreats (Rishikesh, Dharamshala), and meditation and spiritual retreats.",
      "Combined with affordability and skilled practitioners, India offers holistic health experiences alongside travel.",
    ],
  },
];

function CopySection({
  title,
  paragraphs,
}: {
  title: string;
  paragraphs: string[];
}) {
  return (
    <article className={styles.copySection}>
      <h3>{title}</h3>
      <div className={styles.paragraphs}>
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}

export default function AboutIndiaPage() {
  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <Image
          className={styles.heroImage}
          src="/india/hero.jpg"
          alt="A scenic view representing the landscapes of India"
          fill
          priority
          sizes="100vw"
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>Journey Through Ages</p>
          <h1>About India</h1>
          <p>
            Discover a land shaped by ancient civilizations, vibrant cultures, and
            journeys that span mountains, cities, and coastlines.
          </p>
        </div>
      </header>

      <div className={styles.content}>
        <section className={styles.intro} aria-labelledby="history-title">
          <p className={styles.eyebrow}>Your Gateway to Incredible Journeys</p>
          <h2 id="history-title">History of India</h2>
          <p>
            India is one of the world’s oldest civilizations, with a history spanning
            over 5,000 years. Its story is a tapestry of ancient kingdoms, empires,
            and cultural evolution that shaped not only the subcontinent but also the
            world.
          </p>
        </section>

        <section className={styles.section} aria-label="The history of India">
          <div className={styles.sectionGrid}>
            {historyPeriods.map((period) => (
              <CopySection
                key={period.title}
                title={period.title}
                paragraphs={period.paragraphs}
              />
            ))}
          </div>
        </section>

        <section className={styles.section} aria-labelledby="economy-title">
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>Tradition, enterprise, and innovation</p>
            <h2 id="economy-title">Economy of India</h2>
            <p>
              India has one of the largest and fastest-growing economies in the
              world, characterized by diversity in industries, services, and
              agriculture. Its economy reflects both its ancient trade traditions
              and modern innovation.
            </p>
          </div>
          <div className={styles.sectionGrid}>
            {economySections.map((section) => (
              <CopySection
                key={section.title}
                title={section.title}
                paragraphs={section.paragraphs}
              />
            ))}
          </div>
        </section>

        <section className={styles.section} aria-labelledby="tourism-title">
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>Explore a country of many journeys</p>
            <h2 id="tourism-title">Tourism in India</h2>
            <p>
              India is one of the world’s top tourist destinations, offering an
              unparalleled mix of history, culture, nature, and adventure. Its
              tourism industry is a major contributor to the economy, providing
              employment and promoting global cultural exchange.
            </p>
          </div>
          <div className={styles.tourismList}>
            {tourismSections.map((section) => (
              <CopySection
                key={section.title}
                title={section.title}
                paragraphs={section.paragraphs}
              />
            ))}
          </div>
        </section>

        <p className={styles.closing}>
          India’s culture and society are not static — they are ever-evolving,
          blending the ancient and the modern. It’s a place where tradition meets
          innovation, where temples and tech parks stand side by side, and where
          art, spirituality, and humanity coexist beautifully.
        </p>

        <section className={styles.destinations} aria-labelledby="places-title">
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>Find your next journey</p>
            <h2 id="places-title">Explore the places</h2>
          </div>
          {stateRegions.map((region) => (
            <div className={styles.region} key={region.name}>
              <h3>{region.name}</h3>
              <div className={styles.cardGrid}>
                {region.states.map((state) => {
                  const card = (
                    <article className={styles.destinationCard}>
                      <Image
                        src={state.image}
                        alt={`Scenic landscape representing ${state.name}`}
                        fill
                        sizes="(max-width: 700px) 100vw, (max-width: 1050px) 50vw, 33vw"
                      />
                      <div className={styles.cardOverlay} />
                      <div className={styles.cardText}>
                        <h4>{state.name}</h4>
                        <p>{state.subtitle}</p>
                      </div>
                    </article>
                  );

                  return state.href ? (
                    <Link
                      className={styles.cardLink}
                      href={state.href}
                      key={state.name}
                    >
                      {card}
                    </Link>
                  ) : (
                    <div key={state.name}>{card}</div>
                  );
                })}
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
