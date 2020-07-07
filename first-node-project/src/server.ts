import express from 'express';
import routes from './routes';

const app = express();

app.get('/', (resquest, response) => {
  return response.json({ message: 'Hello Mary' });
});

app.listen(3333, () => {
  console.log('🌼 Server started on port 3333');
});
