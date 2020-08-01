import express from 'express';
import swaggerUi from 'swagger-ui-express';
import * as swaggerDoc from '../config/swagger.json';

const swaggerRoutes = express.Router();

// define routes
swaggerRoutes.use('/api-docs', swaggerUi.serve);
swaggerRoutes.get('/api-docs', swaggerUi.setup(swaggerDoc));

export { swaggerRoutes };