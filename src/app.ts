import express from 'express';
import dotenv from 'dotenv';

import TestRoute from './routes/test/index';

if (process.env.NODE_ENV !== 'production') dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.get('/', (req, res) => {
    res.end('hello world');
});

app.use('/test/', TestRoute);

app.listen(PORT, () => {
    console.log(`start ${PORT}`);
});
