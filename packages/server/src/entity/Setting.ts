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

@ObjectType()
@Entity('Settings')
export class Setting extends BaseEntity {
	@Field(() => ID)
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Field()
	@Column('text')
	publicStatus: boolean;

	@OneToOne(type => User)
	@JoinColumn()
	user: User;
}
