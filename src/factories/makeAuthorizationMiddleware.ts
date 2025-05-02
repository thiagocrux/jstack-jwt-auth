import { AuthorizationMiddleware } from '../application/middlewares/AuthorizationMiddleware';

export function makeAuthorizationMiddleware(authorizedRoles: string[]) {
  return new AuthorizationMiddleware(authorizedRoles);
}
