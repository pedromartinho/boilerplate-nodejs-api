import express from 'express';
import ExampleController from '../controllers/example.controller';

const router = express.Router();

router.use(`/api`, ExampleController.register());

export { router };