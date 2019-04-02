import gql from 'graphql-tag';

export const Login_MUTATION = gql`
	mutation Login($email: String!, $password: String!) {
		login(email: $email, password: $password) {
			name
			role
		}
	}
`;
