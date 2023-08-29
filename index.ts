import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import apiRoutes from './routes/apiRoutes';
import morgan from 'morgan';
import './config/db';

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/api', apiRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
