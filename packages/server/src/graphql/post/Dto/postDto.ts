import { Field, InputType } from 'type-graphql';
import { Length } from 'class-validator';

@InputType()
export class PostDto {
	@Field()
	created_at: Date;

	@Field()
	@Length(1, 1000)
	content: string;

	@Field()
	isPublic: boolean;

	@Field()
	userId: string;

	@Field()
	groupJobId: string;
}
