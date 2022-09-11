import {
    Entity,
    BaseEntity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn
} from "typeorm";

@Entity('contact')
export class ContactEntity extends BaseEntity{
    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number

    @Column({
        type: "varchar",
        unique: true
    })
    firstName: string;

    @Column({
        type: "varchar",
    })
    lastName: string;

    @Column({
        type: "varchar",
    })
    phoneNumber: string;

    @CreateDateColumn({
        type: "date"
    })
    createdAt: Date;

    @UpdateDateColumn({
        type: "date"
    })
    updatedAt: Date;

    @DeleteDateColumn({
        type: "date"
    })
    deleteAt: Date;
}
