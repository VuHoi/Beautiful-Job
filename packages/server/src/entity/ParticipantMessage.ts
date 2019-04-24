import {
	Entity,
	BaseEntity,
	JoinColumn,
	PrimaryColumn,
	ManyToOne
} from 'typeorm';
import { Field, ID, ObjectType } from 'type-graphql';
import { User } from './User';
import { GroupMessage } from './GroupMessage';

@ObjectType()
@Entity('ParticipantMessages')
export class ParticipantMessage extends BaseEntity {
	@Field(() => ID)
	@PrimaryColumn('uuid')
	userId: string;

	@Field(() => ID)
	@PrimaryColumn('uuid')
	GroupMessageId: string;

	@ManyToOne(() => GroupMessage, post => post.messages, { primary: true })
	@JoinColumn({ name: 'GroupMessageId' })
	groupMessages: Promise<GroupMessage>;

	@ManyToOne(() => User, user => user.messages, { primary: true })
	@JoinColumn({ name: 'userId' })
	users: Promise<User>;
}
