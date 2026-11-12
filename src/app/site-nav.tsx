"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useRef, useState, type ChangeEvent, type KeyboardEvent } from "react";
import styles from "./site-nav.module.css";
import { stateRegions } from "./state-destinations";

const links = [
  { label: "Home", href: "/" },
  { label: "Explore", href: "/states" },
  { label: "Experiences", href: "/experiences" },
  { label: "Travel Guides", href: "/travel-guides" },
  { label: "Blog", href: "/blog" },
  { label: "About India", href: "/about-india" },
];

const searchableDestinations = stateRegions.flatMap((region) =>
  region.states.map((state) => ({
    name: state.name.replace(/\s*\(UT\)$/, ""),
    href: state.href ?? "/states",
  })),
);

function DestinationSearch({ mobile = false }: { mobile?: boolean }) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(-1);
  const [focused, setFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const normalizedQuery = query.trim().toLocaleLowerCase();
  const matches = normalizedQuery
    ? searchableDestinations
        .filter((destination) => destination.name.toLocaleLowerCase().includes(normalizedQuery))
        .slice(0, 8)
    : [];
  const showResults = focused && normalizedQuery.length > 0;
  const listId = mobile ? "mobile-search-results" : "desktop-search-results";

  const navigateTo = (href: string) => {
    setActiveIndex(-1);
    setFocused(false);
    router.push(href);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "ArrowDown" && matches.length > 0) {
      event.preventDefault();
      setActiveIndex((current) => (current + 1) % matches.length);
    } else if (event.key === "ArrowUp" && matches.length > 0) {
      event.preventDefault();
      setActiveIndex((current) => (current <= 0 ? matches.length - 1 : current - 1));
    } else if (event.key === "Enter" && activeIndex >= 0 && matches[activeIndex]) {
      event.preventDefault();
      navigateTo(matches[activeIndex].href);
    } else if (event.key === "Escape") {
      event.preventDefault();
      event.stopPropagation();
      setQuery("");
      setFocused(false);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    setActiveIndex(-1);
  };

  return (
    <div className={`${styles.searchWrap} ${mobile ? styles.mobileSearch : ""}`}>
      <label className={styles.search}>
        <span className={styles.visuallyHidden}>Search states and territories</span>
        <input
          ref={inputRef}
          type="search"
          placeholder="Search states"
          value={query}
          role="combobox"
          aria-autocomplete="list"
          aria-expanded={showResults}
          aria-controls={listId}
          aria-activedescendant={activeIndex >= 0 ? `${listId}-${activeIndex}` : undefined}
          onChange={handleChange}
          onFocus={() => setFocused(true)}
          onBlur={() => window.setTimeout(() => setFocused(false), 120)}
          onKeyDown={handleKeyDown}
        />
      </label>
      {showResults && (
        <div className={styles.searchResults} id={listId} role="listbox">
          {matches.length > 0 ? (
            matches.map((destination, index) => (
              <button
                className={styles.searchResult}
                id={`${listId}-${index}`}
                key={`${destination.name}-${destination.href}`}
                type="button"
                role="option"
                aria-selected={index === activeIndex}
                onMouseDown={(event) => event.preventDefault()}
                onClick={() => navigateTo(destination.href)}
              >
                {destination.name}
              </button>
            ))
          ) : (
            <p className={styles.noSearchResults} role="status">
              No matching destinations
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default function SiteNav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const isLegalPage = pathname === "/privacy-policy" || pathname === "/terms-of-use";

  const closeMenuOnEscape = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === "Escape") {
      setMenuOpen(false);
      menuButtonRef.current?.focus();
    }
  };

  return (
    <header className={`${styles.header} ${isLegalPage ? styles.legalHeader : ""}`}>
      <div className={styles.inner}>
        <Link className={styles.brand} href="/" aria-label="Journey Through Ages home">
          Journey Through Ages
        </Link>
        <nav
          className={`${styles.nav} ${menuOpen ? styles.mobileOpen : ""}`}
          id="main-navigation"
          aria-label="Main navigation"
          onKeyDown={closeMenuOnEscape}
        >
          <DestinationSearch mobile />
          {links.map((link) => (
            <Link
              className={styles.link}
              href={link.href}
              key={`${link.label}-${link.href}`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            className={styles.mobileStartLink}
            href="/states"
            onClick={() => setMenuOpen(false)}
          >
            Start Exploring
          </Link>
        </nav>
        <div className={styles.actions}>
          <DestinationSearch />
          <Link className={styles.startLink} href="/states">
            Start Exploring
          </Link>
        </div>
        <button
          ref={menuButtonRef}
          className={styles.menuButton}
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen((open) => !open)}
          onKeyDown={closeMenuOnEscape}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
