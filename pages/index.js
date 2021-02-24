import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    Happy experimentation, folks!
                </h1>

                <p className={styles.description}>
                    To watch and test the different options of SSG, SSR and CSR.
                </p>

                <div className={styles.grid}>
                    <Link href="/whats-on">
                        <a className={styles.card}>
                            <h3>What's on</h3>
                            <p>A static, still dynamic article list. (SSG, with ISR - incrementa static regeneration)</p>
                        </a>
                    </Link>

                    <Link href="/who-is-online">
                        <a className={styles.card}>
                            <h3>Who's online</h3>
                            <p>A list of people. (SSR)</p>
                        </a>
                    </Link>

                    <Link href="/private-profile">
                        <a className={styles.card}>
                            <h3>My private space</h3>
                            <p>"Private" data. (CSR - data wise)</p>
                        </a>
                    </Link>

                    <Link href="/imprint">
                        <a className={styles.card}>
                            <h3>Imprint</h3>
                            <p>A page that never changes after the build. (SSG)</p>
                        </a>
                    </Link>
                </div>
            </main>
        </div>
    )
}
