import Link from "next/link";
import styles from "../legal-page.module.css";

export const metadata = {
  title: "Privacy Policy | Journey Through Ages",
  description: "Learn how Journey Through Ages handles information when you use this website.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className={styles.page}>
      <article className={styles.content}>
        <h1>Privacy Policy</h1>
        <p className={styles.updated}>Last updated: November 12, 2026</p>

        <section>
          <h2>About this policy</h2>
          <p>
            This policy explains how Journey Through Ages (“we,” “us,” or “our”) handles
            information when you visit this website. The site provides information and inspiration
            about travel in India.
          </p>
        </section>

        <section>
          <h2>Information you provide</h2>
          <p>
            You can browse the site without creating an account. If you contact us by email, we
            receive the information you choose to include in your message, such as your email
            address and the contents of your inquiry. We use it to respond and handle the request.
          </p>
        </section>

        <section>
          <h2>Technical information</h2>
          <p>
            When a website is requested, the hosting provider may process technical information
            such as an IP address, browser details, and request time in server logs for delivery,
            security, and troubleshooting. The information available and its retention depend on
            the hosting provider’s practices.
          </p>
        </section>

        <section>
          <h2>Cookies and third-party sites</h2>
          <p>
            This site does not currently offer account sign-in or use cookies for advertising.
            Some technical storage may be used by the website platform to deliver the site. Links
            to external websites are governed by those websites’ own privacy policies; we do not
            control their content or practices.
          </p>
        </section>

        <section>
          <h2>Retention and your choices</h2>
          <p>
            Email correspondence may be retained as needed to respond to you and maintain our
            records. You may contact us to ask about a message you have sent or request its
            deletion, subject to any applicable legal or operational requirements.
          </p>
        </section>

        <section>
          <h2>Changes and contact</h2>
          <p>
            We may update this policy as the site changes. The date at the top indicates when it
            was last revised. For privacy questions, email{" "}
            <a href="mailto:hello@journeythroughages.com">hello@journeythroughages.com</a>.
            You can also return to the <Link href="/">homepage</Link>.
          </p>
        </section>
      </article>
    </main>
  );
}
