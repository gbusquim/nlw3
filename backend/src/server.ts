import express, { request } from 'express';

import './database/connection';

const app = express();

app.use(express.json());

app.post('/orphanages', (request, response) => {
    return response.json({ "message": "Heelo" });
});

app.post('/teste/:id', (request, response) => {
    console.log(request.query);
    console.log(request.params);
    console.log(request.body);
    return response.json({ "message": "Heelo" });
});

app.listen(3333);