import { articles } from './api/endpoint';
import styles from '../styles/Home.module.css'
/**
 * Page shows articles fetched from an external API.
 * This page is rendered at build time and API data is used while building.
 * 
 * @param {JSON} articles
 */
const WhatsOn = ({ articles }) => {
    return (
        <div className={styles.container}>

            <main className={styles.main}>
                <h1 className={styles.title}>What's On?</h1>
                <p className={styles.description}>...a lot!</p>

                <div className={styles.grid}>
                    {articles.map((article, key) => (
                        <div key={key} className={styles.card}>
                            <h3>{article.title}</h3>
                            <p>{article.content}</p>
                        </div>
                    ))} 
                </div>
            </main>

            <footer className={styles.footer}>
                <a href="/">Home</a>
            </footer>
        </div>
    )
}

export default WhatsOn;

// Static props are fetched during the build, and therefore page can be served statically.
export const getStaticProps = async () => {
    const news = await articles();

    return {
        props: {
            articles: news
        },
        revalidate: 15 // Page is stale for 15 seconds and gets refreshed with the next request.
    }
}
