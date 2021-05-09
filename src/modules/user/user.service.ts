import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

import { User } from './user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
    constructor(private userRepository: UserRepository) {}

    async create(user: User) {
        const newUser = this.userRepository.create(user);

        const saltOrRounds = 10;
        const hash = await bcrypt.hash(user.password, saltOrRounds);

        newUser.password = hash;
        const createdUser = await this.userRepository.save(newUser);
        return createdUser;
    }
}
