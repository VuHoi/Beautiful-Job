import {
	BaseEntity,
	Column,
	Entity,
	PrimaryGeneratedColumn,
	OneToOne,
	JoinColumn,
	OneToMany,
	CreateDateColumn
} from 'typeorm';
import { Field, ID, ObjectType, Root } from 'type-graphql';
import { IsEmailExist } from '../graphql/user/register/IsEmailExistConstraint';
import { IsEmail, IsDate } from 'class-validator';
import { Card } from './Card';
import { UserPost } from './UserPost';

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

	@Field()
	@Column()
	middleName: string;

	@Field()
	@Column()
	avatar: string;

	@Field()
	@Column('text', { default: 'user' })
	role: string;

	@Field()
	@Column('bool', { default: false })
	isActived: boolean;

	@Field()
	@Column('bool', { default: false })
	isConfirmed: boolean;

	@Column('text', { unique: true })
	password: string;

	@Field()
	@IsEmailExist()
	@IsEmail()
	@Column()
	email: string;

	@Field()
	@Column('text', { unique: true })
	phone: string;

	@Field()
	@IsDate()
	@CreateDateColumn()
	created_date: Date;

	@OneToOne(type => Card)
	@JoinColumn()
	card: Card;

	@OneToMany(() => UserPost, userpost => userpost.users)
	userPost: Promise<UserPost[]>;

	@Field()
	name(@Root() parent: User): string {
		return `${parent.firstName} ${parent.lastName}`;
	}
}
