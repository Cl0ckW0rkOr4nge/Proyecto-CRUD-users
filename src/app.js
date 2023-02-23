const express = require('express');
const app = express();
app.use(express.json());

// Usuarios registrados
const users = [
    { id: 1, firstName: 'Juan', lastName: 'Pérez', email: 'juan@example.com', password: 'password123', age: 25 },
    { id: 2, firstName: 'María', lastName: 'González', email: 'maria@example.com', password: 'password456', age: 30 },
    { id: 3, firstName: 'Pedro', lastName: 'Rodríguez', email: 'pedro@example.com', password: 'password789', age: 35 }
];

// Ruta para obtener todos los usuarios
app.get('/users', (req, res) => {
    res.status(200).json(users);
});

// Ruta para crear un nuevo usuario
app.post('/users', (req, res) => {
    const { firstName, lastName, email, password, age } = req.body;
    const id = users.length + 1;
    const newUser = { id, firstName, lastName, email, password, age };
    users.push(newUser);
    res.status(201).json({ id, firstName, lastName, email, password, age });
});

// Ruta para obtener un usuario por su ID
app.get('/users/:id', (req, res) => {
    const { id } = req.params;
    const user = users.find(user => user.id === parseInt(id));
    if (user) {
        const { firstName, lastName, email, password, age } = user;
        res.status(200).json({ id, firstName, lastName, email, password, age });
    } else {
        res.status(404).json({ message: 'Usuario no encontrado' });
    }
});

// Iniciar servidor en el puerto 3000
app.listen(3000, () => {
    console.log('Servidor iniciado en el puerto 3000');
});




module.exports = app
