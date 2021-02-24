import { useRouter } from 'next/router';
import articles from '../api/endpoint';
import styles from '../../styles/Home.module.css';

/**
 * Articles are fetched by dynamic routes and rendered when requested.
 * 
 * @param {JSON} article
 */
const Article = ({ article }) => {
    const { isFallback } = useRouter();

    return (
        <div className={styles.container}>
            <main className={styles.main}>
                {isFallback ? <div className={'pulse-color'}>loading...</div> :
                    <>
                        <h1 className={styles.title}>{article.title}</h1>
                        <p className={styles.description}>{article.content}</p>
                    </>
                }
            </main>
        </div>
    )
}

export default Article;

// Static paths are fetched at build time.
export async function getStaticPaths() {

    // If no paths are specified, they are not rendered during build.
    const paths = []

    // The fallback (isFallback is returned) is displayed while the page is build.
    return { paths, fallback: true }
}


// Static props are fetched during the build, and therefore page can be served statically.
export const getStaticProps = async ({ params }) => {

    const news = await articles(['articles', params.aid]);

    return {
        props: {
            article: news
        },
        revalidate: 15 // Page is stale for 15 seconds and gets refreshed with the next request.
    }
}