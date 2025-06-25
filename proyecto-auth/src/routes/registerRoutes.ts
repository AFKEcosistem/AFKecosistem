import { Router } from 'express';
import { RegisterController } from '../controllers/registerController';

const router = Router();
const registerController = new RegisterController();

export function setRegisterRoutes(app: Router) {
    app.post('/register', registerController.register);
}