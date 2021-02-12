import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css'

/**
 * Page structure ist server side rendered but fetches data via the client.
 */
const PrivateProfile = () => {

    const url = 'http://localhost:9000/profile';
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(url);
            const data = await result.json()
            setData(data);
        }
        fetchData();
    }, []);
    
    return (
        <div className={styles.container}>

            <main className={styles.main}>
                <h1 className={styles.title}>My private space</h1>
                <p className={styles.description}>...for my eyes only!</p>

                <div className={styles.grid}>
                { data ? data.map((info, key) => (
                    <div key={key} className={styles.card}>
                        <h3>{info.name}</h3>
                        <p>{info.street}<br/>{info.city}</p>
                        <p dangerouslySetInnerHTML={{__html: info.secret}} className={styles.code}></p>
                    </div>
                )) : <div>loading...</div> }
                </div>
            </main>

            <footer className={styles.footer}>
                <a href="/">Home</a>
            </footer>
        </div>
    )
}

export default PrivateProfile;