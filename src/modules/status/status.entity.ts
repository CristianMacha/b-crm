import {
    Column,
    CreateDateColumn,
    Entity,
    Index,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Status {
    @PrimaryGeneratedColumn()
    id: number;

    @Index()
    @Column()
    client_id: number;

    @Column()
    stage: string;

    @Column({ nullable: true })
    status: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
