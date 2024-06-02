import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { UserDetailsService } from '../service/user-details.service';

export const authGuardGuard: CanActivateFn = (route, state) => {
  const user = inject(UserDetailsService)
  if (!user.isAuthorized) {
    console.log('Cannot access unauthorized or default routing')
    return false;
  } else {
    console.log('authorized')
    return true
  }
};
