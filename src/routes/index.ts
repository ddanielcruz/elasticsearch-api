import { Router } from 'express';
import * as controllers from './controllers';

const routes = Router();

routes.get('/search', controllers.Search.index);

export default routes;
