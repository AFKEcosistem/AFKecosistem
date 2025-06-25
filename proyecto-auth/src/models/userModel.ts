export class UserModel {
    constructor(public username: string, public password: string, public email: string) {}

    // Método para guardar el usuario en la base de datos
    async save() {
        // Lógica para guardar el usuario en la base de datos
    }

    // Método para encontrar un usuario por su nombre de usuario
    static async findByUsername(username: string) {
        // Lógica para buscar un usuario en la base de datos
    }

    // Método para validar la contraseña del usuario
    static validatePassword(inputPassword: string, storedPassword: string) {
        // Lógica para validar la contraseña
    }
}