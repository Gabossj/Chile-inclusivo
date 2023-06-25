"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const validateToken = (req, res, next) => {
    const headerToken = req.headers['authorization'];
    if (headerToken != undefined && headerToken.startsWith('Bearer ')) {
        try {
            const bearerToken = headerToken.slice(7);
            const decodedToken = jsonwebtoken_1.default.verify(bearerToken, process.env.SECRET_KEY || 'pepito123');
            console.log(decodedToken); // Visualiza el contenido del token decodificado
            console.log(decodedToken.rol); // Visualiza el valor del rol
            if (decodedToken.rol === 'admin') {
                req.user = decodedToken;
                next();
            }
            else {
                res.status(403).json({
                    msg: 'Acceso denegado: se requiere el rol de administrador'
                });
            }
        }
        catch (error) {
            res.status(401).json({
                msg: 'Token no válido'
            });
        }
    }
    else {
        res.status(401).json({
            msg: 'Acceso denegado'
        });
    }
};
exports.default = validateToken;
