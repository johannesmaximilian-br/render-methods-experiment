import express from 'express';
import fs from 'fs';
import path from 'path';

const app = express();
const port = 9000;
const fakeLatency = 1000;

// Helper for being a fake API.
const returnDataFromFile = (file, response, position = null) => {
    const data = path.join(path.resolve(), file);

    setTimeout(
        () => fs.readFile(data, (error, data) => {
        
            if (error) return console.error(error);
            response.writeHead(200, { 
                'Content-Type': 'application/json;charset=UTF-8',
                'Access-Control-Allow-Origin': '*'
            });
        
            if (position) {
                data = JSON.stringify(JSON.parse(data)[position - 1]);
            }

            response.write(data);
            response.end();
        }), fakeLatency // Pretend server latency.
    );
};

app.get('/:type/:id?', (req, res) => {
    returnDataFromFile(`${req.params.type}.json`, res, req.params.id);
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
});