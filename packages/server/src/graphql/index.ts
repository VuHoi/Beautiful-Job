import { GraphQLSchema } from 'graphql';
import { buildSchema } from 'type-graphql';
import { UserResolver } from './user/userResolver';
import { LoginResolver } from './user/loginResolver';
import { LogoutResolver } from './user/logoutResolver';

export class GraphQL {
	public createSchema = async (): Promise<GraphQLSchema> => {
		return buildSchema({
			resolvers: [UserResolver, LoginResolver, LogoutResolver]
		});
	};
}
