import styles from '../styles/Home.module.css'

/**
 * Fully static page, that never changes after the build.
 */
const Imprint = () => {
    return (
        <main className={styles.main}>
            <div>
                <h1>Impressum</h1>
                <div className={styles.grid}>
                    <div className={styles.description}>
                        Name<br/>
                        Street<br/>
                        City<br/><br/>
                    </div>
                </div>
            </div>
            <footer className={styles.footer}>
                <a href="/">Home</a>
            </footer>
        </main>
    )
}

export default Imprint;