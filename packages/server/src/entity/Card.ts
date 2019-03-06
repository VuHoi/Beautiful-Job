import {Entity,PrimaryGeneratedColumn,Column, CreateDateColumn, UpdateDateColumn, BaseEntity, OneToMany} from 'typeorm';
import { Field, ID, ObjectType } from 'type-graphql';
import { IsDate } from 'class-validator';

@ObjectType()
@Entity('cards')
export class Card  extends BaseEntity{
    @Field(() => ID)    
    @PrimaryGeneratedColumn('uuid')
    id: number;

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
        nullable: true,
    })
    description: string;

    @Field()
    @Column('boolean', {
        default: "false",
    })
    done: boolean;

   
}
