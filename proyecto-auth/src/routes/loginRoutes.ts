import { Router } from 'express';
import { LoginController } from '../controllers/loginController';

const router = Router();
const loginController = new LoginController();

export function setLoginRoutes(app: Router) {
    app.post('/login', loginController.login.bind(loginController));
}