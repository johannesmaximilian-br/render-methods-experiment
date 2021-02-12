import { online } from './api/endpoint';
import styles from '../styles/Home.module.css';

/**
 * Page shows information fetched from an external API.
 * Information is fetched new at every request.
 * 
 * @param {JSON} feed
 */
const WhoIsOnline = ({ persons }) => {
    return (
        <div className={styles.container}>
            
            <main className={styles.main}>
                <h1 className={styles.title}>Who's online?</h1>
                <p className={styles.description}>A volatile bunch!</p>

                <div className={styles.grid}>
                    {persons.map((person, key) => (
                        <div key={key} className={styles.card}>
                            <h3>{person.name}</h3>
                            <p dangerouslySetInnerHTML={{__html: person.status}} />
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

export default WhoIsOnline;

// Server Side Props are fetched on every request.
export const getServerSideProps = async () => {
    const persons = await online();

    return {
        props: {
            persons: persons
        },
    }
}
