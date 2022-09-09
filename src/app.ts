import express from 'express';
import dotenv from 'dotenv';

if (process.env.NODE_ENV !== 'production') dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.get('/', (req, res) => {
    res.end('hello world');
});

app.listen(PORT, () => {
    console.log(`start ${PORT}`);
});
