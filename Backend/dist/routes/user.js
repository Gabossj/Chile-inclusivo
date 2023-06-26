"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = require("../controllers/user");
// import { getUsers, getUserByEmail, deleteUser } from '../controllers/admin';
const admin_1 = require("../controllers/admin");
const router = (0, express_1.Router)();
// Acceso público usuarios y administradores
router.post('/', user_1.newUser);
router.post('/login', user_1.loginUser);
// router.use(validateToken); // Middleware de validación de token para rutas protegidas
// Acceso usuarios registrados (requiere autenticación)
// router.put('/user/updateData',updateUser);
// Acceso administradores
router.get('/control', admin_1.getUsers);
// router.get('/', getUsers);
// router.get('/users/:username', validateToken, getUserByEmail);
router.delete('/control', admin_1.deleteUser);
exports.default = router;
