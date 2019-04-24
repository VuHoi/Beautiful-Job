import {
	Entity,
	JoinColumn,
	BaseEntity,
	OneToOne,
	PrimaryGeneratedColumn,
	Column,
	OneToMany
} from 'typeorm';
import { Field, ID, ObjectType } from 'type-graphql';
import { User } from './User';
import { Post } from './Post';

@ObjectType()
@Entity('GroupJobs')
export class GroupJob extends BaseEntity {
	@Field(() => ID)
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Field()
	@Column('text')
	title: string;

	@Field()
	@Column('text')
	alt: string;

	@OneToOne(type => User)
	@JoinColumn()
	admin: User;

	@OneToMany(() => Post, post => post.groupJob)
	posts: Promise<Post[]>;
}
