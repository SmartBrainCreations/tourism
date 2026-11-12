import Link from "next/link";
import styles from "../legal-page.module.css";

export const metadata = {
  title: "Terms of Use | Journey Through Ages",
  description: "Read the terms that apply when using the Journey Through Ages website.",
};

export default function TermsOfUsePage() {
  return (
    <main className={styles.page}>
      <article className={styles.content}>
        <h1>Terms of Use</h1>
        <p className={styles.updated}>Last updated: November 12, 2026</p>

        <section>
          <h2>Using this website</h2>
          <p>
            By accessing Journey Through Ages, you agree to use the site lawfully and in a way that
            does not interfere with other people’s use of it. Do not attempt to disrupt, damage, or
            gain unauthorized access to the site or its services.
          </p>
        </section>

        <section>
          <h2>Informational content</h2>
          <p>
            The site provides general travel and cultural information for educational and
            inspirational purposes. Information may be incomplete, change over time, or contain
            errors. Verify current requirements, opening hours, local conditions, and travel
            advisories with relevant official sources before making plans.
          </p>
          <p>
            Nothing on this site is a guarantee of availability, safety, or suitability for a
            particular trip. You are responsible for your travel decisions and arrangements.
          </p>
        </section>

        <section>
          <h2>External links</h2>
          <p>
            Links to third-party websites are provided for convenience. We do not control or
            endorse their content, services, or policies, and accessing them is at your discretion.
          </p>
        </section>

        <section>
          <h2>Site content</h2>
          <p>
            Unless otherwise stated, the site’s original text and design are provided by Journey
            Through Ages. You may view and use the material for personal, non-commercial reference.
            Do not reproduce or redistribute substantial site content without permission, and
            respect any separate credits or license terms shown for third-party material.
          </p>
        </section>

        <section>
          <h2>Availability and changes</h2>
          <p>
            We may update, change, or remove site content and features, or temporarily suspend
            access, without notice. We do not guarantee that the site will always be available or
            error-free.
          </p>
        </section>

        <section>
          <h2>Limitation and contact</h2>
          <p>
            To the extent permitted by applicable law, the site is provided “as is,” without
            warranties regarding its accuracy, availability, or fitness for a particular purpose.
            These terms do not limit any rights that cannot be excluded under applicable law.
          </p>
          <p>
            Questions about these terms can be sent to{" "}
            <a href="mailto:hello@journeythroughages.com">hello@journeythroughages.com</a>. See
            also our <Link href="/privacy-policy">Privacy Policy</Link>.
          </p>
        </section>
      </article>
    </main>
  );
}
