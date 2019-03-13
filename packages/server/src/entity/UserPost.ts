import {
	Entity,
	PrimaryColumn,
	ManyToOne,
	JoinColumn,
	BaseEntity
} from 'typeorm';
import { Field, ID, ObjectType } from 'type-graphql';
import { Post } from './Post';
import { User } from './User';

@ObjectType()
@Entity('UserPosts')
export class UserPost extends BaseEntity {
	@Field(() => ID)
	@PrimaryColumn('uuid')
	postId: string;

	@Field(() => ID)
	@PrimaryColumn('uuid')
	userId: string;

	@ManyToOne(() => Post, post => post.userPost, { primary: true })
	@JoinColumn({ name: 'postId' })
	posts: Promise<Post>;

	@ManyToOne(() => User, user => user.userPost, { primary: true })
	@JoinColumn({ name: 'userId' })
	users: Promise<User>;
}
