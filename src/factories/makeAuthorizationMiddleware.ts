import { AuthorizationMiddleware } from '../application/middlewares/AuthorizationMiddleware';
import { makeGetRolePermissionsUseCase } from './makeGetRolePermissionsUseCase';

export function makeAuthorizationMiddleware(authorizedRoles: string[]) {
  return new AuthorizationMiddleware(
    authorizedRoles,
    makeGetRolePermissionsUseCase()
  );
}
