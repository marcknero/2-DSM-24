import { Router } from 'express';
import CityController from '../controllers/CityController';
import StateController from '../controllers/StateController';
import DistrictController from '../controllers/DistrictController';

const router = Router();

router.post('/states', StateController.create);
router.get('/states', StateController.list);

router.post('/cities', CityController.create);
router.get('/cities', CityController.list);


router.post('/districts', DistrictController.create);
router.get('/districts', DistrictController.list);

export default router;