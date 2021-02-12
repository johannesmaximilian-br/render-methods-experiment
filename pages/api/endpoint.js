/**
 * Dummy API function to receive data from a external source.
 * Epress server from folder 'express' must be running.
 */
export const articles = async () => {
    const response = await fetch('http://localhost:9000/articles');
    const news = await response.json();

    return news;
}

export const online = async () => {
    const response = await fetch('http://localhost:9000/online');
    const news = await response.json();

    return news;
}

export default { articles, online }