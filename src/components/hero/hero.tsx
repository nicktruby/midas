import Image from 'next/image';
import Link from 'next/link';

import styles from './hero.module.scss';

const HERO_TEXT = 'Business leasing made easy for you and your customers...';
const CTA_TEXT = 'Get in touch';

const Hero: React.FC = () => {
  return (
    <div className="container">
      <section className={styles.hero}>
        <div className={styles.text}>
          <h1>{HERO_TEXT}</h1>
          <button className="ctaBtn">
            <Link href="#contact">{CTA_TEXT}</Link>
          </button>
        </div>
        <div className={styles.image}>
          <Image
            src="/assets/contactless.jpg"
            layout="fill"
            alt="A person in a coffee shop, holding a smart phone in their hand, against a contactless payment device"
            className={styles.image}
          />
        </div>
      </section>
    </div>
  );
};

export default Hero;
