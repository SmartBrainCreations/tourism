import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

const festivals = [
  {
    month: "January",
    title: "New Beginnings and Harvest Joy",
    description:
      "The year opens with skies filled with kites and hearts brimming with hope. Makar Sankranti paints the skies of Gujarat and Maharashtra in hues of bright paper kites, symbolizing new beginnings. Down south, Pongal in Tamil Nadu celebrates the harvest — families gather around earthen pots, letting the milk boil over in gratitude to nature’s bounty. Meanwhile, the grandeur of Republic Day in Delhi unites the nation, as the majestic parade on Rajpath showcases India’s strength, cultural diversity, and pride.",
  },
  {
    month: "March",
    title: "Colors of Joy",
    description:
      "As winter fades and spring arrives, India bursts into a riot of colors with Holi — the festival of love, laughter, and togetherness. Streets turn into a canvas of pinks, greens, and yellows, as people smear colors, dance to drums, and share sweets like gujiya and thandai. Holi transcends barriers of age, caste, and creed — reminding everyone that joy, like color, knows no boundaries.",
  },
  {
    month: "April",
    title: "Harvest and Renewal",
    description:
      "The month of April marks another wave of harvest celebrations across regions. In the golden fields of Punjab, Baisakhi resonates with the beat of the dhol and the whirl of bhangra dancers, signifying abundance and gratitude. In Kerala, Vishu welcomes the new year with the promise of prosperity, where families wake to the golden sight of the “Vishukkani.” The southern states also celebrate Ugadi, a festival symbolizing the sweet and sour moments of life — just like the traditional Ugadi pachadi dish that blends all flavors in one.",
  },
  {
    month: "August",
    title: "Divine Stories and Cultural Grandeur",
    description:
      "As monsoon rains drape the country in green, Janmashtami brings devotion and festivity to the heartlands of Mathura and Vrindavan — where the birth of Lord Krishna is celebrated with song, dance, and the exhilarating “Dahi Handi” tradition. In Kerala, Onam welcomes the mythical King Mahabali with elaborate floral carpets, boat races, and the grand feast called “Onasadya.” These festivals reflect not just faith, but also the cultural soul of communities that find joy in tradition and togetherness.",
  },
  {
    month: "October–November",
    title: "Lights, Faith, and Celebration",
    description:
      "As autumn sets in, the spirit of devotion fills the air. Navratri brings nine nights of dance, devotion, and color. In Gujarat, people twirl gracefully to the beats of Garba, while in West Bengal, the air vibrates with the chants of Durga Puja, celebrating the triumph of good over evil. Soon after, India lights up in its most dazzling festival — Diwali. The Festival of Lights transforms every home into a beacon of joy. Diyas glow, sweets are shared, fireworks light the sky, and families come together to celebrate the victory of light over darkness and knowledge over ignorance.",
  },
  {
    month: "December",
    title: "A Season of Peace and Cheer",
    description:
      "As the year draws to a close, India’s coastal and hill regions embrace the spirit of Christmas. In Goa, the churches glisten with decorations, choirs fill the air with carols, and streets come alive with joy. In Kerala and the Northeast, too, communities celebrate with warmth, lights, and midnight masses — reminding all of India’s inclusive and harmonious spirit.",
  },
];

const cuisineRegions = [
  {
    title: "North India — Where Spice Meets Warmth",
    description:
      "The northern plate is a celebration of richness and indulgence. In Punjab, the land of golden fields, food is hearty and soulful. Butter Chicken, Dal Makhani, and Amritsari Kulcha served with a dollop of butter are more than dishes — they’re symbols of Punjabi hospitality and zest for life. In Uttar Pradesh, kebabs sizzle on charcoal grills in Lucknow, where the Nawabi legacy lives on through melt-in-your-mouth Galouti Kebabs and fragrant biryanis. Rajasthan, with its arid deserts, has turned simplicity into art — Dal Baati Churma, Gatte ki Sabzi, and Ghewar are delicious reminders of how innovation blossoms in scarcity. Each meal is often accompanied by stories, laughter, and the irresistible aroma of ghee that fills the air like nostalgia.",
  },
  {
    title: "Western India — Sweet, Savory, and Soulful",
    description:
      "Moving westward, the food changes with the landscape. In Gujarat, the cuisine balances sweet, salty, and tangy in perfect harmony — Dhokla, Thepla, Khandvi, and Fafda Jalebi showcase a delicate play of textures and flavors. Maharashtra adds its street-food flair with spicy Vada Pavs, Pav Bhaji, and Misal Pav — comfort food that fuels millions every day. Further south, the coastal paradise of Goa blends Indian spices with Portuguese heritage. Vindaloo, Xacuti, and the heavenly dessert Bebinca tell tales of trade, colonization, and fusion. Here, every bite carries a whisper of the sea — coconut milk, tamarind, and a dash of sunshine.",
  },
  {
    title: "South India — A Symphony of Spice and Serenity",
    description:
      "South India is where food takes on a meditative rhythm — simple, balanced, yet deeply flavorful. In Kerala, known as “God’s Own Country,” meals are served on banana leaves, and the famous Sadya — a grand feast — combines rice, sambar, aviyal, and payasam in a mosaic of taste. Appam with stew, Kerala fish curry, and spiced prawns celebrate the region’s coastal abundance. Tamil Nadu is the birthplace of the beloved Idli, Dosa, and Sambar — humble yet iconic staples that have traveled the world. For the spice lover, Chettinad cuisine offers fiery curries and bold flavors. Karnataka offers comforting Bisi Bele Bath, Mysore Pak, and aromatic filter coffee, while Andhra Pradesh delights in its signature tangy and spicy curries that awaken every sense. Down south, food isn’t just nourishment — it’s a ritual of balance, health, and joy.",
  },
  {
    title: "Eastern India — Subtle, Sweet, and Spiritual",
    description:
      "The eastern states invite you into a softer, subtler flavor palette — where food is poetry on a plate. In West Bengal, the air is fragrant with mustard oil and the melody of fish curries simmering in spices. Hilsa, Chingri Malai Curry, and steaming plates of rice define comfort for millions. And then come the sweets — Rosogolla, Sandesh, Mishti Doi — pure bliss for the soul. Odisha, too, shares a love for simplicity, with temple food from Puri’s Jagannath Temple inspiring countless vegetarian dishes. In the Northeast, each state tells a story through its indigenous ingredients — smoked meats, bamboo shoots, herbs, and fermented delicacies create a tapestry of flavors unlike anywhere else in the world.",
  },
  {
    title: "Central India — Earthy Flavors and Timeless Recipes",
    description:
      "In the heart of India, the cuisine mirrors the land — grounded, flavorful, and full of character. Madhya Pradesh boasts the spicy poha-jalebi breakfast duo, Bhopali kebabs, and tribal delicacies rich in local grains and herbs. Street food in Indore and Gwalior buzzes with flavor and invention, turning even a simple snack into a festival.",
  },
];

const crafts = [
  {
    title: "Rajasthan — The Desert’s Palette of Art",
    description:
      "In the golden sands of Rajasthan, art bursts forth in every shade imaginable. The markets of Jaipur, Jodhpur, and Udaipur are a kaleidoscope of colors — blue pottery, block-printed textiles, and gemstone jewelry fill the stalls with royal splendor. The intricate Meenakari work (enamel jewelry) and hand-painted miniature paintings speak of Mughal patronage and Rajput finesse. In the bustling bazaars of Jaipur, artisans sit patiently, carving stories into marble or dyeing fabrics under the open sky. Each handicraft is more than a souvenir — it is a memory of desert resilience, opulence, and creativity.",
  },
  {
    title: "Uttar Pradesh — Threads of Royal Legacy",
    description:
      "In the sacred lanes of Varanasi (Banaras), the looms never stop singing. The city’s famed Banarasi silk sarees shimmer with gold and silver zari, each motif telling a tale of devotion and grace. These sarees, once reserved for royalty, now adorn brides and dreamers across the world. The state’s artistry extends beyond silk — Lucknow’s chikankari embroidery is the definition of elegance, a whisper of white thread on soft cotton, delicate yet enduring. In every corner of Uttar Pradesh, craftsmanship lives in quiet dignity — humble, detailed, and utterly timeless.",
  },
  {
    title: "Kashmir — Woven in Beauty",
    description:
      "High in the Himalayan valleys, Kashmir weaves warmth into art. The luxurious Pashmina shawls, spun from the wool of Himalayan goats, are soft as mist and rare as moonlight. Alongside, intricately woven Kashmiri carpets adorn homes across the world with Persian-inspired motifs. The region’s papier-mâché art and walnut wood carvings add an earthy grace to this land known as “Paradise on Earth.” Every craft in Kashmir carries the essence of its landscape — serene, meticulous, and eternally beautiful.",
  },
  {
    title: "Gujarat — Threads, Dyes, and Dazzle",
    description:
      "Gujarat dances in color and rhythm, and its crafts are a celebration of that spirit. The traditional Bandhani tie-dye technique fills fabrics with dots and patterns that symbolize prosperity and joy. The intricate Patola sarees of Patan — double ikat weaves of mathematical precision — are heirlooms in silk. In Kutch, artisans create dazzling mirror work, leather crafts, and embroidered textiles, transforming simple fabric into wearable art. Every corner of Gujarat sparkles — from the dusty village workshops to the lively bazaars that hum with the sound of looms and laughter.",
  },
  {
    title: "Karnataka — Sandalwood, Silk, and Heritage",
    description:
      "In the royal city of Mysore, craftsmanship blends elegance with scent. The famed Mysore silk sarees, known for their sheen and purity of gold zari, are the pride of South India. The gentle aroma of sandalwood carvings fills local markets — crafted into idols, boxes, and home décor that capture divine serenity. Art in Karnataka has a spiritual soul; it is made not just by skilled hands but by hearts that revere tradition.",
  },
  {
    title: "Manipur & the Northeast — Nature’s Touch",
    description:
      "In the lush landscapes of the Northeast, art grows out of the earth itself. Manipur is renowned for its bamboo and cane crafts, woven with precision and grace. The region’s artisans transform natural materials into elegant furniture, baskets, and decorative pieces that reflect both beauty and sustainability. From Assam’s handwoven silks to Nagaland’s tribal jewelry, every piece here carries a sense of raw authenticity — earthy, grounded, and deeply human.",
  },
];

const markets = [
  {
    title: "Delhi",
    description:
      "In Delhi’s Chandni Chowk, narrow lanes overflow with fabrics, spices, and handcrafted treasures, the air thick with history and perfume.",
  },
  {
    title: "Bengaluru",
    description:
      "Bengaluru’s MG Road brings a blend of tradition and modernity, offering everything from sandalwood souvenirs to contemporary art.",
  },
  {
    title: "Mumbai",
    description:
      "In Mumbai’s Colaba Causeway, old colonial charm meets bohemian flair — where trinkets, textiles, and laughter flow freely.",
  },
];

const performanceStories = [
  {
    title: "Classical Dance — The Language of the Divine",
    description:
      "India’s classical dance forms are among the oldest in the world — each movement a sacred syllable in an ancient language of storytelling. In Tamil Nadu, the elegance of Bharatanatyam tells stories of gods and mortals through graceful poses, expressive eyes, and rhythmic footwork. Rooted in temple traditions, it is a dance of devotion, discipline, and beauty. From the courts of North India comes Kathak, the dance of storytellers. Dancers spin with breathtaking speed, their ghungroos (ankle bells) echoing tales of love, valor, and spirituality — a form that bridges Mughal grace and Hindu myth. In Kerala, Kathakali takes performance to epic proportions — with vibrant face paints, elaborate costumes, and dramatic gestures, it transforms myth into spectacle. Each performance, lasting through the night, is a visual symphony of color and power. Odissi from Odisha, Manipuri from Manipur, Kuchipudi from Andhra Pradesh, and Mohiniyattam from Kerala — each form is distinct yet connected by the thread of storytelling, transforming the human body into a divine instrument of expression.",
  },
  {
    title: "Classical Music — The Sound of Eternity",
    description:
      "If dance is India’s heartbeat, music is its soul. The classical music traditions of India — Hindustani in the North and Carnatic in the South — have evolved over centuries, carrying the echoes of sages, kings, and poets. In the Hindustani style, the sitar, tabla, and sarod weave improvisations that rise and fall like the breath of the universe. A single raga can express dawn, dusk, longing, or devotion — transcending words. In the Carnatic tradition, compositions are devotional and intricate, performed with veena, mridangam, and soulful vocals. The purity of rhythm and melody blends into something meditative — a soundscape that feels both ancient and eternal. To hear Indian classical music live is to experience time itself slow down — where every note becomes a prayer and every silence, a story.",
  },
  {
    title: "Theatre & Folk Drama — Stories of the People",
    description:
      "Beyond the courts and temples, India’s folk and theatrical traditions bring storytelling to the masses — alive, unfiltered, and communal. In Karnataka, the vibrant Yakshagana combines dance, music, and drama in open-air performances that retell mythological tales with vivid costumes and spontaneous humor. In Uttar Pradesh, Ramlila enacts the life of Lord Rama in sprawling productions that last for days — entire towns turning into living theatres. These performances are not just watched; they are shared, celebrated, and believed. In Maharashtra, Tamasha and Lavani bring humor, rhythm, and romance to the stage. Lavani, with its powerful beats and expressive poetry, captures the passion and resilience of rural women and the pulse of everyday life.",
  },
  {
    title: "Folk Arts — The Soul of the Villages",
    description:
      "Every village in India has its own rhythm, its own dance, its own way of celebrating life. In Assam, the Bihu dance welcomes spring with joyous movements and drums that echo across the green valleys. In Gujarat, the festive beats of Garba and Dandiya Raas light up Navratri nights — circles of dancers spinning in unison, symbolizing the eternal cycle of creation. Punjab’s Bhangra celebrates harvest and happiness with unmatched energy, while Rajasthan’s Ghoomar swirls in elegance and grace. Each folk performance, whether it’s the tribal war dances of Nagaland or the bamboo dances of Mizoram, holds a mirror to the heart of its people — simple, spirited, and full of life.",
  },
  {
    title: "Art as Identity — Preserving the Pulse of Tradition",
    description:
      "What makes India’s cultural performances extraordinary is their continuity. These art forms are not relics of the past — they are living traditions, constantly evolving yet deeply rooted. In every classical dancer’s dedication, in every folk singer’s voice echoing through the night, there is a reminder of India’s unbroken link between art and life. These performances are more than entertainment — they are meditation, celebration, and preservation of identity.",
  },
  {
    title: "Witness the Magic",
    description:
      "To experience India’s performing arts is to journey through its soul. Whether you watch a Kathakali performance in a Kerala temple courtyard, join the Garba circles of Gujarat, or lose yourself in the melody of a midnight raga in Varanasi, each moment leaves you transformed. These cultural performances are India’s invitation to the world — to listen, to watch, and to feel the heartbeat of a civilization that has danced and sung its stories for thousands of years.",
  },
];

const adventureStories = [
  {
    title: "Adventure — Where the Land Inspires Courage",
    paragraphs: [
      "India’s vast and varied geography is a playground for explorers, adventurers, and dreamers.",
      "In the Himalayan ranges of Himachal Pradesh and Uttarakhand, the mountains rise like silent giants, calling trekkers and climbers from around the world. Trails like the Roopkund Trek, with its mysterious glacial lake, or the Valley of Flowers, blooming in colors unimaginable, take you to places where nature still whispers secrets untouched by time. The gushing rivers of Rishikesh and the wild rapids of the Ganges offer the thrill of white-water rafting, where every wave tests your balance and exhilarates your heart.",
      "Far to the west, in Rajasthan’s golden deserts, adventure takes a different form. The Thar Desert stretches endlessly under the sun, its dunes perfect for camel safaris, jeep rides, and nights under starlit skies that feel like poetry.",
      "Down south, the waters call. Goa and the Andaman & Nicobar Islands invite you beneath the waves — scuba diving among coral reefs, swimming with colorful marine life, or simply floating in the turquoise calm of the Indian Ocean. The thrill here is not just in movement, but in discovery — finding beauty in the vastness of the sea and in yourself.",
      "India’s adventure landscape doesn’t shout for attention; it hums quietly, waiting for you to listen — to the call of the wild, to the wind in your ears, to your own heartbeat.",
    ],
  },
  {
    title: "Wellness — Where the Journey Turns Inward",
    paragraphs: [
      "After the thrill of exploration comes the serenity of stillness — and nowhere in the world offers this balance quite like India.",
      "In the peaceful foothills of Rishikesh, known as the Yoga Capital of the World, seekers gather on the banks of the Ganges to practice ancient postures, meditate at sunrise, and rediscover clarity amid the hum of temple bells. Every breath here feels like an offering — to life, to light, to balance.",
      "Travel south to Kerala, and you enter the cradle of Ayurveda, the 5,000-year-old science of holistic healing. Here, nature itself becomes medicine — herbal oils, warm massages, and soothing therapies that align body, mind, and soul. Ayurveda in Kerala isn’t a treatment; it’s a return — to simplicity, to rhythm, to yourself.",
      "In Karnataka, the tranquil towns of Coorg and Gokarna offer wellness retreats nestled in misty hills or beside golden beaches. And in the sacred towns of Bodh Gaya and Dharamshala, silence becomes the greatest teacher — meditation centers invite you to sit, breathe, and simply be.",
      "India’s wellness traditions remind you that peace isn’t found — it’s cultivated, patiently, within.",
    ],
  },
];

const otherPlaces = [
  { name: "Rajasthan", tagline: "Land of Palaces & Deserts", image: "/india/desert.jpg" },
  { name: "Kerala", tagline: "God’s Own Country", image: "/india/river.jpg" },
  { name: "Goa", tagline: "Beaches & Vibrance", image: "/india/coast.jpg" },
  { name: "Delhi", tagline: "The Capital of Stories", image: "/india/city.jpg", href: "/delhi" },
  {
    name: "Uttar Pradesh",
    tagline: "Heart of Vibrant India",
    image: "/india/heritage.jpg",
    href: "/uttar-pradesh",
  },
  {
    name: "Uttarakhand",
    tagline: "Dev Bhoomi",
    image: "/himachal-pradesh/hero.jpg",
    href: "/uttarakhand",
  },
];

function BannerImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className={styles.bannerImage}>
      <Image src={src} alt={alt} fill sizes="(max-width: 900px) 100vw, 90vw" />
    </div>
  );
}

export default function ExperiencesPage() {
  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <Image
          className={styles.heroImage}
          src="/india/hero.jpg"
          alt="A road winding through a dramatic Indian landscape"
          fill
          priority
          sizes="100vw"
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <h1>Experiences That Inspire</h1>
          <p>
            From festivals to food, crafts to culture explore India’s soul in every experience.
          </p>
        </div>
      </header>

      <section className={styles.section} aria-labelledby="experience-intro">
        <div className={styles.titleBlock}>
          <h2 id="experience-intro">Experience the Soul of India</h2>
          <h3 className={styles.sectionLead}>Discover India Through Its Experiences</h3>
          <p>
            India is not just a destination — it’s a celebration of life itself. Every season,
            every state, and every street offers something new: vibrant festivals, soulful music,
            diverse cuisines, timeless crafts, and thrilling adventures. Journey through India’s
            cultural heartbeat — from the colors of Holi to the calm of Kerala’s backwaters — and
            discover an experience for every traveler.
          </p>
        </div>
      </section>

      <section className={styles.section} id="festivals">
        <SectionHeading>Festivals of India — A Celebration Every Month</SectionHeading>
        <BannerImage src="/india/festivals.jpg" alt="Travelers exploring a colorful landscape" />
        <div className={styles.longCopy}>
          <p>
            India is a land where every sunrise heralds a new story, and every season brings a
            new celebration. From the snow-capped Himalayas to the sun-kissed beaches of the
            South, the rhythm of Indian life is woven around its festivals — vibrant, diverse,
            and deeply spiritual. Festivals in India are not merely dates on a calendar; they
            are the heartbeat of the nation, reflecting its unity in diversity, its colors,
            music, food, and faith.
          </p>
        </div>
        <div className={styles.festivalGrid}>
          {festivals.map((festival) => (
            <article className={styles.festivalCard} key={festival.month}>
              <span>{festival.month}</span>
              <h3>{festival.title}</h3>
              <p>{festival.description}</p>
            </article>
          ))}
          <article className={styles.closingCard}>
            <h3>A Festival for Every Soul</h3>
            <p>
              What makes India’s festivals truly remarkable is their diversity — every region,
              religion, and community adds its own rhythm to the symphony of celebrations. Yet,
              there is an underlying unity — a shared joy that transcends difference. Whether
              you’re watching kites soar over Ahmedabad, dancing Garba in Gujarat, savoring
              sweets in Delhi, or witnessing Onam’s grandeur in Kerala, each experience draws
              you closer to the soul of India.
            </p>
            <p>
              Through festivals, India doesn’t just celebrate gods or seasons — it celebrates
              life itself. It celebrates gratitude, love, togetherness, and the endless cycle of
              renewal. So, wherever you are and whichever month you visit, India always has a
              festival waiting for you — ready to welcome you with open arms, vibrant colors,
              and stories that live forever in your heart.
            </p>
          </article>
        </div>
      </section>

      <section className={styles.section} id="cuisine">
        <SectionHeading>Food &amp; Cuisine Map of India — A Feast of a Thousand Flavors</SectionHeading>
        <BannerImage src="/india/food.jpg" alt="A restaurant dining room" />
        <div className={styles.longCopy}>
          <p>
            If there’s one language that unites India beyond words, it is the language of food.
            From the smoky tandoors of the North to the fragrant coconut curries of the South,
            every region, every town, every family tells its story through recipes passed down
            generations. To travel through India is to embark on a culinary pilgrimage — one
            that teases your senses, comforts your soul, and reveals the country’s spirit
            through taste.
          </p>
        </div>
        <div className={styles.regionGrid}>
          {cuisineRegions.map((region) => (
            <article className={styles.storyCard} key={region.title}>
              <h3>{region.title}</h3>
              <p>{region.description}</p>
            </article>
          ))}
        </div>
        <div className={styles.closingCard}>
          <h3>A Map That Tells a Million Stories</h3>
          <p>
            Each Indian state has its own signature dish, its own secret spice blend, and its
            own way of bringing people together around the table. Food here is never just about
            taste — it’s about community, emotion, and memory. A meal in India often begins
            with a blessing and ends with gratitude.
          </p>
          <p>
            To explore India through its cuisine is to travel without borders — every region a
            revelation, every dish a journey. Whether it’s the smoky comfort of a North Indian
            curry, the crisp perfection of a South Indian dosa, or the fragrant sweetness of a
            Bengali dessert, every bite tells a story of heritage, harmony, and heart.
          </p>
          <p>
            So, pick a spot on the Food &amp; Cuisine Map of India, click, and let your taste
            buds lead you. From the sizzle of street food to the elegance of royal feasts,
            India awaits — ready to serve you a plate full of wonder.
          </p>
        </div>
      </section>

      <section className={styles.section} id="crafts">
        <SectionHeading>Handicrafts &amp; Shopping in India — Every Craft Tells a Story</SectionHeading>
        <BannerImage src="/india/heritage.jpg" alt="A historic monument framed by an arch" />
        <div className={styles.longCopy}>
          <p>
            India’s story is written not just in its monuments and festivals, but in the hands
            of its artisans — in the colors of its textiles, the gleam of its metalwork, the
            rhythm of its looms, and the fragrance of its woods. Each region of India has its
            own craft tradition, shaped by its land, history, and people. To wander through
            India’s markets is to walk through living museums — where every piece of art is a
            fragment of time, lovingly preserved and skillfully passed on from generation to
            generation.
          </p>
        </div>
        <div className={styles.storyGrid}>
          {crafts.map((craft) => (
            <article className={styles.storyCard} key={craft.title}>
              <h3>{craft.title}</h3>
              <p>{craft.description}</p>
            </article>
          ))}
        </div>
        <div className={styles.closingCard}>
          <h3>A Legacy in Every Hand</h3>
          <p>
            Whether it’s the shimmer of silk, the cool touch of marble, or the scent of
            sandalwood, India’s artistry speaks a language that needs no translation — a
            language of color, craftsmanship, and culture that connects every traveler to the
            timeless soul of the country.
          </p>
        </div>
        <h3 className={styles.subsectionHeading}>
          Shopping Streets &amp; Local Markets — The Heartbeat of Every City
        </h3>
        <div className={styles.longCopy}>
          <p>
            No trip through India is complete without a stroll through its bustling bazaars —
            the true stages of its cultural theatre. Every market, every artisan stall is an
            open invitation to explore India’s heart — not through monuments or museums, but
            through its living, breathing art.
          </p>
        </div>
        <div className={styles.marketGrid}>
          {markets.map((market) => (
            <article className={styles.marketCard} key={market.title}>
              <h3>{market.title}</h3>
              <p>{market.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section} id="performances">
        <SectionHeading>
          Cultural Performances of India — Rhythm of Timeless Civilization
        </SectionHeading>
        <BannerImage src="/india/festivals.jpg" alt="Travelers experiencing a colorful celebration" />
        <div className={styles.longCopy}>
          <p>
            In India, art is not confined to galleries or stages — it lives and breathes in
            temples, courtyards, and streets. It pulses through every beat of the drum, every
            flicker of a dancer’s eye, every melody that drifts through the evening air. From
            the classical halls of Tamil Nadu to the open-air arenas of Assam, India’s cultural
            performances are not mere entertainment — they are the living expression of
            devotion, emotion, and the country’s eternal spirit.
          </p>
          <p>
            India’s classical dance forms are among the oldest in the world — each movement a
            sacred syllable in an ancient language of storytelling.
          </p>
        </div>
        <div className={styles.storyGrid}>
          {performanceStories.map((story) => (
            <article className={styles.storyCard} key={story.title}>
              <h3>{story.title}</h3>
              <p>{story.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section} id="adventure">
        <SectionHeading>
          Adventure in India — Where the Soul Finds Its Edge and Its Peace
        </SectionHeading>
        <BannerImage src="/india/adventure.jpg" alt="Travelers exploring a dramatic landscape" />
        <div className={styles.storyGrid}>
          {adventureStories.map((story) => (
            <article className={styles.storyCard} key={story.title}>
              <h3>{story.title}</h3>
              {story.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </article>
          ))}
        </div>
        <div className={styles.closingCard}>
          <h3>The Perfect Balance — Thrill Outside, Calm Within</h3>
          <p>
            What makes India unique is how seamlessly it blends the outer adventure with inner
            peace. A trek through the mountains might end at a monastery; a dive in the sea
            might lead to a yoga session at sunrise. Here, the journey and the destination are
            not separate — they reflect one another.
          </p>
          <p>Adventure gives you strength; wellness gives you balance. Together, they make you whole.</p>
          <p>
            So, whether you’re conquering a peak or quieting your mind, India offers not just
            landscapes to explore but states of being to experience.
          </p>
          <h3>An Invitation to Reconnect</h3>
          <p>
            India doesn’t ask you to choose between adrenaline and stillness — it offers both,
            in perfect harmony. Climb, dive, meditate, breathe — every experience brings you
            closer to something infinite. For the wanderer, India is an endless frontier. For
            the seeker, it is home.
          </p>
          <p>
            <strong>Adventure tests your body. Wellness restores your soul. India nurtures both.</strong>
          </p>
        </div>
      </section>

      <section className={styles.section} id="places">
        <SectionHeading>Explore about the places</SectionHeading>
        <div className={styles.otherPlacesGrid}>
          {otherPlaces.map((place) => (
            <Link
              className={styles.otherPlaceCard}
              href={place.href ?? "/states"}
              key={place.name}
            >
              <Image src={place.image} alt="" fill sizes="(max-width: 700px) 100vw, 33vw" />
              <span className={styles.otherPlaceOverlay} />
              <span className={styles.otherPlaceText}>
                <strong>{place.name}</strong>
                <span>{place.tagline}</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerBrand}>Journey Through Ages</div>
        <p className={styles.footerTagline}>Discover India, One Story at a Time</p>
        <p className={styles.footerText}>
          Journey Through Ages is your window into India’s rich heritage, breathtaking landscapes,
          and vibrant traditions. From ancient temples to modern marvels, we bring you stories,
          destinations, and experiences that define the heart of India. Explore, learn, and immerse
          yourself in the timeless beauty of this incredible land.
        </p>
        <nav className={styles.footerLinks} aria-label="Footer navigation">
          <div>
            <h3>Quick Links</h3>
            <Link href="/">Home</Link>
            <Link href="/states">Explore</Link>
            <Link href="/experiences">Experiences</Link>
            <Link href="/#destinations">Travel Guides</Link>
            <Link href="/blog">Blog</Link>
          </div>
          <div>
            <h3>Resources</h3>
            <Link href="/about-india">About India</Link>
            <a href="mailto:hello@journeythroughages.com">Contact Us</a>
            <Link href="/#privacy">Privacy Policy</Link>
            <Link href="/#terms">Terms of Use</Link>
          </div>
          <div>
            <h3>Connect With Us</h3>
            <a href="https://www.instagram.com/">Instagram</a>
            <a href="https://www.youtube.com/">YouTube</a>
            <a href="https://www.facebook.com/">Facebook</a>
          </div>
        </nav>
        <p className={styles.copyright}>© 2025 Incredible India 360. All Rights Reserved.</p>
      </footer>
    </main>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h2 className={styles.bandHeader}>{children}</h2>;
}
