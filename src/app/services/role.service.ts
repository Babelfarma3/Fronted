import { Role } from './../models/role';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  basePath: string = environment.basePath;
  constructor(private http: HttpClient) { }

  getRoles(){
    return this.http.get<Role[]>(`${this.basePath}/roles/$`);
  }

  getRoleId(id: any){
    return this.http.get<Role>(`${this.basePath}/roles/${id}`);
  }

  addRole(role: Role){
    return this.http.post<Role>(
      `${this.basePath}/roles$`,
      role
      );
  }

  updateRole(id: any, role: Role){
    return this.http.put<Role>(`${this.basePath}/roles/${id}`, role);
  }

  deleteRole(id: any){
    return this.http.delete<Role>(`${this.basePath}/roles/${id}`);
  }
}
