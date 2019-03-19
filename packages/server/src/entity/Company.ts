import {
	BaseEntity,
	Column,
	Entity,
	PrimaryColumn,
	PrimaryGeneratedColumn,
	OneToOne,
	JoinColumn,
	OneToMany,
	CreateDateColumn
} from 'typeorm';
import { Field, ID, ObjectType } from 'type-graphql';
import { User } from './User';

@ObjectType()
@Entity()
export class Company extends BaseEntity {
	@Field(() => ID)
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@OneToMany(() => Company, company => company.users)
	users: Promise<User[]>;

	@Field()
	description: string;
}
