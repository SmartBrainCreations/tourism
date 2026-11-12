import Image from "next/image";
import Link from "next/link";
import { stateRegions } from "../state-destinations";
import styles from "./page.module.css";

const guideBenefits = [
  {
    title: "Local Insight",
    description:
      "Guides reveal the hidden corners of every city, village, and temple — spots that only locals know. They tell the stories behind monuments, festivals, and crafts, turning sightseeing into cultural immersion.",
  },
  {
    title: "Cultural Sensitivity",
    description:
      "Understanding customs, dress codes, and local etiquette can transform your visit from a tourist snapshot into a meaningful interaction.",
  },
  {
    title: "Safety and Convenience",
    description:
      "From bustling train stations to remote trekking trails, guides ensure smooth, stress-free travel while helping you avoid common pitfalls.",
  },
  {
    title: "Tailored Experiences",
    description:
      "Whether your heart yearns for adventure, wellness, culinary exploration, or spiritual journeys, guides help design itineraries that match your pace and interest.",
  },
];

const regions = [
  {
    title: "North India",
    description:
      "Himalayan treks, golden deserts, and historic cities like Jaipur, Delhi, and Agra demand a guide who can blend adventure with historical insight.",
  },
  {
    title: "South India",
    description:
      "Temple towns, backwaters, and heritage cities like Madurai, Mysore, and Kochi offer rich cultural layers that guides unravel beautifully.",
  },
  {
    title: "East India",
    description:
      "The lush valleys, tribal villages, and vibrant festivals of West Bengal, Odisha, and the Northeast are best explored with someone who understands the local rhythms.",
  },
  {
    title: "West India",
    description:
      "Gujarat’s desert culture, Mumbai’s urban vibrancy, and Goa’s beach heritage all require a nuanced understanding of geography and culture.",
  },
  {
    title: "Central India",
    description:
      "Forested regions, wildlife sanctuaries, and ancient forts benefit from guides who can blend history, ecology, and adventure seamlessly.",
  },
];

const culinaryExperiences = [
  "Street food walks in Delhi, Mumbai, and Kolkata.",
  "Cooking classes in Rajasthan or Kerala to learn local recipes from seasoned chefs or home cooks.",
  "Tasting local sweets and beverages, paired with stories of their origins and cultural significance.",
];

const guideTips = [
  "Look for certified, experienced guides with local expertise.",
  "Seek guides who understand your interests — culture, history, adventure, or cuisine.",
  "Prioritize those who emphasize sustainability and respect for local communities.",
  "Personal rapport matters — a guide is not just an expert, but a storyteller and companion.",
];

export default function TravelGuidesPage() {
  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <Image
          className={styles.heroImage}
          src="/india/river.jpg"
          alt="A peaceful river journey through India"
          fill
          priority
          sizes="100vw"
        />
        <div className={styles.heroShade} />
        <div className={styles.heroContent}>
          <h1>Travel Guides of India</h1>
          <p>Your Gateway to Incredible Journeys</p>
        </div>
      </header>

      <section className={styles.intro}>
        <p>
          India is a country of infinite diversity. From snow-capped mountains to sun-kissed
          beaches, bustling cities to serene villages, sacred rivers to lush forests, every
          corner of this vast land offers a unique story. Yet, navigating its vastness can
          feel daunting for travelers seeking both adventure and authenticity. That’s where
          India’s travel guides come in — trusted companions who transform journeys from
          itineraries into unforgettable experiences.
        </p>
      </section>

      <section className={styles.section}>
        <SectionHeading>Why a Travel Guide Makes the Difference</SectionHeading>
        <p className={styles.sectionLead}>
          India is not just a destination; it is a sensory adventure. Its streets hum with
          activity, its markets overflow with colors and aromas, and its traditions are woven
          into every encounter. A travel guide helps you navigate this tapestry:
        </p>
        <div className={styles.benefitGrid}>
          {guideBenefits.map((benefit) => (
            <article className={styles.benefitCard} key={benefit.title}>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <SectionHeading>Regional Expertise</SectionHeading>
        <p className={styles.sectionLead}>
          India’s vast geography and cultural diversity mean that every region requires
          different knowledge to fully appreciate its charm.
        </p>
        <div className={styles.regionGrid}>
          {regions.map((region) => (
            <article className={styles.regionCard} key={region.title}>
              <h3>{region.title}</h3>
              <p>{region.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <SectionHeading>Culinary Journeys with Local Experts</SectionHeading>
        <p className={styles.sectionLead}>
          Food is central to the Indian experience. Guided culinary tours open doors to
          authentic tastes:
        </p>
        <ul className={styles.experienceList}>
          {culinaryExperiences.map((experience) => (
            <li key={experience}>{experience}</li>
          ))}
        </ul>
        <p className={styles.sectionClosing}>
          Guides transform every meal into an exploration of history, geography, and
          tradition — turning food into both sustenance and storytelling.
        </p>
      </section>

      <section className={styles.section}>
        <SectionHeading>Cultural Immersion</SectionHeading>
        <p className={styles.sectionLead}>
          Traveling with a guide allows you to dive deep into India’s festivals, performances,
          and art forms. Attend a private Kathakali rehearsal in Kerala, learn the steps of
          Garba in Gujarat, or participate in a village harvest festival in Punjab. A guide
          connects you with the heartbeat of local culture in ways that itineraries alone
          cannot.
        </p>
      </section>

      <section className={styles.section}>
        <SectionHeading>Adventure and Wellness Guidance</SectionHeading>
        <p className={styles.sectionLead}>
          For thrill-seekers, guides lead treks, rafting trips, desert safaris, and scuba
          diving adventures safely while sharing insights about the terrain, flora, and fauna.
          For seekers of calm and wellness, guides introduce the best yoga retreats, Ayurveda
          centers, and meditation spots, ensuring experiences that rejuvenate body, mind, and
          spirit.
        </p>
      </section>

      <section className={styles.section}>
        <SectionHeading>Tips for Choosing the Right Travel Guide</SectionHeading>
        <ul className={styles.tipsList}>
          {guideTips.map((tip) => (
            <li key={tip}>{tip}</li>
          ))}
        </ul>
      </section>

      <section className={`${styles.section} ${styles.valueSection}`}>
        <SectionHeading>The True Value of a Travel Guide</SectionHeading>
        <p>
          A travel guide in India does more than show landmarks — they unlock the essence of
          the country. With a guide, every journey becomes a story, every city a living museum,
          and every festival or market a portal into centuries of tradition.
        </p>
        <p>
          Travel guides transform India from a destination into a deep, soulful experience,
          where every encounter, every taste, and every sight leaves a lasting imprint on your
          memory.
        </p>
      </section>

      <section className={styles.destinations}>
        <SectionHeading>Explore about the places</SectionHeading>
        {stateRegions.map((region) => (
          <div className={styles.destinationRegion} key={region.name}>
            <h3>{region.name}</h3>
            <div className={styles.destinationGrid}>
              {region.states.map((state) => {
                const card = (
                  <>
                    <Image
                      src={state.image}
                      alt={`Scenic landscape representing ${state.name}`}
                      fill
                      sizes="(max-width: 650px) 100vw, (max-width: 1050px) 50vw, 33vw"
                    />
                    <span className={styles.cardShade} />
                    <span className={styles.destinationText}>
                      <strong>{state.name}</strong>
                      <span>{state.subtitle}</span>
                    </span>
                  </>
                );

                return state.href ? (
                  <Link className={styles.destinationCard} href={state.href} key={state.name}>
                    {card}
                  </Link>
                ) : (
                  <article className={styles.destinationCard} key={state.name}>
                    {card}
                  </article>
                );
              })}
            </div>
          </div>
        ))}
      </section>

    </main>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h2 className={styles.heading}>{children}</h2>;
}
