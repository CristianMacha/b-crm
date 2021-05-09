import {
    Column,
    CreateDateColumn,
    Entity,
    Index,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Action {
    @PrimaryGeneratedColumn()
    id: number;

    @Index()
    @Column()
    client_id: number;

    @Column()
    text: string;

    @Column({ nullable: true, default: null })
    reminder: Date;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
