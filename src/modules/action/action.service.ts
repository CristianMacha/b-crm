import { Injectable } from '@nestjs/common';
import { Action } from './action.entity';
import { ActionRepository } from './action.repository';

@Injectable()
export class ActionService {
    constructor(private actionRepository: ActionRepository) {}

    async create(action: Action) {
        const newAction = this.actionRepository.create(action);
        const createdAction = await this.actionRepository.save(newAction);

        return createdAction;
    }

    async getByClient(clientId: number) {
        const listActions = await this.actionRepository.find({
            where: { client_id: clientId },
        });

        return listActions;
    }
}
