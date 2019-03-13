import 'reflect-metadata';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { GraphQL } from './graphql';
import { GraphQLSchema } from 'graphql';
import { formatArgumentValidationError } from 'type-graphql';
import { databaseInitializer } from './initializers/database';
import * as dotenv from 'dotenv';
import session from 'express-session';
import connectRedis from 'connect-redis';
import cors from 'cors';
import { MainContext } from './graphql/types/mainContext';
import Redis from 'ioredis';
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
		const RedisStore = connectRedis(session);
		const redis = new Redis(6379);
		this.app.use(
			session({
				store: new RedisStore({
					host: 'localhost',
					port: 6379,
					client: redis as any
				}),
				name: 'qid',
				secret: 'aslkdfjoiq12312',
				resave: false,
				saveUninitialized: false,
				cookie: {
					httpOnly: true,
					secure: false,
					maxAge: 1000 * 60 * 60 * 24 * 7 * 30 // 7 years
				}
			})
		);
	};
	private configGraphql = async (): Promise<void> => {
		const schema: GraphQLSchema = await new GraphQL().createSchema();
		this.apolloServer = new ApolloServer({
			schema,
			formatError: formatArgumentValidationError,
			context: ({ req, res }: MainContext) => {
				const context = {
					req,
					res
				};
				return context;
			}
		});
		this.apolloServer.applyMiddleware({ app: this.app, cors: false });
	};
}

export default new App().app;
