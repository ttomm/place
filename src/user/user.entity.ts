import { Role } from 'src/auth/role.enum';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'varchar',
        length: 64,
        nullable: false,
    })
    email: string;

    @Column({
        type: 'varchar',
        length: 128,
        nullable: false,
    })
    password: string;

    @Column({
        type: 'enum',
        enum: Role,
        default: Role.USER
    })
    role: Role;
}