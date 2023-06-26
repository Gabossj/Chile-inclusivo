import { Component, OnInit} from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss']
})
export class ControlComponent implements OnInit{

  public listUsers: User[] = [];
  // public buscarUsuario: String = '';

  constructor(private _userService: UserService){} 


  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void{
    this._userService.getUsers().subscribe(data =>{
      this.listUsers = data;
      console.log(data);
    })
  }


  updateUser(usuario: string, rol: string){ 
  }

  deleteUser(usuario: string | undefined) {
    if (typeof usuario === 'string') {
      this._userService.deleteUser(usuario).subscribe(response => {
        // Eliminación exitosa
        console.log('Usuario eliminado');
        // Actualiza la lista de usuarios después de la eliminación
        this.getUsers();
      }, error => {
        // Manejo de errores en caso de que la eliminación falle
        console.error('Error al eliminar el usuario', error);
      });
    }
  }
  

  getUserByEmail(email: string){
  }


}
