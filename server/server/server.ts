import 'reflect-metadata';
import express from 'express';
import path from 'path';
import { swaggerRoutes } from './routes/swagger-route';
import { appRoutes } from './routes/post-route';
import { createConnection } from 'typeorm';

const isTypeScript = __filename.endsWith('ts');
if (isTypeScript) {
  process.env.DEV_MODE = "true";
}

createConnection().then(async connection => {
  const app = express();

  // enable parsing of http request body
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  // routes and api calls
  app.use('/posts', appRoutes);
  app.use('/swagger', swaggerRoutes);

  // default path to serve up index.html (single page application)
  app.all('', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public', 'index.html'));
  });

  // start node server
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`App UI available http://localhost:${port}`);
    console.log(`Swagger UI available http://localhost:${port}/swagger/api-docs`);
  });

  // error handler for unmatched routes or api calls
  app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, '../public', '404.html'));
  });
}).catch(error => console.log("TypeORM connection error: ", error));
