import { EntityRepository, Repository } from 'typeorm';
import { User } from '../user/user.entity';

@EntityRepository(User)
export class authRepository extends Repository<User> {}
