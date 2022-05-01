import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Money {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        default: 10000,
        nullable: false,
    })
    bank: number;

    @Column({
        default: 5000,
        nullable: false,
    })
    hand: number;

    @Column({
        default: 0,
        nullable: false,
    })
    black: number;

    @Column({
        type: 'timestamp',
        name: 'created_at',
        default: () => 'CURRENT_TIMESTAMP',
    })
    createdAt?: string;
}
