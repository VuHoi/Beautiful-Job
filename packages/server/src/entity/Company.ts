import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn,
	BaseEntity
} from 'typeorm';
import { Field, ID, ObjectType } from 'type-graphql';
import { IsDate } from 'class-validator';

@ObjectType()
@Entity('Companys')
export class Company extends BaseEntity {
	@Field(() => ID)
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Field()
	@IsDate()
	@CreateDateColumn()
	establishedDate: Date;

	@Field()
	@Column('text')
	name: string;

	@Field()
	@Column('text')
	description: string;
}
