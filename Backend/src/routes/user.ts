import { Router } from 'express';
import { loginUser, newUser, updateUser } from '../controllers/user';
import { getUsers, getUserByUsername, deleteUser } from '../controllers/admin';
import validateToken from './validate.token';
import { RequestHandler, ParamsDictionary } from 'express-serve-static-core';


const router = Router();

// Acceso público usuarios y administradores

router.post('/', newUser);

router.post('/login', loginUser);

// Acceso usuarios registrados (requiere autenticación)

router.use(validateToken); // Middleware de validación de token para rutas protegidas

// Acceso usuarios registrados

router.put('/user/updateData',validateToken,updateUser);

// Acceso administradores

router.get('/users', validateToken, getUsers);
router.get('/users/:username', validateToken, getUserByUsername);
router.delete('/users/:username', validateToken, deleteUser);

export default router;
