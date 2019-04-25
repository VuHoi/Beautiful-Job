import {
	Entity,
	PrimaryColumn,
	ManyToOne,
	JoinColumn,
	BaseEntity
} from 'typeorm';
import { Field, ID, ObjectType } from 'type-graphql';
import { Tag } from './Tag';
import { Post } from './Post';

@ObjectType()
@Entity('PostTag')
export class PostTag extends BaseEntity {
	@Field(() => ID)
	@PrimaryColumn('uuid')
	postId: string;

	@Field(() => ID)
	@PrimaryColumn('uuid')
	tagId: string;

	@ManyToOne(() => Tag, tag => tag.posts, { primary: true })
	@JoinColumn({ name: 'tagId' })
	tags: Promise<Tag>;

	@ManyToOne(() => Post, post => post.tags, { primary: true })
	@JoinColumn({ name: 'postId' })
	posts: Promise<Post>;
}
