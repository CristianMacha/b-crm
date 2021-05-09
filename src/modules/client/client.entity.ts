import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Client {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    ruc: string;

    @Column()
    razon_social: string;

    @Column()
    direccion: string;

    @Column()
    departamento: string;

    @Column()
    provincia: string;

    @Column()
    distrito: string;

    @Column()
    ubigeo: string;

    @Column()
    estado: string;

    @Column()
    user_id: number;

    @Column()
    condicion: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
