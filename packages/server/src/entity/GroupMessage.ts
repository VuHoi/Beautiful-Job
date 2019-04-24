import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	BaseEntity,
	OneToMany
} from 'typeorm';
import { Field, ID, ObjectType } from 'type-graphql';
import { ParticipantMessage } from './ParticipantMessage';

@ObjectType()
@Entity('GroupMessages')
export class GroupMessage extends BaseEntity {
	@Field(() => ID)
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Field()
	@Column('text')
	title: string;

	@Field()
	@Column('text')
	color: string;

	@OneToMany(
		() => ParticipantMessage,
		participantMessage => participantMessage.groupMessages
	)
	messages: Promise<ParticipantMessage[]>;
}
