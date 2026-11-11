import Link from "next/link";
import styles from "./site-nav.module.css";

const links = [
  { label: "Home", href: "/" },
  { label: "Explore", href: "/states" },
  { label: "Experiences", href: "/experiences" },
  { label: "Travel Guides", href: "/travel-guides" },
  { label: "Blog", href: "/blog" },
  { label: "About India", href: "/about-india" },
];

export default function SiteNav() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link className={styles.brand} href="/" aria-label="Journey Through Ages home">
          Journey Through Ages
        </Link>
        <nav className={styles.nav} aria-label="Main navigation">
          {links.map((link) => (
            <Link className={styles.link} href={link.href} key={`${link.label}-${link.href}`}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className={styles.actions}>
          <label className={styles.search}>
            <span className={styles.visuallyHidden}>Search</span>
            <input type="search" placeholder="Search" />
          </label>
          <Link className={styles.startLink} href="/states">
            Start Exploring
          </Link>
        </div>
      </div>
    </header>
  );
}
