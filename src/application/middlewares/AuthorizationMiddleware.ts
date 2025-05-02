import { IData, IMiddleware, IResponse } from '../../interfaces/IMiddleware';
import { IRequest } from '../../interfaces/IRequest';

export class AuthorizationMiddleware implements IMiddleware {
  constructor(private readonly authorizedRoles: string[]) {}

  async handle(request: IRequest): Promise<IResponse | IData> {
    if (!request.account) {
      return {
        statusCode: 403,
        body: {
          error: 'Access Denied',
        },
      };
    }

    if (!this.authorizedRoles.includes(request.account.role)) {
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
