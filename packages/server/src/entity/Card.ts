import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn,
	UpdateDateColumn,
	BaseEntity
} from 'typeorm';
import { Field, ID, ObjectType } from 'type-graphql';
import { IsDate } from 'class-validator';

@ObjectType()
@Entity('Cards')
export class Card extends BaseEntity {
	@Field(() => ID)
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Field()
	@IsDate()
	@CreateDateColumn()
	created_at: Date;

	@Field()
	@UpdateDateColumn()
	updated_at: Date;

	@Field()
	@Column('text')
	title: string;

	@Field()
	@Column('text', {
		nullable: true
	})
	description: string;

	@Field()
	@Column('boolean', {
		default: 'false'
	})
	done: boolean;
}
