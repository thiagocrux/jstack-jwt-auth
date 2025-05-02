import { IController, IResponse } from '../../interfaces/IController';
import { IRequest } from '../../interfaces/IRequest';

export class ListLeadsController implements IController {
  async handle(request: IRequest): Promise<IResponse> {
    return {
      statusCode: 200,
      body: {
        leads: [
          { id: '1', name: 'Athos' },
          { id: '2', name: 'Porthos' },
          { id: '3', name: 'Aramis' },
        ],
      },
    };
  }
}
