import express from 'express';
import fs from 'fs';
import path from 'path';

const app = express();
const port = 9000;
const fakeLatency = 1000;

// Helper for being a fake API.
const returnDataFromFile = (file, response) => {
    const data = path.join(path.resolve(), file);

    setTimeout(
        () => fs.readFile(data, (error, data) => {
            if (error) return console.error(error);
            response.writeHead(200, { 
                'Content-Type': 'application/json;charset=UTF-8',
                'Access-Control-Allow-Origin': '*'
            });
            response.write(data);
            response.end();
        }), fakeLatency // Pretend server latency.
    );
};

app.get('/', (req, res) => req.send('Pls specify resource!'))
app.get('/articles', (req, res) => {
    returnDataFromFile('data.json', res);
});
app.get('/online', (req, res) => {
    returnDataFromFile('online.json', res);
});
app.get('/profile', (req, res) => {
    returnDataFromFile('profile.json', res);
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
});