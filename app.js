import express from 'express';
import morgan from 'morgan';
import { createRequire } from 'module';
// import helmet from 'helmet';
import dotenv from 'dotenv';
import path from 'path';
import cors from 'cors';

import testRoute from './routes/test.js';

const require = createRequire(import.meta.url);
dotenv.config();

const dirname = path.resolve();
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json({ limit: '100mb' }));

app.use(morgan('dev'));
// app.use(helmet());
app.use(cors());

app.use(express.static(path.join(dirname, '/public')));

app.use(express.json());

app.use('/', testRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('server running'));
