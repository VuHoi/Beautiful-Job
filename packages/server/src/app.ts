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
				name: 'hbn26051996',
				secret: 'keepeverythingisaprivacy',
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
			formatError: formatArgumentValidationError
		});
		this.apolloServer.applyMiddleware({ app: this.app });
	};
}

export default new App().app;
