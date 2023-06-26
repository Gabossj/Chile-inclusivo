import { Router } from 'express';
import { loginUser, newUser, updateUser } from '../controllers/user';
// import { getUsers, getUserByEmail, deleteUser } from '../controllers/admin';
import { getUsers, deleteUser } from '../controllers/admin';
import validateToken from './validate.token';


const router = Router();

// Acceso público usuarios y administradores


router.post('/', newUser);

router.post('/login',loginUser);


// router.use(validateToken); // Middleware de validación de token para rutas protegidas

// Acceso usuarios registrados (requiere autenticación)

// router.put('/user/updateData',updateUser);

// Acceso administradores
router.get('/control', getUsers);

// router.get('/', getUsers);
// router.get('/users/:username', validateToken, getUserByEmail);
router.delete('/control', deleteUser);

export default router;
