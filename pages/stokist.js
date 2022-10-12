import Link from 'next/link';
import styles from "../styles/Main.module.css";

export default function Stokist() {
    return (
        <main class="content">
    
        <section className={styles.gallery}>
          <div className={styles.gallery__item}>
            <div className={`${styles.gallery__itemContent} ${styles.page_stokistContent}`}>
              <h2 className={`${styles.gallery__itemTitle} ${styles.page_stokistHeading}`}>D&apos;or Prestige</h2>
            </div>
            <ul className={styles.gallery__list}>
              <li className={styles.gallery__listItem}>
                <b>Website:</b> <a href="https://dorprestige.com" target="_blank" rel='noreferrer'>https://dorprestige.com</a>
              </li>
              <li className={styles.gallery__listItem}>
                <b>Email:</b> <a href="mailto:info@dorprestige.com">info@dorprestige.com</a>
              </li>
              <li className={styles.gallery__listItem}>
                <b>Phone:</b> +1 (818) 745-7555
              </li>
              <li className={styles.gallery__listItem}>
                <b>Address:</b> 500 S Glendale Ave Suite B, Glendale, CA 91205, USA
              </li>
            </ul>
          </div>
          <div className={styles.gallery__item}>
          <div className={`${styles.gallery__itemContent} ${styles.page_stokistContent}`}>
          <h2 className={`${styles.gallery__itemTitle} ${styles.page_stokistHeading}`}>D&apos;or Perfumes</h2>
            </div>
            <ul className={styles.gallery__list}>
            <li className={styles.gallery__listItem}>
                <b>Website:</b> <a href="https://dorperfumes.com" target="_blank" rel='noreferrer'>https://dorperfumes.com</a>
              </li>
              <li className={styles.gallery__listItem}>
                <b>Email:</b> <a href="mailto:info@dorperfumes.com">info@dorperfumes.com</a>
              </li>
              <li className={styles.gallery__listItem}>
                <b>Phone:</b> +1 (818) 745-7555
              </li>
              <li className={styles.gallery__listItem}>
                <b>Address:</b> 725 S Glendale Ave. #D, Glendale, CA 91205, USA
              </li>
            </ul>
          </div>
        </section>
      </main>
      )
}