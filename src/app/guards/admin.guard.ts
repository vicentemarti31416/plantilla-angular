import { CanActivateFn } from '@angular/router';
import { AdminService } from '../services/admin.service';
import { inject } from '@angular/core';

export const AdminGuard: CanActivateFn = (route, state) => {

  const adminService: AdminService = inject(AdminService);
  let isAdmin = adminService.isAdmin;

  if (isAdmin) {
    console.log("Logueado correctamente")
    return true;
  } else {
    console.log("No has podido loguearte")
    return false;
  }
  
};
