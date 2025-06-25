import { Request, Response, NextFunction } from 'express';

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(401).json({ message: 'No token provided, authorization denied.' });
    }

    // Aquí se puede agregar la lógica para verificar el token, por ejemplo, usando JWT
    try {
        // Verificar el token (lógica de verificación no implementada en este ejemplo)
        // const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // req.user = decoded; // Agregar información del usuario a la solicitud
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Token is not valid.' });
    }
};