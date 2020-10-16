import { Router } from 'express';
import multer from 'multer';
import OrphanageController from './controllers/OrphanagesController';

import uploadConfig from './config/upload';

const routes = Router();
const upload = multer(uploadConfig);

routes.post('/orphanages', upload.array('images') ,OrphanageController.create);
routes.get('/orphanages', OrphanageController.index);
routes.get('/orphanages/:id', OrphanageController.show);

routes.post('/teste/:id', (request, response) => {
    console.log(request.query);
    console.log(request.params);
    console.log(request.body);
    return response.json({ "message": "Heelo" });
});

export default routes;