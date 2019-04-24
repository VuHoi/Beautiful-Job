import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn,
	OneToOne,
	JoinColumn
} from 'typeorm';
import { Field, ID, ObjectType } from 'type-graphql';
import { IsDate } from 'class-validator';
import { User } from './User';

@ObjectType()
@Entity('Comments')
export class Post {
	@Field(() => ID)
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Field()
	@IsDate()
	@CreateDateColumn()
	created_at: Date;

	@Field()
	@Column('text')
	content: string;

	@OneToOne(type => User)
	@JoinColumn()
	sender: User;

	@OneToOne(type => User)
	@JoinColumn()
	participant: User;

	@Field()
	@Column('boolean', {
		default: 'true'
	})
	isPublic: boolean;

	@OneToOne(type => Post)
	@JoinColumn()
	post: Post;
}
