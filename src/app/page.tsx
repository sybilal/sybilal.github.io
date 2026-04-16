import Image from "next/image";
import styles from "./page.module.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH?.replace(/\/$/, "") || "";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src={`${basePath}/next.svg`}
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className={styles.intro}>
          <h1>Syed Bilal Ahmed</h1>
          <p>
            Portfolio in progress, check back later for updates.
          </p>
        </div>
        <div className={styles.ctas}>

        </div>
      </main>
    </div>
  );
}
