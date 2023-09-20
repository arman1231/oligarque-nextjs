import styles from "../styles/Footer.module.css";

export default function Footer() {
  const date = new Date()
  const year = date.getFullYear();
  return (
    <footer className={styles.footer}>
      <p>© {year}. Oligarque Paris</p>
    </footer>
  );
}
