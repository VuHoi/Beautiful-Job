import {
	Entity,
	PrimaryColumn,
	ManyToOne,
	JoinColumn,
	BaseEntity,
	OneToOne
} from 'typeorm';
import { Field, ID, ObjectType } from 'type-graphql';
import { User } from './User';

@ObjectType()
@Entity('Friend')
export class Friend extends BaseEntity {
	@Field(() => ID)
	@PrimaryColumn('uuid')
	ownerId: string;

	@Field(() => ID)
	@PrimaryColumn('uuid')
	userId: string;

	@ManyToOne(() => User, user => user.friends, { primary: true })
	@JoinColumn({ name: 'userId' })
	friends: Promise<User>;

	@OneToOne(type => User, { primary: true })
	@JoinColumn({ name: 'ownerId' })
	participant: User;
}
