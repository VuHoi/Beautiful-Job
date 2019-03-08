import 'reflect-metadata';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { GraphQL } from './graphql';
import { GraphQLSchema } from 'graphql';
import { formatArgumentValidationError } from 'type-graphql';
import { databaseInitializer } from './initializers/database';
import * as dotenv from 'dotenv';
import session from 'express-session';
import { redis } from './redis';
import connectRedis from 'connect-redis';
import cors from 'cors';
const RedisStore = connectRedis(session);
class App {
	public app: express.Application;
	public apolloServer: ApolloServer;

	constructor() {
		dotenv.config();
		this.app = express();
		this.configExpress().catch((err: Error) =>
			console.log(`Cannot create Express Server ${err.message}`)
		);
		this.configGraphql().catch((err: Error) =>
			console.log(`Cannot create Apollo Server ${err.message}`)
		);
		databaseInitializer();
	}
	private configExpress = async (): Promise<void> => {
		this.app.use(
			cors({
				credentials: true,
				origin: 'http://localhost:3000'
			})
		);
		this.app.use(
			session({
				store: new RedisStore({
					client: redis as any
				}),
				name: process.env.COOKIE_NAME,
				secret: process.env.COOKIE_SECRET,
				resave: false,
				saveUninitialized: false,
				cookie: {
					httpOnly: true,
					secure: process.env.NODE_ENV === 'production',
					maxAge: 1000 * 60 * 60 * 24 * 7 * 365 // 7 years
				}
			})
		);
	};
	private configGraphql = async (): Promise<void> => {
		const schema: GraphQLSchema = await new GraphQL().createSchema();
		this.apolloServer = new ApolloServer({
			schema,
			formatError: formatArgumentValidationError,
			context: ({ req, res }: any) => ({
				req,
				res
			}),
			validationRules: [
				// queryComplexity({
				// 	// The maximum allowed query complexity, queries above this threshold will be rejected
				// 	maximumComplexity: 8,
				// 	// The query variables. This is needed because the variables are not available
				// 	// in the visitor of the graphql-js library
				// 	variables: {},
				// 	// Optional callback function to retrieve the determined query complexity
				// 	// Will be invoked weather the query is rejected or not
				// 	// This can be used for logging or to implement rate limiting
				// 	onComplete: (complexity: number) => {
				// 		console.log("Query Complexity:", complexity);
				// 	},
				// 	estimators: [
				// 		// Using fieldConfigEstimator is mandatory to make it work with type-graphql
				// 		fieldConfigEstimator(),
				// 		// This will assign each field a complexity of 1 if no other estimator
				// 		// returned a value. We can define the default value for field not explicitly annotated
				// 		simpleEstimator({
				// 			defaultComplexity: 1
				// 		})
				// 	]
				// }) as any
			]
		});
		this.apolloServer.applyMiddleware({ app: this.app });
	};
}

export default new App().app;
