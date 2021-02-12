import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Sample Page for SSG</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Happy experimentation, folks!
                </h1>

                <p className={styles.description}>
                    To watch and test the different options of SSG, SSR and CSR.
                </p>

                <div className={styles.grid}>
                    <a href="/whats-on" className={styles.card}>
                        <h3>What's on</h3>
                        <p>A static, still dynamic article list. (SSG, with ISR - incrementa static regeneration)</p>
                    </a>

                    <a href="/who-is-online" className={styles.card}>
                        <h3>Who's online</h3>
                        <p>A list of people. (SSR)</p>
                    </a>

                    <a href="/private-profile" className={styles.card}>
                        <h3>My private space</h3>
                        <p>"Private" data. (CSR - data wise)</p>
                    </a>

                    <a href="/imprint" className={styles.card}>
                        <h3>Imprint</h3>
                        <p>A page that never changes after the build. (SSG)</p>
                    </a>
                </div>
            </main>
        </div>
    )
}
