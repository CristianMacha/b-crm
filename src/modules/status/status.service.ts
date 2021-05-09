import { Injectable } from '@nestjs/common';
import { Status } from './status.entity';
import { StatusRepository } from './status.repository';

@Injectable()
export class StatusService {
    constructor(private statusRepository: StatusRepository) {}

    async create(status: Status) {
        const newStatus = this.statusRepository.create(status);
        const createdStatus = await this.statusRepository.save(newStatus);

        return createdStatus;
    }

    async getByClient(clientId: number) {
        const listStatus = await this.statusRepository.find({
            where: { client_id: clientId },
        });

        return listStatus;
    }
}
