import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Field, ID, ObjectType } from 'type-graphql';
import { PostTag } from './PostTag';

@ObjectType()
@Entity('Tags')
export class Tag {
	@Field(() => ID)
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Field()
	@Column('text')
	title: string;

	@Field()
	@Column('text')
	description: string;
}
