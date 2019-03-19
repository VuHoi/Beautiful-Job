import {
	BaseEntity,
	Column,
	Entity,
	PrimaryColumn,
	PrimaryGeneratedColumn,
	OneToOne,
	JoinColumn,
	OneToMany,
	CreateDateColumn
} from 'typeorm';
import { Field, ID, ObjectType } from 'type-graphql';
import { User } from './User';

@ObjectType()
@Entity()
export class UserConnection extends BaseEntity {
	@Field(() => ID)
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Field(() => ID)
	@PrimaryColumn('uuid')
	user1Id: string;

	@Field(() => ID)
	@PrimaryColumn('uuid')
	user2Id: string;
}
