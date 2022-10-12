import styles from "../styles/Header.module.css";
import Nav from "./Nav";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return <header className={styles.header}>
    <Link href='/'><Image style={{'cursor':'pointer'}} src='/images/logo.svg' width={256} height={50} alt='logo' /></Link>
    <Nav />
  </header>;
}
