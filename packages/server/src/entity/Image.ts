import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	BaseEntity,
	OneToOne,
	JoinColumn
} from 'typeorm';
import { Field, ID, ObjectType } from 'type-graphql';
import { User } from './User';
import { Post } from './Post';

@ObjectType()
@Entity('Images')
export class Image extends BaseEntity {
	@Field(() => ID)
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Field()
	@Column('text')
	url: string;

	@Field()
	@Column('text')
	alt: string;

	@OneToOne(type => User)
	@JoinColumn()
	owner: User;

	@OneToOne(type => Post)
	@JoinColumn()
	post: Post;
}
