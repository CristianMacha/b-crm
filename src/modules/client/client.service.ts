import { Injectable } from '@nestjs/common';
import { Role } from '../auth/role/role.decorator';
import { Client } from './client.entity';
import { ClientRepository } from './client.repository';

@Injectable()
export class ClientService {
    constructor(private clientRepository: ClientRepository) {}

    async create(client: Client) {
        const newCLient = this.clientRepository.create(client);
        const createdClient = await this.clientRepository.save(newCLient);

        return createdClient;
    }

    async getAll(role: string, userId: number) {
        let listClients: Client[];

        switch (role) {
            case Role.ADMINISTRADOR:
                listClients = await this.clientRepository.find();
                break;
            case Role.VENDEDOR:
                listClients = await this.clientRepository.find({
                    where: { user_id: userId },
                });
                break;
            default:
                break;
        }

        return listClients;
    }
}
