import { Request, Response} from 'express';
import bcrypt from 'bcrypt';
import { User } from '../models/user';
import jwt from 'jsonwebtoken';

export const newUser = async (req: Request, res: Response) => {

    const { usuario, email, password } = req.body;

    //Validacion de existencia del usuario en la base de datos

    const userEmail = await User.findOne({ where: { email } });

    if(userEmail){
        return res.status(400).json({
            msg: `El correo ingresado no se encuentra disponbile ${email}`
        })
    }

    const userUsuario = await User.findOne({ where: { usuario } });

    if(userUsuario){
        return res.status(400).json({
            msg: `El nombre de usuario no se encuentra disponbile ${usuario}`
        })
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        //Se guarda usuario en la base de datos
        await User.create({
            usuario: usuario,
            email: email,
            password: hashedPassword
        })
    
        res.json({
            msg: `Usuario ${email} creado exitosamente`
        })        
    } catch (error) {
        res.status(400).json({
            msg: `Ups... hubo un error`,
            error
        })
    }

}

export const loginUser = async (req: Request, res: Response) => {

    const { usuario, email, password } = req.body;
    
    //validamos si el usuario existe en la bd

    const user:any = await User.findOne({ where: { email } });

    if(!user){
        return res.status(400).json({
            msg: `El correo ingresado ${email} no existe en la base de datos`
        })
    }

    //validamos password

    const passwordValid = await bcrypt.compare(password, user.password)
    console.log(passwordValid);

    if(!passwordValid){
        return res.status(400).json({
            msg: `La contraseña ingresada no es correcta`
        })
    }

    //generamos token

    const token = jwt.sign({
        email: email
    }, process.env.SECRET_KEY || 'test', {
        expiresIn: '100000'
    });

    res.json({token});
}