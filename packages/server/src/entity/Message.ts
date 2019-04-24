import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	BaseEntity,
	OneToOne,
	JoinColumn
} from 'typeorm';
import { Field, ID, ObjectType } from 'type-graphql';
import { GroupMessage } from './GroupMessage';

@ObjectType()
@Entity('Messages')
export class Message extends BaseEntity {
	@Field(() => ID)
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Field()
	@Column('text')
	url: string;

	@Field()
	@Column('text')
	alt: string;

	@Field()
	@Column('text')
	content: string;

	@OneToOne(type => GroupMessage)
	@JoinColumn()
	groupMessage: GroupMessage;
}
