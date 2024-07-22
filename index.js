import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import workoutPlans from './Data.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 5000;

app.get('/api/workout-plans', (req, res) => {
  res.json(workoutPlans);
});

app.get('/', (req, res) => {
  res.send('Welcome to the Social Fitness App!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
