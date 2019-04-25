import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn,
	JoinColumn,
	ManyToOne,
	OneToMany,
	BaseEntity
} from 'typeorm';
import { Field, ID, ObjectType } from 'type-graphql';
import { IsDate } from 'class-validator';
import { User } from './User';
import { GroupJob } from './GroupJob';
import { PostTag } from './PostTag';

@ObjectType()
@Entity('Posts')
export class Post extends BaseEntity {
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

	@Field()
	@Column('boolean', {
		default: 'true'
	})
	isPublic: boolean;

	@Field(() => ID)
	userId: string;

	@Field(() => ID)
	groupJobId: string;

	@ManyToOne(() => User, user => user.posts)
	@JoinColumn({ name: 'userId' })
	user: Promise<User>;

	@ManyToOne(() => GroupJob, groupJob => groupJob.posts)
	@JoinColumn({ name: 'groupJobId' })
	groupJob: Promise<GroupJob>;

	@OneToMany(() => PostTag, postTag => postTag.tags)
	tags: Promise<PostTag>;
}
