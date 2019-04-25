import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	OneToMany,
	BaseEntity
} from 'typeorm';
import { Field, ID, ObjectType } from 'type-graphql';
import { PostTag } from './PostTag';

@ObjectType()
@Entity('Tags')
export class Tag extends BaseEntity {
	@Field(() => ID)
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Field()
	@Column('text')
	title: string;

	@Field()
	@Column('text')
	description: string;

	@OneToMany(() => PostTag, postTag => postTag.posts)
	posts: Promise<PostTag>;
}
