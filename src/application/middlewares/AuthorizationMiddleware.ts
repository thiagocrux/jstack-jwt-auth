import { IData, IMiddleware, IResponse } from '../../interfaces/IMiddleware';
import { IRequest } from '../../interfaces/IRequest';
import { GetRolePermissionsUseCase } from '../useCases/GetRolePermissionsUseCase';

export class AuthorizationMiddleware implements IMiddleware {
  constructor(
    private readonly requiredPermissions: string[],
    private readonly getRolePermissionsUseCase: GetRolePermissionsUseCase
  ) {}

  async handle(request: IRequest): Promise<IResponse | IData> {
    if (!request.account) {
      return {
        statusCode: 403,
        body: {
          error: 'Access Denied',
        },
      };
    }

    const { permissionCodes } = await this.getRolePermissionsUseCase.execute({
      roleId: request.account?.role,
    });

    const isUserAllowed = this.requiredPermissions.some((code) => {
      return permissionCodes.includes(code);
    });

    if (!isUserAllowed) {
      return {
        statusCode: 403,
        body: {
          error: 'Access Denied',
        },
      };
    }

    return {
      data: {},
    };
  }
}
