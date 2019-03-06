import {Entity,PrimaryGeneratedColumn,Column, CreateDateColumn, OneToMany} from 'typeorm';
import { Field, ID, ObjectType } from 'type-graphql';
import { IsDate } from 'class-validator';
import { UserPost } from './UserPost';

@ObjectType()
@Entity('posts')
export class Post {
    @Field(() => ID)    
    @PrimaryGeneratedColumn('uuid')
    id: number;

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

    @OneToMany(() => UserPost, userpost => userpost.posts)
    userPost: Promise<UserPost[]>;
}
