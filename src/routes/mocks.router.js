import { Router } from 'express';
import  mocksController from '../controllers/mocks.controller.js';

const router = Router();

router.get('/mockingpets/:cant?', mocksController.getMockingPets );
router.get('/mockingusers/:cant?', mocksController.getMockingUsers );
router.post('/generatedata/:cantPets?/:cantUser?', mocksController.postSaveDataDB );

export default router;