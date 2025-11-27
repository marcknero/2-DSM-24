import { Router } from 'express';
import PersonController from '../controllers/PersonController';
import CarController from '../controllers/CarController';
import PhoneController from '../controllers/PhoneController';
import CarByPersonController from '../controllers/CarByPersonController';

const router = Router();

// Persons
router.post('/persons', PersonController.create);
router.get('/persons', PersonController.list);

// Cars
router.post('/cars', CarController.create);
router.get('/cars', CarController.list);

// Phones
router.post('/phones', PhoneController.create);
router.get('/phones', PhoneController.list);

// Car by Person (associação)
router.post('/car-by-person', CarByPersonController.create);
router.get('/car-by-person', CarByPersonController.list);

export default router;