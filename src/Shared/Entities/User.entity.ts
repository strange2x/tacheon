import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Money } from './Money.entity';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: false,
        name: 'user_name',
    })
    name: string;

    @Column({
        default: JSON.stringify({
            x: 36.19486618041992,
            y: 859.3850708007812,
            z: 197.71343994140625,
        }),
        name: 'last_position',
        nullable: false,
    })
    lastPosition: string;

    @Column({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
        nullable: true,
        name: 'created_at',
    })
    createdAt?: string;

    @OneToOne(() => Money)
    @JoinColumn({
        name: 'money_id',
    })
    money: Money;
}
