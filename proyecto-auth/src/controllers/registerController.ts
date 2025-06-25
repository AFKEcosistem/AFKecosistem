export class RegisterController {
    public async register(req: any, res: any) {
        try {
            const { username, password, email } = req.body;

            // Aquí se puede agregar la lógica para validar los datos de entrada

            // Aquí se puede agregar la lógica para guardar el nuevo usuario en la base de datos

            res.status(201).json({ message: 'Usuario registrado exitosamente' });
        } catch (error) {
            res.status(500).json({ message: 'Error al registrar el usuario', error });
        }
    }
}