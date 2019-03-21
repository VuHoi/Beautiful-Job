import gql from 'graphql-tag';

export const Login_MUTATION = gql`
	mutation {
		login(email: "toilahoi007@gmail.com", password: "Thatvuhai123_") {
			name
			role
		}
	}
`;
