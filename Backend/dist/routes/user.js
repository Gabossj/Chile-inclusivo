"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = require("../controllers/user");
// import { getUsers, getUserByEmail, deleteUser } from '../controllers/admin';
const admin_1 = require("../controllers/admin");
const admin_2 = require("../controllers/admin");
const admin_3 = require("../controllers/admin");
const validate_token_1 = __importDefault(require("./validate.token"));
const router = (0, express_1.Router)();
// Acceso público usuarios y administradores
router.post('/', user_1.newUser);
router.post('/login', user_1.loginUser);
// router.use(validateToken); // Middleware de validación de token para rutas protegidas
// Acceso usuarios registrados (requiere autenticación)
// router.put('/user/updateData',updateUser);
// Acceso administradores
router.get('/control', validate_token_1.default, admin_1.getUsers);
router.put('/control:usuario', admin_3.updateUser_1);
// router.get('/', getUsers);
// router.get('/users/:username', validateToken, getUserByEmail);
router.delete('/control:usuario', admin_2.deleteUser);
exports.default = router;
