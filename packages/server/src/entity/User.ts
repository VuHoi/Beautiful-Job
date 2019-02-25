import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Field, ID, ObjectType, Root } from 'type-graphql';
import { IsEmailExist } from '../graphql/user/register/IsEmailExistConstraint';
import { IsEmail } from 'class-validator';

@ObjectType()
@Entity()
export class User extends BaseEntity {
	@Field(() => ID)
	@PrimaryGeneratedColumn('uuid')
	id: number;

	@Field()
	@Column()
	firstName: string;

	@Field()
	@Column()
	lastName: string;

	@Column('text', { unique: true })
	password: string;

	@Field()
	@IsEmailExist()
	@IsEmail()
	@Column()
	email: string;

	@Field()
	name(@Root() parent: User): string {
		return `${parent.firstName} ${parent.lastName}`;
	}
}
