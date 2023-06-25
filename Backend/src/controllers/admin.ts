import { Request, Response } from 'express';
import { User } from '../models/user';

// Modificar datos de un usuario por nombre de usuario

export const updateUser = async (req: Request, res: Response) => {
  const { usuario, rol } = req.body;
  const user: any = await User.findOne({ where: { usuario } });

  try {

    if (!user) {
      return res.status(404).json({
        msg: 'El usuario no ha sido encontrado'
      });
    }

    user.rol = rol || user.rol;

    await user.save();

    res.json({
      msg: `Has modificado el rol del usuario de manera exitosa`,
      data: user
    });
  } catch (error) {
    res.status(500).json({
      msg: `Hubo un error al modificar el rol del usuario`
    });
  }
};

// Obtener lista de usuarios
export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({
      msg: `Hubo un error al obtener la lista de usuarios`
    });
  }
};

// Buscar un usuario por nombre de usuario
export const getUserByUsername = async (req: Request, res: Response) => {
  const { username } = req.params;

  try {
    const user = await User.findOne({ where: { usuario: username } });
    if (!user) {
      return res.status(404).json({
        msg: 'El usuario no ha sido encontrado'
      });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({
      msg: `Hubo un error al buscar el usuario`
    });
  }
};

// Eliminar un usuario por nombre de usuario
export const deleteUser = async (req: Request, res: Response) => {
  const { username } = req.params;

  try {
    const user = await User.findOne({ where: { usuario: username } });
    if (!user) {
      return res.status(404).json({
        msg: 'El usuario no ha sido encontrado'
      });
    }

    await user.destroy();

    res.json({
      msg: `El usuario ha sido eliminado correctamente`
    });
  } catch (error) {
    res.status(500).json({
      msg: `Hubo un error al eliminar el usuario`
    });
  }
};
