/**
 * Dummy API function to receive data from a external source.
 * Epress server from folder 'express' must be running.
 */
export default async function fetcher(source) {
    const response = await fetch(`http://localhost:9000/${source}`);
    const data = await response.json();

    return data;
}