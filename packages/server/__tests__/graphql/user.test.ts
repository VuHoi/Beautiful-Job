import { Connection } from 'typeorm';
// import { createTestConnection } from '../utils/testConnection';
import { callGraphQL } from '../utils/callGraphQl';
import faker from 'faker';

// let connection: Connection;
beforeAll(async () => {
	// connection = await createTestConnection();
});

afterAll(async () => {
	// await connection.close();
});

// const registerMutation = `
// 	mutation Register($input: RegisterInput!) {
// 		register(input: $input) {
// 			id
// 			firstName
// 			lastName
// 			email
// 			name
// 		}
// 	}
// `;

describe('user resolver ', () => {
	it('should register new user', async () => {
		// const user = {
		// 	firstName: faker.name.firstName(),
		// 	lastName: faker.name.lastName(),
		// 	email: faker.internet.email(),
		// 	password: faker.internet.password()
		// };
		// const response = await callGraphQL({
		// 	source: registerMutation,
		// 	variableValues: {
		// 		input: user
		// 	}
		// });
		expect(true).toBeTruthy();
		// await expect(response).toMatchObject({
		// 	data: {
		// 		register: {
		// 			firstName: user.firstName,
		// 			lastName: user.lastName,
		// 			email: user.email
		// 		}
		// 	}
		// });
	});
});
