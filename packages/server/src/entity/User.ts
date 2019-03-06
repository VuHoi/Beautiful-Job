import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany } from 'typeorm';
import { Field, ID, ObjectType, Root } from 'type-graphql';
import { IsEmailExist } from '../graphql/user/register/IsEmailExistConstraint';
import { IsEmail } from 'class-validator';
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

	@Column('text', { unique: true })
	password: string;

	@Field()
	@IsEmailExist()
	@IsEmail()
	@Column()
	email: string;

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
