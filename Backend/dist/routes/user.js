"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = require("../controllers/user");
const admin_1 = require("../controllers/admin");
const validate_token_1 = __importDefault(require("./validate.token"));
const router = (0, express_1.Router)();
// Acceso público usuarios y administradores
router.post('/', user_1.newUser);
router.post('/login', user_1.loginUser);
// Acceso usuarios registrados (requiere autenticación)
router.use(validate_token_1.default); // Middleware de validación de token para rutas protegidas
// Acceso usuarios registrados
router.put('/user/updateData', validate_token_1.default, user_1.updateUser);
// Acceso administradores
router.get('/users', validate_token_1.default, admin_1.getUsers);
router.get('/users/:username', validate_token_1.default, admin_1.getUserByUsername);
router.delete('/users/:username', validate_token_1.default, admin_1.deleteUser);
exports.default = router;
