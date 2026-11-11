import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import { stateRegions } from "../state-destinations";

export default function StatesPage() {
  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.heroTint} />
        <div className={styles.heroContent}>
          <h1>Explore the States of India</h1>
          <p>A Journey Through Culture, Nature &amp; Heritage</p>
        </div>
      </header>

      <section className={styles.section}>
        <div className={styles.heading}>Discover India – Land of Timeless Wonders</div>
        <div className={styles.subheading}>
          Explore India’s 28 states and 8 union territories — each offering its own culture,
          cuisine, and charm. Find the perfect destination for your next journey through ages.
        </div>

        {stateRegions.map((region) => (
          <div className={styles.regionBlock} key={region.name}>
            <div className={styles.regionTitle}>{region.name}</div>
            <div className={styles.cardGrid}>
              {region.states.map((state) => {
                const card = (
                  <article className={styles.stateCard}>
                    <Image
                      src={state.image}
                      alt={`Scenic landscape representing ${state.name}`}
                      fill
                      sizes="(max-width: 700px) 100vw, 25vw"
                    />
                    <div className={styles.stateMeta}>
                      <h3>{state.name}</h3>
                      <span>{state.subtitle}</span>
                    </div>
                  </article>
                );

                const key = `${region.name}-${state.name}`;

                return state.href ? (
                  <Link className={styles.stateCardLink} href={state.href} key={key}>
                    {card}
                  </Link>
                ) : (
                  <div key={key}>{card}</div>
                );
              })}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
