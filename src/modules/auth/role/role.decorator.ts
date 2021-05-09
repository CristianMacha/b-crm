import { SetMetadata } from '@nestjs/common';

export enum Role {
    ADMINISTRADOR = 'ADMINISTRADOR',
    VENDEDOR = 'VENDEDOR',
}

export const ROLES_KEY = 'roles';
export const Roles = (...args: Role[]) => SetMetadata(ROLES_KEY, args);
