import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>domenico-falco.com - about</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.title}>Next.js - about page</h1>
      <Link href="/">go to homepage (CSR)</Link>
      <Link href="/mission">go to mission page (CSR)</Link>
    </div>
  );
}
