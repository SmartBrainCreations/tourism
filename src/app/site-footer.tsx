import Link from "next/link";
import { stateRegions } from "./state-destinations";
import styles from "./site-footer.module.css";

const primaryLinks = [
  { label: "Home", href: "/" },
  { label: "Explore", href: "/states" },
  { label: "Experiences", href: "/experiences" },
  { label: "Travel Guides", href: "/travel-guides" },
  { label: "Blog", href: "/blog" },
  { label: "About India", href: "/about-india" },
];

const destinations = stateRegions.flatMap((region) =>
  region.states.flatMap((state) =>
    state.href ? [{ label: state.name, href: state.href }] : [],
  ),
);

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brandBlock}>
          <Link className={styles.brand} href="/">
            Journey Through Ages
          </Link>
          <p className={styles.tagline}>Discover India, One Story at a Time</p>
          <p className={styles.description}>
            Explore India’s rich heritage, breathtaking landscapes, and vibrant traditions.
            Discover destinations and experiences from across this incredible land.
          </p>
        </div>

        <nav className={styles.linkGroup} aria-label="Quick links">
          <h2>Quick Links</h2>
          <ul>
            {primaryLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav className={styles.destinations} aria-label="Destinations">
          <h2>Destinations</h2>
          <ul>
            {destinations.map((destination) => (
              <li key={destination.href}>
                <Link href={destination.href}>{destination.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav className={styles.linkGroup} aria-label="Policies">
          <h2>Policies</h2>
          <ul>
            <li>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/terms-of-use">Terms of Use</Link>
            </li>
          </ul>
        </nav>

        <div className={styles.linkGroup}>
          <h2>Connect With Us</h2>
          <ul>
            <li>
              <a href="mailto:hello@journeythroughages.com">Contact Us</a>
            </li>
            <li>
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
                YouTube
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className={styles.copyright}>
        © 2025 Incredible India 360. All Rights Reserved.
      </p>
    </footer>
  );
}
