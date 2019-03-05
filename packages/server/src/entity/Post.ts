import {Entity,PrimaryGeneratedColumn,Column, CreateDateColumn, UpdateDateColumn} from 'typeorm';
import { Field, ID, ObjectType } from 'type-graphql';
import { IsDate } from 'class-validator';

@ObjectType()
@Entity('posts')
export class Post {
    @Field(() => ID)    
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Field()
    @IsDate()
    @CreateDateColumn()
    created_at: Date;


    @Field()
    @Column('text')
    content: string;

  

    @Field()
    @Column('boolean', {
        default: "true",
    })
    isPublic: boolean;

}
