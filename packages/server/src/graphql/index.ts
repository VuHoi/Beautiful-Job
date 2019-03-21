import { GraphQLSchema } from 'graphql';
import { buildSchema } from 'type-graphql';
import { UserResolver } from './user/userResolver';
import { LoginResolver } from './user/loginResolver';
import { LogoutResolver } from './user/logoutResolver';
import { ConfirmUserResolver } from './user/confirmUserResolver';
import { ChangePasswordResolver } from './user/changePasswordResolve';
import { ForgotPasswordResolver } from './user/forgotPasswordResolve';
import { MeResolver } from './user/meResolver';
import { ProfilePictureResolver } from './user/profilePictureResolver';
import * as jwt from 'jsonwebtoken';
export class GraphQL {
	public createSchema = async (): Promise<GraphQLSchema> => {
		return buildSchema({
			resolvers: [
				UserResolver,
				LoginResolver,
				LogoutResolver,
				ConfirmUserResolver,
				ChangePasswordResolver,
				ForgotPasswordResolver,
				MeResolver,
				ProfilePictureResolver
			],
			authChecker: ({ context: { req } }) => {
				console.log(req.session.token);
				if (req.session.token) {
					const { userId }: any = jwt.verify(
						req.session.token,
						process.env.COOKIE_SECRET
					);
					return req.session.userId === userId;
				}
				return false;
			}
		});
	};
}
