import { Arg, Ctx, Mutation, Query, Resolver, Authorized } from 'type-graphql';
import { Post } from '../../entity/Post';
import { PostDto } from './Dto/postDto';
import { MainContext } from '../types/mainContext';

@Resolver()
export class PostResolver {
	@Authorized()
	@Query(() => [Post])
	async postsByUser(@Ctx() ctx: MainContext): Promise<Post[]> {
		const userId = ctx.req.session.userId;
		return await Post.find({ userId });
	}

	@Mutation(() => Post)
	async createPost(@Arg('input')
	{
		created_at,
		content,
		groupJobId,
		isPublic,
		userId
	}: PostDto): Promise<Post> {
		return Post.create({
			created_at,
			content,
			isPublic,
			userId,
			groupJobId
		}).save();
	}
}
