import Image from "next/image";
import styles from "../styles/Main.module.css";

export default function Main() {
  return (
    <main className={styles.content}>
      <div className={styles.main__image}>
        <Image
          src="/images/lion.svg"
          width={250}
          height={250}
          alt="oligarque perfume logo"
        />
      </div>
      <section className={styles.description}>
        Born in 2017 in Paris, France, Maison Oligarque symbolizes courage and
        strength. The lion is a longstanding symbol of Royalty and Nobility. A
        group of lions is called a pride because of their regal appearance and
        mannerism. Oligarque Fragrances are created by undisclosed French
        perfumers with natural raw ingredients and quality with highly
        concentrated oils in Extrait de parfum. Sillage and longevity are the
        primary signatures and familiar faces of Oligarque. So, make a
        statement, have no fear, and welcome our Oligarque pride.
      </section>
      <section className={styles.gallery}>
        <div className={styles.gallery__item}>
          <div className={styles.gallery__image}>
            <Image
              width={300}
              height={300}
              src="/images/item4.jpeg"
              alt="Mastermind perfume"
            />
          </div>
          <div className={styles.gallery__itemContent}>
            <h2 className={styles.gallery__itemTitle}>Mastermind</h2>
            {/* <!-- <a href="https://dorperfumes.com"><img class="gallery__cart" src="./images/cart.svg" alt="cart"></a> --> */}
          </div>
          <ul className={styles.gallery__list}>
            <li className={styles.gallery__listItem}>
              • Top: Green Apple, Bergamot Zest, Georgia Peach, Star Anise
            </li>
            <li className={styles.gallery__listItem}>
              • Middle: Blond Caramel, Warm Milk, Lily Orchid, Cashmere Wood,
              Labdanum
            </li>
            <li className={styles.gallery__listItem}>
              • Base: Madagascar Vanilla, Creamy Sandalwood, Gourmand Tonka
              Beans, Sexy Musk, Rare Amber
            </li>
          </ul>
        </div>
        <div className={styles.gallery__item}>
        <div className={styles.gallery__image}>
            <Image
              width={300}
              height={300}
              src="/images/item5.jpeg"
              alt="Iconique perfume"
            />
          </div>
          <div className={styles.gallery__itemContent}>
          <h2 className={styles.gallery__itemTitle}>Iqoniqe</h2>
            {/* <!-- <a href="https://dorperfumes.com"><img class="gallery__cart" src="./images/cart.svg" alt="cart"></a> --> */}
          </div>
          <ul className={styles.gallery__list}>
          <li className={styles.gallery__listItem}>
              • Top: Juicy Clementine, Ambrette Seeds, Exotic Ylang Ylang
            </li>
            <li className={styles.gallery__listItem}>
              • Middle: White Tuberose, Solar Orange Blossom, Coconut Milk,
              Vanilla Beans
            </li>
            <li className={styles.gallery__listItem}>
              • Base: Cashmere Wood, Sandalwood, Gourmond Tonka, Gold Patchouli,
              Sexy Musk.
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
