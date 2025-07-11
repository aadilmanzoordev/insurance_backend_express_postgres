import app from './app';
import { initDB } from './config/db';
import { PORT } from './config';

async function start() {
  await initDB();
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}
start();
