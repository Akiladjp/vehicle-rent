import express from 'express';
import { addVehicle } from '../controller/vehicleController.js';

const vehicle = express.Router();
 
vehicle.post('/addVehicle', addVehicle);


export default vehicle;